import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TopAppBar } from '../TopAppBar';
import { CropKey } from '../../types';
import { getCropDisplayName } from '../../utils/cropTranslations';

export const MultipleCropScreen: React.FC = () => {
  const { t, selectedImage, imageData, resolveMultiCrop, goBack, selectedLanguage } = useApp();
  const [selectedCrop, setSelectedCrop] = useState<CropKey | null>(null);

  const cropChoices: Array<{
    key: CropKey;
    icon: string;
    iconBg: string;
    iconColor: string;
  }> = [
    {
      key: 'tomato',
      icon: 'nutrition',
      iconBg: 'bg-[#fdf2f2]',
      iconColor: 'text-[#ba1a1a]'
    },
    {
      key: 'potato',
      icon: 'spa',
      iconBg: 'bg-[#f6f2e6]',
      iconColor: 'text-[#785900]'
    },
    {
      key: 'corn',
      icon: 'grass',
      iconBg: 'bg-[#fff8e1]',
      iconColor: 'text-[#fbc02d]'
    },
    {
      key: 'pepper',
      icon: 'eco',
      iconBg: 'bg-[#e8f5e9]',
      iconColor: 'text-[#2e7d32]'
    }
  ];

  const handleContinue = () => {
    if (!selectedCrop) return;
    resolveMultiCrop(selectedCrop);
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex flex-col pt-16 pb-20">
      <TopAppBar
        title={t('appName')}
        showBack
        onBack={goBack}
      />

      <main className="max-w-md mx-auto w-full px-4 sm:px-6 py-6 flex-1 flex flex-col justify-between">
        <div className="space-y-6">
          {/* AI Disambiguation Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1a4331] text-[#c5e063] shadow-md">
              <span className="material-symbols-outlined text-4xl filled">
                psychology
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#002d1c] tracking-tight">
              {t('multipleCropTitle')}
            </h1>
            <p className="text-sm text-[#414944] leading-relaxed">
              {t('multipleCropSubtitle')}
            </p>
            <div className="text-sm font-bold text-[#002d1c] bg-[#e5e2db]/60 py-2 px-3 rounded-lg inline-block border border-[#c1c8c2]/40">
              {t('multipleCropQuestion')}
            </div>
          </div>

          {/* Reference Image Card */}
          <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-[#c1c8c2]/40 flex items-center gap-3.5">
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#c1c8c2]/50 bg-[#f0eded]">
              {imageData || selectedImage ? (
                <img
                  src={imageData || selectedImage || ''}
                  alt="Analyzed Leaf"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#717973]">
                  <span className="material-symbols-outlined text-2xl">eco</span>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1b1c1c]">
                {t('analyzedImageLabel')}
              </h3>
              <p className="text-xs text-[#5f5e59] mt-0.5">
                {t('today')}, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>

          {/* Crop Radio Options */}
          <div className="space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#002d1c] ml-1">
              {t('selectCropType')}
            </p>
            <div className="grid gap-2.5">
              {cropChoices.map((choice) => {
                const isSelected = selectedCrop === choice.key;
                const cropDisplayName = getCropDisplayName(choice.key, selectedLanguage);

                return (
                  <button
                    key={choice.key}
                    type="button"
                    onClick={() => setSelectedCrop(choice.key)}
                    className={`relative flex items-center p-3.5 bg-white border-2 rounded-xl cursor-pointer transition-all duration-150 text-left w-full group ${
                      isSelected
                        ? 'border-[#002d1c] bg-[#f6f3f2] shadow-xs'
                        : 'border-[#c1c8c2]/60 hover:border-[#002d1c]/40'
                    }`}
                  >
                    {/* Radio Bubble */}
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3.5 transition-colors ${
                        isSelected
                          ? 'border-[#002d1c] bg-[#002d1c]'
                          : 'border-[#717973]'
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-white transition-opacity ${
                          isSelected ? 'opacity-100' : 'opacity-0'
                        }`}
                      ></div>
                    </div>

                    {/* Icon & Crop Label */}
                    <div className="flex items-center gap-3 flex-1">
                      <div
                        className={`w-10 h-10 rounded-full ${choice.iconBg} ${choice.iconColor} flex items-center justify-center`}
                      >
                        <span className="material-symbols-outlined text-[22px] filled">
                          {choice.icon}
                        </span>
                      </div>
                      <span className="text-base font-bold text-[#1b1c1c]">
                        {cropDisplayName}
                      </span>
                    </div>

                    {isSelected && (
                      <span className="text-xs font-semibold text-[#002d1c] bg-[#c0edd3] px-2 py-0.5 rounded-full">
                        {t('confirm')}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <button
            type="button"
            onClick={handleContinue}
            disabled={!selectedCrop}
            className={`w-full h-14 rounded-full font-bold text-base flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] ${
              selectedCrop
                ? 'bg-[#002d1c] text-white hover:bg-[#1a4331] cursor-pointer'
                : 'bg-[#e5e2db] text-[#717973] cursor-not-allowed opacity-60'
            }`}
          >
            <span>{t('continueAnalysisBtn')}</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </main>
    </div>
  );
};
