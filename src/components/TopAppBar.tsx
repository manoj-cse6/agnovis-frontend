import React from 'react';
import { useApp } from '../context/AppContext';
import { Language } from '../types';

interface TopAppBarProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  showShare?: boolean;
  onShare?: () => void;
  showNotifications?: boolean;
  showProfileAvatar?: boolean;
  showLanguageToggle?: boolean;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  title,
  showBack = false,
  onBack,
  showShare = false,
  onShare,
  showNotifications = false,
  showProfileAvatar = false,
  showLanguageToggle = true
}) => {
  const {
    t,
    selectedLanguage,
    setLanguage,
    goBack,
    navigateTo,
    user,
    showToast
  } = useApp();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      goBack();
    }
  };

  const handleShare = () => {
    if (onShare) {
      onShare();
    } else {
      if (navigator.share) {
        navigator.share({
          title: title || 'AgnoVis AI',
          text: 'Crop diagnostic report from AgnoVis AI',
          url: window.location.href
        }).catch(() => { });
      } else {
        showToast(
          selectedLanguage === 'te'
            ? 'లింక్ కాపీ చేయబడింది'
            : selectedLanguage === 'hi'
              ? 'लिंक कॉपी किया गया'
              : selectedLanguage === 'mr'
                ? 'लिंक कॉपी केली'
                : 'Link copied to clipboard'
        );
      }
    }
  };

  const languages: {
    code: Language;
    label: string;
    compactLabel: string;
    flag: string;
  }[] = [
      {
        code: 'en',
        label: 'EN',
        compactLabel: 'EN',
        flag: '🇬🇧'
      },
      {
        code: 'te',
        label: 'తెలుగు',
        compactLabel: 'TE',
        flag: '🌱'
      },
      {
        code: 'hi',
        label: 'हिन्दी',
        compactLabel: 'HI',
        flag: '🌾'
      },
      {
        code: 'mr',
        label: 'मराठी',
        compactLabel: 'MR',
        flag: '🌿'
      }
    ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#fcf9f8] border-b border-[#c1c8c2]/50 shadow-sm transition-colors duration-200">
      <div className="w-full h-14 md:h-16 px-2 sm:px-4 flex items-center justify-between gap-2 overflow-hidden">

        {/* Left Side */}
        <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
          {showBack ? (
            <button
              onClick={handleBack}
              aria-label="Go back"
              className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-[#002d1c] hover:bg-[#eae7e7] transition-colors active:scale-95"
            >
              <span className="material-symbols-outlined text-[24px]">
                arrow_back
              </span>
            </button>
          ) : (
            <button
              onClick={() => navigateTo('dashboard')}
              className="flex items-center gap-1.5 text-[#002d1c] hover:opacity-85 transition-opacity min-w-0"
            >
              <span className="material-symbols-outlined text-[#002d1c] text-[24px] sm:text-[26px] filled shrink-0">
                agriculture
              </span>

              <span className="font-bold text-base sm:text-lg md:text-xl tracking-tight text-[#002d1c] truncate">
                {t('appName')}
              </span>
            </button>
          )}

          {title && showBack && (
            <h1 className="font-bold text-base md:text-lg text-[#002d1c] truncate max-w-[150px] sm:max-w-xs md:max-w-md ml-1">
              {title}
            </h1>
          )}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-1 shrink-0">

          {/* Responsive Language Switcher */}
          {showLanguageToggle && (
            <div className="flex items-center bg-[#f0eded] rounded-full p-0.5 border border-[#c1c8c2]/40 shrink-0 overflow-hidden">

              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-1.5 sm:px-2 py-1 rounded-full font-medium transition-all text-[10px] sm:text-xs whitespace-nowrap ${selectedLanguage === lang.code
                    ? 'bg-[#002d1c] text-white shadow-xs'
                    : 'text-[#414944] hover:text-[#002d1c]'
                    }`}
                  title={`Switch to ${lang.label}`}
                >
                  <span className="sm:hidden">
                    {lang.compactLabel}
                  </span>

                  <span className="hidden sm:inline">
                    {lang.label}
                  </span>
                </button>
              ))}

            </div>
          )}

          {showShare && (
            <button
              onClick={handleShare}
              aria-label="Share"
              className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-full flex items-center justify-center text-[#002d1c] hover:bg-[#eae7e7] transition-colors active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px] sm:text-[22px]">
                share
              </span>
            </button>
          )}

          {showNotifications && (
            <button
              onClick={() =>
                showToast(
                  selectedLanguage === 'te'
                    ? 'కొత్త నోటిఫికేషన్లు ఏవీ లేవు'
                    : selectedLanguage === 'hi'
                      ? 'कोई नई सूचना नहीं है'
                      : selectedLanguage === 'mr'
                        ? 'कोणत्याही नवीन सूचना नाहीत'
                        : 'No new notifications'
                )
              }
              aria-label="Notifications"
              className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-full flex items-center justify-center text-[#414944] hover:bg-[#eae7e7] transition-colors active:scale-95 relative"
            >
              <span className="material-symbols-outlined text-[20px] sm:text-[22px]">
                notifications
              </span>

              <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-2 h-2 rounded-full bg-[#ba1a1a]"></span>
            </button>
          )}

          {showProfileAvatar && user && (
            <button
              onClick={() => navigateTo('profile')}
              aria-label="Profile"
              className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-full overflow-hidden border-2 border-[#002d1c] hover:opacity-90 transition-transform active:scale-95 focus:ring-2 focus:ring-[#002d1c]"
            >
              <img
                src={
                  user.avatarUrl ||
                  `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(
                    user.name
                  )}`
                }
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </button>
          )}

        </div>
      </div>
    </header>
  );
};