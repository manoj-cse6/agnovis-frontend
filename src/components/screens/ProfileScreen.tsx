import React from 'react';
import { useApp } from '../../context/AppContext';
import { TopAppBar } from '../TopAppBar';
import { BottomNavBar } from '../BottomNavBar';

export const ProfileScreen: React.FC = () => {
  const {
    t,
    user,
    openChangeLanguageModal,
    openHelpCenterModal,
    goBack,
    selectedLanguage,
    showToast,
    handleLogout
  } = useApp();

  const getLanguageLabel = () => {
    switch (selectedLanguage) {
      case 'te':
        return 'తెలుగు (Telugu)';
      case 'hi':
        return 'हिन्दी (Hindi)';
      case 'mr':
        return 'मराठी (Marathi)';
      case 'en':
      default:
        return 'English (US)';
    }
  };

  const displayName = user?.name || 'Farmer';
  const displayPhone = user?.phone || 'Not provided';
  const displayEmail = user?.email || 'Not provided';
  const avatarUrl =
    user?.avatarUrl ||
    `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(displayName)}`;

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex flex-col pt-14 md:pt-16 pb-24 md:pb-12">
      <TopAppBar
        title={t('navProfile')}
        showBack
        onBack={goBack}
      />

      <main className="max-w-xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
        {/* User Card */}
        <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,45,28,0.05)] border border-[#c1c8c2]/30 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#002d1c] shadow-xs bg-[#f0eded]">
              <img
                src={avatarUrl}
                alt={displayName}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1b1c1c]">{displayName}</h2>
              <p className="text-xs text-[#5f5e59] mt-0.5">{displayPhone}</p>
              <p className="text-[11px] text-[#717973]">{displayEmail}</p>
              <span className="inline-block text-[11px] font-semibold text-[#002d1c] bg-[#c0edd3] px-2.5 py-0.5 rounded-full mt-1.5">
                {t('memberVerified')}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => showToast('Profile editor ready')}
            className="w-9 h-9 rounded-full bg-[#f6f3f2] hover:bg-[#eae7e7] flex items-center justify-center text-[#002d1c] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">edit</span>
          </button>
        </div>

        {/* Farm & Account Settings Group */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,45,28,0.05)] border border-[#c1c8c2]/30 overflow-hidden divide-y divide-[#f0eded]">
          {/* Change Language Item */}
          <button
            type="button"
            onClick={openChangeLanguageModal}
            className="w-full p-4 flex items-center justify-between hover:bg-[#f6f3f2] transition-colors text-left group cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#e8f5e9] text-[#1a4331] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px] filled">
                  translate
                </span>
              </div>
              <div>
                <div className="text-sm font-bold text-[#1b1c1c] group-hover:text-[#002d1c]">
                  {t('changeLanguageSetting')}
                </div>
                <div className="text-xs text-[#5f5e59] mt-0.5">
                  {getLanguageLabel()}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[#002d1c] font-semibold text-xs">
              <span className="material-symbols-outlined text-[20px] text-[#717973] group-hover:text-[#002d1c]">
                chevron_right
              </span>
            </div>
          </button>

          {/* Notifications */}
          <button
            type="button"
            onClick={() => showToast(t('notificationsSub'))}
            className="w-full p-4 flex items-center justify-between hover:bg-[#f6f3f2] transition-colors text-left group cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#f0eded] text-[#002d1c] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">
                  notifications
                </span>
              </div>
              <div>
                <div className="text-sm font-bold text-[#1b1c1c] group-hover:text-[#002d1c]">
                  {t('notificationsSetting')}
                </div>
                <div className="text-xs text-[#5f5e59] mt-0.5">
                  {t('notificationsSub')}
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined text-[20px] text-[#717973] group-hover:text-[#002d1c]">
              chevron_right
            </span>
          </button>

          {/* Help Center */}
          <button
            type="button"
            onClick={openHelpCenterModal}
            className="w-full p-4 flex items-center justify-between hover:bg-[#f6f3f2] transition-colors text-left group cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#f0eded] text-[#002d1c] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">
                  help
                </span>
              </div>
              <div>
                <div className="text-sm font-bold text-[#1b1c1c] group-hover:text-[#002d1c]">
                  {t('helpCenterSetting')}
                </div>
                <div className="text-xs text-[#5f5e59] mt-0.5">
                  {t('helpCenterSub')}
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined text-[20px] text-[#717973] group-hover:text-[#002d1c]">
              chevron_right
            </span>
          </button>

          {/* Privacy Policy */}
          <button
            type="button"
            onClick={() => showToast('AgnoVis AI Privacy & Data Security')}
            className="w-full p-4 flex items-center justify-between hover:bg-[#f6f3f2] transition-colors text-left group cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#f0eded] text-[#002d1c] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">
                  policy
                </span>
              </div>
              <div>
                <div className="text-sm font-bold text-[#1b1c1c] group-hover:text-[#002d1c]">
                  {t('privacyPolicySetting')}
                </div>
                <div className="text-xs text-[#5f5e59] mt-0.5">
                  {t('privacyPolicySub')}
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined text-[20px] text-[#717973] group-hover:text-[#002d1c]">
              chevron_right
            </span>
          </button>
        </div>

        {/* Logout Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full h-12 rounded-full border-2 border-[#ba1a1a]/30 text-[#ba1a1a] hover:bg-[#ffdad6]/20 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            <span>{t('logoutBtn')}</span>
          </button>
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
};
