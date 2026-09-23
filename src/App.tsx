import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { LanguageSelectScreen } from './components/screens/LanguageSelectScreen';
import { WelcomeScreen } from './components/screens/WelcomeScreen';
import { DashboardScreen } from './components/screens/DashboardScreen';
import { CaptureScreen } from './components/screens/CaptureScreen';
import { ProcessingScreen } from './components/screens/ProcessingScreen';
import { MultipleCropScreen } from './components/screens/MultipleCropScreen';
import { ResultScreen } from './components/screens/ResultScreen';
import { HistoryScreen } from './components/screens/HistoryScreen';
import { HistoryDetailScreen } from './components/screens/HistoryDetailScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { FieldsScreen } from './components/screens/FieldsScreen';
import { AlertsScreen } from './components/screens/AlertsScreen';
import { FollowUpsScreen } from './components/screens/FollowUpsScreen';
import { ReferralsScreen } from './components/screens/ReferralsScreen';
import { WeatherScreen } from './components/screens/WeatherScreen';
import { ChatScreen } from './components/screens/ChatScreen';
import { ChangeLanguageModal } from './components/screens/ChangeLanguageModal';
import { HelpCenterModal } from './components/screens/HelpCenterModal';
import { WaterAdvisorScreen } from './components/screens/WaterAdvisorScreen';
import { LocationPermissionBanner } from './components/LocationPermissionBanner';

/**
 * Desktop sidebar
 * Visible for both authenticated users and guest/demo users.
 */
const DesktopSideNav: React.FC = () => {
  const { currentScreen, navigateTo, t, user } = useApp();

  const [showLoginPrompt, setShowLoginPrompt] = React.useState(false);
  const [restrictedFeature, setRestrictedFeature] = React.useState('');

  /*
   * These features require an authenticated account.
   * Guests can see them in the menu, but clicking them
   * shows the login-required prompt instead of opening
   * the actual screen/API.
   */
  const protectedScreens = new Set([
    'history',
    'history-detail',
    'fields',
    'alerts',
    'follow-ups',
    'referrals',
  ]);

  const navItems = [
    {
      screen: 'dashboard' as const,
      icon: 'home',
      label: t('navHome'),
    },
    {
      screen: 'capture' as const,
      icon: 'photo_camera',
      label: t('analyzeMyCropBtn') || 'Scan Crop',
    },
    {
     screen: 'fields' as const,
     icon: 'landscape',
     label: t('navFields'),
    },
    {
      screen: 'history' as const,
      icon: 'history',
      label: t('navHistory'),
    },
    {
      screen: 'water-advisor' as const,
      icon: 'water_drop',
      label: 'Water Advisor',
    },
    {
      screen: 'weather' as const,
      icon: 'cloud',
      label: t('weatherForecast'),
    },
    {
     screen: 'chat' as const,
     icon: 'forum',
     label: t('navChat'),
    },
    {
      screen: 'alerts' as const,
      icon: 'notifications',
      label: t('navAlerts'),
    },
    {
      screen: 'profile' as const,
      icon: 'person',
      label: t('navProfile'),
    },
  ];

  const handleNavigation = (screen: string, label: string) => {
    /*
     * Guest + protected feature:
     * Do NOT navigate to the protected screen.
     * This prevents its API calls from triggering
     * authentication redirects.
     */
    if (!user && protectedScreens.has(screen)) {
      setRestrictedFeature(label);
      setShowLoginPrompt(true);
      return;
    }

    navigateTo(screen as any);
  };

  return (
    <>
      {/* =========================
          DESKTOP SIDEBAR
          ========================= */}
      <aside className="fixed left-0 top-0 h-full z-30 hidden md:flex flex-col w-[220px] bg-[#fcf9f8] border-r border-[#c1c8c2]/50 shadow-sm pt-16 pb-6">
        <div className="flex flex-col gap-1 px-3 flex-1 overflow-y-auto">
          {navItems.map(({ screen, icon, label }) => {
            const isActive =
              currentScreen === screen ||
              (screen === 'history' &&
                (currentScreen === 'history' ||
                  currentScreen === 'history-detail'));

            return (
              <button
                key={screen}
                type="button"
                onClick={() => handleNavigation(screen, label)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 text-left w-full ${
                  isActive
                    ? 'bg-[#1a4331] text-white'
                    : 'text-[#414944] hover:bg-[#f0eded] hover:text-[#002d1c]'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[22px] ${
                    isActive ? 'filled' : ''
                  }`}
                >
                  {icon}
                </span>

                <span className="truncate">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Agnovis branding */}
        <div className="px-4 pt-4 border-t border-[#c1c8c2]/40">
          <div className="flex items-center gap-2 text-[#002d1c] opacity-60">
            <span className="material-symbols-outlined text-[18px] filled">
              agriculture
            </span>

            <span className="text-xs font-bold tracking-tight">
              Agnovis AI
            </span>
          </div>
        </div>
      </aside>

      {/* =========================
          LOGIN REQUIRED MODAL
          ========================= */}
      {showLoginPrompt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="w-full max-w-sm rounded-3xl bg-white shadow-2xl p-6 text-center">
            {/* Lock icon */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f5df]">
              <span className="material-symbols-outlined text-[30px] text-[#1a4331] filled">
                lock
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-[#1a4331]">
              Login Required
            </h2>

            {/* Description */}
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Please login to access{' '}
              <span className="font-semibold text-[#1a4331]">
                {restrictedFeature.toLowerCase()}
              </span>
              .
              <br />
              Create an account or login to continue.
            </p>

            {/* Login button */}
            <button
              type="button"
              onClick={() => {
                setShowLoginPrompt(false);
                navigateTo('welcome');
              }}
              className="mt-6 w-full h-12 rounded-full bg-[#1a4331] hover:bg-[#245c43] text-white font-bold text-sm transition-all active:scale-[0.98]"
            >
              Login / Register
            </button>

            {/* Continue exploring */}
            <button
              type="button"
              onClick={() => setShowLoginPrompt(false)}
              className="mt-3 w-full h-11 rounded-full border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-all active:scale-[0.98]"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      )}
    </>
  );
};

/**
 * Screens that use the main application layout.
 *
 * The sidebar is visible for both guests and authenticated users.
 * Individual protected features are blocked by DesktopSideNav
 * when the user is not logged in.
 */
const SIDEBAR_SCREENS = new Set([
  'dashboard',
  'capture',
  'processing',
  'multiple-crop',
  'result',
  'history',
  'history-detail',
  'profile',
  'fields',
  'alerts',
  'follow-ups',
  'referrals',
  'weather',
  'chat',
  'water-advisor',
]);

const AppContent: React.FC = () => {
  const { currentScreen, toastMessage } = useApp();

  /*
   * IMPORTANT:
   * Do NOT check `user` here.
   *
   * Guest users should still see the application menu.
   */
  const showSidebar = SIDEBAR_SCREENS.has(currentScreen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'language-select':
        return <LanguageSelectScreen />;

      case 'welcome':
        return <WelcomeScreen />;

      case 'dashboard':
        return <DashboardScreen />;

      case 'capture':
        return <CaptureScreen />;

      case 'processing':
        return <ProcessingScreen />;

      case 'multiple-crop':
        return <MultipleCropScreen />;

      case 'result':
        return <ResultScreen />;

      case 'history':
        return <HistoryScreen />;

      case 'history-detail':
        return <HistoryDetailScreen />;

      case 'profile':
        return <ProfileScreen />;

      case 'fields':
        return <FieldsScreen />;

      case 'alerts':
        return <AlertsScreen />;

      case 'follow-ups':
        return <FollowUpsScreen />;

      case 'referrals':
        return <ReferralsScreen />;

      case 'weather':
        return <WeatherScreen />;

      case 'chat':
        return <ChatScreen />;

      case 'water-advisor':
        return <WaterAdvisorScreen />;

      default:
        return <DashboardScreen />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fcf9f8] text-[#1b1c1c] font-sans antialiased selection:bg-[#002d1c] selection:text-white">
      <LocationPermissionBanner />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#002d1c] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg border border-[#c0edd3]/30 flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <span className="material-symbols-outlined text-[18px] text-[#c5e063] filled">
            check_circle
          </span>

          <span>{toastMessage}</span>
        </div>
      )}

      {/* Desktop Sidebar */}
      {showSidebar && <DesktopSideNav />}

      {/* Main content */}
      <div className={showSidebar ? 'md:ml-[220px]' : ''}>
        {renderScreen()}
      </div>

      {/* Language Switch Modal */}
      <ChangeLanguageModal />

      {/* Help Center Contact Modal */}
      <HelpCenterModal />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;