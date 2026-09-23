import React from 'react';
import { useApp } from '../context/AppContext';
import { Screen } from '../types';

export const BottomNavBar: React.FC = () => {
  const { currentScreen, navigateTo, t } = useApp();

  const isHomeActive = currentScreen === 'dashboard';
  const isHistoryActive = currentScreen === 'history' || currentScreen === 'history-detail';
  const isProfileActive = currentScreen === 'profile';

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#fcf9f8] border-t border-[#c1c8c2]/50 shadow-[0_-4px_20px_rgba(0,45,28,0.05)] md:hidden">
      <div className="flex justify-around items-center h-[70px] px-4 max-w-md mx-auto">
        {/* Home */}
        <button
          onClick={() => navigateTo('dashboard')}
          className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-95 py-1 px-4 rounded-full ${
            isHomeActive
              ? 'bg-[#1a4331] text-[#85b098]'
              : 'text-[#414944] hover:text-[#002d1c]'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[24px] ${
              isHomeActive ? 'filled text-[#c0edd3]' : ''
            }`}
          >
            home
          </span>
          <span className={`text-xs font-semibold mt-0.5 ${isHomeActive ? 'text-[#ffffff]' : ''}`}>
            {t('navHome')}
          </span>
        </button>

        {/* Fields */}
        <button
          onClick={() => navigateTo('fields')}
          className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-95 py-1 px-3 rounded-full ${
            currentScreen === 'fields'
              ? 'bg-[#1a4331] text-[#85b098]'
              : 'text-[#414944] hover:text-[#002d1c]'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[22px] ${
              currentScreen === 'fields' ? 'filled text-[#c0edd3]' : ''
            }`}
          >
            landscape
          </span>
          <span className={`text-[11px] font-semibold mt-0.5 ${currentScreen === 'fields' ? 'text-[#ffffff]' : ''}`}>
            Fields
          </span>
        </button>

        {/* History */}
        <button
          onClick={() => navigateTo('history')}
          className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-95 py-1 px-3 rounded-full ${
            isHistoryActive
              ? 'bg-[#1a4331] text-[#85b098]'
              : 'text-[#414944] hover:text-[#002d1c]'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[22px] ${
              isHistoryActive ? 'filled text-[#c0edd3]' : ''
            }`}
          >
            history
          </span>
          <span className={`text-[11px] font-semibold mt-0.5 ${isHistoryActive ? 'text-[#ffffff]' : ''}`}>
            {t('navHistory')}
          </span>
        </button>

        {/* AI Chat */}
        <button
          onClick={() => navigateTo('chat')}
          className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-95 py-1 px-3 rounded-full ${
            currentScreen === 'chat'
              ? 'bg-[#1a4331] text-[#85b098]'
              : 'text-[#414944] hover:text-[#002d1c]'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[22px] ${
              currentScreen === 'chat' ? 'filled text-[#c0edd3]' : ''
            }`}
          >
            forum
          </span>
          <span className={`text-[11px] font-semibold mt-0.5 ${currentScreen === 'chat' ? 'text-[#ffffff]' : ''}`}>
            AI Chat
          </span>
        </button>

        {/* Profile */}
        <button
          onClick={() => navigateTo('profile')}
          className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-95 py-1 px-3 rounded-full ${
            isProfileActive
              ? 'bg-[#1a4331] text-[#85b098]'
              : 'text-[#414944] hover:text-[#002d1c]'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[22px] ${
              isProfileActive ? 'filled text-[#c0edd3]' : ''
            }`}
          >
            person
          </span>
          <span className={`text-[11px] font-semibold mt-0.5 ${isProfileActive ? 'text-[#ffffff]' : ''}`}>
            {t('navProfile')}
          </span>
        </button>
      </div>
    </nav>
  );
};
