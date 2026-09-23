import React from 'react';
import { useApp } from '../../context/AppContext';
import { Language } from '../../types';

export const ChangeLanguageModal: React.FC = () => {
  const {
    isChangeLanguageModalOpen,
    closeChangeLanguageModal,
    selectedLanguage,
    setLanguage,
    t,
    showToast
  } = useApp();

  if (!isChangeLanguageModalOpen) return null;

  const languages: Array<{
    code: Language;
    nativeName: string;
    englishName: string;
    subtext: string;
  }> = [
    {
      code: 'en',
      nativeName: 'English',
      englishName: 'English',
      subtext: 'Default Interface Language'
    },
    {
      code: 'te',
      nativeName: 'తెలుగు',
      englishName: 'Telugu',
      subtext: 'రైతుల కోసం తెలుగు భాష'
    },
    {
      code: 'hi',
      nativeName: 'हिन्दी',
      englishName: 'Hindi',
      subtext: 'किसानों के लिए सरल हिन्दी'
    },
    {
      code: 'mr',
      nativeName: 'मराठी',
      englishName: 'Marathi',
      subtext: 'शेतकऱ्यांसाठी सुलभ मराठी'
    }
  ];

  const handleSelect = (code: Language) => {
    setLanguage(code);
    closeChangeLanguageModal();
    showToast(t('languageChangedSuccess'));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl border border-[#c1c8c2]/50 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-[#f0eded] mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#002d1c] filled text-[22px]">
              translate
            </span>
            <h3 className="text-lg font-bold text-[#002d1c]">
              {t('chooseLanguageTitle')}
            </h3>
          </div>
          <button
            onClick={closeChangeLanguageModal}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#717973] hover:bg-[#f0eded] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <p className="text-xs text-[#414944] mb-4">
          {t('chooseLanguageSubtitle')}
        </p>

        <div className="space-y-2.5 mb-6">
          {languages.map((lang) => {
            const isSelected = selectedLanguage === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`w-full p-3.5 rounded-xl border-2 flex items-center justify-between text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#002d1c] bg-[#1a4331] text-white shadow-sm'
                    : 'border-[#c1c8c2]/60 hover:border-[#002d1c]/40 hover:bg-[#f6f3f2]'
                }`}
              >
                <div>
                  <div
                    className={`font-bold text-base ${
                      isSelected ? 'text-[#c0edd3]' : 'text-[#1b1c1c]'
                    }`}
                  >
                    {lang.nativeName}
                  </div>
                  <div
                    className={`text-xs ${
                      isSelected ? 'text-white/80' : 'text-[#5f5e59]'
                    }`}
                  >
                    {lang.englishName} • {lang.subtext}
                  </div>
                </div>

                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isSelected
                      ? 'border-[#c0edd3] bg-[#002d1c] text-[#c0edd3]'
                      : 'border-[#c1c8c2]'
                  }`}
                >
                  {isSelected && (
                    <span className="material-symbols-outlined text-[16px] filled">
                      check
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={closeChangeLanguageModal}
          className="w-full h-11 bg-[#f0eded] text-[#002d1c] hover:bg-[#eae7e7] font-semibold text-sm rounded-full transition-colors"
        >
          {t('cancel')}
        </button>
      </div>
    </div>
  );
};
