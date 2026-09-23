import React, { createContext, useContext, useState, useEffect } from 'react';
import { AnalysisResult, CropKey, Language, Screen, User } from '../types';
import { translations, Translations } from '../i18n/translations';
import { analyzePlant, continueAnalysis } from '../services/cropAnalysisService';
import {
  getCurrentUser,
  getUserAnalysisHistory,
  getRecentAnalyses,
  loginUser as apiLoginUser,
  registerUser as apiRegisterUser,
  logoutUser as apiLogoutUser,
  saveUserAnalysis,
  persistSession,
  getStoredSession,
  updateUserInStorage
} from '../services/authService';
import { apiGetMe } from '../services/apiService';

export type AnalysisStatus = 'idle' | 'analyzing' | 'completed' | 'error';

interface AppContextType {
  selectedLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
  currentScreen: Screen;
  navigateTo: (screen: Screen, options?: { replace?: boolean }) => void;
  replaceScreen: (screen: Screen) => void;
  goBack: () => void;
  analysisStatus: AnalysisStatus;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  activeAnalysis: AnalysisResult | null;
  setActiveAnalysis: (result: AnalysisResult | null) => void;
  activeHistoryDetail: AnalysisResult | null;
  setActiveHistoryDetail: (item: AnalysisResult | null) => void;
  userAnalyses: AnalysisResult[];
  recentAnalyses: AnalysisResult[];
  refreshUserAnalyses: () => Promise<void>;
  selectedImage: string | null;
  setSelectedImage: (image: string | null) => void;
  selectedCrop: CropKey | null;
  setSelectedCrop: (crop: CropKey | null) => void;
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
  imageData: string | null;
  setImageData: (data: string | null) => void;
  imageSource: 'camera' | 'upload' | null;
  setImageSource: (source: 'camera' | 'upload' | null) => void;
  detectedCrops: CropKey[];
  isMultipleCropCase: boolean;
  isChangeLanguageModalOpen: boolean;
  openChangeLanguageModal: () => void;
  closeChangeLanguageModal: () => void;
  isHelpCenterModalOpen: boolean;
  openHelpCenterModal: () => void;
  closeHelpCenterModal: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  startAnalysis: (
    image: string,
    isMultiple?: boolean,
    cropKey?: CropKey | null,
    source?: 'camera' | 'upload' | null,
    file?: File | null
  ) => Promise<void>;
  resolveMultiCrop: (selectedCrop: CropKey) => Promise<void>;
  logTreatmentPlan: (id: string) => void;
  handleRegister: (
    name: string,
    email: string,
    phone: string,
    password?: string,
    preferredLanguage?: Language
  ) => Promise<{ success: boolean; error?: string }>;
  handleLogin: (identifier: string, credential?: string) => Promise<{ success: boolean; error?: string }>;
  handleLogout: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'agrivision_selected_language';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Session initialization
  const initialSession = getStoredSession();

  const [selectedLanguage, setSelectedLanguageState] = useState<Language>(
    initialSession.language || 'en'
  );

  const [user, setUser] = useState<User | null>(initialSession.user);

  // Screen navigation stack: If valid user session exists, go directly to dashboard; else welcome
  const [screenStack, setScreenStack] = useState<Screen[]>(() => {
    return initialSession.user ? ['dashboard'] : ['welcome'];
  });

  const currentScreen = screenStack[screenStack.length - 1] || (user ? 'dashboard' : 'welcome');

  const [analysisStatus, setAnalysisStatus] = useState<AnalysisStatus>('idle');
  const [userAnalyses, setUserAnalyses] = useState<AnalysisResult[]>([]);
  const [recentAnalyses, setRecentAnalyses] = useState<AnalysisResult[]>([]);
  const [activeAnalysis, setActiveAnalysis] = useState<AnalysisResult | null>(null);
  const [activeHistoryDetail, setActiveHistoryDetail] = useState<AnalysisResult | null>(null);
  
  // Dynamic state for Analyze My Crop flow
  const [selectedCrop, setSelectedCrop] = useState<CropKey | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageData, setImageData] = useState<string | null>(null);
  const [imageSource, setImageSource] = useState<'camera' | 'upload' | null>(null);
  const [selectedImage, setSelectedImageState] = useState<string | null>(null);

  const setSelectedImage = (img: string | null) => {
    setSelectedImageState(img);
    setImageData(img);
  };
  const [detectedCrops, setDetectedCrops] = useState<CropKey[]>(['tomato', 'potato', 'corn', 'pepper']);
  const [isMultipleCropCase, setIsMultipleCropCase] = useState<boolean>(false);
  const [currentAnalysisId, setCurrentAnalysisId] = useState<string>('');
  const [isChangeLanguageModalOpen, setIsChangeLanguageModalOpen] = useState(false);
  const [isHelpCenterModalOpen, setIsHelpCenterModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Verify authenticated session against FastAPI GET /auth/me on initial boot
  useEffect(() => {
    async function verifyAuthMe() {
      const token = localStorage.getItem('agrivision_session_token');
      if (!token) return;

      try {
        const remoteUser = await apiGetMe();
        if (remoteUser && (remoteUser.id || remoteUser.userId)) {
          const updatedUser: User = {
            userId: String(remoteUser.id || remoteUser.userId),
            name: remoteUser.name || user?.name || 'Farmer',
            email: remoteUser.email || user?.email || '',
            phone: remoteUser.phone || user?.phone || '',
            mobile: remoteUser.phone || user?.mobile || '',
            selectedLanguage: (remoteUser.language || selectedLanguage) as Language,
            language: (remoteUser.language || selectedLanguage) as Language,
            avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(remoteUser.name || 'Farmer')}`,
            createdAt: remoteUser.created_at || new Date().toISOString()
          };
          setUser(updatedUser);
          updateUserInStorage(updatedUser);
        }
      } catch (err: any) {
        if (err.status === 401) {
          // Token expired: silently log out
          handleLogout();
        }
      }
    }

    verifyAuthMe();

    // Listen for unauthorized 401 events from the API client
    const handleUnauthorized = () => {
      handleLogout();
      showToast('Session expired. Please log in again.');
    };
    window.addEventListener('agrivision:unauthorized', handleUnauthorized);

    return () => {
      window.removeEventListener('agrivision:unauthorized', handleUnauthorized);
    };
  }, []);

  // Load user-specific analyses whenever the active user changes
  const refreshUserAnalyses = async () => {
    if (!user) {
      setUserAnalyses([]);
      setRecentAnalyses([]);
      return;
    }
    try {
      const all = await getUserAnalysisHistory(user.userId);
      const recent = await getRecentAnalyses(user.userId, 3);
      setUserAnalyses(all);
      setRecentAnalyses(recent);
      if (all.length > 0 && !activeHistoryDetail) {
        setActiveHistoryDetail(all[0]);
      }
    } catch (e) {
      console.error('Failed to load user analyses:', e);
    }
  };

  useEffect(() => {
    refreshUserAnalyses();
  }, [user?.userId]);

  const setLanguage = (lang: Language) => {
    setSelectedLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    localStorage.setItem('agrivision_session_lang', lang);
    if (user) {
      const updatedUser = { ...user, selectedLanguage: lang };
      setUser(updatedUser);
      updateUserInStorage(updatedUser);
      persistSession(updatedUser);
    }
  };

  const showToast = (msg: any) => {
    let text = '';
    if (typeof msg === 'string') {
      text = msg;
    } else if (msg instanceof Error) {
      text = msg.message;
    } else if (msg && typeof msg === 'object') {
      if (typeof msg.message === 'string') text = msg.message;
      else if (typeof msg.detail === 'string') text = msg.detail;
      else if (Array.isArray(msg)) text = msg.map((m: any) => typeof m === 'string' ? m : (m?.msg || JSON.stringify(m))).join(', ');
      else text = msg.msg || JSON.stringify(msg);
    } else {
      text = String(msg || '');
    }
    setToastMessage(text);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const navigateTo = (screen: Screen, options?: { replace?: boolean }) => {
    setScreenStack((prev) => {
      // If replacing or if current top is 'processing', replace the top screen
      if (options?.replace || prev[prev.length - 1] === 'processing') {
        const clean = prev.filter((s) => s !== 'processing');
        const base = clean.length > 0 ? clean.slice(0, clean.length - 1) : [];
        if (base[base.length - 1] === screen) return base;
        return base.length > 0 ? [...base, screen] : [screen];
      }
      if (prev[prev.length - 1] === screen) return prev;
      return [...prev, screen];
    });
  };

  const replaceScreen = (screen: Screen) => {
    setScreenStack((prev) => {
      // Remove any 'processing' screens and replace the top screen
      const clean = prev.filter((s) => s !== 'processing');
      const base = clean.length > 0 ? clean.slice(0, clean.length - 1) : [];
      if (base[base.length - 1] === screen) return base;
      return base.length > 0 ? [...base, screen] : [screen];
    });
  };

  const goBack = () => {
    setScreenStack((prev) => {
      // Prune all transient 'processing' screens from stack
      const clean = prev.filter((s) => s !== 'processing');
      if (clean.length > 1) {
        return clean.slice(0, clean.length - 1);
      }
      return user ? ['dashboard'] : ['welcome'];
    });
  };

  const t = (key: keyof Translations): string => {
    const langDict = translations[selectedLanguage] || translations.en;
    return langDict[key] || translations.en[key] || String(key);
  };

  const openChangeLanguageModal = () => setIsChangeLanguageModalOpen(true);
  const closeChangeLanguageModal = () => setIsChangeLanguageModalOpen(false);

  const openHelpCenterModal = () => setIsHelpCenterModalOpen(true);
  const closeHelpCenterModal = () => setIsHelpCenterModalOpen(false);

  const handleRegister = async (
    name: string,
    email: string,
    phone: string,
    password?: string,
    preferredLanguage?: Language
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const lang = preferredLanguage || selectedLanguage;
      const newUser = await apiRegisterUser(name, email, phone, password, lang);
      setUser(newUser);
      // Immediately apply the newly chosen preferred language
      setLanguage(lang);
      showToast(t('registrationSuccess'));
      return { success: true };
    } catch (e: any) {
      console.error('Registration error:', e);
      return { success: false, error: e.message || 'REGISTRATION_FAILED' };
    }
  };

  const handleLogin = async (
    identifier: string,
    credential?: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const loggedUser = await apiLoginUser(identifier, credential);
      setUser(loggedUser);
      // Immediately restore and apply user's saved language
      const userLang = loggedUser.selectedLanguage || loggedUser.language;
      if (userLang) {
        setLanguage(userLang as Language);
      }
      showToast(t('loginSuccess'));
      return { success: true };
    } catch (e: any) {
      const errCode = e.message || 'ACCOUNT_NOT_FOUND';
      return { success: false, error: errCode };
    }
  };

  const handleLogout = async () => {
    await apiLogoutUser();
    setUser(null);
    setUserAnalyses([]);
    setRecentAnalyses([]);
    setActiveAnalysis(null);
    setActiveHistoryDetail(null);
    setAnalysisStatus('idle');
    setScreenStack(['welcome']);
    showToast('Logged out successfully');
  };

  const startAnalysis = async (
    image: string,
    isMultiple = false,
    cropKey?: CropKey | null,
    source?: 'camera' | 'upload' | null,
    file?: File | null
  ) => {
    const targetCrop: CropKey = (cropKey || selectedCrop || 'tomato') as CropKey;
    setSelectedImageState(image);
    setImageData(image);
    if (cropKey) setSelectedCrop(cropKey);
    if (source) setImageSource(source);
    if (file) setImageFile(file);

    setAnalysisStatus('analyzing');
    // Navigate to temporary processing transition screen
    navigateTo('processing');

    try {
      const response = await analyzePlant(image, selectedLanguage, {
        isMultipleCrop: isMultiple,
        cropKey: targetCrop,
        source: source || imageSource || 'upload',
        imageFile: file || imageFile || undefined
      });

      setCurrentAnalysisId(response.analysisId);

      if (response.isMultipleCrop) {
        setIsMultipleCropCase(true);
        setDetectedCrops(response.detectedCrops || ['tomato', 'potato', 'corn', 'pepper']);
        // Replace processing with multiple-crop screen
        replaceScreen('multiple-crop');
      } else if (response.result) {
        setIsMultipleCropCase(false);
        const resultWithUser: AnalysisResult = {
          ...response.result,
          cropKey: targetCrop,
          imageUrl: image,
          userId: user?.userId || 'guest-user'
        };
        setActiveAnalysis(resultWithUser);
        setAnalysisStatus('completed');

        // Save under logged-in user if available
        if (user) {
          await saveUserAnalysis(user.userId, resultWithUser);
          await refreshUserAnalyses();
        }

        // Replace processing screen with final result in navigation history
        replaceScreen('result');
      }
    } catch (error) {
      console.error('Analysis failed:', error);
      setAnalysisStatus('error');
      showToast('Analysis error. Please try again.');
      replaceScreen('capture');
    }
  };

  const resolveMultiCrop = async (chosenCrop: CropKey) => {
    setSelectedCrop(chosenCrop);
    setAnalysisStatus('analyzing');
    navigateTo('processing');
    try {
      const finalResult = await continueAnalysis(
        currentAnalysisId,
        chosenCrop,
        selectedLanguage,
        imageData || selectedImage || undefined
      );
      const resultWithUser: AnalysisResult = {
        ...finalResult,
        cropKey: chosenCrop,
        imageUrl: imageData || selectedImage || finalResult.imageUrl,
        userId: user?.userId || 'guest-user'
      };
      setActiveAnalysis(resultWithUser);
      setAnalysisStatus('completed');

      if (user) {
        await saveUserAnalysis(user.userId, resultWithUser);
        await refreshUserAnalyses();
      }

      // Replace processing screen with final result in navigation history
      replaceScreen('result');
    } catch (error) {
      console.error('Disambiguation failed:', error);
      setAnalysisStatus('error');
      showToast('Error continuing analysis.');
      replaceScreen('multiple-crop');
    }
  };

  const logTreatmentPlan = (_id: string) => {
    showToast(t('treatmentPlanSaved'));
  };

  return (
    <AppContext.Provider
      value={{
        selectedLanguage,
        setLanguage,
        t,
        currentScreen,
        navigateTo,
        replaceScreen,
        goBack,
        analysisStatus,
        user,
        setUser,
        activeAnalysis,
        setActiveAnalysis,
        activeHistoryDetail,
        setActiveHistoryDetail,
        userAnalyses,
        recentAnalyses,
        refreshUserAnalyses,
        selectedImage,
        setSelectedImage,
        selectedCrop,
        setSelectedCrop,
        imageFile,
        setImageFile,
        imageData,
        setImageData,
        imageSource,
        setImageSource,
        detectedCrops,
        isMultipleCropCase,
        isChangeLanguageModalOpen,
        openChangeLanguageModal,
        closeChangeLanguageModal,
        isHelpCenterModalOpen,
        openHelpCenterModal,
        closeHelpCenterModal,
        toastMessage,
        showToast,
        startAnalysis,
        resolveMultiCrop,
        logTreatmentPlan,
        handleRegister,
        handleLogin,
        handleLogout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
