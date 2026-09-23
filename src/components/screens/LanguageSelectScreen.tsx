import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Language } from '../../types';

export const LanguageSelectScreen: React.FC = () => {
  const { selectedLanguage, setLanguage, navigateTo, t, user } = useApp();
  const [tempLang, setTempLang] = useState<Language>(selectedLanguage);

  const languageOptions: Array<{
    code: Language;
    nativeName: string;
    englishName: string;
    subtext: string;
    scriptIcon: string;
  }> = [
    {
      code: 'en',
      nativeName: 'English',
      englishName: 'English',
      subtext: 'Default Interface Language',
      scriptIcon: 'language'
    },
    {
      code: 'te',
      nativeName: 'తెలుగు',
      englishName: 'Telugu',
      subtext: 'రైతుల కోసం తెలుగు భాష',
      scriptIcon: 'translate'
    },
    {
      code: 'hi',
      nativeName: 'हिन्दी',
      englishName: 'Hindi',
      subtext: 'किसानों के लिए सरल हिन्दी',
      scriptIcon: 'translate'
    },
    {
      code: 'mr',
      nativeName: 'मराठी',
      englishName: 'Marathi',
      subtext: 'शेतकऱ्यांसाठी सुलभ मराठी',
      scriptIcon: 'translate'
    }
  ];

  const handleSelectLanguage = (lang: Language) => {
    setTempLang(lang);
    setLanguage(lang); // Updates globally immediately as requested
  };

  const handleContinue = () => {
    setLanguage(tempLang);
    if (user) {
      navigateTo('dashboard');
    } else {
      navigateTo('welcome');
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex flex-col justify-between">
      {/* Top Header */}
      <header className="bg-[#fcf9f8] border-b border-[#c1c8c2]/50 px-4 h-14 md:h-16 flex items-center justify-between">
        <button
          onClick={() => (user ? navigateTo('dashboard') : navigateTo('welcome'))}
          aria-label="Back"
          className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-[#002d1c] hover:bg-[#eae7e7] transition-colors"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <div className="font-bold text-lg md:text-xl text-[#002d1c]">
          {t('appName')}
        </div>
        <div className="w-10"></div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 sm:px-6 py-6 md:py-10 flex flex-col">
        <div className="mb-6 md:mb-8 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-[#002d1c] mb-2 tracking-tight">
            {t('chooseLanguageTitle')}
          </h1>
          <p className="text-sm md:text-base text-[#414944]">
            {t('chooseLanguageSubtitle')}
          </p>
        </div>

        {/* Bento Grid for Language Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 flex-1 content-start">
          {languageOptions.map((lang) => {
            const isSelected = tempLang === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelectLanguage(lang.code)}
                className={`relative overflow-hidden rounded-xl p-5 border-2 text-left transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? 'border-[#002d1c] bg-[#1a4331] text-white shadow-md'
                    : 'border-[#c1c8c2]/60 bg-white hover:border-[#002d1c]/40 hover:bg-[#f6f3f2]'
                }`}
              >
                <div className="flex flex-col z-10">
                  <span
                    className={`text-xl md:text-2xl font-bold mb-1 transition-colors ${
                      isSelected ? 'text-[#c0edd3]' : 'text-[#1b1c1c]'
                    }`}
                  >
                    {lang.nativeName}
                  </span>
                  <span
                    className={`text-xs md:text-sm font-medium ${
                      isSelected ? 'text-[#85b098]' : 'text-[#5f5e59]'
                    }`}
                  >
                    {lang.englishName}
                  </span>
                  <span
                    className={`text-[11px] mt-1 italic ${
                      isSelected ? 'text-white/80' : 'text-[#717973]'
                    }`}
                  >
                    {lang.subtext}
                  </span>
                </div>

                {/* Check Icon */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-[#002d1c] text-[#c0edd3] scale-100 opacity-100 shadow-sm border border-[#c0edd3]/30'
                      : 'border-2 border-[#c1c8c2] opacity-30 group-hover:opacity-60'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px] filled">
                    check
                  </span>
                </div>

                {/* Subtle Background Decorative Icon */}
                <div
                  className={`absolute -bottom-4 -right-4 pointer-events-none transition-opacity ${
                    isSelected ? 'opacity-10 text-white' : 'opacity-5 text-[#002d1c]'
                  }`}
                >
                  <span className="material-symbols-outlined text-8xl">
                    {lang.scriptIcon}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Sticky / Bottom Continue Action */}
        <div className="mt-8 pt-4 pb-2">
          <button
            onClick={handleContinue}
            className="w-full h-14 bg-[#002d1c] text-white font-semibold text-base rounded-full flex items-center justify-center gap-2 hover:bg-[#1a4331] transition-all shadow-md active:scale-[0.98] cursor-pointer"
          >
            <span>{t('continueBtn')}</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </main>
    </div>
  );
};
