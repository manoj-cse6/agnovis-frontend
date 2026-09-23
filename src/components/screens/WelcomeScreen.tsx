import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Language } from '../../types';
import { InteractiveFarmlandBackground } from '../InteractiveFarmlandBackground';

const LANGUAGE_OPTIONS: { key: Language; name: string; native: string }[] = [
  { key: 'en', name: 'English', native: 'English' },
  { key: 'te', name: 'Telugu', native: 'తెలుగు' },
  { key: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { key: 'mr', name: 'Marathi', native: 'मराठी' }
];

/**
 * Localized labels for the demo "Continue as Guest" control.
 * Kept local to this file so that src/i18n/translations.ts stays untouched
 * and the UI never renders a raw translation key.
 */
const GUEST_LABELS: Record<Language, string> = {
  en: 'Continue as Guest',
  te: 'అతిథిగా కొనసాగండి',
  hi: 'अतिथि के रूप में जारी रखें',
  mr: 'पाहुणा म्हणून पुढे जा'
};

const GUEST_HINTS: Record<Language, string> = {
  en: 'Explore the app without signing in',
  te: 'సైన్ ఇన్ చేయకుండా యాప్‌ను చూడండి',
  hi: 'बिना साइन इन किए ऐप देखें',
  mr: 'साइन इन न करता ॲप पाहा'
};

export const WelcomeScreen: React.FC = () => {
  const {
    t,
    navigateTo,
    selectedLanguage,
    openChangeLanguageModal,
    handleRegister,
    handleLogin,
    user
  } = useApp();

  // Auth modal state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Form states
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [regLanguage, setRegLanguage] = useState<Language>(selectedLanguage);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isAccountNotFoundError, setIsAccountNotFoundError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const guestLabel = GUEST_LABELS[selectedLanguage] || GUEST_LABELS.en;
  const guestHint = GUEST_HINTS[selectedLanguage] || GUEST_HINTS.en;

  const onLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsAccountNotFoundError(false);

    const clean = loginIdentifier.trim();
    if (!clean) {
      setErrorMessage(t('invalidIdentifierFormat'));
      return;
    }

    const cleanDigits = clean.replace(/\D/g, '');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isPhone = cleanDigits.length === 10;
    const isEmail = emailRegex.test(clean);

    if (!isPhone && !isEmail) {
      setErrorMessage(t('invalidIdentifierFormat'));
      return;
    }

    if (!loginPassword.trim()) {
      setErrorMessage(t('enterValidPassword'));
      return;
    }

    setIsSubmitting(true);
    const result = await handleLogin(clean, loginPassword.trim());
    setIsSubmitting(false);

    if (result.success) {
      setIsAuthModalOpen(false);
      navigateTo('dashboard');
    } else {
      if (result.error === 'ACCOUNT_NOT_FOUND') {
        setErrorMessage(t('accountNotFound'));
        setIsAccountNotFoundError(true);
      } else if (result.error === 'INVALID_CREDENTIALS') {
        setErrorMessage(t('invalidLoginDetails'));
      } else {
        setErrorMessage(t('invalidLoginDetails'));
      }
    }
  };

  const onRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsAccountNotFoundError(false);

    if (!regName.trim() || regName.trim().length < 2) {
      setErrorMessage(t('enterValidName'));
      return;
    }

    const digits = regPhone.replace(/\D/g, '');
    if (digits.length !== 10) {
      setErrorMessage(t('enterValidPhone'));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regEmail.trim() || !emailRegex.test(regEmail.trim())) {
      setErrorMessage(t('enterValidEmail'));
      return;
    }

    if (!regPassword.trim() || regPassword.trim().length < 4) {
      setErrorMessage(t('enterValidPassword'));
      return;
    }

    setIsSubmitting(true);
    const result = await handleRegister(
      regName.trim(),
      regEmail.trim(),
      regPhone.trim(),
      regPassword.trim(),
      regLanguage
    );
    setIsSubmitting(false);

    if (result.success) {
      setIsAuthModalOpen(false);
      navigateTo('dashboard');
    } else {
      if (result.error === 'USER_ALREADY_EXISTS') {
        setErrorMessage('An account with this mobile number or email already exists. Please login.');
      } else {
        setErrorMessage(result.error || 'Registration failed. Please try again.');
      }
    }
  };

  /**
   * Demo / jury access. Does NOT authenticate and does NOT create a user —
   * it simply closes the modal and opens the existing dashboard route.
   */
  const handleContinueAsGuest = () => {
    setErrorMessage(null);
    setIsAccountNotFoundError(false);
    setIsAuthModalOpen(false);
    navigateTo('dashboard');
  };

  const handlePrimaryAnalyzeClick = () => {
    // Directly go to crop capture/analysis flow
    navigateTo('capture');
  };

  const handleHistoryClick = () => {
    if (user) {
      navigateTo('history');
    } else {
      setAuthMode('login');
      setIsAuthModalOpen(true);
    }
  };

  const languageLabels: Record<string, string> = {
    en: 'English',
    te: 'తెలుగు',
    hi: 'हिन्दी',
    mr: 'मराठी'
  };

  return (
    <InteractiveFarmlandBackground className="font-sans antialiased text-white min-h-screen">
      {/* 1. Top Navigation Bar */}
      <header className="w-full px-6 sm:px-12 py-5 sm:py-6 flex items-center justify-between pointer-events-auto">
        {/* Brand Logo & Tagline */}
        <div className="flex items-center gap-3 select-none">
          <div className="w-10 h-10 rounded-xl bg-[#65a30d]/25 border border-[#84cc16]/50 flex items-center justify-center backdrop-blur-md shadow-md">
            <span className="material-symbols-outlined text-[#bef264] text-[26px]">
              eco
            </span>
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1">
              <span>AgnoVis</span>
              <span className="text-[#a3e635]">AI</span>
            </div>
            <p className="text-[11px] sm:text-xs text-white/70 font-normal">
              {t('tagline')}
            </p>
          </div>
        </div>

        {/* Right Controls: Language & Sign In */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switcher Button */}
          <button
            type="button"
            onClick={openChangeLanguageModal}
            aria-label="Change language"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-white font-medium bg-black/35 hover:bg-black/50 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-md transition-all shadow-sm cursor-pointer active:scale-95"
          >
            <span className="material-symbols-outlined text-[16px] text-white/80">
              language
            </span>
            <span>{languageLabels[selectedLanguage] || selectedLanguage.toUpperCase()}</span>
            <span className="material-symbols-outlined text-[14px] text-white/60">
              expand_more
            </span>
          </button>

          {/* User Profile or Sign In Button */}
          {user ? (
            <button
              type="button"
              onClick={() => navigateTo('dashboard')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-[#14532d]/70 hover:bg-[#14532d]/90 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#86efac]/40 backdrop-blur-md transition-all shadow-sm cursor-pointer active:scale-95"
            >
              <span className="material-symbols-outlined text-[16px] text-[#86efac]">
                account_circle
              </span>
              <span className="hidden sm:inline">{user.name.split(' ')[0]}</span>
              <span className="sm:hidden">{t('navHome')}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setAuthMode('login');
                setIsAuthModalOpen(true);
              }}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-white/90 hover:text-white font-medium bg-white/10 hover:bg-white/20 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-md transition-all shadow-sm cursor-pointer active:scale-95"
            >
              <span className="material-symbols-outlined text-[16px]">
                login
              </span>
              <span>{t('landingFarmerSignIn')}</span>
            </button>
          )}
        </div>
      </header>

      {/* 2. Main Hero Section (Left-aligned, letting expansive farmland shine) */}
      <main className="w-full px-6 sm:px-12 py-8 sm:py-16 max-w-4xl my-auto pointer-events-auto select-none">
        {/* "Welcome to" */}
        <p className="text-white/85 text-xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-2 sm:mb-3">
          {t('landingWelcomeTo')}
        </p>

        {/* "AgnoVis AI" Big Display Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none mb-4 sm:mb-6">
          AgnoVis <span className="text-[#a3e635]">AI</span>
        </h1>

        {/* Subtitle / Value Proposition */}
        <p className="text-white/90 text-sm sm:text-lg md:text-xl font-normal max-w-xl leading-relaxed mb-8 sm:mb-10 text-pretty drop-shadow-sm">
          {t('landingCompanionText')}
        </p>

        {/* Action Buttons: Primary Analyze Crop + Secondary History */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {/* Primary CTA: Analyze Crop */}
          <button
            type="button"
            onClick={handlePrimaryAnalyzeClick}
            className="group inline-flex items-center gap-3 bg-[#74c043] hover:bg-[#84cc16] text-[#052b14] font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-xl hover:shadow-lime-500/25 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">
              psychiatry
            </span>
            <span>{t('landingAnalyzeCrop')}</span>
            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>

          {/* Secondary CTA: History */}
          <button
            type="button"
            onClick={handleHistoryClick}
            className="inline-flex items-center gap-2.5 bg-black/30 hover:bg-black/45 text-white font-medium text-sm sm:text-base px-5 sm:px-7 py-3.5 sm:py-4 rounded-full border border-white/30 hover:border-white/50 backdrop-blur-md active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px] text-white/80">
              history
            </span>
            <span>{t('landingHistory')}</span>
          </button>
        </div>
      </main>

      {/* 3. Bottom Row: Trusted by Farmers */}
      <footer className="w-full px-6 sm:px-12 py-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pointer-events-auto select-none">
        {/* Bottom-Left: Trusted by Farmers */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-white/70">
            {t('landingTrustedByFarmers')}
          </span>
        </div>
      </footer>

      {/* 4. Farmer Sign In / Registration Modal */}
      {isAuthModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md pointer-events-auto"
        >
          <div className="w-full max-w-md bg-white text-[#1b1c1c] rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/20 relative animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => {
                setIsAuthModalOpen(false);
                setErrorMessage(null);
              }}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-[#002d1c] text-[#bef264] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  agriculture
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#002d1c]">
                  {authMode === 'login' ? t('loginTab') : t('registerTab')}
                </h2>
                <p className="text-xs text-gray-500">{t('sihTagline')}</p>
              </div>
            </div>

            {/* Switch Tabs (Login / Register) */}
            <div className="bg-[#f0eded] p-1 rounded-xl flex items-center gap-1 border border-[#c1c8c2]/40 mb-4">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setErrorMessage(null);
                }}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${authMode === 'login'
                  ? 'bg-white text-[#002d1c] shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {t('loginTab')}
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMode('register');
                  setErrorMessage(null);
                }}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${authMode === 'register'
                  ? 'bg-white text-[#002d1c] shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {t('registerTab')}
              </button>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-xs font-medium p-3 rounded-xl flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-red-500 shrink-0 mt-0.5">
                  error
                </span>
                <div className="flex-1">
                  <p>{errorMessage}</p>
                  {isAccountNotFoundError && (
                    <button
                      type="button"
                      onClick={() => {
                        setAuthMode('register');
                        setErrorMessage(null);
                        setIsAccountNotFoundError(false);
                      }}
                      className="mt-1.5 inline-flex items-center gap-1 font-bold text-[#002d1c] hover:underline cursor-pointer"
                    >
                      <span>{t('registerNowLink')}</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Login Form */}
            {authMode === 'login' ? (
              <form onSubmit={onLoginSubmit} className="flex flex-col gap-3.5">
                {/* Mobile or Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="modal-login-input"
                    className="text-xs font-semibold text-[#002d1c] uppercase tracking-wider"
                  >
                    {t('mobileOrEmailLabel')}
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
                      person
                    </span>
                    <input
                      id="modal-login-input"
                      type="text"
                      value={loginIdentifier}
                      onChange={(e) => {
                        setLoginIdentifier(e.target.value);
                        if (errorMessage) {
                          setErrorMessage(null);
                          setIsAccountNotFoundError(false);
                        }
                      }}
                      placeholder={t('mobileOrEmailPlaceholder')}
                      className="h-11 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-4 text-sm text-gray-900 focus:border-[#002d1c] focus:ring-1 focus:ring-[#002d1c] outline-none transition-all shadow-xs"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="modal-login-password"
                    className="text-xs font-semibold text-[#002d1c] uppercase tracking-wider"
                  >
                    {t('passwordLabel')}
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
                      lock
                    </span>
                    <input
                      id="modal-login-password"
                      type={showLoginPassword ? 'text' : 'password'}
                      value={loginPassword}
                      onChange={(e) => {
                        setLoginPassword(e.target.value);
                        if (errorMessage) {
                          setErrorMessage(null);
                          setIsAccountNotFoundError(false);
                        }
                      }}
                      placeholder={t('passwordPlaceholder')}
                      className="h-11 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-11 text-sm text-gray-900 focus:border-[#002d1c] focus:ring-1 focus:ring-[#002d1c] outline-none transition-all shadow-xs"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer"
                      tabIndex={-1}
                      aria-label="Toggle password visibility"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {showLoginPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 rounded-full bg-[#002d1c] hover:bg-[#1a4331] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer mt-1 disabled:opacity-70"
                >
                  <span>{isSubmitting ? '...' : t('loginBtn')}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </form>
            ) : (
              /* Register Form */
              <form onSubmit={onRegisterSubmit} className="flex flex-col gap-3">
                {/* Full Name */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="modal-reg-name"
                    className="text-xs font-semibold text-[#002d1c] uppercase tracking-wider"
                  >
                    {t('fullNameLabel')}
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
                      badge
                    </span>
                    <input
                      id="modal-reg-name"
                      type="text"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      placeholder={t('fullNamePlaceholder')}
                      className="h-10 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-4 text-sm text-gray-900 focus:border-[#002d1c] focus:ring-1 focus:ring-[#002d1c] outline-none transition-all shadow-xs"
                      required
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="modal-reg-phone"
                    className="text-xs font-semibold text-[#002d1c] uppercase tracking-wider"
                  >
                    {t('phoneLabel')}
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
                      call
                    </span>
                    <input
                      id="modal-reg-phone"
                      type="tel"
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      placeholder={t('phonePlaceholder')}
                      maxLength={10}
                      className="h-10 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-4 text-sm text-gray-900 focus:border-[#002d1c] focus:ring-1 focus:ring-[#002d1c] outline-none transition-all shadow-xs"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="modal-reg-email"
                    className="text-xs font-semibold text-[#002d1c] uppercase tracking-wider"
                  >
                    {t('emailLabel')}
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
                      mail
                    </span>
                    <input
                      id="modal-reg-email"
                      type="email"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      placeholder={t('emailPlaceholder')}
                      className="h-10 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-4 text-sm text-gray-900 focus:border-[#002d1c] focus:ring-1 focus:ring-[#002d1c] outline-none transition-all shadow-xs"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="modal-reg-password"
                    className="text-xs font-semibold text-[#002d1c] uppercase tracking-wider"
                  >
                    {t('passwordLabel')}
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
                      lock
                    </span>
                    <input
                      id="modal-reg-password"
                      type={showRegPassword ? 'text' : 'password'}
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      placeholder={t('passwordPlaceholder')}
                      className="h-10 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-11 text-sm text-gray-900 focus:border-[#002d1c] focus:ring-1 focus:ring-[#002d1c] outline-none transition-all shadow-xs"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowRegPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer"
                      tabIndex={-1}
                      aria-label="Toggle password visibility"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {showRegPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Preferred Language */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#002d1c] uppercase tracking-wider">
                    {t('preferredLanguageLabel')}
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {LANGUAGE_OPTIONS.map((lang) => (
                      <button
                        key={lang.key}
                        type="button"
                        onClick={() => setRegLanguage(lang.key)}
                        className={`h-9 px-2 rounded-lg border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${regLanguage === lang.key
                          ? 'bg-[#002d1c] text-white border-[#002d1c] shadow-xs'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                          }`}
                      >
                        <span>{lang.native}</span>
                        <span className="text-[10px] opacity-75 font-normal">({lang.name})</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 rounded-full bg-[#002d1c] hover:bg-[#1a4331] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer mt-1 disabled:opacity-70"
                >
                  <span>{isSubmitting ? '...' : t('registerBtn')}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </form>
            )}

            {/* Toggle Mode Link */}
            <div className="text-center pt-4">
              {authMode === 'login' ? (
                <p className="text-xs text-gray-500">
                  {t('newToAgriVision')}{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode('register');
                      setErrorMessage(null);
                    }}
                    className="text-[#002d1c] font-bold hover:underline underline-offset-4 ml-1 cursor-pointer"
                  >
                    {t('registerLink')}
                  </button>
                </p>
              ) : (
                <p className="text-xs text-gray-500">
                  {t('alreadyHaveAccount')}{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode('login');
                      setErrorMessage(null);
                    }}
                    className="text-[#002d1c] font-bold hover:underline underline-offset-4 ml-1 cursor-pointer"
                  >
                    {t('loginLink')}
                  </button>
                </p>
              )}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 pt-4">
              <span className="h-px flex-1 bg-gray-200" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                {selectedLanguage === 'en' ? 'or' : '•'}
              </span>
              <span className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Continue as Guest (demo access — no authentication, no user created) */}
            <button
              type="button"
              onClick={handleContinueAsGuest}
              className="group mt-3 w-full h-12 rounded-full bg-[#74c043] hover:bg-[#84cc16] text-[#052b14] font-bold text-sm flex items-center justify-center gap-2.5 border-2 border-[#4d7c0f]/30 shadow-lg hover:shadow-lime-500/30 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                explore
              </span>
              <span>{guestLabel}</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>

            <p className="mt-2 text-center text-[11px] text-gray-500">
              {guestHint}
            </p>
          </div>
        </div>
      )}
    </InteractiveFarmlandBackground>
  );
};