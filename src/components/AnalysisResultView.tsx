import React, { useState, useEffect, useRef } from 'react';
import { AnalysisChatMessage, AnalysisResult } from '../types';
import { useApp } from '../context/AppContext';
import { TopAppBar } from './TopAppBar';
import { BottomNavBar } from './BottomNavBar';
import { getCropDisplayName } from '../utils/cropTranslations';
import { formatAnalysisDateTime } from '../utils/dateUtils';
import {
  getAnalysisChatMessages,
  getInitialGreetingText,
  sendAgronomistQuery,
  saveAnalysisChatMessage
} from '../services/analysisChatService';
import { ImageZoomModal } from './ImageZoomModal';

interface AnalysisResultViewProps {
  result: AnalysisResult | null | undefined;
  onBack?: () => void;
  isHistoryView?: boolean;
}

export const AnalysisResultView: React.FC<AnalysisResultViewProps> = ({
  result,
  onBack,
  isHistoryView = false
}) => {
  const { selectedLanguage, t, showToast, user } = useApp();
  const [isPlanSaved, setIsPlanSaved] = useState(false);

  // Helper to translate diagnosis (disease/pest) using existing keys if available
  const translateDiagnosis = (label: string): string => {
    if (!label) return label;
    const norm = label.toLowerCase().trim();
    const map: Record<string, string> = {
      'early blight': t('diseaseEarlyBlight'),
      'late blight': t('diseaseLateBlight'),
      'leaf curl': t('diseaseLeafCurl'),
      'aphids': t('pestAphids'),
      'whitefly': t('pestWhitefly'),
      'none': t('valueNone')
    };
    return map[norm] || label;
  };

  const getRiskTranslation = (level: string): string => {
    if (level === 'Low') return t('weatherRiskLow');
    if (level === 'Medium') return t('weatherRiskModerate');
    if (level === 'High') return t('weatherRiskHigh');
    return level;
  };


  // Chat continuation state
  const [messages, setMessages] = useState<AnalysisChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isChatLoaded, setIsChatLoaded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Quick Action: Follow-up Image Capture & Upload state
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'environment' | 'user'>('environment');
  const [previewModalImage, setPreviewModalImage] = useState<string | null>(null);

  const chatFileInputRef = useRef<HTMLInputElement>(null);
  const cameraFallbackInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const analysisId = result?.analysisId || result?.id || '';
  const currentUserId = user?.userId || result?.userId || 'guest-user';

  // Load chat conversation tied to this specific analysisId
  useEffect(() => {
    let isMounted = true;

    async function loadChat() {
      if (!analysisId) return;

      try {
        const storedMsgs = await getAnalysisChatMessages(analysisId);
        if (!isMounted) return;

        if (storedMsgs.length > 0) {
          setMessages(storedMsgs);
        } else if (result) {
          // Initialize with welcoming agronomist greeting for fresh analysis
          const greetingText = getInitialGreetingText(result, selectedLanguage);
          const initialMsg = await saveAnalysisChatMessage(
            analysisId,
            currentUserId,
            'assistant',
            greetingText
          );
          if (isMounted) {
            setMessages([initialMsg]);
          }
        }
      } catch (err) {
        console.error('Failed to load chat for analysis:', err);
      } finally {
        if (isMounted) setIsChatLoaded(true);
      }
    }

    loadChat();

    return () => {
      isMounted = false;
    };
  }, [analysisId, currentUserId, selectedLanguage, result]);

  // Scroll chat to bottom when messages update
  useEffect(() => {
    if (isChatLoaded) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isChatLoaded]);

  if (!result) {
    return (
      <div className="min-h-screen bg-[#fcf9f8] flex flex-col pt-14 md:pt-16 pb-24 md:pb-12">
        <TopAppBar
          title={isHistoryView ? t('historyDetailsTitle') : t('stepResult')}
          showBack
          onBack={onBack}
        />
        <main className="max-w-2xl mx-auto w-full px-4 py-16 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#f0eded] mx-auto flex items-center justify-center text-[#717973]">
            <span className="material-symbols-outlined text-[32px]">folder_off</span>
          </div>
          <h2 className="text-xl font-bold text-[#1b1c1c]">
            {t('noAnalysisResultAvailable')}
          </h2>
          <p className="text-sm text-[#5f5e59]">
            {isHistoryView
              ? t('historyNoRecordText')
              : t('scanNoRecordText')}
          </p>
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#002d1c] text-white rounded-full text-sm font-semibold hover:bg-[#1a4331] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>{t('back')}</span>
            </button>
          )}
        </main>
        <BottomNavBar />
      </div>
    );
  }

  // Derive status & display details
  const isHealthy = result.status === 'healthy' || result.healthStatus === 'healthy';
  const isProcessing = result.status === 'processing' || result.healthStatus === 'processing';

  // Crop Name localized according to currently active language
  const cropDisplay =
    getCropDisplayName(result.cropKey || result.selectedCrop, selectedLanguage) ||
    result.cropName ||
    t('cropSpecimen');

  // Safe formatted timestamp - guarantees no "Invalid Date"
  const formattedDateTime = formatAnalysisDateTime(
    result.createdAt || result.scanDate,
    t('scannedJustNow')
  );

  // Confidence calculations
  const diseaseConfidenceVal =
    typeof result.diseaseConfidence === 'number'
      ? result.diseaseConfidence
      : typeof result.confidence === 'number'
      ? result.confidence
      : null;
   const diseaseConfidencePercent =
  diseaseConfidenceVal !== null
    ? diseaseConfidenceVal <= 1
      ? diseaseConfidenceVal * 100
      : diseaseConfidenceVal
    : null;
  const pestConfidenceVal =
    typeof result.pestConfidence === 'number' ? result.pestConfidence : null;

  // Disease & Pest Display values
  const diseaseNameDisplay =
    translateDiagnosis(result.diseaseDetected || result.diseaseName || '') || (isHealthy ? t('optimalHealth') : t('valueNone'));

  const pestNameDisplay =
    translateDiagnosis(result.pestDetected || result.pestName || '') || (result.pestStatusText ? result.pestStatusText : t('noneDetected'));

  // Recommendation text
  const finalRecText =
    result.finalRecommendation ||
    (typeof result.recommendedAction === 'string' && result.recommendedAction.trim() !== ''
      ? result.recommendedAction
      : result.recommendedActions && result.recommendedActions.length > 0
      ? result.recommendedActions[0].descText || result.recommendedActions[0].title
      : t('noRecommendationAvailable'));

  const stopCameraStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  useEffect(() => {
    return () => {
      stopCameraStream();
    };
  }, []);

  const openCamera = async (targetFacing: 'environment' | 'user' = 'environment') => {
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
          console.warn('Camera video play warning:', playErr);
        }
      }
    } catch (err: any) {
      console.error('Camera open error:', err);
      const isDenied =
        err?.name === 'NotAllowedError' || err?.name === 'PermissionDeniedError';
      const msg = isDenied ? t('cameraPermissionDenied') : t('cameraUnavailable');
      setCameraError(msg);
    }
  };

  const closeCamera = () => {
    stopCameraStream();
    setIsCameraOpen(false);
    setCameraError(null);
  };

  const handleToggleFacingMode = () => {
    const nextFacing = facingMode === 'environment' ? 'user' : 'environment';
    openCamera(nextFacing);
  };

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

    closeCamera();
    handleSendFollowUpImage(dataUrl, 'camera');
  };

  const handleUploadImageClick = () => {
    chatFileInputRef.current?.click();
  };

  const handleCaptureImageClick = () => {
    openCamera('environment');
  };

  const handleChatFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      if (dataUrl) {
        handleSendFollowUpImage(dataUrl, 'upload');
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleCameraFallbackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      if (dataUrl) {
        closeCamera();
        handleSendFollowUpImage(dataUrl, 'camera');
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleSendFollowUpImage = async (
    imageDataUrl: string,
    source: 'camera' | 'upload'
  ) => {
    if (!analysisId || isSending) return;

    const textToSend = inputText.trim() || t('checkThisNewImage');
    setInputText('');
    setIsSending(true);

    try {
      const assistantReply = await sendAgronomistQuery(
        analysisId,
        currentUserId,
        textToSend,
        result,
        selectedLanguage,
        imageDataUrl,
        source,
        messages
      );

      const updated = await getAnalysisChatMessages(analysisId);
      if (updated.length > 0) {
        setMessages(updated);
      } else {
        setMessages((prev) => [...prev, assistantReply]);
      }
      showToast(
        source === 'camera'
          ? `${t('cameraSource')}: ${t('checkThisNewImage')}`
          : `${t('uploadSource')}: ${t('checkThisNewImage')}`
      );
    } catch (e) {
      console.error('Failed to send follow-up image:', e);
      showToast('Could not process follow-up image. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputText;
    if (!textToSend.trim() || isSending || !analysisId) return;

    setInputText('');
    setIsSending(true);

    try {
      const assistantReply = await sendAgronomistQuery(
        analysisId,
        currentUserId,
        textToSend,
        result,
        selectedLanguage
      );

      // Refresh messages from storage to ensure perfect synchronization
      const updated = await getAnalysisChatMessages(analysisId);
      if (updated.length > 0) {
        setMessages(updated);
      } else {
        setMessages((prev) => [...prev, assistantReply]);
      }
    } catch (e) {
      console.error('Failed to send query:', e);
      showToast('Could not send query. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const handleLogTreatment = () => {
    setIsPlanSaved(true);
    showToast(t('treatmentPlanSaved'));
  };

  const handleDownloadReport = () => {
    showToast(t('reportDownloaded'));
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex flex-col pt-14 md:pt-16 pb-28 md:pb-14">
      <TopAppBar
        title={`${cropDisplay} - ${isHealthy ? t('optimalHealth') : diseaseNameDisplay}`}
        showBack
        onBack={onBack}
        showShare
        showProfileAvatar={false}
      />

      <main className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6 flex-1">
        {/* 1. VISUAL CROP IMAGE CARD */}
        <section
          id="crop-image-card"
          className="relative rounded-2xl overflow-hidden shadow-sm bg-white border border-[#c1c8c2]/50 aspect-16/10 sm:aspect-21/9"
        >
          {result.imageUrl ? (
            <img
              src={result.imageUrl}
              alt={cropDisplay}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#f0eded] text-[#717973]">
              <span className="material-symbols-outlined text-[48px]">image</span>
              <p className="text-xs font-medium mt-1">{t('noImageAvailable')}</p>
            </div>
          )}

          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

          {/* Top Status Pill Badge */}
          <div className="absolute top-4 left-4 z-10">
            {isHealthy ? (
              <span className="px-3 py-1.5 bg-[#002d1c]/95 text-[#c0edd3] backdrop-blur-md rounded-full text-xs font-bold inline-flex items-center gap-1.5 border border-[#c0edd3]/30 shadow-md">
                <span className="material-symbols-outlined text-[16px] filled text-[#c0edd3]">
                  check_circle
                </span>
                <span>{t('optimalHealth')}</span>
              </span>
            ) : isProcessing ? (
              <span className="px-3 py-1.5 bg-black/75 text-white backdrop-blur-md rounded-full text-xs font-bold inline-flex items-center gap-1.5 border border-white/20 shadow-md">
                <span className="material-symbols-outlined text-[16px] animate-spin text-amber-300">
                  sync
                </span>
                <span>{t('statusPending')}</span>
              </span>
            ) : (
              <span className="px-3 py-1.5 bg-[#93000a]/95 text-white backdrop-blur-md rounded-full text-xs font-bold inline-flex items-center gap-1.5 border border-red-400/40 shadow-md animate-pulse">
                <span className="material-symbols-outlined text-[16px] filled text-white">
                  warning
                </span>
                <span>{t('criticalActionRequired')}</span>
              </span>
            )}
          </div>

          {/* Top-Right Source and ID Badge */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
            {result.imageSource && (
              <span className="px-2.5 py-1 bg-black/60 text-white/90 backdrop-blur-md rounded-lg text-[11px] font-medium border border-white/20 capitalize flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">
                  {result.imageSource === 'camera' ? 'photo_camera' : 'upload_file'}
                </span>
                <span>{result.imageSource}</span>
              </span>
            )}
            {analysisId && (
              <span className="px-2.5 py-1 bg-black/60 text-white/80 backdrop-blur-md rounded-lg text-[11px] font-mono border border-white/20">
                #{analysisId.slice(-6)}
              </span>
            )}
          </div>

          {/* Bottom Overlay Info */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                  {cropDisplay}
                </h1>
                {result.scientificName && (
                  <span className="text-xs sm:text-sm text-white/80 italic hidden sm:inline">
                    ({result.scientificName})
                  </span>
                )}
              </div>
              <p className="text-xs text-white/90 font-medium flex items-center gap-1.5 mt-0.5">
                <span className="material-symbols-outlined text-[15px] text-white/70">
                  schedule
                </span>
                <span>{formattedDateTime}</span>
              </p>
            </div>

            {/* Quick Action Button on Image */}
            <button
              type="button"
              onClick={handleDownloadReport}
              className="self-start sm:self-auto px-3 py-1.5 bg-white/90 hover:bg-white text-[#002d1c] backdrop-blur-md rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer active:scale-95"
            >
              <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
              <span>{t('downloadReportPdf')}</span>
            </button>
          </div>
        </section>

        {/* 2. ANALYSIS SUMMARY CARD */}
        <section
          id="analysis-summary-card"
          className="bg-white rounded-2xl p-5 border border-[#c1c8c2]/50 shadow-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 text-[#002d1c]">
            <span className="material-symbols-outlined text-[22px]">psychology</span>
            <h2 className="text-sm font-bold tracking-tight uppercase">
              {t('analysisSummaryTitle')}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#1b1c1c] leading-relaxed">
            {result.analysisSummary || result.summaryText || t('noAnalysisResultAvailable')}
          </p>
        </section>

        {/* 3. BENTO METRICS GRID: DISEASE & PEST ACTIVITY */}
        <section id="metrics-grid" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Disease Detected Bento Card */}
          <div className="bg-white rounded-2xl p-5 border border-[#c1c8c2]/50 shadow-xs flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#ffdad6] text-[#93000a] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">coronavirus</span>
                </span>
                <span className="text-xs font-bold text-[#5f5e59] uppercase tracking-wider">
                  {t('diseaseDetectedTitle')}
                </span>
              </div>
              {diseaseConfidenceVal !== null && (
                <span className="px-2 py-0.5 bg-[#f0eded] text-[#002d1c] rounded-md text-xs font-bold">
                   {diseaseConfidencePercent?.toFixed(2)}%
                </span>
              )}
            </div>

            <div>
              <p className="text-base sm:text-lg font-bold text-[#1b1c1c] leading-tight">
                {diseaseNameDisplay}
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <div className="flex-1 h-2 bg-[#f0eded] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      isHealthy
                        ? 'bg-[#3e6752]'
                       : diseaseConfidencePercent !== null && diseaseConfidencePercent > 80
                        ? 'bg-[#ba1a1a]'
                        : 'bg-[#ffdad6]'
                    }`}
                   style={{
  width: `${diseaseConfidencePercent !== null ? Math.min(diseaseConfidencePercent, 100) : 0}%`
                      }}
                  />
                </div>
                <span className="text-[11px] text-[#717973] font-medium shrink-0">
                  {t('confidenceScore')}
                </span>
              </div>
            </div>
          </div>

          {/* Pest Activity Bento Card */}
          <div className="bg-white rounded-2xl p-5 border border-[#c1c8c2]/50 shadow-xs flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#c0edd3] text-[#002d1c] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">pest_control</span>
                </span>
                <span className="text-xs font-bold text-[#5f5e59] uppercase tracking-wider">
                  {t('pestActivityTitle')}
                </span>
              </div>
              {pestConfidenceVal !== null && (
                <span className="px-2 py-0.5 bg-[#f0eded] text-[#002d1c] rounded-md text-xs font-bold">
                  {Math.round(pestConfidenceVal)}%
                </span>
              )}
            </div>

            <div>
              <p className="text-base sm:text-lg font-bold text-[#1b1c1c] leading-tight">
                {pestNameDisplay}
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <div className="flex-1 h-2 bg-[#f0eded] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#3e6752] transition-all duration-700"
                    style={{
                      width: `${pestConfidenceVal !== null ? pestConfidenceVal : 0}%`
                    }}
                  />
                </div>
                <span className="text-[11px] text-[#717973] font-medium shrink-0">
                  {t('confidenceScore')}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3B. RISK ASSESSMENT & WARNINGS (Real Backend MobileNet/YOLO output) */}
        {(result.riskLevel || result.warning || result.expertReferral || result.followUpSuggested) && (
          <section className="space-y-3">
            {/* Warning Alert if present */}
            {result.warning && (
              <div className="p-4 rounded-xl bg-[#fff8e1] border border-amber-300 text-[#785900] flex items-start gap-3 shadow-xs">
                <span className="material-symbols-outlined text-amber-600 text-[20px] shrink-0 mt-0.5">
                  warning
                </span>
                <div className="text-xs sm:text-sm leading-relaxed">
                  <span className="font-bold block mb-0.5">{t('agriculturalWarning')}</span>
                  <span>{result.warning}</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Risk Assessment Box */}
              {result.riskLevel && (
                <div className="bg-white rounded-xl p-4 border border-[#c1c8c2]/50 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#5f5e59] uppercase tracking-wider flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#002d1c]">shield</span>
                      <span>{t('riskAssessmentTitle')}</span>
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        result.riskLevel === 'Low'
                          ? 'bg-[#c0edd3] text-[#002114]'
                          : result.riskLevel === 'Medium'
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-[#ffdad6] text-[#93000a]'
                      }`}
                    >
                      {getRiskTranslation(result.riskLevel)} {t('riskLabel')}
                    </span>
                  </div>
                  {result.riskReasons && result.riskReasons.length > 0 && (
                    <ul className="text-xs text-[#414944] space-y-1 mt-1">
                      {result.riskReasons.map((r, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#002d1c] font-bold">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Expert Referral & Follow-up Tracker */}
              <div className="bg-white rounded-xl p-4 border border-[#c1c8c2]/50 shadow-xs flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-xs font-bold text-[#5f5e59] uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#002d1c]">assignment_ind</span>
                    <span>{t('agronomistFollowupTitle')}</span>
                  </span>
                  {result.expertReferral?.required ? (
                    <p className="text-xs text-[#93000a] font-medium leading-relaxed">
                      {t('specialistReferralAdvised')}{result.expertReferral.reason || t('criticalDiseaseSeverity')}
                    </p>
                  ) : result.followUpSuggested ? (
                    <p className="text-xs text-[#1b1c1c] leading-relaxed">
                      {t('recommendedCheckIn')}<strong>{result.followUpSuggested.recommendedDate || t('inSevenDays')}</strong>
                    </p>
                  ) : (
                    <p className="text-xs text-[#5f5e59]">
                      {t('standardMonitoringProtocol')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. RECOMMENDED ACTIONS CARD */}
        <section
          id="recommended-actions-card"
          className="bg-white rounded-2xl p-5 border border-[#c1c8c2]/50 shadow-xs space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#002d1c]">
              <span className="material-symbols-outlined text-[22px]">task_alt</span>
              <h2 className="text-sm font-bold tracking-tight uppercase">
                {t('recommendedActionTitle')}
              </h2>
            </div>
            {result.recommendedActions && result.recommendedActions.length > 0 && (
              <span className="px-2.5 py-0.5 bg-[#c0edd3] text-[#002114] rounded-full text-xs font-bold">
                {result.recommendedActions.length} {t('steps')}
              </span>
            )}
          </div>

          <div className="space-y-3">
            {result.recommendedActions && result.recommendedActions.length > 0 ? (
              result.recommendedActions.map((action, idx) => (
                <div
                  key={action.id || idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#fcf9f8] border border-[#c1c8c2]/30"
                >
                  <span className="w-6 h-6 rounded-full bg-[#002d1c] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#1b1c1c]">
                      {action.title || action.titleText || action.descText}
                    </p>
                    {action.descText && action.descText !== action.title && (
                      <p className="text-xs text-[#5f5e59] mt-0.5 leading-relaxed">
                        {action.descText}
                      </p>
                    )}
                  </div>
                </div>
              ))
            ) : typeof result.recommendedAction === 'string' && result.recommendedAction.trim() !== '' ? (
              <div className="p-3.5 rounded-xl bg-[#fcf9f8] border border-[#c1c8c2]/30 text-sm text-[#1b1c1c]">
                {result.recommendedAction}
              </div>
            ) : (
              <p className="text-sm text-[#5f5e59] italic">
                {t('noRecommendationAvailable')}
              </p>
            )}
          </div>

          <div className="pt-2 flex items-center justify-end">
            <button
              type="button"
              onClick={handleLogTreatment}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs active:scale-95 ${
                isPlanSaved
                  ? 'bg-[#c0edd3] text-[#002114] border border-[#002d1c]/20'
                  : 'bg-[#002d1c] text-white hover:bg-[#1a4331]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {isPlanSaved ? 'check' : 'bookmark_add'}
              </span>
              <span>{isPlanSaved ? t('treatmentPlanSaved') : t('logTreatmentPlan')}</span>
            </button>
          </div>
        </section>

        {/* 5. FINAL RECOMMENDATION CARD */}
        <section
          id="final-recommendation-card"
          className="bg-gradient-to-br from-[#002d1c] to-[#1a4331] text-white rounded-2xl p-5 sm:p-6 shadow-sm space-y-3"
        >
          <div className="flex items-center gap-2 text-[#c0edd3]">
            <span className="material-symbols-outlined text-[22px]">verified</span>
            <h2 className="text-sm font-bold tracking-tight uppercase">
              {t('finalRecommendationTitle')}
            </h2>
          </div>
          <p className="text-base sm:text-lg font-medium leading-relaxed text-[#fcf9f8]">
            {finalRecText}
          </p>
          <p className="text-xs text-[#c0edd3]/80 pt-1">
            {t('finalRecommendationSub')}
          </p>
        </section>

        {/* 6. INTERACTIVE CHAT CONTINUATION SECTION */}
        <section
          id="agronomist-chat-section"
          className="bg-white rounded-2xl p-5 border border-[#c1c8c2]/50 shadow-xs space-y-4"
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-[#f0eded] pb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#c0edd3] text-[#002d1c] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">forum</span>
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#1b1c1c]">
                  {t('askAgronomistTitle')}
                </h2>
                <p className="text-xs text-[#5f5e59]">
                  {t('askAgronomistSub')}
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-[#f0eded] text-[#002d1c] rounded-full text-[11px] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t('statusActive')}</span>
            </span>
          </div>

          {/* Messages Thread */}
          <div className="min-h-[140px] max-h-[360px] overflow-y-auto space-y-3 pr-1">
            {messages.length === 0 ? (
              <div className="py-8 text-center text-xs text-[#717973]">
                {t('loadingConversation')}
              </div>
            ) : (
              messages.map((msg) => {
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${
                      isUser ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    {!isUser && (
                      <div className="w-7 h-7 rounded-full bg-[#002d1c] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[14px]">psychology</span>
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                        isUser
                          ? 'bg-[#002d1c] text-white rounded-tr-xs'
                          : 'bg-[#f0eded] text-[#1b1c1c] rounded-tl-xs'
                      }`}
                    >
                      {msg.imageUrl && (
                        <div className="mb-2 rounded-xl overflow-hidden border border-white/20 bg-black/10 shadow-xs max-w-[240px]">
                          <img
                            src={msg.imageUrl}
                            alt={t('followUpSpecimen')}
                            className="w-full h-32 sm:h-36 object-cover cursor-pointer hover:opacity-95 transition-opacity"
                            onClick={() => setPreviewModalImage(msg.imageUrl || null)}
                          />
                          <div className="px-2 py-1 bg-black/50 text-[10px] text-white/90 flex items-center justify-between">
                            <span>
                              {msg.imageSource === 'camera' ? t('cameraSource') : t('uploadSource')}
                            </span>
                            <span className="material-symbols-outlined text-[12px]">zoom_in</span>
                          </div>
                        </div>
                      )}
                      <p className="whitespace-pre-wrap">{msg.message}</p>
                      <p
                        className={`text-[10px] mt-1 text-right ${
                          isUser ? 'text-white/60' : 'text-[#717973]'
                        }`}
                      >
                        {formatAnalysisDateTime(msg.createdAt, 'Just now')}
                      </p>
                    </div>
                  </div>
                );
              })
            )}

            {isSending && (
              <div className="flex items-center gap-2 text-xs text-[#5f5e59] italic pt-1">
                <span className="w-2 h-2 rounded-full bg-[#002d1c] animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-[#002d1c] animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-[#002d1c] animate-bounce [animation-delay:0.4s]"></span>
                <span>{t('thinkingText')}</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Hidden inputs for direct file upload and direct camera capture */}
          <input
            type="file"
            ref={chatFileInputRef}
            accept="image/*"
            className="hidden"
            onChange={handleChatFileChange}
          />
          <input
            type="file"
            ref={cameraFallbackInputRef}
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleCameraFallbackChange}
          />

          {/* Quick Prompt Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
            <button
              type="button"
              id="quick-prompt-organic"
              onClick={() => handleSendMessage(t('quickPromptOrganic'))}
              className="px-3 py-1.5 rounded-full bg-[#f0eded] text-[#002d1c] hover:bg-[#c0edd3] font-medium shrink-0 transition-colors cursor-pointer border border-[#c1c8c2]/40"
            >
              🌿 {t('quickPromptOrganic')}
            </button>
            <button
              type="button"
              id="quick-prompt-water"
              onClick={() => handleSendMessage(t('quickPromptWater'))}
              className="px-3 py-1.5 rounded-full bg-[#f0eded] text-[#002d1c] hover:bg-[#c0edd3] font-medium shrink-0 transition-colors cursor-pointer border border-[#c1c8c2]/40"
            >
              💧 {t('quickPromptWater')}
            </button>
            <button
              type="button"
              id="quick-prompt-spread"
              onClick={() => handleSendMessage(t('quickPromptSpread'))}
              className="px-3 py-1.5 rounded-full bg-[#f0eded] text-[#002d1c] hover:bg-[#c0edd3] font-medium shrink-0 transition-colors cursor-pointer border border-[#c1c8c2]/40"
            >
              🛡️ {t('quickPromptSpread')}
            </button>
            <button
              type="button"
              id="quick-action-upload-image"
              onClick={handleUploadImageClick}
              className="px-3 py-1.5 rounded-full bg-[#f0eded] text-[#002d1c] hover:bg-[#c0edd3] font-medium shrink-0 transition-colors cursor-pointer border border-[#c1c8c2]/40 inline-flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">upload_file</span>
              <span>{t('uploadImage')}</span>
            </button>
            <button
              type="button"
              id="quick-action-capture-image"
              onClick={handleCaptureImageClick}
              className="px-3 py-1.5 rounded-full bg-[#f0eded] text-[#002d1c] hover:bg-[#c0edd3] font-medium shrink-0 transition-colors cursor-pointer border border-[#c1c8c2]/40 inline-flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              <span>{t('captureImage')}</span>
            </button>
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2 pt-1"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t('chatInputPlaceholder')}
              disabled={isSending}
              className="flex-1 h-11 px-4 text-xs sm:text-sm bg-[#fcf9f8] border border-[#c1c8c2]/60 rounded-xl focus:border-[#002d1c] focus:ring-1 focus:ring-[#002d1c] outline-none transition-all disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isSending}
              className="h-11 px-4 bg-[#002d1c] text-white hover:bg-[#1a4331] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
            >
              <span>{t('sendBtn')}</span>
              <span className="material-symbols-outlined text-[16px]">send</span>
            </button>
          </form>

          <p className="text-[11px] text-[#717973] text-center pt-1">
            {t('chatSavedNote')}
          </p>
        </section>

        {/* 7. AI DISCLAIMER FOOTER */}
        <section
          id="ai-disclaimer-card"
          className="p-4 rounded-xl bg-[#f0eded]/80 border border-[#c1c8c2]/40 text-xs text-[#5f5e59] leading-relaxed flex items-start gap-2.5"
        >
          <span className="material-symbols-outlined text-[18px] text-[#717973] shrink-0 mt-0.5">
            info
          </span>
          <p>{t('aiDisclaimer')}</p>
        </section>
      </main>

      {/* Camera Viewfinder Modal Overlay for Agronomist AI follow-up */}
      {isCameraOpen && (
        <div
          id="chat-camera-viewfinder-modal"
          className="fixed inset-0 z-50 bg-black flex flex-col justify-between"
        >
          {/* Top Bar */}
          <div className="p-4 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-white text-xs font-semibold uppercase tracking-wider">
                {cropDisplay} - {t('captureImage')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                id="chat-camera-switch-facing-btn"
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
                id="chat-camera-close-modal-btn"
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
              <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6 text-center text-white z-20 space-y-4">
                <span className="material-symbols-outlined text-4xl text-amber-400">
                  videocam_off
                </span>
                <p className="text-sm max-w-xs">{cameraError}</p>
                <button
                  type="button"
                  onClick={() => {
                    closeCamera();
                    cameraFallbackInputRef.current?.click();
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#002d1c] text-white text-xs font-bold hover:bg-[#1a4331] border border-white/20 cursor-pointer"
                >
                  {t('takePhoto')}
                </button>
              </div>
            )}
          </div>

          {/* Bottom Bar with Capture Button */}
          <div className="p-6 flex items-center justify-center z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <button
              type="button"
              id="chat-camera-capture-shutter-btn"
              onClick={capturePhoto}
              className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center bg-white/20 hover:bg-white/40 active:scale-90 transition-all cursor-pointer backdrop-blur-xs"
              title={t('takePhoto')}
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#002d1c]">
                <span className="material-symbols-outlined text-2xl">
                  photo_camera
                </span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Image Preview Lightbox */}
      {previewModalImage && (
        <div
          id="chat-image-preview-modal"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setPreviewModalImage(null)}
        >
          <div
            className="relative max-w-xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 border-b border-[#f0eded] flex items-center justify-between">
              <span className="text-xs font-bold text-[#002d1c]">
                {cropDisplay} - {t('followUpSpecimenPreview')}
              </span>
              <button
                type="button"
                onClick={() => setPreviewModalImage(null)}
                className="w-8 h-8 rounded-full bg-[#f0eded] hover:bg-[#e5e2db] flex items-center justify-center text-[#1b1c1c] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="p-4 flex items-center justify-center bg-black/5">
              <img
                src={previewModalImage}
                alt={t('followUpSpecimenPreview')}
                className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-md"
              />
            </div>
          </div>
        </div>
      )}

      <BottomNavBar />
    </div>
  );
};
