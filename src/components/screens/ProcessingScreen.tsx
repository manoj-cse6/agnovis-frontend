import React, { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';

export const ProcessingScreen: React.FC = () => {
  const { t, selectedImage, analysisStatus, activeAnalysis, replaceScreen, currentScreen } = useApp();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // If analysis is already completed or inactive, safely redirect immediately
  useEffect(() => {
    if (currentScreen === 'processing') {
      if (analysisStatus === 'completed' && activeAnalysis) {
        replaceScreen('result');
      } else if (analysisStatus === 'idle') {
        replaceScreen('dashboard');
      }
    }
  }, [currentScreen, analysisStatus, activeAnalysis]);

  const steps = [
    {
      head: t('analyzingImageTitle'),
      sub: t('stepUploadSub'),
      stepKey: 'stepUpload',
      percent: '28%'
    },
    {
      head: t('stepIdentify'),
      sub: t('stepIdentifySub'),
      stepKey: 'stepIdentify',
      percent: '55%'
    },
    {
      head: t('stepAnalyze'),
      sub: t('stepAnalyzeSub'),
      stepKey: 'stepAnalyze',
      percent: '82%'
    },
    {
      head: t('stepResult'),
      sub: t('stepResultSub'),
      stepKey: 'stepResult',
      percent: '98%'
    }
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStepIndex(1), 500);
    const timer2 = setTimeout(() => setCurrentStepIndex(2), 1100);
    const timer3 = setTimeout(() => setCurrentStepIndex(3), 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const activeStep = steps[currentStepIndex] || steps[0];

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex flex-col items-center justify-center relative overflow-hidden p-6">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${selectedImage || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR9dFDSuvaOeLhtp8mu8jN7XhdWl5718n8LRJrFl4o_P7pD5J3IaRHexCkl0hKmNvR054bPggIapVujopjDXN3HfOVG2PebDCjsyPghVul9uVQFlslNWVaF2f_b4OgSAS-QsPIVoaKPRUHNcCHSJxIxkrKPDAfrf73NYtB5t-vnmE_j91xakCpIZ3kxJGVwOr0jvPkQdFsnASBM0O13BjakGek5UNuE7StzihGQrSsR9dLUSsUoxTCPw'})`
          }}
        ></div>
      </div>

      <main className="relative z-10 w-full max-w-md flex flex-col items-center text-center">
        {/* Animated Scanning Circle */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-8 flex items-center justify-center">
          {/* Pulsing rings */}
          <div className="absolute inset-0 rounded-full border-4 border-[#c0edd3] pulse-ring"></div>
          <div
            className="absolute inset-3 rounded-full border-2 border-[#a4d0b8] pulse-ring"
            style={{ animationDelay: '0.6s' }}
          ></div>

          {/* Leaf Thumbnail */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-xl border-4 border-white bg-[#1a4331]">
            <img
              src={selectedImage || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJdD5wRf6He1qqkPekw-OfHMQ7AmUNXd4PJmjJfcsR5IH-fJNuS2e3iZMTUp5pONTiki-ACiU3a6OiY88SHgYrrfwX8pct8ax50FYV63GvtEm5adLDgHrqwIv4CwqxXG504-TWxHl_8yHn_mxycHZHnoQJekSYH5uiz7sh76CDcuOXYasCICLyk3-4ctY-mAGpX-dVoVAt9cguYxZyHIRg7ObkhvuGQnwVYAQmqhG5G4NbxI82NxlyKw'}
              alt="Leaf being scanned"
              className="object-cover w-full h-full"
            />
            {/* Scanning Line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c5e063]/60 to-transparent animate-scan"></div>
          </div>

          {/* Spark Icon Badge */}
          <div className="absolute bottom-2 right-2 bg-[#002d1c] text-[#c0edd3] rounded-full p-2.5 shadow-lg flex items-center justify-center border-2 border-white">
            <span className="material-symbols-outlined text-[22px] filled text-[#c5e063]">
              auto_awesome
            </span>
          </div>
        </div>

        {/* Dynamic Status Text */}
        <div className="min-h-[70px] mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-[#002d1c] mb-2 tracking-tight transition-all duration-300">
            {activeStep.head}
          </h1>
          <p className="text-xs sm:text-sm text-[#414944] transition-all duration-300">
            {activeStep.sub}
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-[#eae7e7] rounded-full h-3 mb-4 overflow-hidden border border-[#c1c8c2]/30">
          <div
            className="bg-[#002d1c] h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: activeStep.percent }}
          ></div>
        </div>

        {/* Steps Indicator */}
        <div className="w-full flex justify-between px-1 text-[11px] sm:text-xs">
          <span
            className={`transition-colors duration-300 ${
              currentStepIndex >= 0 ? 'text-[#002d1c] font-bold' : 'text-[#717973]'
            }`}
          >
            {t('stepUpload')}
          </span>
          <span
            className={`transition-colors duration-300 ${
              currentStepIndex >= 1 ? 'text-[#002d1c] font-bold' : 'text-[#717973]'
            }`}
          >
            {t('stepIdentify')}
          </span>
          <span
            className={`transition-colors duration-300 ${
              currentStepIndex >= 2 ? 'text-[#002d1c] font-bold' : 'text-[#717973]'
            }`}
          >
            {t('stepAnalyze')}
          </span>
          <span
            className={`transition-colors duration-300 ${
              currentStepIndex >= 3 ? 'text-[#002d1c] font-bold' : 'text-[#717973]'
            }`}
          >
            {t('stepResult')}
          </span>
        </div>
      </main>
    </div>
  );
};
