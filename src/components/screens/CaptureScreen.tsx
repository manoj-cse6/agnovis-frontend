import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { TopAppBar } from '../TopAppBar';
import { AVAILABLE_CROPS, getCropDisplayName } from '../../utils/cropTranslations';
import { CropKey } from '../../types';
import { compressImage, formatFileSize, needsCompression } from '../../utils/imageCompression';

export const CaptureScreen: React.FC = () => {
  const {
    t,
    startAnalysis,
    goBack,
    selectedCrop,
    setSelectedCrop,
    imageData,
    setImageData,
    imageFile,
    setImageFile,
    imageSource,
    setImageSource,
    selectedLanguage,
    showToast
  } = useApp();

  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'environment' | 'user'>('environment');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const hasAutoTriggeredRef = useRef<boolean>(false);

  // Stop camera tracks helper
  const stopCameraStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  // Clean up camera stream when component unmounts
  useEffect(() => {
    return () => {
      stopCameraStream();
    };
  }, []);

  // Directly open camera with live stream
  const openCamera = async (targetFacing: 'environment' | 'user' = 'environment') => {
    // 1. Crop validation first
    if (!selectedCrop) {
      showToast(t('pleaseSelectCropFirst'));
      return;
    }

    setCameraError(null);
    setIsCameraOpen(true);
    setFacingMode(targetFacing);

    stopCameraStream();

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setCameraError(t('cameraUnavailable'));
        return;
      }

      let stream: MediaStream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: targetFacing },
            width: { ideal: 1920 },
            height: { ideal: 1080 }
          },
          audio: false
        });
      } catch {
        // Fallback constraint
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false
        });
      }

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        try {
          await videoRef.current.play();
        } catch (playErr) {
          console.warn('Camera video playback issue:', playErr);
        }
      }
    } catch (err: any) {
      console.error('Camera open error:', err);
      const isDenied =
        err?.name === 'NotAllowedError' || err?.name === 'PermissionDeniedError';
      const msg = isDenied ? t('cameraPermissionDenied') : t('cameraUnavailable');
      setCameraError(msg);
      showToast(msg);
    }
  };

  // Close camera modal
  const closeCamera = () => {
    stopCameraStream();
    setIsCameraOpen(false);
    setCameraError(null);
  };

  // Toggle between front and rear cameras
  const handleToggleFacingMode = () => {
    const nextFacing = facingMode === 'environment' ? 'user' : 'environment';
    openCamera(nextFacing);
  };

  // Capture frame from active camera stream
  const capturePhoto = () => {
    const video = videoRef.current;
    if (!video || !streamRef.current) return;

    const width = video.videoWidth || 1280;
    const height = video.videoHeight || 720;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, width, height);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.92);

    // Convert dataUrl to File object
    const byteString = atob(dataUrl.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: 'image/jpeg' });
    const cropName = selectedCrop || 'crop';
    const file = new File([blob], `${cropName}-camera-${Date.now()}.jpg`, {
      type: 'image/jpeg'
    });

    closeCamera();

    // Update state independently:
    // Keep selectedCrop, set image data, set imageFile, set imageSource = 'camera'
    setImageData(dataUrl);
    setImageFile(file);
    setImageSource('camera');
  };

  // Handle direct Capture Image click
  const handleCaptureClick = () => {
    if (!selectedCrop) {
      showToast(t('pleaseSelectCropFirst'));
      return;
    }
    openCamera('environment');
  };

  // Handle direct Upload Image click
  const handleUploadClick = () => {
    if (!selectedCrop) {
      showToast(t('pleaseSelectCropFirst'));
      return;
    }
    fileInputRef.current?.click();
  };

  // Auto-trigger on navigation if user already selected a crop
  useEffect(() => {
    if (hasAutoTriggeredRef.current) return;
    hasAutoTriggeredRef.current = true;

    if (!selectedCrop) return;

    if (imageSource === 'camera' && !imageData && !isCameraOpen) {
      openCamera('environment');
    } else if (imageSource === 'upload' && !imageData) {
      fileInputRef.current?.click();
    }
  }, [selectedCrop, imageSource, imageData, isCameraOpen]);

  // Handle image selection from gallery/file picker with compression
  const handleImageSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      // Compress image if it's larger than 2MB
      let processedFile = file;
      if (needsCompression(file, 2)) {
        showToast(`Compressing image (${formatFileSize(file.size)})...`);
        processedFile = await compressImage(file, {
          maxWidth: 1920,
          maxHeight: 1920,
          quality: 0.85
        });
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const dataUrl = event.target.result as string;
          setImageData(dataUrl);
          setImageFile(processedFile);
          setImageSource('upload');
        }
      };
      reader.readAsDataURL(processedFile);
    } catch (err) {
      console.error('Image processing error:', err);
      showToast('Could not process image. Please try another.');
    }
    e.target.value = '';
  };

  // Crop selection: ONLY update selectedCrop state, stay on page, no navigation, no sample images
  const handleCropClick = (cropKey: CropKey) => {
    setSelectedCrop(cropKey);
  };

  // Validation: both selectedCrop and imageData must exist
  const isCropSelected = Boolean(selectedCrop);
  const isImageSelected = Boolean(imageData);
  const isReadyToAnalyze = isCropSelected && isImageSelected;

  const handleStartAnalysis = () => {
    if (!isCropSelected && !isImageSelected) {
      showToast(t('pleaseSelectCropAndImage'));
      return;
    }
    if (!isCropSelected) {
      showToast(t('pleaseSelectCropFirst'));
      return;
    }
    if (!isImageSelected) {
      showToast(t('pleaseUploadOrCapture'));
      return;
    }

    // Explicit Analyze action: start process with internal crop ID and real user image
    startAnalysis(imageData!, false, selectedCrop, imageSource, imageFile);
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex flex-col pt-16 pb-14">
      <TopAppBar
        title={t('analyzeMyCrop')}
        showBack
        onBack={goBack}
        showProfileAvatar
      />

      {/* Camera Viewfinder Modal Overlay */}
      {isCameraOpen && (
        <div
          id="camera-viewfinder-modal"
          className="fixed inset-0 z-50 bg-black flex flex-col justify-between"
        >
          {/* Top Bar */}
          <div className="p-4 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-white text-xs font-semibold uppercase tracking-wider">
                {selectedCrop ? getCropDisplayName(selectedCrop, selectedLanguage) : ''}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                id="camera-switch-facing-btn"
                onClick={handleToggleFacingMode}
                className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
                title={t('switchCamera')}
              >
                <span className="material-symbols-outlined text-[20px]">
                  flip_camera_ios
                </span>
              </button>

              <button
                type="button"
                id="camera-close-modal-btn"
                onClick={closeCamera}
                className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
                title={t('closeCamera')}
              >
                <span className="material-symbols-outlined text-[22px]">
                  close
                </span>
              </button>
            </div>
          </div>

          {/* Live Video Viewfinder */}
          <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-black">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />

            {/* Target Framing Brackets */}
            <div className="absolute inset-8 sm:inset-16 pointer-events-none border border-white/25 rounded-2xl flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <div className="w-6 h-6 border-t-2 border-l-2 border-[#c5e063] rounded-tl-md"></div>
                <div className="w-6 h-6 border-t-2 border-r-2 border-[#c5e063] rounded-tr-md"></div>
              </div>
              <div className="text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white/90 text-xs font-medium">
                  {t('guideline2')}
                </span>
              </div>
              <div className="flex justify-between">
                <div className="w-6 h-6 border-b-2 border-l-2 border-[#c5e063] rounded-bl-md"></div>
                <div className="w-6 h-6 border-b-2 border-r-2 border-[#c5e063] rounded-tr-md"></div>
              </div>
            </div>

            {cameraError && (
              <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center p-6 text-center text-white z-20">
                <span className="material-symbols-outlined text-4xl text-red-400 mb-2">
                  videocam_off
                </span>
                <p className="text-sm font-semibold mb-4 max-w-xs">{cameraError}</p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => openCamera(facingMode)}
                    className="px-4 py-2 rounded-full bg-[#002d1c] text-white text-xs font-bold hover:bg-[#1a4331] cursor-pointer"
                  >
                    {t('retakePhoto')}
                  </button>
                  <button
                    type="button"
                    onClick={closeCamera}
                    className="px-4 py-2 rounded-full bg-white/20 text-white text-xs font-bold hover:bg-white/30 cursor-pointer"
                  >
                    {t('closeCamera')}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Shutter Button Bottom Bar */}
          <div className="p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col items-center gap-3 z-10">
            <button
              type="button"
              id="camera-take-photo-btn"
              onClick={capturePhoto}
              disabled={Boolean(cameraError)}
              className="w-18 h-18 rounded-full border-4 border-white bg-[#002d1c] text-white flex items-center justify-center shadow-2xl active:scale-90 transition-transform cursor-pointer hover:bg-[#1a4331] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-3xl filled text-[#c0edd3]">
                photo_camera
              </span>
            </button>
            <span className="text-xs text-white/80 font-medium tracking-wide">
              {t('takePhoto')}
            </span>
          </div>
        </div>
      )}

      <main className="max-w-2xl mx-auto w-full px-4 sm:px-6 py-6 flex-1 flex flex-col justify-between">
        <div className="space-y-6">
          {/* Header Title & Subtitle */}
          <div className="text-center space-y-1.5">
            <h1 className="text-2xl md:text-3xl font-bold text-[#002d1c] tracking-tight">
              {t('analyzeMyCrop')}
            </h1>
            <p className="text-sm text-[#414944] max-w-md mx-auto">
              {t('captureCropImageSubtitle')}
            </p>
          </div>

          {/* Hidden File Input for Gallery Selection (NO capture attribute) */}
          <input
            ref={fileInputRef}
            id="file-upload-input"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageSelected}
          />

          {/* Step 1: Crop Selection Section */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,45,28,0.05)] border border-[#c1c8c2]/40">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#f0eded]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#002d1c] text-[20px]">
                  eco
                </span>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#002d1c]">
                  {t('selectCropLabel')}
                </h2>
              </div>
              <span className="text-xs font-medium text-[#5f5e59]">
                {selectedCrop ? (
                  <span className="text-[#002d1c] font-bold">
                    {t('selectedCropLabel')}: {getCropDisplayName(selectedCrop, selectedLanguage)}
                  </span>
                ) : (
                  <span className="text-[#ba1a1a]">{t('pleaseSelectCropFirst')}</span>
                )}
              </span>
            </div>

            {/* Clean pill-shaped crop buttons: contains only the crop name */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5" role="group" aria-label={t('selectCropLabel')}>
              {AVAILABLE_CROPS.map((cropId) => {
                const isSelected = selectedCrop === cropId;
                const displayName = getCropDisplayName(cropId, selectedLanguage);

                return (
                  <button
                    key={cropId}
                    id={`crop-select-${cropId}`}
                    type="button"
                    onClick={() => handleCropClick(cropId)}
                    aria-pressed={isSelected}
                    aria-label={displayName}
                    className={`py-2.5 px-3 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 ${
                      isSelected
                        ? 'bg-[#002d1c] text-white border-[#002d1c] shadow-xs ring-2 ring-[#002d1c]/20'
                        : 'bg-[#fcf9f8] hover:bg-[#f6f3f2] text-[#1b1c1c] border-[#c1c8c2]/50 hover:border-[#002d1c]/40'
                    }`}
                  >
                    {isSelected && (
                      <span className="material-symbols-outlined text-[15px] text-[#c5e063] filled" aria-hidden="true">
                        check_circle
                      </span>
                    )}
                    <span className="truncate">{displayName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Bento Grid for Image Acquisition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Capture Image Card (Direct Camera Access) */}
            <button
              type="button"
              id="capture-open-camera-btn"
              onClick={handleCaptureClick}
              className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-[0_4px_20px_rgba(0,45,28,0.05)] border border-[#c1c8c2]/40 hover:bg-[#f6f3f2] hover:border-[#002d1c] transition-all duration-200 group h-44 cursor-pointer active:scale-95"
            >
              <div className="w-16 h-16 rounded-full bg-[#1a4331] text-[#c0edd3] flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-sm">
                <span className="material-symbols-outlined text-3xl filled">
                  photo_camera
                </span>
              </div>
              <div className="text-center">
                <span className="text-sm md:text-base font-bold text-[#002d1c] block mb-0.5">
                  {t('captureImage')}
                </span>
                <span className="text-xs text-[#414944]">
                  {t('captureImageSub')}
                </span>
              </div>
            </button>

            {/* Upload Image Card (Direct File/Gallery Picker) */}
            <button
              type="button"
              id="capture-upload-gallery-btn"
              onClick={handleUploadClick}
              className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-[0_4px_20px_rgba(0,45,28,0.05)] border border-[#c1c8c2]/40 hover:bg-[#f6f3f2] hover:border-[#002d1c] transition-all duration-200 group h-44 cursor-pointer active:scale-95"
            >
              <div className="w-16 h-16 rounded-full bg-[#e5e2db] text-[#1f2823] flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-sm">
                <span className="material-symbols-outlined text-3xl">
                  image
                </span>
              </div>
              <div className="text-center">
                <span className="text-sm md:text-base font-bold text-[#002d1c] block mb-0.5">
                  {t('uploadImage')}
                </span>
                <span className="text-xs text-[#414944]">
                  {t('uploadImageSub')}
                </span>
              </div>
            </button>
          </div>

          {/* Step 3: Image Preview Area */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#c1c8c2]/40">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#f0eded]">
              <span className="text-xs font-semibold text-[#002d1c] uppercase tracking-wider">
                {t('analyzedImageLabel')}
              </span>
              <span className="text-xs text-[#5f5e59]">
                {imageData ? t('readyForAnalysis') : t('selectImageHint')}
              </span>
            </div>

            {imageData ? (
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border-2 border-[#002d1c] bg-[#f0eded] shadow-xs relative">
                  <img
                    src={imageData}
                    alt="User captured or uploaded leaf"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-[#1b1c1c] truncate flex items-center gap-2">
                    <span>
                      {selectedCrop
                        ? getCropDisplayName(selectedCrop, selectedLanguage)
                        : t('noCropSelectedYet')}
                    </span>
                    <span className="text-[11px] font-normal px-2 py-0.5 rounded-full bg-[#f0eded] text-[#414944] border border-[#c1c8c2]/40">
                      {imageSource === 'camera' ? t('cameraSource') : t('uploadSource')}
                    </span>
                  </div>
                  <div className="text-xs text-[#5f5e59] mt-0.5 truncate">
                    {imageFile?.name ||
                      (imageSource === 'camera' ? 'Camera image' : 'Uploaded file')}
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (imageSource === 'camera') {
                          handleCaptureClick();
                        } else {
                          handleUploadClick();
                        }
                      }}
                      className="text-xs text-[#002d1c] font-semibold hover:underline cursor-pointer"
                    >
                      {imageSource === 'camera' ? t('retakePhoto') : t('changeImage')}
                    </button>
                    <span className="text-[#c1c8c2]">•</span>
                    <button
                      type="button"
                      onClick={() => {
                        setImageData(null);
                        setImageFile(null);
                        setImageSource(null);
                      }}
                      className="text-xs text-[#ba1a1a] font-semibold hover:underline cursor-pointer"
                    >
                      {t('removeImage')}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-6 px-4 flex flex-col items-center justify-center text-center bg-[#fcf9f8] rounded-xl border border-dashed border-[#c1c8c2]/60">
                <div className="w-12 h-12 rounded-full bg-[#f0eded] flex items-center justify-center text-[#717973] mb-2">
                  <span className="material-symbols-outlined text-2xl">
                    add_photo_alternate
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#1b1c1c]">
                  {t('noImageSelectedYet')}
                </p>
                <p className="text-xs text-[#5f5e59] mt-0.5">
                  {t('noImageSelectedSub')}
                </p>
              </div>
            )}
          </div>

          {/* Photo Guidelines Section */}
          <div className="bg-[#f6f3f2] rounded-2xl p-5 border border-[#c1c8c2]/40">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#002d1c] mb-3">
              {t('photoGuidelinesTitle')}
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-3 text-xs md:text-sm text-[#1b1c1c]">
                <span className="material-symbols-outlined text-[#3e6752] text-[20px] shrink-0">
                  wb_sunny
                </span>
                <span>{t('guideline1')}</span>
              </li>
              <li className="flex items-center gap-3 text-xs md:text-sm text-[#1b1c1c]">
                <span className="material-symbols-outlined text-[#3e6752] text-[20px] shrink-0">
                  center_focus_strong
                </span>
                <span>{t('guideline2')}</span>
              </li>
              <li className="flex items-center gap-3 text-xs md:text-sm text-[#1b1c1c]">
                <span className="material-symbols-outlined text-[#3e6752] text-[20px] shrink-0">
                  crop_free
                </span>
                <span>{t('guideline3')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step 4: Analyze Action Button & Validation Feedback */}
        <div className="pt-6 space-y-2.5 text-center">
          <button
            type="button"
            id="start-analyze-button"
            onClick={handleStartAnalysis}
            disabled={!isReadyToAnalyze}
            className={`w-full h-14 rounded-full font-bold text-base flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] ${
              isReadyToAnalyze
                ? 'bg-[#002d1c] text-white hover:bg-[#1a4331] cursor-pointer'
                : 'bg-[#c1c8c2] text-[#414944] cursor-not-allowed opacity-60'
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">analytics</span>
            <span>{t('analyzeImageBtn')}</span>
          </button>

          {/* Explicit validation state message */}
          <div className="min-h-[20px]">
            {!isCropSelected && !isImageSelected ? (
              <p className="text-xs text-[#ba1a1a] font-medium flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[14px]">info</span>
                <span>{t('pleaseSelectCropFirst')}</span>
              </p>
            ) : !isCropSelected ? (
              <p className="text-xs text-[#ba1a1a] font-medium flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[14px]">info</span>
                <span>{t('pleaseSelectCropFirst')}</span>
              </p>
            ) : !isImageSelected ? (
              <p className="text-xs text-[#ba1a1a] font-medium flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[14px]">info</span>
                <span>{t('pleaseUploadOrCapture')}</span>
              </p>
            ) : (
              <p className="text-xs text-[#3e6752] font-semibold flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[14px] filled">check_circle</span>
                <span>
                  {t('readyForAnalysis')}: {getCropDisplayName(selectedCrop, selectedLanguage)}
                </span>
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
