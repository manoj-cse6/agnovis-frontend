import { Language } from '../types';

export interface Translations {
  // --- Agnovis Extended Localization Keys ---
  alertsTitle: string;
  checkingAlerts: string;
  noActiveAlerts: string;
  allFieldsNormal: string;
  alertMarkedResolved: string;
  alertReopened: string;
  couldNotUpdateAlert: string;
  couldNotLoadAlerts: string;
  activeStatus: string;
  resolvedStatus: string;
  markResolved: string;
  reopen: string;
  followUpsTitle: string;
  loadingFollowUps: string;
  noPendingFollowUps: string;
  noFollowUpsDesc: string;
  couldNotLoadFollowUps: string;
  failedToUpdateFollowUp: string;
  followUpScheduled: string;
  markCompleted: string;
  referralsTitle: string;
  checkingReferrals: string;
  noActiveReferrals: string;
  noReferralsDesc: string;
  couldNotLoadReferrals: string;
  expertReviewPending: string;
  registeredFields: string;
  plotNameLabel: string;
  plotNamePlaceholder: string;
  primaryCropLabel: string;
  areaAcresLabel: string;
  enterFieldName: string;
  fieldRegisteredSuccess: string;
  fieldRemovedSuccess: string;
  failedCreateField: string;
  failedRemoveField: string;
  couldNotLoadFields: string;
  noFieldsYet: string;
  noFieldsDesc: string;
  addNewField: string;
  loadingHistory: string;
  fetchingPastScans: string;
  failedToLoadHistory: string;
  noScansMatchSearch: string;
  tryAdjustingSearch: string;
  issueDetected: string;
  healthyCondition: string;
  voiceInputUnavailable: string;
  speechNotSupported: string;
  listeningPrompt: string;
  ttsNotSupported: string;
  consultingGemini: string;
  chatSuggestion1: string;
  chatSuggestion2: string;
  chatSuggestion3: string;
  chatSuggestion4: string;
  chatInputPlaceholder: string;
  listen: string;
  speakQuestion: string;
  aiAgronomistTitle: string;
  weatherConditionClear: string;
  weatherConditionPartlyCloudy: string;
  weatherConditionCloudy: string;
  weatherConditionOvercast: string;
  weatherConditionFog: string;
  weatherConditionDrizzle: string;
  weatherConditionRain: string;
  weatherConditionHeavyRain: string;
  weatherConditionThunderstorm: string;
  weatherAdvisoryPrecipitation: string;
  weatherAdvisoryHumidity: string;
  weatherAdvisoryNormal: string;
  weatherAdvisoryHot: string;
  weatherAdvisoryWind: string;
  couldNotFetchWeather: string;
  unknownLocation: string;
  currentConditions: string;
  sevenDayForecast: string;
  feelsLike: string;
  humidityLabel: string;
  windLabel: string;
  precipitationLabel: string;
  couldNotProcessImage: string;
  couldNotSendQuery: string;
  steps: string;
  noRecommendationAvailable: string;
  quickPromptOrganic: string;
  quickPromptChemical: string;
  quickPromptPrevention: string;
  quickPromptFertilizer: string;
  expertReferralDesc: string;
  followUpScheduledDesc: string;
  cropHealthAlerts: string;
  treatmentFollowups: string;
  expertReferrals: string;
  myFarmlandPlots: string;

  // App General
  appName: string;
  sihTagline: string;
  tagline: string;
  back: string;
  share: string;
  close: string;
  confirm: string;
  cancel: string;
  save: string;
  edit: string;
  delete: string;
  viewAll: string;
  viewDetails: string;
  takeAction: string;
  detailsUnavailable: string;
  loadOlderScans: string;
  searchPlaceholder: string;
  filter: string;
  all: string;
  today: string;
  yesterday: string;
  minsAgo: string;

  // Language Selection
  chooseLanguageTitle: string;
  chooseLanguageSubtitle: string;
  continueBtn: string;
  languageChangedSuccess: string;
  langEnglish: string;
  langTelugu: string;
  langHindi: string;
  langMarathi: string;

  // Welcome & Auth
  welcomeHeader: string;
  welcomeSubtitle: string;
  landingWelcomeTo: string;
  landingCompanionText: string;
  landingAnalyzeCrop: string;
  landingHistory: string;
  landingTrustedByFarmers: string;
  landingFarmersCount: string;
  landingMoveCursorHint: string;
  landingFarmerSignIn: string;
  mobileOrEmailLabel: string;
  mobileOrEmailPlaceholder: string;
  loginBtn: string;
  newToAgriVision: string;
  createAccount: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  registerTab: string;
  loginTab: string;
  registerBtn: string;
  alreadyHaveAccount: string;
  loginLink: string;
  registerLink: string;
  userNotFound: string;
  accountNotFound: string;
  invalidLoginDetails: string;
  invalidIdentifierFormat: string;
  enterValidPassword: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  preferredLanguageLabel: string;
  registerNowLink: string;
  enterValidName: string;
  enterValidEmail: string;
  enterValidPhone: string;
  registrationSuccess: string;
  loginSuccess: string;
  accountDetails: string;
  registeredOn: string;
  noAnalysesYet: string;
  noAnalysesYetSub: string;
  startScanNow: string;
  analyzeMyCropBtn: string;
  memberVerified: string;
  sessionRestored: string;
  memberUserId: string;

  // Navigation
  navHome: string;
navHistory: string;
navProfile: string;
navFields: string;
navChat: string;
navAlerts: string;
weatherForecast: string;

  // Dashboard
  greetingPrefix: string;
  greetingReadyText: string;
  analyzeMyCrop: string;
  captureImage: string;
  captureImageSub: string;
  uploadImage: string;
  uploadImageSub: string;
  recentAnalyses: string;
  aiInsightsTips?: string;
  wateringWindowTipTitle?: string;
  wateringWindowTipDesc?: string;
  pestAlertTipTitle?: string;
  pestAlertTipDesc?: string;

  // Dashboard - Tips for a Better Scan
  scanTipsTitle: string;
  scanTipsSubtitle: string;
  scanTip1: string;
  scanTip2: string;
  scanTip3: string;
  scanTip4: string;
  startAnalysisCta: string;

  // Dashboard - What AgnoVis AI Can Detect
  whatCanDetectTitle: string;
  supportedCropsSubtitle: string;
  diseaseDetectionTitle: string;
  diseaseDetectionDesc: string;
  pestDetectionTitle: string;
  pestDetectionDesc: string;
  managementRecommendationsTitle: string;
  managementRecommendationsDesc: string;

  // Image Capture / Upload
  captureCropImageTitle: string;
  captureCropImageSubtitle: string;
  openCamera: string;
  openCameraSub: string;
  uploadFromGallery: string;
  uploadFromGallerySub: string;
  photoGuidelinesTitle: string;
  guideline1: string;
  guideline2: string;
  guideline3: string;
  analyzeImageBtn: string;
  selectImageHint: string;
  changeImage: string;
  testWithSample: string;
  noImageSelectedYet: string;
  noImageSelectedSub: string;
  pleaseSelectCrop: string;
  pleaseSelectCropFirst: string;
  pleaseUploadOrCapture: string;
  pleaseSelectCropAndImage: string;
  selectCropLabel: string;
  selectedCropLabel: string;
  noCropSelectedYet: string;
  readyForAnalysis: string;
  cameraSource: string;
  uploadSource: string;
  removeImage: string;
  takePhoto: string;
  retakePhoto: string;
  switchCamera: string;
  closeCamera: string;
  cameraPermissionDenied: string;
  cameraUnavailable: string;

  // Processing Screen
  analyzingImageTitle: string;
  analyzingImageSubtitle: string;
  stepUpload: string;
  stepUploadSub: string;
  stepIdentify: string;
  stepIdentifySub: string;
  stepAnalyze: string;
  stepAnalyzeSub: string;
  stepResult: string;
  stepResultSub: string;

  // Multiple Crop Flow
  multipleCropTitle: string;
  multipleCropSubtitle: string;
  multipleCropQuestion: string;
  analyzedImageLabel: string;
  selectCropType: string;
  continueAnalysisBtn: string;

  // Analysis Result
  criticalActionRequired: string;
  optimalHealth: string;
  needsAttention: string;
  analysisSummaryTitle: string;
  scannedJustNow: string;
  diseaseDetectedTitle: string;
  confidenceScore: string;
  pestActivityTitle: string;
  noneDetected: string;
  currentlySafe: string;
  recommendedActionTitle: string;
  noAnalysisResultAvailable: string;
  noRecommendationAvailable: string;
  valueNone: string;
  statusPending: string;
  logTreatmentPlan: string;
  treatmentPlanSaved: string;
  aiDisclaimer: string;

  // Chat continuation
  askAgronomistTitle: string;
  askAgronomistSub: string;
  chatInputPlaceholder: string;
  sendBtn: string;
  thinkingText: string;
  quickPromptOrganic: string;
  quickPromptWater: string;
  quickPromptSpread: string;
  checkThisNewImage: string;
  chatSavedNote: string;
  reportDownloaded: string;

  // Weather
  weatherTitle: string;
  weatherCurrentLocation: string;
  weatherUseMyLocation: string;
  weatherChangeLocation: string;
  weatherSearchLocation: string;
  weatherSearchPlaceholder: string;
  weatherSearching: string;
  weatherSearchResults: string;
  weatherNoResults: string;
  weatherLastUpdated: string;
  weatherCurrentConditions: string;
  weatherFeelsLike: string;
  weatherHumidity: string;
  weatherWind: string;
  weatherRainfall: string;
  weatherRainProbability: string;
  weatherRisk: string;
  weatherRiskLow: string;
  weatherRiskModerate: string;
  weatherRiskHigh: string;
  weatherFarmAdvisory: string;
  weather7DayForecast: string;
  weatherFieldWorkOutlook: string;
  weatherFieldWorkFavorable: string;
  weatherFieldWorkCaution: string;
  weatherFieldWorkAvoid: string;
  weatherFieldWorkFavorableText: string;
  weatherFieldWorkCautionText: string;
  weatherFieldWorkAvoidText: string;
  weatherCropContext: string;
  weatherLoading: string;
  weatherUnavailable: string;
  weatherUnavailableText: string;
  weatherLocationPermissionDenied: string;
  weatherLocationUnavailable: string;
  weatherRetry: string;
  weatherToday: string;
  weatherTomorrow: string;
  weatherSpraying: string;
  weatherIrrigation: string;
  weatherFieldWork: string;
  weatherConditionClearSky: string;
  weatherConditionMainlyClear: string;
  weatherConditionPartlyCloudy: string;
  weatherConditionOvercast: string;
  weatherConditionFog: string;
  weatherConditionLightDrizzle: string;
  weatherConditionModerateDrizzle: string;
  weatherConditionDenseDrizzle: string;
  weatherConditionSlightRain: string;
  weatherConditionModerateRain: string;
  weatherConditionHeavyRain: string;
  weatherConditionSlightSnow: string;
  weatherConditionModerateSnow: string;
  weatherConditionHeavySnow: string;
  weatherConditionThunderstorm: string;
  weatherConditionRainShowers: string;
  weatherConditionViolentShowers: string;

  // History Details
  historyDetailsTitle: string;
  finalRecommendationTitle: string;
  finalRecommendationSub: string;
  scanMetricsTitle: string;
  cropTypeLabel: string;
  fieldAreaLabel: string;
  envContextTitle: string;
  envScanTimeSub: string;
  envTemperature: string;
  envHumidity: string;
  envWeather: string;
  weatherPartlyCloudy: string;
  weatherSunny: string;
  weatherOvercast: string;
  downloadReportPdf: string;
  mapView: string;

  // Profile & Settings
  changeLanguageSetting: string;
  currentLanguageLabel: string;
  notificationsSetting: string;
  notificationsSub: string;
  helpCenterSetting: string;
  helpCenterSub: string;
  helpCenterDialogTitle: string;
  helpCenterDialogHeading: string;
  helpCenterDialogContactText: string;
  helpCenterSupportEmail: string;
  helpCenterSendEmailBtn: string;
  helpCenterCopyEmailBtn: string;
  helpCenterEmailCopied: string;
  privacyPolicySetting: string;
  privacyPolicySub: string;
  logoutBtn: string;
  editProfile: string;

  // Crops
  cropApple: string;
  cropCherry: string;
  cropCorn: string;
  cropGrape: string;
  cropPeach: string;
  cropPepper: string;
  cropPotato: string;
  cropSquash: string;
  cropStrawberry: string;
  cropTomato: string;
  cropWheat: string;
  cropCotton: string;
  cropRice: string;

  // Status & Diseases
  statusHealthy: string;
  statusNeedsAttention: string;
  diseaseEarlyBlight: string;
  diseaseLateBlight: string;
  diseaseLeafCurl: string;
  diseaseNone: string;
  pestNone: string;
  pestAphids: string;
  pestWhitefly: string;

  // Action steps
  actionPruneLeavesTitle: string;
  actionPruneLeavesDesc: string;
  actionFungicideTitle: string;
  actionFungicideDesc: string;
  actionAirflowTitle: string;
  actionAirflowDesc: string;
  actionMaintainProtocolTitle: string;
  actionMaintainProtocolDesc: string;
  historyNoRecordText: string;
  scanNoRecordText: string;
  cropSpecimen: string;
  noImageAvailable: string;
  agriculturalWarning: string;
  riskAssessmentTitle: string;
  riskLabel: string;
  agronomistFollowupTitle: string;
  specialistReferralAdvised: string;
  criticalDiseaseSeverity: string;
  recommendedCheckIn: string;
  inSevenDays: string;
  standardMonitoringProtocol: string;
  steps: string;
  statusActive: string;
  loadingConversation: string;
  followUpSpecimen: string;
  followUpSpecimenPreview: string;
  defaultFarmerName: string;
  recentTimestamp: string;
  statusProcessing: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Extended Keys (en)
    alertsTitle: 'Active Alerts & Warnings',
    checkingAlerts: 'Checking active field warnings...',
    noActiveAlerts: 'No Active Crop Alerts',
    allFieldsNormal: 'All registered plots are currently in normal health condition.',
    alertMarkedResolved: 'Alert marked as resolved',
    alertReopened: 'Alert reopened',
    couldNotUpdateAlert: 'Could not update alert status.',
    couldNotLoadAlerts: 'Could not load crop alerts.',
    activeStatus: 'Active',
    resolvedStatus: 'Resolved',
    markResolved: 'Mark as Resolved',
    reopen: 'Reopen',
    followUpsTitle: 'Scheduled Follow-ups',
    loadingFollowUps: 'Loading follow-up schedules...',
    noPendingFollowUps: 'No Pending Follow-ups',
    noFollowUpsDesc: 'No follow-up treatments or re-inspections are scheduled at this time.',
    couldNotLoadFollowUps: 'Could not load follow-ups.',
    failedToUpdateFollowUp: 'Failed to update follow-up',
    followUpScheduled: 'Follow-up Scheduled',
    markCompleted: 'Mark Completed',
    referralsTitle: 'Specialist Review Referrals',
    checkingReferrals: 'Checking expert referral tickets...',
    noActiveReferrals: 'No Active Expert Referrals',
    noReferralsDesc: 'No cases currently referred to agricultural extension specialists.',
    couldNotLoadReferrals: 'Could not load expert referrals.',
    expertReviewPending: 'Expert Review Pending',
    registeredFields: 'Registered Fields',
    plotNameLabel: 'Plot Name',
    plotNamePlaceholder: 'e.g. North Acre Tomato Block',
    primaryCropLabel: 'Primary Crop',
    areaAcresLabel: 'Plot Size (Acres)',
    enterFieldName: 'Please enter a field name',
    fieldRegisteredSuccess: 'Field registered successfully',
    fieldRemovedSuccess: 'Field removed successfully',
    failedCreateField: 'Failed to create field',
    failedRemoveField: 'Failed to remove field',
    couldNotLoadFields: 'Could not load your registered fields.',
    noFieldsYet: 'No Registered Fields Yet',
    noFieldsDesc: 'Register your crop plots to track disease risks, weather forecasts, and field history.',
    addNewField: 'Add New Field',
    loadingHistory: 'Loading history...',
    fetchingPastScans: 'Fetching your past crop analyses.',
    failedToLoadHistory: 'Failed to load history',
    noScansMatchSearch: 'No scans match your search',
    tryAdjustingSearch: 'Try adjusting your search keywords or active filters.',
    issueDetected: 'Issue Detected',
    healthyCondition: 'Healthy Condition',
    voiceInputUnavailable: 'Voice input unavailable or microphone permission denied.',
    speechNotSupported: 'Speech recognition is not supported in this browser.',
    listeningPrompt: 'Listening... Speak your agricultural question clearly.',
    ttsNotSupported: 'Text-to-speech is not supported in this browser.',
    consultingGemini: 'Consulting Gemini agricultural advisory model...',
    chatSuggestion1: 'How to prevent Early Blight in tomato?',
    chatSuggestion2: 'Best organic spray for aphids and thrips?',
    chatSuggestion3: 'Fertilizer schedule during crop flowering stage?',
    chatSuggestion4: 'How to manage field soil drainage before rain?',
    listen: 'Listen',
    speakQuestion: 'Speak Question',
    aiAgronomistTitle: 'AI Agronomist Chat',
    weatherConditionClear: 'Clear Sky',
    weatherConditionCloudy: 'Cloudy',
    weatherConditionDrizzle: 'Light Drizzle',
    weatherConditionRain: 'Rain',
    weatherAdvisoryPrecipitation: 'High precipitation probability expected. Consider postponing pesticide or fungicide spraying before rainfall.',
    weatherAdvisoryHumidity: 'High humidity with rain may increase risk of fungal disease development. Monitor crops closely.',
    weatherAdvisoryNormal: 'Favorable weather conditions for crop growth and standard field operations.',
    weatherAdvisoryHot: 'Elevated temperatures detected. Ensure adequate irrigation to prevent heat stress.',
    weatherAdvisoryWind: 'Gusty wind conditions. Avoid high-pressure foliar chemical spraying to prevent drift.',
    couldNotFetchWeather: 'Could not fetch weather forecast.',
    unknownLocation: 'Current Location',
    currentConditions: 'Current Conditions',
    sevenDayForecast: '7-Day Forecast',
    feelsLike: 'Feels like',
    humidityLabel: 'Humidity',
    windLabel: 'Wind',
    precipitationLabel: 'Rainfall',
    couldNotProcessImage: 'Could not process image. Please try again.',
    couldNotSendQuery: 'Could not send query. Please try again.',
    quickPromptChemical: 'Chemical fungicide options',
    quickPromptPrevention: 'Preventative measures for next season',
    quickPromptFertilizer: 'Fertilizer advice during disease',
    expertReferralDesc: 'AI detected severe symptoms requiring expert agricultural review.',
    followUpScheduledDesc: 'Scheduled follow-up scan to verify treatment progress.',
    cropHealthAlerts: 'Crop Health Alerts',
    treatmentFollowups: 'Treatment Follow-ups',
    expertReferrals: 'Expert Referrals',
    myFarmlandPlots: 'My Farmland & Plots',

    appName: 'AgnoVis AI',
    sihTagline: 'SIH26131 PLATFORM',
    tagline: 'Empowering your farm with actionable AI insights and precision agriculture tools.',
    back: 'Back',
    share: 'Share',
    close: 'Close',
    confirm: 'Confirm',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    viewAll: 'View All',
    viewDetails: 'View Details',
    takeAction: 'Take Action',
    detailsUnavailable: 'Details Unavailable',
    loadOlderScans: 'Load Older Scans',
    searchPlaceholder: 'Search crops, status, or date...',
    filter: 'Filter',
    all: 'All',
    today: 'Today',
    yesterday: 'Yesterday',
    minsAgo: 'mins ago',

    chooseLanguageTitle: 'Choose your language',
    chooseLanguageSubtitle: 'Select the language you prefer for the AgnoVis AI interface.',
    continueBtn: 'Continue',
    languageChangedSuccess: 'Language updated successfully!',
    langEnglish: 'English',
    langTelugu: 'Telugu',
    langHindi: 'Hindi',
    langMarathi: 'Marathi',

    welcomeHeader: 'AgnoVis AI',
    welcomeSubtitle: 'Empowering your farm with actionable AI insights and precision agriculture tools.',
    landingWelcomeTo: 'Welcome to',
    landingCompanionText: 'Your smart companion for crop health, pest detection and better farming.',
    landingAnalyzeCrop: 'Analyze Crop',
    landingHistory: 'History',
    landingTrustedByFarmers: 'Trusted by Farmers',
    landingFarmersCount: '2.5K+ Farmers',
    landingMoveCursorHint: 'Move your cursor over the field',
    landingFarmerSignIn: 'Farmer Sign In',
    mobileOrEmailLabel: 'Mobile Number or Email',
    mobileOrEmailPlaceholder: 'Enter mobile number or email',
    loginBtn: 'Continue',
    newToAgriVision: 'New to AgnoVis?',
    createAccount: 'Create Account',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'e.g. Ramesh Patel',
    emailLabel: 'Email Address',
    emailPlaceholder: 'farmer@AgnoVis.ai',
    phoneLabel: 'Mobile Number',
    phonePlaceholder: '10-digit mobile number',
    registerTab: 'New Farmer Registration',
    loginTab: 'Login to Account',
    registerBtn: 'Register & Continue',
    alreadyHaveAccount: 'Already registered?',
    loginLink: 'Login Here',
    registerLink: 'Register Now',
    userNotFound: 'No registered farmer found with these credentials. Please register first.',
    accountNotFound: 'Account not found. Please register first.',
    invalidLoginDetails: 'Invalid login details. Please try again.',
    invalidIdentifierFormat: 'Please enter a valid mobile number or email.',
    enterValidPassword: 'Please enter your password (minimum 4 characters).',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter your password',
    preferredLanguageLabel: 'Preferred Language',
    registerNowLink: 'Register Now',
    enterValidName: 'Please enter your full name (minimum 2 characters).',
    enterValidEmail: 'Please enter a valid email address.',
    enterValidPhone: 'Please enter a valid 10-digit mobile number.',
    registrationSuccess: 'Farmer account registered successfully!',
    loginSuccess: 'Login successful! Welcome back.',
    accountDetails: 'Account Information',
    registeredOn: 'Registered on',
    noAnalysesYet: 'No analyses yet',
    noAnalysesYetSub: 'Upload or capture a crop image to start your first analysis.',
    startScanNow: 'Start First Scan',
    analyzeMyCropBtn: 'Analyze My Crop',
    memberVerified: 'Verified Farmer',
    sessionRestored: 'Welcome back! Session restored.',
    memberUserId: 'Farmer ID',

    navHome: 'Home',
    navHistory: 'History',
    navProfile: 'Profile',
    navFields: 'Fields',
    navChat: 'AI Chat',
    navAlerts: 'Alerts',
    weatherForecast: 'Weather Forecast',

    greetingPrefix: 'Good morning',
    greetingReadyText: 'Ready to check on your fields today?',
    analyzeMyCrop: 'Analyze My Crop',
    captureImage: 'Capture Image',
    captureImageSub: 'Use camera for live scan',
    uploadImage: 'Upload Image',
    uploadImageSub: 'Select from gallery',
    recentAnalyses: 'Recent Analyses',
    aiInsightsTips: 'AI Insights & Tips',
    wateringWindowTipTitle: 'Optimal Watering Window',
    wateringWindowTipDesc: 'Based on soil moisture sensors in Field B, the best time to irrigate is between 4 PM and 6 PM today.',
    pestAlertTipTitle: 'Pest Alert: Aphids',
    pestAlertTipDesc: 'Regional data indicates a high risk of aphids this week. Consider preventive scanning for Greenhouse 1.',

    // Tips for a Better Scan
    scanTipsTitle: 'Tips for a Better Scan',
    scanTipsSubtitle: 'Clear, well-lit images help AgnoVis AI provide better analysis.',
    scanTip1: 'Take a clear photo of the leaf',
    scanTip2: 'Make sure the affected area is clearly visible',
    scanTip3: 'Use good lighting',
    scanTip4: 'Avoid blurry or distant images',
    startAnalysisCta: 'Start Analysis â†’',

    // What AgnoVis AI Can Detect
    whatCanDetectTitle: 'What AgnoVis AI Can Detect',
    supportedCropsSubtitle: 'Supported Crops',
    diseaseDetectionTitle: 'Disease Detection',
    diseaseDetectionDesc: 'AI-powered identification of crop diseases and healthy conditions.',
    pestDetectionTitle: 'Pest Detection',
    pestDetectionDesc: 'Pest detection with crop-based pest filtering.',
    managementRecommendationsTitle: 'Management Recommendations',
    managementRecommendationsDesc: 'Receive practical next-step guidance based on the analysis.',

    captureCropImageTitle: 'Capture Crop Image',
    captureCropImageSubtitle: 'Take a clear photo of the crop or affected leaf for AI analysis.',
    openCamera: 'Open Camera',
    openCameraSub: 'Take a new photo now',
    uploadFromGallery: 'Upload from Gallery',
    uploadFromGallerySub: 'Select an existing photo',
    photoGuidelinesTitle: 'Photo Guidelines',
    guideline1: 'Ensure good, natural lighting. Avoid harsh shadows.',
    guideline2: 'Keep the subject in focus and centered.',
    guideline3: 'Capture the entire affected area clearly.',
    analyzeImageBtn: 'Analyze Image',
    selectImageHint: 'Select a crop and provide an image to enable analysis.',
    changeImage: 'Change Image',
    testWithSample: 'Try Sample Crops',
    noImageSelectedYet: 'No image selected yet',
    noImageSelectedSub: 'Upload a leaf photo or capture using your camera to proceed.',
    pleaseSelectCrop: 'Please select a crop first.',
    pleaseSelectCropFirst: 'Please select a crop first.',
    pleaseUploadOrCapture: 'Please upload or capture an image.',
    pleaseSelectCropAndImage: 'Please select a crop and provide an image.',
    selectCropLabel: 'Select Crop',
    selectedCropLabel: 'Selected Crop',
    noCropSelectedYet: 'No crop selected yet',
    readyForAnalysis: 'Ready for AI analysis',
    cameraSource: 'Camera Capture',
    uploadSource: 'Uploaded Photo',
    removeImage: 'Remove Image',
    takePhoto: 'Take Photo',
    retakePhoto: 'Retake Photo',
    switchCamera: 'Switch Camera',
    closeCamera: 'Close Camera',
    cameraPermissionDenied: 'Camera permission was denied. Please allow camera access in your browser or device settings.',
    cameraUnavailable: 'Camera is unavailable or not supported.',

     waterAdvisorTitle: "Smart Water Advisor",
waterAdvisorSubtitle: "Weather-based irrigation guidance for your crop",
irrigationDecision: "Irrigation Decision",
waterAdvisorWhy: "Why this recommendation?",
waterNeedLabel: "Water Need",
waterAdvisorNextCheck: "Next Check",
weatherSource: "Weather Source",
weatherDataUnavailable: "Weather data is currently unavailable for your location.",
weatherSourceUnavailable: "Weather source unavailable",
waterAdvisorDisclaimerTitle: "Important",
waterAdvisorDisclaimer: "Use this recommendation as guidance only. Irrigation needs depend on weather, soil condition, crop stage, and local conditions.",
waterAdvisorNote: "Do not rely on this recommendation alone. Check your soil and crop condition before irrigating.",
waterAdvisorUseLocation: "Use My Location",
waterAdvisorLocationEnabled: "Location enabled",
waterAdvisorCurrentCrop: "Current Crop",
waterAdvisorNoCrop: "No crop selected",

    analyzingImageTitle: 'Analyzing your image...',
    analyzingImageSubtitle: 'Our AI is taking a close look at the details.',
    stepUpload: 'Upload',
    stepUploadSub: 'Preparing image for processing.',
    stepIdentify: 'Identify',
    stepIdentifySub: 'Recognizing plant species and variety.',
    stepAnalyze: 'Analyze',
    stepAnalyzeSub: 'Scanning for signs of disease or stress.',
    stepResult: 'Result',
    stepResultSub: 'Generating personalized recommendations.',

    multipleCropTitle: 'We found more than one possible crop.',
    multipleCropSubtitle: 'Please select the correct crop from the options below to continue analysis.',
    multipleCropQuestion: 'Which crop are you analyzing?',
    analyzedImageLabel: 'Analyzed Image',
    selectCropType: 'Select crop type:',
    continueAnalysisBtn: 'Continue Analysis',

    criticalActionRequired: 'Critical Action Required',
    optimalHealth: 'Optimal Health',
    needsAttention: 'Needs Attention',
    analysisSummaryTitle: 'Analysis Summary',
    scannedJustNow: 'Scanned 2 mins ago',
    diseaseDetectedTitle: 'Disease Detected',
    confidenceScore: 'Confidence Score',
    pestActivityTitle: 'Pest Activity',
    noneDetected: 'None Detected',
    currentlySafe: 'Currently Safe',
    recommendedActionTitle: 'Recommended Action',
    noAnalysisResultAvailable: 'No analysis result available yet.',
    valueNone: 'None',
    statusPending: 'Pending',
    logTreatmentPlan: 'Log Treatment Plan',
    treatmentPlanSaved: 'Treatment Plan Logged Successfully!',
    aiDisclaimer: 'Disclaimer: This AI-generated analysis is provided for informational purposes only and does not constitute professional agronomist advice. While AgnoVis AI strives for high accuracy, false positives or misidentifications can occur. Always verify with a certified local expert before applying chemical treatments.',

    askAgronomistTitle: 'Ask Agronomist AI',
    askAgronomistSub: 'Continue conversation regarding this diagnosis & crop care',
    sendBtn: 'Send',
    thinkingText: 'Agronomist is typing...',
    quickPromptWater: 'Watering advice',
    quickPromptSpread: 'Prevent spread',
    checkThisNewImage: 'Check this new image.',
    chatSavedNote: 'Conversation is automatically saved with this analysis record.',
    reportDownloaded: 'Diagnostic report downloaded successfully.',

    historyDetailsTitle: 'Analysis History Details',
    finalRecommendationTitle: 'Final Recommendation',
    finalRecommendationSub: 'AI-generated localized insight based on historical data.',
    scanMetricsTitle: 'Scan Metrics',
    cropTypeLabel: 'Crop Type',
    fieldAreaLabel: 'Area',
    envContextTitle: 'Environmental Context',
    envScanTimeSub: '(At time of scan)',
    envTemperature: 'Temperature',
    envHumidity: 'Humidity',
    envWeather: 'Weather',
    weatherPartlyCloudy: 'Partly Cloudy',
    weatherSunny: 'Sunny',
    weatherOvercast: 'Overcast',
    downloadReportPdf: 'Download Report (PDF)',
    mapView: 'Map View',

    changeLanguageSetting: 'Change Language',
    currentLanguageLabel: 'Current: English (US)',
    notificationsSetting: 'Notifications',
    notificationsSub: 'Manage alerts & updates',
    helpCenterSetting: 'Help Center',
    helpCenterSub: 'FAQs and support',
    helpCenterDialogTitle: 'Help Center',
    helpCenterDialogHeading: 'Need help with AgnoVis AI?',
    helpCenterDialogContactText: 'For support, questions, technical issues, or feedback, contact us at:',
    helpCenterSupportEmail: 'agnovissupport@gmail.com',
    helpCenterSendEmailBtn: 'Send Email',
    helpCenterCopyEmailBtn: 'Copy Email Address',
    helpCenterEmailCopied: 'Email address copied to clipboard',
    privacyPolicySetting: 'Privacy Policy',
    privacyPolicySub: 'Terms and data usage',
    logoutBtn: 'Logout',
    editProfile: 'Edit Profile',

    cropApple: 'Apple',
    cropCherry: 'Cherry',
    cropCorn: 'Corn',
    cropGrape: 'Grape',
    cropPeach: 'Peach',
    cropPepper: 'Pepper',
    cropPotato: 'Potato',
    cropSquash: 'Squash',
    cropStrawberry: 'Strawberry',
    cropTomato: 'Tomato',
    cropWheat: 'Wheat',
    cropCotton: 'Cotton',
    cropRice: 'Rice',

    statusHealthy: 'Healthy',
    statusNeedsAttention: 'Needs Attention',
    diseaseEarlyBlight: 'Early Blight',
    diseaseLateBlight: 'Late Blight',
    diseaseLeafCurl: 'Leaf Curl Virus',
    diseaseNone: 'None (Optimal Plant Health)',
    pestNone: 'None Detected',
    pestAphids: 'Aphids',
    pestWhitefly: 'Whitefly',

    actionPruneLeavesTitle: 'Remove Affected Leaves',
    actionPruneLeavesDesc: 'Carefully prune all lower leaves showing concentric spots. Do not compost these leaves; burn or bag them to prevent spore dispersal.',
    actionFungicideTitle: 'Fungicide Application',
    actionFungicideDesc: 'Apply a copper-based fungicide or chlorothalonil, focusing on thorough coverage of the lower canopy. Repeat every 7-10 days depending on local rainfall.',
    actionAirflowTitle: 'Improve Airflow',
    actionAirflowDesc: 'Ensure adequate spacing between plants and avoid overhead watering to keep foliage dry.',
    actionMaintainProtocolTitle: 'Maintain Current Irrigation',
    actionMaintainProtocolDesc: 'Optimal plant health observed with no signs of nutrient deficiency or pest stress. Maintain regular observation schedule.',

    // Weather
    weatherTitle: 'Farm Weather Intelligence',
    weatherCurrentLocation: 'Current Location',
    weatherUseMyLocation: 'Use My Location',
    weatherChangeLocation: 'Change Location',
    weatherSearchLocation: 'Search Location',
    weatherSearchPlaceholder: 'Search village, town, city, district...',
    weatherSearching: 'Searching...',
    weatherSearchResults: 'Search Results',
    weatherNoResults: 'No locations found. Try a different search term.',
    weatherLastUpdated: 'Updated:',
    weatherCurrentConditions: 'Current Conditions',
    weatherFeelsLike: 'Feels Like',
    weatherHumidity: 'Humidity',
    weatherWind: 'Wind',
    weatherRainfall: 'Rainfall',
    weatherRainProbability: 'Rain Probability',
    weatherRisk: 'Weather Risk',
    weatherRiskLow: 'Low',
    weatherRiskModerate: 'Moderate',
    weatherRiskHigh: 'High',
    weatherFarmAdvisory: 'Farm Advisory',
    weather7DayForecast: '7-Day Forecast',
    weatherFieldWorkOutlook: 'Field Work Outlook',
    weatherFieldWorkFavorable: 'Favorable',
    weatherFieldWorkCaution: 'Caution',
    weatherFieldWorkAvoid: 'Avoid',
    weatherFieldWorkFavorableText: 'Weather appears suitable for routine field activities.',
    weatherFieldWorkCautionText: 'Weather may affect some field activities. Check rainfall and wind before spraying.',
    weatherFieldWorkAvoidText: 'Weather conditions are unfavorable for spraying or other sensitive field activities.',
    weatherCropContext: 'Weather + Crop Context',
    weatherLoading: 'Fetching weather data...',
    weatherUnavailable: 'Weather data temporarily unavailable',
    weatherUnavailableText: 'Live weather data cannot be fetched at the moment. Please try again later.',
    weatherLocationPermissionDenied: 'Location access was not allowed. Search for your farm location instead.',
    weatherLocationUnavailable: 'Location unavailable. Search for your farm location instead.',
    weatherRetry: 'Retry',
    weatherToday: 'Today',
    weatherTomorrow: 'Tomorrow',
    weatherSpraying: 'Spraying',
    weatherIrrigation: 'Irrigation',
    weatherFieldWork: 'Field Work',
    weatherConditionClearSky: 'Clear sky',
    weatherConditionMainlyClear: 'Mainly clear',
    weatherConditionLightDrizzle: 'Light drizzle',
    weatherConditionModerateDrizzle: 'Moderate drizzle',
    weatherConditionDenseDrizzle: 'Dense drizzle',
    weatherConditionSlightRain: 'Slight rain',
    weatherConditionModerateRain: 'Moderate rain',
    weatherConditionSlightSnow: 'Slight snow',
    weatherConditionModerateSnow: 'Moderate snow',
    weatherConditionHeavySnow: 'Heavy snow',
    weatherConditionRainShowers: 'Rain showers',
    weatherConditionViolentShowers: 'Violent showers',
    // Added weather keys

  
    historyNoRecordText: 'Could not retrieve the saved analysis record. Please return to History.',
    scanNoRecordText: 'No diagnostic data currently active. Please perform a crop scan.',
    cropSpecimen: 'Crop Specimen',
    noImageAvailable: 'No Image Available',
    agriculturalWarning: 'Agricultural Warning',
    riskAssessmentTitle: 'Risk Assessment',
    riskLabel: 'Risk',
    agronomistFollowupTitle: 'Agronomist Follow-up',
    specialistReferralAdvised: 'âš ï¸ Specialist Referral Advised: ',
    criticalDiseaseSeverity: 'Critical disease severity requires agronomist review.',
    recommendedCheckIn: 'ðŸ“… Recommended check-in: ',
    inSevenDays: 'In 7 days',
    standardMonitoringProtocol: 'Standard monitoring protocol. Rescan if new lesions develop.',
    statusActive: 'Active',
    loadingConversation: 'Loading conversation history...',
    followUpSpecimen: 'Follow-up leaf specimen',
    followUpSpecimenPreview: 'Follow-up leaf specimen preview',
  
    defaultFarmerName: 'Farmer',
    recentTimestamp: 'Recent',
    statusProcessing: 'Processing...',

    waterAdvisorCheckingForecast:
  "Checking the latest forecast before giving irrigation guidance.",

weatherSourceLive:
  "Live weather data",

weatherSourceFallback:
  "Fallback data",
  },

  te: {
    // Extended Keys (te)
    alertsTitle: 'à°¸à°•à±à°°à°¿à°¯ à°¹à±†à°šà±à°šà°°à°¿à°•à°²à± & à°¸à°®à°¾à°šà°¾à°°à°‚',
    checkingAlerts: 'à°ªà±Šà°²à°‚ à°¹à±†à°šà±à°šà°°à°¿à°•à°²à°¨à± à°¤à°¨à°¿à°–à±€ à°šà±‡à°¸à±à°¤à±‹à°‚à°¦à°¿...',
    noActiveAlerts: 'à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°ªà°‚à°Ÿ à°¹à±†à°šà±à°šà°°à°¿à°•à°²à± à°²à±‡à°µà±',
    allFieldsNormal: 'à°¨à°®à±‹à°¦à±ˆà°¨ à°…à°¨à±à°¨à°¿ à°ªà±Šà°²à°¾à°²à± à°ªà±à°°à°¸à±à°¤à±à°¤à°‚ à°†à°°à±‹à°—à±à°¯à°•à°°à°‚à°—à°¾ à°‰à°¨à±à°¨à°¾à°¯à°¿.',
    alertMarkedResolved: 'à°¹à±†à°šà±à°šà°°à°¿à°• à°ªà°°à°¿à°·à±à°•à°°à°¿à°‚à°šà°¬à°¡à°¿à°¨à°Ÿà±à°²à± à°—à±à°°à±à°¤à°¿à°‚à°šà°¬à°¡à°¿à°‚à°¦à°¿',
    alertReopened: 'à°¹à±†à°šà±à°šà°°à°¿à°• à°ªà±à°¨à°ƒà°ªà±à°°à°¾à°°à°‚à°­à°¿à°‚à°šà°¬à°¡à°¿à°‚à°¦à°¿',
    couldNotUpdateAlert: 'à°¹à±†à°šà±à°šà°°à°¿à°• à°¸à±à°¥à°¿à°¤à°¿à°¨à°¿ à°¨à°µà±€à°•à°°à°¿à°‚à°šà°¡à°‚ à°¸à°¾à°§à±à°¯à°‚ à°•à°¾à°²à±‡à°¦à±.',
    couldNotLoadAlerts: 'à°ªà°‚à°Ÿ à°¹à±†à°šà±à°šà°°à°¿à°•à°²à°¨à± à°²à±‹à°¡à± à°šà±‡à°¯à°¡à°‚ à°¸à°¾à°§à±à°¯à°‚ à°•à°¾à°²à±‡à°¦à±.',
    activeStatus: 'à°¸à°•à±à°°à°¿à°¯à°‚',
    resolvedStatus: 'à°ªà°°à°¿à°·à±à°•à°°à°¿à°‚à°šà°¬à°¡à°¿à°‚à°¦à°¿',
    markResolved: 'à°ªà°°à°¿à°·à±à°•à°°à°¿à°‚à°šà°¿à°¨à°Ÿà±à°²à± à°—à±à°°à±à°¤à°¿à°‚à°šà±',
    reopen: 'à°¤à°¿à°°à°¿à°—à°¿ à°¤à±†à°°à±à°µà±',
    followUpsTitle: 'à°·à±†à°¡à±à°¯à±‚à°²à± à°šà±‡à°¸à°¿à°¨ à°¤à°¦à±à°ªà°°à°¿ à°¤à°¨à°¿à°–à±€à°²à±',
    loadingFollowUps: 'à°¤à°¦à±à°ªà°°à°¿ à°¤à°¨à°¿à°–à±€à°² à°µà°¿à°µà°°à°¾à°²à± à°²à±‹à°¡à± à°…à°µà±à°¤à±à°¨à±à°¨à°¾à°¯à°¿...',
    noPendingFollowUps: 'à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°ªà±†à°‚à°¡à°¿à°‚à°—à± à°¤à°¨à°¿à°–à±€à°²à± à°²à±‡à°µà±',
    noFollowUpsDesc: 'à°ªà±à°°à°¸à±à°¤à±à°¤à°‚ à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°¤à°¦à±à°ªà°°à°¿ à°šà°¿à°•à°¿à°¤à±à°¸à°²à± à°²à±‡à°¦à°¾ à°ªà±à°¨à°ƒà°ªà°°à°¿à°¶à±€à°²à°¨à°²à± à°·à±†à°¡à±à°¯à±‚à°²à± à°šà±‡à°¯à°¬à°¡à°²à±‡à°¦à±.',
    couldNotLoadFollowUps: 'à°¤à°¦à±à°ªà°°à°¿ à°¤à°¨à°¿à°–à±€à°² à°œà°¾à°¬à°¿à°¤à°¾à°¨à± à°²à±‹à°¡à± à°šà±‡à°¯à°¡à°‚ à°¸à°¾à°§à±à°¯à°‚ à°•à°¾à°²à±‡à°¦à±.',
    failedToUpdateFollowUp: 'à°¤à°¦à±à°ªà°°à°¿ à°¤à°¨à°¿à°–à±€ à°¸à±à°¥à°¿à°¤à°¿à°¨à°¿ à°¨à°µà±€à°•à°°à°¿à°‚à°šà°¡à°‚ à°µà°¿à°«à°²à°®à±ˆà°‚à°¦à°¿',
    followUpScheduled: 'à°¤à°¦à±à°ªà°°à°¿ à°¤à°¨à°¿à°–à±€ à°¨à°¿à°°à±à°£à°¯à°¿à°‚à°šà°¬à°¡à°¿à°‚à°¦à°¿',
    markCompleted: 'à°ªà±‚à°°à±à°¤à°¯à°¿à°¨à°Ÿà±à°²à± à°—à±à°°à±à°¤à°¿à°‚à°šà±',
    referralsTitle: 'à°¨à°¿à°ªà±à°£à±à°² à°ªà°°à°¿à°¶à±€à°²à°¨ à°°à±†à°«à°°à°²à±à°¸à±',
    checkingReferrals: 'à°¨à°¿à°ªà±à°£à±à°² à°°à±†à°«à°°à°²à±à°¸à± à°¤à°¨à°¿à°–à±€ à°šà±‡à°¸à±à°¤à±‹à°‚à°¦à°¿...',
    noActiveReferrals: 'à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°¯à°¾à°•à±à°Ÿà°¿à°µà± à°¨à°¿à°ªà±à°£à±à°² à°°à±†à°«à°°à°²à±à°¸à± à°²à±‡à°µà±',
    noReferralsDesc: 'à°ªà±à°°à°¸à±à°¤à±à°¤à°‚ à°µà±à°¯à°µà°¸à°¾à°¯ à°¨à°¿à°ªà±à°£à±à°² à°ªà°°à°¿à°¶à±€à°²à°¨à°•à± à°ªà°‚à°ªà°¬à°¡à°¿à°¨ à°¸à°®à°¸à±à°¯à°²à± à°²à±‡à°µà±.',
    couldNotLoadReferrals: 'à°¨à°¿à°ªà±à°£à±à°² à°°à±†à°«à°°à°²à±à°¸à± à°²à±‹à°¡à± à°šà±‡à°¯à°¡à°‚ à°¸à°¾à°§à±à°¯à°‚ à°•à°¾à°²à±‡à°¦à±.',
    expertReviewPending: 'à°¨à°¿à°ªà±à°£à±à°² à°ªà°°à°¿à°¶à±€à°²à°¨ à°ªà±†à°‚à°¡à°¿à°‚à°—à±\u200cà°²à±‹ à°‰à°‚à°¦à°¿',
    registeredFields: 'à°¨à°®à±‹à°¦à±ˆà°¨ à°ªà±Šà°²à°¾à°²à±',
    plotNameLabel: 'à°ªà±Šà°²à°‚ / à°ªà±à°²à°¾à°Ÿà± à°ªà±‡à°°à±',
    plotNamePlaceholder: 'à°‰à°¦à°¾. à°‰à°¤à±à°¤à°° à°ªà±Šà°²à°‚ à°Ÿà°®à°¾à°Ÿà°¾ à°¤à±‹à°Ÿ',
    primaryCropLabel: 'à°ªà±à°°à°§à°¾à°¨ à°ªà°‚à°Ÿ',
    areaAcresLabel: 'à°ªà±Šà°²à°‚ à°ªà°°à°¿à°®à°¾à°£à°‚ (à°Žà°•à°°à°¾à°²à±)',
    enterFieldName: 'à°¦à°¯à°šà±‡à°¸à°¿ à°ªà±Šà°²à°‚ à°ªà±‡à°°à±à°¨à± à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°‚à°¡à°¿',
    fieldRegisteredSuccess: 'à°ªà±Šà°²à°‚ à°µà°¿à°œà°¯à°µà°‚à°¤à°‚à°—à°¾ à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°¬à°¡à°¿à°‚à°¦à°¿',
    fieldRemovedSuccess: 'à°ªà±Šà°²à°‚ à°µà°¿à°œà°¯à°µà°‚à°¤à°‚à°—à°¾ à°¤à±Šà°²à°—à°¿à°‚à°šà°¬à°¡à°¿à°‚à°¦à°¿',
    failedCreateField: 'à°ªà±Šà°²à°¾à°¨à±à°¨à°¿ à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°¡à°‚ à°µà°¿à°«à°²à°®à±ˆà°‚à°¦à°¿',
    failedRemoveField: 'à°ªà±Šà°²à°¾à°¨à±à°¨à°¿ à°¤à±Šà°²à°—à°¿à°‚à°šà°¡à°‚ à°µà°¿à°«à°²à°®à±ˆà°‚à°¦à°¿',
    couldNotLoadFields: 'à°¨à°®à±‹à°¦à±ˆà°¨ à°ªà±Šà°²à°¾à°²à°¨à± à°²à±‹à°¡à± à°šà±‡à°¯à°¡à°‚ à°¸à°¾à°§à±à°¯à°‚ à°•à°¾à°²à±‡à°¦à±.',
    noFieldsYet: 'à°‡à°‚à°•à°¾ à°ªà±Šà°²à°¾à°²à± à°¨à°®à±‹à°¦à± à°•à°¾à°²à±‡à°¦à±',
    noFieldsDesc: 'à°¤à±†à°—à±à°²à± à°ªà±à°°à°®à°¾à°¦à°¾à°²à±, à°µà°¾à°¤à°¾à°µà°°à°£ à°¸à°®à°¾à°šà°¾à°°à°‚ à°®à°°à°¿à°¯à± à°šà°°à°¿à°¤à±à°°à°¨à± à°Ÿà±à°°à°¾à°•à± à°šà±‡à°¯à°¡à°¾à°¨à°¿à°•à°¿ à°®à±€ à°ªà±Šà°²à°¾à°²à°¨à± à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°‚à°¡à°¿.',
    addNewField: 'à°•à±Šà°¤à±à°¤ à°ªà±Šà°²à°¾à°¨à±à°¨à°¿ à°œà±‹à°¡à°¿à°‚à°šà°‚à°¡à°¿',
    loadingHistory: 'à°šà°°à°¿à°¤à±à°° à°²à±‹à°¡à± à°…à°µà±à°¤à±‹à°‚à°¦à°¿...',
    fetchingPastScans: 'à°®à±€ à°—à°¤ à°ªà°‚à°Ÿ à°µà°¿à°¶à±à°²à±‡à°·à°£à°²à°¨à± à°¤à±†à°¸à±à°¤à±‹à°‚à°¦à°¿.',
    failedToLoadHistory: 'à°šà°°à°¿à°¤à±à°°à°¨à± à°²à±‹à°¡à± à°šà±‡à°¯à°¡à°‚ à°µà°¿à°«à°²à°®à±ˆà°‚à°¦à°¿',
    noScansMatchSearch: 'à°®à±€ à°¶à±‹à°§à°¨à°•à± à°¤à°—à°¿à°¨ à°µà°¿à°¶à±à°²à±‡à°·à°£à°²à± à°à°µà±€ à°•à°¨à±à°—à±Šà°¨à°¬à°¡à°²à±‡à°¦à±',
    tryAdjustingSearch: 'à°¦à°¯à°šà±‡à°¸à°¿ à°µà±‡à°°à±‡ à°ªà°¦à°¾à°²à°¤à±‹ à°²à±‡à°¦à°¾ à°«à°¿à°²à±à°Ÿà°°à±\u200cà°²à°¤à±‹ à°¶à±‹à°§à°¿à°‚à°šà°‚à°¡à°¿.',
    issueDetected: 'à°¸à°®à°¸à±à°¯ à°—à±à°°à±à°¤à°¿à°‚à°šà°¬à°¡à°¿à°‚à°¦à°¿',
    healthyCondition: 'à°†à°°à±‹à°—à±à°¯à°•à°°à°®à±ˆà°¨ à°¸à±à°¥à°¿à°¤à°¿',
    voiceInputUnavailable: 'à°µà°¾à°¯à°¿à°¸à± à°‡à°¨à±\u200cà°ªà±à°Ÿà± à°…à°‚à°¦à±à°¬à°¾à°Ÿà±à°²à±‹ à°²à±‡à°¦à± à°²à±‡à°¦à°¾ à°®à±ˆà°•à±à°°à±‹à°«à±‹à°¨à± à°…à°¨à±à°®à°¤à°¿ à°¨à°¿à°°à°¾à°•à°°à°¿à°‚à°šà°¬à°¡à°¿à°‚à°¦à°¿.',
    speechNotSupported: 'à°ˆ à°¬à±à°°à±Œà°œà°°à±\u200cà°²à±‹ à°µà°¾à°¯à°¿à°¸à± à°°à°¿à°•à°—à±à°¨à°¿à°·à°¨à± à°¸à°ªà±‹à°°à±à°Ÿà± à°²à±‡à°¦à±.',
    listeningPrompt: 'à°µà°¿à°‚à°Ÿà±‹à°‚à°¦à°¿... à°®à±€ à°µà±à°¯à°µà°¸à°¾à°¯ à°ªà±à°°à°¶à±à°¨à°¨à± à°¸à±à°ªà°·à±à°Ÿà°‚à°—à°¾ à°®à°¾à°Ÿà±à°²à°¾à°¡à°‚à°¡à°¿.',
    ttsNotSupported: 'à°ˆ à°¬à±à°°à±Œà°œà°°à±\u200cà°²à±‹ à°µà°¾à°¯à°¿à°¸à± à°°à±€à°¡à°µà±à°Ÿà± à°¸à°ªà±‹à°°à±à°Ÿà± à°²à±‡à°¦à±.',
    consultingGemini: 'à°œà±†à°®à°¿à°¨à°¿ à°µà±à°¯à°µà°¸à°¾à°¯ à°¸à°²à°¹à°¾ à°®à±‹à°¡à°²à±\u200cà°¨à± à°¸à°‚à°ªà±à°°à°¦à°¿à°¸à±à°¤à±‹à°‚à°¦à°¿...',
    chatSuggestion1: 'à°Ÿà°®à°¾à°Ÿà°¾à°²à±‹ à°®à±à°‚à°¦à°¸à±à°¤à± à°†à°•à±à°®à°¾à°¡à± à°¤à±†à°—à±à°²à±à°¨à± à°Žà°²à°¾ à°¨à°¿à°µà°¾à°°à°¿à°‚à°šà°¾à°²à°¿?',
    chatSuggestion2: 'à°ªà±‡à°¨à± à°¬à°‚à°•, à°¤à°¾à°®à°° à°ªà±à°°à±à°—à±à°²à°•à± à°‰à°¤à±à°¤à°® à°¸à±‡à°‚à°¦à±à°°à±€à°¯ à°ªà°¿à°šà°¿à°•à°¾à°°à±€ à°à°¦à°¿?',
    chatSuggestion3: 'à°ªà±‚à°¤ à°¦à°¶à°²à±‹ à°ªà°¾à°Ÿà°¿à°‚à°šà°µà°²à°¸à°¿à°¨ à°Žà°°à±à°µà±à°² à°·à±†à°¡à±à°¯à±‚à°²à± à°à°®à°¿à°Ÿà°¿?',
    chatSuggestion4: 'à°­à°¾à°°à±€ à°µà°°à±à°·à°¾à°²à°•à± à°®à±à°‚à°¦à± à°ªà±Šà°²à°‚à°²à±‹ à°¨à±€à°Ÿà°¿ à°ªà°¾à°°à±à°¦à°² à°Žà°²à°¾ à°¨à°¿à°°à±à°µà°¹à°¿à°‚à°šà°¾à°²à°¿?',
    chatInputPlaceholder: 'à°Žà°°à±à°µà±à°²à±, à°ªà°‚à°Ÿ à°¤à±†à°—à±à°³à±à°²à±, à°¸à±‡à°‚à°¦à±à°°à±€à°¯ à°ªà°¿à°šà°¿à°•à°¾à°°à±€ à°—à±à°°à°¿à°‚à°šà°¿ à°…à°¡à°—à°‚à°¡à°¿...',
    listen: 'à°µà°¿à°¨à°‚à°¡à°¿',
    speakQuestion: 'à°ªà±à°°à°¶à±à°¨ à°®à°¾à°Ÿà±à°²à°¾à°¡à°‚à°¡à°¿',
    aiAgronomistTitle: 'AI à°µà±à°¯à°µà°¸à°¾à°¯ à°¨à°¿à°ªà±à°£à±à°² à°šà°¾à°Ÿà±',
    weatherConditionClear: 'à°¨à°¿à°°à±à°®à°²à°®à±ˆà°¨ à°†à°•à°¾à°¶à°‚',
    weatherConditionPartlyCloudy: 'à°ªà°¾à°•à±à°·à°¿à°•à°‚à°—à°¾ à°®à±‡à°˜à°¾à°µà±ƒà°¤à°‚',
    weatherConditionCloudy: 'à°®à±‡à°˜à°¾à°µà±ƒà°¤à°‚',
    weatherConditionOvercast: 'à°¦à°Ÿà±à°Ÿà°®à±ˆà°¨ à°®à±‡à°˜à°¾à°²à±',
    weatherConditionFog: 'à°ªà±Šà°—à°®à°‚à°šà±',
    weatherConditionDrizzle: 'à°¤à±‡à°²à°¿à°•à°ªà°¾à°Ÿà°¿ à°œà°²à±à°²à±à°²à±',
    weatherConditionRain: 'à°µà°°à±à°·à°‚',
    weatherConditionHeavyRain: 'à°­à°¾à°°à±€ à°µà°°à±à°·à°‚',
    weatherConditionThunderstorm: 'à°‰à°°à±à°®à±à°²à°¤à±‹ à°•à±‚à°¡à°¿à°¨ à°µà°°à±à°·à°‚',
    weatherAdvisoryPrecipitation: 'à°µà°°à±à°·à°‚ à°•à±à°°à°¿à°¸à±‡ à°…à°µà°•à°¾à°¶à°‚ à°Žà°•à±à°•à±à°µà°—à°¾ à°‰à°‚à°¦à°¿. à°µà°°à±à°·à°¾à°¨à°¿à°•à°¿ à°®à±à°‚à°¦à± à°•à±à°°à°¿à°®à°¿à°¸à°‚à°¹à°¾à°°à°•à°¾à°²à± à°²à±‡à°¦à°¾ à°¶à°¿à°²à±€à°‚à°¦à±à°°à°¨à°¾à°¶à°•à°¾à°² à°ªà°¿à°šà°¿à°•à°¾à°°à±€à°¨à°¿ à°µà°¾à°¯à°¿à°¦à°¾ à°µà±‡à°¯à°‚à°¡à°¿.',
    weatherAdvisoryHumidity: 'à°…à°§à°¿à°• à°¤à±‡à°® à°®à°°à°¿à°¯à± à°µà°°à±à°·à°‚ à°µà°²à±à°² à°¶à°¿à°²à±€à°‚à°§à±à°° à°¤à±†à°—à±à°³à±à°²à± à°ªà±†à°°à°¿à°—à±‡ à°ªà±à°°à°®à°¾à°¦à°‚ à°‰à°‚à°¦à°¿. à°ªà°‚à°Ÿà°¨à± à°¨à°¿à°¶à°¿à°¤à°‚à°—à°¾ à°ªà°°à°¿à°¶à±€à°²à°¿à°‚à°šà°‚à°¡à°¿.',
    weatherAdvisoryNormal: 'à°ªà°‚à°Ÿ à°ªà±†à°°à±à°—à±à°¦à°²à°•à± à°®à°°à°¿à°¯à± à°¸à°¾à°§à°¾à°°à°£ à°µà±à°¯à°µà°¸à°¾à°¯ à°ªà°¨à±à°²à°•à± à°…à°¨à±à°•à±‚à°²à°®à±ˆà°¨ à°µà°¾à°¤à°¾à°µà°°à°£à°‚.',
    weatherAdvisoryHot: 'à°…à°§à°¿à°• à°‰à°·à±à°£à±‹à°—à±à°°à°¤à°²à± à°¨à°®à±‹à°¦à°µà±à°¤à±à°¨à±à°¨à°¾à°¯à°¿. à°ªà°‚à°Ÿ à°µà°¡à°¬à°¡à°•à±à°‚à°¡à°¾ à°¤à°—à°¿à°¨à°‚à°¤ à°¨à±€à°Ÿà°¿à°ªà°¾à°°à±à°¦à°² à°…à°‚à°¦à°¿à°‚à°šà°‚à°¡à°¿.',
    weatherAdvisoryWind: 'à°ˆà°¦à±à°°à± à°—à°¾à°²à±à°²à± à°µà±€à°¸à±à°¤à±à°¨à±à°¨à°¾à°¯à°¿. à°®à°‚à°¦à± à°µà±ƒà°§à°¾ à°•à°¾à°•à±à°‚à°¡à°¾ à°‰à°‚à°¡à±‡à°‚à°¦à±à°•à± à°ªà°¿à°šà°¿à°•à°¾à°°à±€à°¨à°¿ à°¨à°¿à°µà°¾à°°à°¿à°‚à°šà°‚à°¡à°¿.',
    couldNotFetchWeather: 'à°µà°¾à°¤à°¾à°µà°°à°£ à°¸à°®à°¾à°šà°¾à°°à°¾à°¨à±à°¨à°¿ à°ªà±Šà°‚à°¦à°¡à°‚ à°¸à°¾à°§à±à°¯à°‚ à°•à°¾à°²à±‡à°¦à±.',
    unknownLocation: 'à°ªà±à°°à°¸à±à°¤à±à°¤ à°ªà±à°°à°¦à±‡à°¶à°‚',
    currentConditions: 'à°ªà±à°°à°¸à±à°¤à±à°¤ à°µà°¾à°¤à°¾à°µà°°à°£à°‚',
    sevenDayForecast: '7 à°°à±‹à°œà±à°² à°µà°¾à°¤à°¾à°µà°°à°£ à°¸à±‚à°šà°¨',
    feelsLike: 'à°…à°¨à°¿à°ªà°¿à°‚à°šà±‡ à°‰à°·à±à°£à±‹à°—à±à°°à°¤',
    humidityLabel: 'à°—à°¾à°²à°¿à°²à±‹ à°¤à±‡à°®',
    windLabel: 'à°—à°¾à°²à°¿ à°µà±‡à°—à°‚',
    precipitationLabel: 'à°µà°°à±à°·à°ªà°¾à°¤à°‚',
    couldNotProcessImage: 'à°šà°¿à°¤à±à°°à°¾à°¨à±à°¨à°¿ à°ªà±à°°à°¾à°¸à±†à°¸à± à°šà±‡à°¯à°¡à°‚ à°¸à°¾à°§à±à°¯à°‚ à°•à°¾à°²à±‡à°¦à±. à°¦à°¯à°šà±‡à°¸à°¿ à°®à°³à±à°²à±€ à°ªà±à°°à°¯à°¤à±à°¨à°¿à°‚à°šà°‚à°¡à°¿.',
    couldNotSendQuery: 'à°ªà±à°°à°¶à±à°¨à°¨à± à°ªà°‚à°ªà°¡à°‚ à°¸à°¾à°§à±à°¯à°‚ à°•à°¾à°²à±‡à°¦à±. à°¦à°¯à°šà±‡à°¸à°¿ à°®à°³à±à°²à±€ à°ªà±à°°à°¯à°¤à±à°¨à°¿à°‚à°šà°‚à°¡à°¿.',
    steps: 'à°¦à°¶à°²à±',
    noRecommendationAvailable: 'à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°¨à°¿à°°à±à°¦à°¿à°·à±à°Ÿ à°¸à°¿à°«à°¾à°°à±à°¸à± à°…à°‚à°¦à±à°¬à°¾à°Ÿà±à°²à±‹ à°²à±‡à°¦à±.',
    quickPromptOrganic: 'à°¸à±‡à°‚à°¦à±à°°à±€à°¯ à°¨à°¿à°¯à°‚à°¤à±à°°à°£ à°ªà°¦à±à°§à°¤à±à°²à±',
    quickPromptChemical: 'à°°à°¸à°¾à°¯à°¨ à°¶à°¿à°²à±€à°‚à°¦à±à°°à°¨à°¾à°¶à°• à°®à°‚à°¦à±à°²à±',
    quickPromptPrevention: 'à°¤à°¦à±à°ªà°°à°¿ à°ªà°‚à°Ÿ à°•à°¾à°²à°‚ à°•à±‹à°¸à°‚ à°¨à°¿à°µà°¾à°°à°£ à°šà°°à±à°¯à°²à±',
    quickPromptFertilizer: 'à°¤à±†à°—à±à°²à± à°¸à±‹à°•à°¿à°¨à°ªà±à°ªà±à°¡à± à°Žà°°à±à°µà±à°² à°¸à°²à°¹à°¾',
    expertReferralDesc: 'AI à°¤à±€à°µà±à°°à°®à±ˆà°¨ à°²à°•à±à°·à°£à°¾à°²à°¨à± à°—à±à°°à±à°¤à°¿à°‚à°šà°¿à°‚à°¦à°¿, à°µà±à°¯à°µà°¸à°¾à°¯ à°¨à°¿à°ªà±à°£à±à°² à°ªà°°à°¿à°¶à±€à°²à°¨ à°…à°µà°¸à°°à°‚.',
    followUpScheduledDesc: 'à°šà°¿à°•à°¿à°¤à±à°¸ à°ªà±à°°à±‹à°—à°¤à°¿à°¨à°¿ à°§à±ƒà°µà±€à°•à°°à°¿à°‚à°šà°¡à°¾à°¨à°¿à°•à°¿ à°·à±†à°¡à±à°¯à±‚à°²à± à°šà±‡à°¸à°¿à°¨ à°¤à°¦à±à°ªà°°à°¿ à°¸à±à°•à°¾à°¨à±.',
    cropHealthAlerts: 'à°ªà°‚à°Ÿ à°†à°°à±‹à°—à±à°¯ à°¹à±†à°šà±à°šà°°à°¿à°•à°²à±',
    treatmentFollowups: 'à°šà°¿à°•à°¿à°¤à±à°¸ à°¤à°¦à±à°ªà°°à°¿ à°¤à°¨à°¿à°–à±€à°²à±',
    expertReferrals: 'à°¨à°¿à°ªà±à°£à±à°² à°°à±†à°«à°°à°²à±à°¸à±',
    myFarmlandPlots: 'à°¨à°¾ à°ªà±Šà°²à°¾à°²à± & à°ªà±à°²à°¾à°Ÿà±à°²à±',

    appName: 'à°…à°‚à°—à±‹à°µà°¿à°¸à± AI',
    sihTagline: 'SIH26131 à°µà±‡à°¦à°¿à°•',
    tagline: 'à°–à°šà±à°šà°¿à°¤à°®à±ˆà°¨ à°µà±à°¯à°µà°¸à°¾à°¯ à°‰à°ªà°•à°°à°£à°¾à°²à± à°®à°°à°¿à°¯à± à°†à°šà°°à°£à°¾à°¤à±à°®à°• AI à°®à°¾à°°à±à°—à°¦à°°à±à°¶à°•à°¾à°²à°¤à±‹ à°®à±€ à°µà±à°¯à°µà°¸à°¾à°¯à°¾à°¨à±à°¨à°¿ à°¬à°²à±‹à°ªà±‡à°¤à°‚ à°šà±‡à°¯à°‚à°¡à°¿.',
    back: 'à°µà±†à°¨à±à°•à°•à±',
    share: 'à°­à°¾à°—à°¸à±à°µà°¾à°®à±à°¯à°‚',
    close: 'à°®à±‚à°¸à°¿à°µà±‡à°¯à°¿',
    confirm: 'à°¨à°¿à°°à±à°§à°¾à°°à°¿à°‚à°šà°‚à°¡à°¿',
    cancel: 'à°°à°¦à±à°¦à± à°šà±‡à°¯à°‚à°¡à°¿',
    save: 'à°¸à±‡à°µà± à°šà±‡à°¯à°‚à°¡à°¿',
    edit: 'à°¸à°µà°°à°¿à°‚à°šà°‚à°¡à°¿',
    delete: 'à°¤à±Šà°²à°—à°¿à°‚à°šà°‚à°¡à°¿',
    viewAll: 'à°…à°¨à±à°¨à±€ à°šà±‚à°¡à°‚à°¡à°¿',
    viewDetails: 'à°µà°¿à°µà°°à°¾à°²à± à°šà±‚à°¡à°‚à°¡à°¿',
    takeAction: 'à°šà°°à±à°¯ à°¤à±€à°¸à±à°•à±‹à°‚à°¡à°¿',
    detailsUnavailable: 'à°µà°¿à°µà°°à°¾à°²à± à°…à°‚à°¦à±à°¬à°¾à°Ÿà±à°²à±‹ à°²à±‡à°µà±',
    loadOlderScans: 'à°ªà°¾à°¤ à°¸à±à°•à°¾à°¨à±â€Œà°²à°¨à± à°²à±‹à°¡à± à°šà±‡à°¯à°‚à°¡à°¿',
    searchPlaceholder: 'à°ªà°‚à°Ÿà°²à±, à°¸à±à°¥à°¿à°¤à°¿ à°²à±‡à°¦à°¾ à°¤à±‡à°¦à±€à°¨à°¿ à°¶à±‹à°§à°¿à°‚à°šà°‚à°¡à°¿...',
    filter: 'à°«à°¿à°²à±à°Ÿà°°à±',
    all: 'à°…à°¨à±à°¨à±€',
    today: 'à°ˆ à°°à±‹à°œà±',
    yesterday: 'à°¨à°¿à°¨à±à°¨',
    minsAgo: 'à°¨à°¿à°®à°¿à°·à°¾à°² à°•à±à°°à°¿à°¤à°‚',

    chooseLanguageTitle: 'à°®à±€ à°­à°¾à°·à°¨à± à°Žà°‚à°šà±à°•à±‹à°‚à°¡à°¿',
    chooseLanguageSubtitle: 'à°…à°‚à°—à±‹à°µà°¿à°¸à± AI à°‡à°‚à°Ÿà°°à±â€Œà°«à±‡à°¸à± à°•à±‹à°¸à°‚ à°®à±€à°°à± à°‡à°·à±à°Ÿà°ªà°¡à±‡ à°­à°¾à°·à°¨à± à°Žà°‚à°šà±à°•à±‹à°‚à°¡à°¿.',
    continueBtn: 'à°•à±Šà°¨à°¸à°¾à°—à°¿à°‚à°šà°‚à°¡à°¿',
    languageChangedSuccess: 'à°­à°¾à°· à°µà°¿à°œà°¯à°µà°‚à°¤à°‚à°—à°¾ à°®à°¾à°°à±à°šà°¬à°¡à°¿à°‚à°¦à°¿!',
    langEnglish: 'à°‡à°‚à°—à±à°²à±€à°·à±',
    langTelugu: 'à°¤à±†à°²à±à°—à±',
    langHindi: 'à°¹à°¿à°‚à°¦à±€',
    langMarathi: 'à°®à°°à°¾à° à±€',

    welcomeHeader: 'à°…à°‚à°—à±‹à°µà°¿à°¸à± AI',
    welcomeSubtitle: 'à°–à°šà±à°šà°¿à°¤à°®à±ˆà°¨ à°µà±à°¯à°µà°¸à°¾à°¯ à°‰à°ªà°•à°°à°£à°¾à°²à± à°®à°°à°¿à°¯à± à°†à°šà°°à°£à°¾à°¤à±à°®à°• AI à°¸à±‚à°šà°¨à°²à°¤à±‹ à°®à±€ à°µà±à°¯à°µà°¸à°¾à°¯à°¾à°¨à±à°¨à°¿ à°®à±†à°°à±à°—à±à°ªà°°à°šà°‚à°¡à°¿.',
    landingWelcomeTo: 'à°¸à±à°µà°¾à°—à°¤à°‚',
    landingCompanionText: 'à°ªà°‚à°Ÿ à°†à°°à±‹à°—à±à°¯à°‚, à°¤à±†à°—à±à°³à±à°² à°—à±à°°à±à°¤à°¿à°‚à°ªà± à°®à°°à°¿à°¯à± à°®à±†à°°à±à°—à±ˆà°¨ à°µà±à°¯à°µà°¸à°¾à°¯à°‚ à°•à±‹à°¸à°‚ à°®à±€ à°¸à±à°®à°¾à°°à±à°Ÿà± à°¸à°¹à°šà°°à±à°¡à±.',
    landingAnalyzeCrop: 'à°ªà°‚à°Ÿà°¨à± à°µà°¿à°¶à±à°²à±‡à°·à°¿à°‚à°šà°‚à°¡à°¿',
    landingHistory: 'à°šà°°à°¿à°¤à±à°°',
    landingTrustedByFarmers: 'à°°à±ˆà°¤à±à°² à°µà°¿à°¶à±à°µà°¾à°¸à°‚',
    landingFarmersCount: '2.5K+ à°°à±ˆà°¤à±à°²à±',
    landingMoveCursorHint: 'à°ªà±Šà°²à°‚à°ªà±ˆ à°•à°°à±à°¸à°°à±â€Œà°¨à± à°¤à°°à°²à°¿à°‚à°šà°‚à°¡à°¿',
    landingFarmerSignIn: 'à°°à±ˆà°¤à± à°²à°¾à°—à°¿à°¨à±',
    mobileOrEmailLabel: 'à°®à±Šà°¬à±ˆà°²à± à°¨à°‚à°¬à°°à± à°²à±‡à°¦à°¾ à°ˆà°®à±†à°¯à°¿à°²à±',
    mobileOrEmailPlaceholder: 'à°®à±Šà°¬à±ˆà°²à± à°¨à°‚à°¬à°°à± à°²à±‡à°¦à°¾ à°ˆà°®à±†à°¯à°¿à°²à± à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°‚à°¡à°¿',
    loginBtn: 'à°•à±Šà°¨à°¸à°¾à°—à°¿à°‚à°šà°‚à°¡à°¿',
    newToAgriVision: 'à°…à°‚à°—à±‹à°µà°¿à°¸à±â€Œà°•à°¿ à°•à±Šà°¤à±à°¤à°µà°¾à°°à°¾?',
    createAccount: 'à°–à°¾à°¤à°¾à°¨à± à°¸à±ƒà°·à±à°Ÿà°¿à°‚à°šà°‚à°¡à°¿',
    fullNameLabel: 'à°ªà±‚à°°à±à°¤à°¿ à°ªà±‡à°°à±',
    fullNamePlaceholder: 'à°‰à°¦à°¾: à°°à°®à±‡à°·à± à°ªà°Ÿà±‡à°²à±',
    emailLabel: 'à°ˆà°®à±†à°¯à°¿à°²à± à°šà°¿à°°à±à°¨à°¾à°®à°¾',
    emailPlaceholder: 'farmer@AgnoVis.ai',
    phoneLabel: 'à°®à±Šà°¬à±ˆà°²à± à°¨à°‚à°¬à°°à±',
    phonePlaceholder: '10 à°…à°‚à°•à±†à°² à°®à±Šà°¬à±ˆà°²à± à°¨à°‚à°¬à°°à±',
    registerTab: 'à°•à±Šà°¤à±à°¤ à°°à±ˆà°¤à± à°¨à°®à±‹à°¦à±',
    loginTab: 'à°–à°¾à°¤à°¾à°²à±‹à°•à°¿ à°²à°¾à°—à°¿à°¨à± à°…à°µà±à°µà°‚à°¡à°¿',
    registerBtn: 'à°¨à°®à±‹à°¦à± à°šà±‡à°¸à±à°•à±à°¨à°¿ à°•à±Šà°¨à°¸à°¾à°—à°‚à°¡à°¿',
    alreadyHaveAccount: 'à°‡à°ªà±à°ªà°Ÿà°¿à°•à±‡ à°–à°¾à°¤à°¾ à°‰à°‚à°¦à°¾?',
    loginLink: 'à°‡à°•à±à°•à°¡ à°²à°¾à°—à°¿à°¨à± à°…à°µà±à°µà°‚à°¡à°¿',
    registerLink: 'à°‡à°ªà±à°ªà±à°¡à±‡ à°¨à°®à±‹à°¦à± à°šà±‡à°¸à±à°•à±‹à°‚à°¡à°¿',
    userNotFound: 'à°ˆ à°µà°¿à°µà°°à°¾à°²à°¤à±‹ à°°à±ˆà°¤à± à°–à°¾à°¤à°¾ à°•à°¨à±à°—à±Šà°¨à°¬à°¡à°²à±‡à°¦à±. à°¦à°¯à°šà±‡à°¸à°¿ à°®à±à°‚à°¦à±à°—à°¾ à°¨à°®à±‹à°¦à± à°šà±‡à°¸à±à°•à±‹à°‚à°¡à°¿.',
    accountNotFound: 'à°–à°¾à°¤à°¾ à°•à°¨à±à°—à±Šà°¨à°¬à°¡à°²à±‡à°¦à±. à°¦à°¯à°šà±‡à°¸à°¿ à°®à±à°‚à°¦à±à°—à°¾ à°¨à°®à±‹à°¦à± à°šà±‡à°¸à±à°•à±‹à°‚à°¡à°¿.',
    invalidLoginDetails: 'à°šà±†à°²à±à°²à°¨à°¿ à°²à°¾à°—à°¿à°¨à± à°µà°¿à°µà°°à°¾à°²à±. à°¦à°¯à°šà±‡à°¸à°¿ à°®à°³à±à°²à±€ à°ªà±à°°à°¯à°¤à±à°¨à°¿à°‚à°šà°‚à°¡à°¿.',
    invalidIdentifierFormat: 'à°¦à°¯à°šà±‡à°¸à°¿ à°¸à°°à±ˆà°¨ à°®à±Šà°¬à±ˆà°²à± à°¨à°‚à°¬à°°à± à°²à±‡à°¦à°¾ à°ˆà°®à±†à°¯à°¿à°²à± à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°‚à°¡à°¿.',
    enterValidPassword: 'à°¦à°¯à°šà±‡à°¸à°¿ à°®à±€ à°ªà°¾à°¸à±â€Œà°µà°°à±à°¡à± à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°‚à°¡à°¿ (à°•à°¨à±€à°¸à°‚ 4 à°…à°•à±à°·à°°à°¾à°²à±).',
    passwordLabel: 'à°ªà°¾à°¸à±â€Œà°µà°°à±à°¡à±',
    passwordPlaceholder: 'à°ªà°¾à°¸à±â€Œà°µà°°à±à°¡à± à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°‚à°¡à°¿',
    preferredLanguageLabel: 'à°ªà±à°°à°¾à°§à°¾à°¨à±à°¯ à°­à°¾à°·',
    registerNowLink: 'à°‡à°ªà±à°ªà±à°¡à±‡ à°¨à°®à±‹à°¦à± à°šà±‡à°¸à±à°•à±‹à°‚à°¡à°¿',
    enterValidName: 'à°¦à°¯à°šà±‡à°¸à°¿ à°®à±€ à°ªà±‚à°°à±à°¤à°¿ à°ªà±‡à°°à±à°¨à± à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°‚à°¡à°¿ (à°•à°¨à±€à°¸à°‚ 2 à°…à°•à±à°·à°°à°¾à°²à±).',
    enterValidEmail: 'à°¦à°¯à°šà±‡à°¸à°¿ à°¸à°°à±ˆà°¨ à°ˆà°®à±†à°¯à°¿à°²à± à°šà°¿à°°à±à°¨à°¾à°®à°¾à°¨à± à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°‚à°¡à°¿.',
    enterValidPhone: 'à°¦à°¯à°šà±‡à°¸à°¿ à°¸à°°à±ˆà°¨ 10 à°…à°‚à°•à±†à°² à°®à±Šà°¬à±ˆà°²à± à°¨à°‚à°¬à°°à±â€Œà°¨à± à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°‚à°¡à°¿.',
    registrationSuccess: 'à°°à±ˆà°¤à± à°–à°¾à°¤à°¾ à°µà°¿à°œà°¯à°µà°‚à°¤à°‚à°—à°¾ à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°¬à°¡à°¿à°‚à°¦à°¿!',
    loginSuccess: 'à°²à°¾à°—à°¿à°¨à± à°µà°¿à°œà°¯à°µà°‚à°¤à°®à±ˆà°‚à°¦à°¿! à°¸à±à°µà°¾à°—à°¤à°‚.',
    accountDetails: 'à°–à°¾à°¤à°¾ à°¸à°®à°¾à°šà°¾à°°à°‚',
    registeredOn: 'à°¨à°®à±‹à°¦à±ˆà°¨ à°¤à±‡à°¦à±€',
    noAnalysesYet: 'à°‡à°‚à°•à°¾ à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°µà°¿à°¶à±à°²à±‡à°·à°£à°²à± à°²à±‡à°µà±',
    noAnalysesYetSub: 'à°®à±€ à°®à±Šà°¦à°Ÿà°¿ à°µà°¿à°¶à±à°²à±‡à°·à°£à°¨à± à°ªà±à°°à°¾à°°à°‚à°­à°¿à°‚à°šà°¡à°¾à°¨à°¿à°•à°¿ à°ªà°‚à°Ÿ à°šà°¿à°¤à±à°°à°¾à°¨à±à°¨à°¿ à°…à°ªà±â€Œà°²à±‹à°¡à± à°šà±‡à°¯à°‚à°¡à°¿ à°²à±‡à°¦à°¾ à°«à±‹à°Ÿà±‹ à°¤à±€à°¯à°‚à°¡à°¿.',
    startScanNow: 'à°®à±Šà°¦à°Ÿà°¿ à°¸à±à°•à°¾à°¨à± à°ªà±à°°à°¾à°°à°‚à°­à°¿à°‚à°šà°‚à°¡à°¿',
    analyzeMyCropBtn: 'à°¨à°¾ à°ªà°‚à°Ÿà°¨à± à°µà°¿à°¶à±à°²à±‡à°·à°¿à°‚à°šà°‚à°¡à°¿',
    memberVerified: 'à°§à±ƒà°µà±€à°•à°°à°¿à°‚à°šà°¬à°¡à°¿à°¨ à°°à±ˆà°¤à±',
    sessionRestored: 'à°¸à±à°µà°¾à°—à°¤à°‚! à°®à±€ à°¸à±†à°·à°¨à± à°ªà±à°¨à°°à±à°¦à±à°§à°°à°¿à°‚à°šà°¬à°¡à°¿à°‚à°¦à°¿.',
    memberUserId: 'à°°à±ˆà°¤à± ID',

    navHome: 'à°¹à±‹à°®à±',
    navHistory: 'à°šà°°à°¿à°¤à±à°°',
    navProfile: 'à°ªà±à°°à±Šà°«à±ˆà°²à±',
    navFields: 'à°ªà±Šà°²à°¾à°²à±',
    navChat: 'AI à°šà°¾à°Ÿà±',
    navAlerts: 'à°¹à±†à°šà±à°šà°°à°¿à°•à°²à±',
    weatherForecast: 'à°µà°¾à°¤à°¾à°µà°°à°£ à°¸à±‚à°šà°¨',

    greetingPrefix: 'à°¶à±à°­à±‹à°¦à°¯à°‚',
    greetingReadyText: 'à°ˆ à°°à±‹à°œà± à°®à±€ à°ªà°‚à°Ÿ à°ªà±Šà°²à°¾à°²à°¨à± à°¤à°¨à°¿à°–à±€ à°šà±‡à°¯à°¡à°¾à°¨à°¿à°•à°¿ à°¸à°¿à°¦à±à°§à°‚à°—à°¾ à°‰à°¨à±à°¨à°¾à°°à°¾?',
    analyzeMyCrop: 'à°¨à°¾ à°ªà°‚à°Ÿà°¨à± à°µà°¿à°¶à±à°²à±‡à°·à°¿à°‚à°šà°‚à°¡à°¿',
    captureImage: 'à°šà°¿à°¤à±à°°à°¾à°¨à±à°¨à°¿ à°¤à±€à°¯à°‚à°¡à°¿',
    captureImageSub: 'à°²à±ˆà°µà± à°¸à±à°•à°¾à°¨à± à°•à±‹à°¸à°‚ à°•à±†à°®à±†à°°à°¾ à°‰à°ªà°¯à±‹à°—à°¿à°‚à°šà°‚à°¡à°¿',
    uploadImage: 'à°šà°¿à°¤à±à°°à°¾à°¨à±à°¨à°¿ à°…à°ªà±â€Œà°²à±‹à°¡à± à°šà±‡à°¯à°‚à°¡à°¿',
    uploadImageSub: 'à°—à±à°¯à°¾à°²à°°à±€ à°¨à±à°‚à°¡à°¿ à°Žà°‚à°šà±à°•à±‹à°‚à°¡à°¿',
    recentAnalyses: 'à°‡à°Ÿà±€à°µà°²à°¿ à°µà°¿à°¶à±à°²à±‡à°·à°£à°²à±',
    aiInsightsTips: 'AI à°…à°‚à°¤à°°à±à°¦à±ƒà°·à±à°Ÿà±à°²à± & à°šà°¿à°Ÿà±à°•à°¾à°²à±',
    wateringWindowTipTitle: 'à°¸à°°à±ˆà°¨ à°¨à±€à°Ÿà°¿à°ªà°¾à°°à±à°¦à°² à°¸à°®à°¯à°‚',
    wateringWindowTipDesc: 'à°«à±€à°²à±à°¡à± B à°²à±‹à°¨à°¿ à°¨à±‡à°² à°¤à±‡à°® à°¸à±†à°¨à±à°¸à°¾à°°à±à°² à°†à°§à°¾à°°à°‚à°—à°¾, à°ˆ à°°à±‹à°œà± à°¸à°¾à°¯à°‚à°¤à±à°°à°‚ 4 PM à°¨à±à°‚à°¡à°¿ 6 PM à°®à°§à±à°¯ à°¨à±€à°°à± à°ªà±†à°Ÿà±à°Ÿà°¡à°‚ à°‰à°¤à±à°¤à°®à°‚.',
    pestAlertTipTitle: 'à°ªà±à°°à±à°—à± à°¹à±†à°šà±à°šà°°à°¿à°•: à°ªà±‡à°¨à± à°ªà±à°°à±à°—à±à°²à± (à°Žà°«à°¿à°¡à±à°¸à±)',
    pestAlertTipDesc: 'à°ªà±à°°à°¾à°‚à°¤à±€à°¯ à°¡à±‡à°Ÿà°¾ à°ªà±à°°à°•à°¾à°°à°‚ à°ˆ à°µà°¾à°°à°‚ à°Žà°«à°¿à°¡à±à°¸à± à°¦à°¾à°¡à°¿ à°®à±à°ªà±à°ªà± à°Žà°•à±à°•à±à°µ. à°—à±à°°à±€à°¨à±â€Œà°¹à±Œà°¸à± 1 à°²à±‹ à°®à±à°‚à°¦à°¸à±à°¤à± à°ªà°°à°¿à°¶à±€à°²à°¨ à°šà±‡à°¯à°‚à°¡à°¿.',

    // Tips for a Better Scan
    scanTipsTitle: 'à°®à±†à°°à±à°—à±ˆà°¨ à°¸à±à°•à°¾à°¨à± à°•à±‹à°¸à°‚ à°šà°¿à°Ÿà±à°•à°¾à°²à±',
    scanTipsSubtitle: 'à°¸à±à°ªà°·à±à°Ÿà°®à±ˆà°¨, à°®à°‚à°šà°¿ à°µà±†à°²à±à°¤à±à°°à± à°‰à°¨à±à°¨ à°šà°¿à°¤à±à°°à°¾à°²à± AgnoVis AI à°®à°°à°¿à°‚à°¤ à°–à°šà±à°šà°¿à°¤à°®à±ˆà°¨ à°µà°¿à°¶à±à°²à±‡à°·à°£à°¨à± à°…à°‚à°¦à°¿à°‚à°šà°¡à°¾à°¨à°¿à°•à°¿ à°¸à°¹à°¾à°¯à°ªà°¡à°¤à°¾à°¯à°¿.',
    scanTip1: 'à°†à°•à± à°¯à±Šà°•à±à°• à°¸à±à°ªà°·à±à°Ÿà°®à±ˆà°¨ à°«à±‹à°Ÿà±‹ à°¤à±€à°¯à°‚à°¡à°¿',
    scanTip2: 'à°¤à±†à°—à±à°²à± à°¸à±‹à°•à°¿à°¨ à°­à°¾à°—à°‚ à°¸à±à°ªà°·à±à°Ÿà°‚à°—à°¾ à°•à°¨à°¿à°ªà°¿à°‚à°šà±‡à°²à°¾ à°šà±‚à°¸à±à°•à±‹à°‚à°¡à°¿',
    scanTip3: 'à°®à°‚à°šà°¿ à°µà±†à°²à±à°¤à±à°°à± à°‰à°ªà°¯à±‹à°—à°¿à°‚à°šà°‚à°¡à°¿',
    scanTip4: 'à°®à°¸à°•à°—à°¾ à°²à±‡à°¦à°¾ à°¦à±‚à°°à°‚à°—à°¾ à°‰à°¨à±à°¨ à°šà°¿à°¤à±à°°à°¾à°²à°¨à± à°¨à°¿à°µà°¾à°°à°¿à°‚à°šà°‚à°¡à°¿',
    startAnalysisCta: 'à°µà°¿à°¶à±à°²à±‡à°·à°£ à°ªà±à°°à°¾à°°à°‚à°­à°¿à°‚à°šà°‚à°¡à°¿ â†’',

    // What AgnoVis AI Can Detect
    whatCanDetectTitle: 'AgnoVis AI à°à°®à°¿ à°—à±à°°à±à°¤à°¿à°‚à°šà°—à°²à°¦à±',
    supportedCropsSubtitle: 'à°®à°¦à±à°¦à°¤à± à°‰à°¨à±à°¨ à°ªà°‚à°Ÿà°²à±',
    diseaseDetectionTitle: 'à°µà±à°¯à°¾à°§à°¿ à°—à±à°°à±à°¤à°¿à°‚à°ªà±',
    diseaseDetectionDesc: 'à°ªà°‚à°Ÿ à°µà±à°¯à°¾à°§à±à°²à± à°®à°°à°¿à°¯à± à°†à°°à±‹à°—à±à°¯à°•à°°à°®à±ˆà°¨ à°ªà°°à°¿à°¸à±à°¥à°¿à°¤à±à°² à°¯à±Šà°•à±à°• AI à°†à°§à°¾à°°à°¿à°¤ à°—à±à°°à±à°¤à°¿à°‚à°ªà±.',
    pestDetectionTitle: 'à°•à±€à°Ÿà°•à°¾à°² à°—à±à°°à±à°¤à°¿à°‚à°ªà±',
    pestDetectionDesc: 'à°ªà°‚à°Ÿ à°†à°§à°¾à°°à°¿à°¤ à°«à°¿à°²à±à°Ÿà°°à°¿à°‚à°—à±â€Œà°¤à±‹ à°¤à±†à°—à±à°³à±à°²à±/à°•à±€à°Ÿà°•à°¾à°² à°—à±à°°à±à°¤à°¿à°‚à°ªà±.',
    managementRecommendationsTitle: 'à°¯à°¾à°œà°®à°¾à°¨à±à°¯ à°¸à°¿à°«à°¾à°°à±à°¸à±à°²à±',
    managementRecommendationsDesc: 'à°µà°¿à°¶à±à°²à±‡à°·à°£ à°†à°§à°¾à°°à°‚à°—à°¾ à°†à°šà°°à°£à°¾à°¤à±à°®à°• à°¤à°¦à±à°ªà°°à°¿ à°•à°¾à°°à±à°¯à°¾à°šà°°à°£ à°®à°¾à°°à±à°—à°¦à°°à±à°¶à°•à°¤à±à°µà°¾à°¨à±à°¨à°¿ à°ªà±Šà°‚à°¦à°‚à°¡à°¿.',

    captureCropImageTitle: 'à°ªà°‚à°Ÿ à°šà°¿à°¤à±à°°à°¾à°¨à±à°¨à°¿ à°¤à±€à°¯à°‚à°¡à°¿',
    captureCropImageSubtitle: 'AI à°µà°¿à°¶à±à°²à±‡à°·à°£ à°•à±‹à°¸à°‚ à°ªà°‚à°Ÿ à°²à±‡à°¦à°¾ à°ªà±à°°à°­à°¾à°µà°¿à°¤ à°†à°•à± à°¯à±Šà°•à±à°• à°¸à±à°ªà°·à±à°Ÿà°®à±ˆà°¨ à°«à±‹à°Ÿà±‹ à°¤à±€à°¯à°‚à°¡à°¿.',
    openCamera: 'à°•à±†à°®à±†à°°à°¾ à°¤à±†à°°à°µà°‚à°¡à°¿',
    openCameraSub: 'à°‡à°ªà±à°ªà±à°¡à±‡ à°•à±Šà°¤à±à°¤ à°«à±‹à°Ÿà±‹ à°¤à±€à°¯à°‚à°¡à°¿',
    uploadFromGallery: 'à°—à±à°¯à°¾à°²à°°à±€ à°¨à±à°‚à°¡à°¿ à°…à°ªà±â€Œà°²à±‹à°¡à± à°šà±‡à°¯à°‚à°¡à°¿',
    uploadFromGallerySub: 'à°‰à°¨à±à°¨ à°«à±‹à°Ÿà±‹à°¨à± à°Žà°‚à°šà±à°•à±‹à°‚à°¡à°¿',
    photoGuidelinesTitle: 'à°«à±‹à°Ÿà±‹ à°®à°¾à°°à±à°—à°¦à°°à±à°¶à°•à°¾à°²à±',
    guideline1: 'à°®à°‚à°šà°¿ à°¸à°¹à°œ à°•à°¾à°‚à°¤à°¿ à°‰à°‚à°¡à±‡à°²à°¾ à°šà±‚à°¡à°‚à°¡à°¿. à°¬à°²à°®à±ˆà°¨ à°¨à±€à°¡à°²à°¨à± à°¨à°¿à°µà°¾à°°à°¿à°‚à°šà°‚à°¡à°¿.',
    guideline2: 'à°µà°¿à°·à°¯à°¾à°¨à±à°¨à°¿ à°¦à±ƒà°·à±à°Ÿà°¿à°²à±‹ (à°«à±‹à°•à°¸à±) à°®à°°à°¿à°¯à± à°®à°§à±à°¯à°²à±‹ à°‰à°‚à°šà°‚à°¡à°¿.',
    guideline3: 'à°®à±Šà°¤à±à°¤à°‚ à°ªà±à°°à°­à°¾à°µà°¿à°¤ à°ªà±à°°à°¾à°‚à°¤à°¾à°¨à±à°¨à°¿ à°¸à±à°ªà°·à±à°Ÿà°‚à°—à°¾ à°«à±‹à°Ÿà±‹ à°¤à±€à°¯à°‚à°¡à°¿.',
    analyzeImageBtn: 'à°šà°¿à°¤à±à°°à°¾à°¨à±à°¨à°¿ à°µà°¿à°¶à±à°²à±‡à°·à°¿à°‚à°šà°‚à°¡à°¿',
    selectImageHint: 'à°µà°¿à°¶à±à°²à±‡à°·à°£à°¨à± à°ªà±à°°à°¾à°°à°‚à°­à°¿à°‚à°šà°¡à°¾à°¨à°¿à°•à°¿ à°ªà°‚à°Ÿà°¨à± à°Žà°‚à°šà±à°•à±à°¨à°¿ à°šà°¿à°¤à±à°°à°¾à°¨à±à°¨à°¿ à°…à°‚à°¦à°¿à°‚à°šà°‚à°¡à°¿.',
    changeImage: 'à°šà°¿à°¤à±à°°à°¾à°¨à±à°¨à°¿ à°®à°¾à°°à±à°šà°‚à°¡à°¿',
    testWithSample: 'à°¨à°®à±‚à°¨à°¾ à°ªà°‚à°Ÿà°²à°¨à± à°ªà°°à±€à°•à±à°·à°¿à°‚à°šà°‚à°¡à°¿',
    noImageSelectedYet: 'à°‡à°‚à°•à°¾ à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°šà°¿à°¤à±à°°à°‚ à°Žà°‚à°ªà°¿à°• à°šà±‡à°¯à°²à±‡à°¦à±',
    noImageSelectedSub: 'à°•à±Šà°¨à°¸à°¾à°—à°¡à°¾à°¨à°¿à°•à°¿ à°†à°•à± à°«à±‹à°Ÿà±‹à°¨à± à°…à°ªà±â€Œà°²à±‹à°¡à± à°šà±‡à°¯à°‚à°¡à°¿ à°²à±‡à°¦à°¾ à°•à±†à°®à±†à°°à°¾à°¤à±‹ à°¤à±€à°¯à°‚à°¡à°¿.',
    pleaseSelectCrop: 'à°¦à°¯à°šà±‡à°¸à°¿ à°®à±à°‚à°¦à±à°—à°¾ à°’à°• à°ªà°‚à°Ÿà°¨à± à°Žà°‚à°šà±à°•à±‹à°‚à°¡à°¿.',
    pleaseSelectCropFirst: 'à°¦à°¯à°šà±‡à°¸à°¿ à°®à±à°‚à°¦à±à°—à°¾ à°’à°• à°ªà°‚à°Ÿà°¨à± à°Žà°‚à°šà±à°•à±‹à°‚à°¡à°¿.',
    pleaseUploadOrCapture: 'à°¦à°¯à°šà±‡à°¸à°¿ à°šà°¿à°¤à±à°°à°¾à°¨à±à°¨à°¿ à°…à°ªà±â€Œà°²à±‹à°¡à± à°šà±‡à°¯à°‚à°¡à°¿ à°²à±‡à°¦à°¾ à°«à±‹à°Ÿà±‹ à°¤à±€à°¯à°‚à°¡à°¿.',
    pleaseSelectCropAndImage: 'à°¦à°¯à°šà±‡à°¸à°¿ à°ªà°‚à°Ÿà°¨à± à°Žà°‚à°šà±à°•à±à°¨à°¿, à°šà°¿à°¤à±à°°à°¾à°¨à±à°¨à°¿ à°…à°‚à°¦à°¿à°‚à°šà°‚à°¡à°¿.',
    selectCropLabel: 'à°ªà°‚à°Ÿà°¨à± à°Žà°‚à°šà±à°•à±‹à°‚à°¡à°¿',
    selectedCropLabel: 'à°Žà°‚à°šà±à°•à±à°¨à±à°¨ à°ªà°‚à°Ÿ',
    noCropSelectedYet: 'à°‡à°‚à°•à°¾ à° à°ªà°‚à°Ÿà°¨à±‚ à°Žà°‚à°šà±à°•à±‹à°²à±‡à°¦à±',
    readyForAnalysis: 'AI à°µà°¿à°¶à±à°²à±‡à°·à°£à°•à± à°¸à°¿à°¦à±à°§à°‚à°—à°¾ à°‰à°‚à°¦à°¿',
    cameraSource: 'à°•à±†à°®à±†à°°à°¾ à°«à±‹à°Ÿà±‹',
    uploadSource: 'à°…à°ªà±â€Œà°²à±‹à°¡à± à°šà±‡à°¸à°¿à°¨ à°«à±‹à°Ÿà±‹',
    removeImage: 'à°šà°¿à°¤à±à°°à°¾à°¨à±à°¨à°¿ à°¤à±€à°¸à°¿à°µà±‡à°¯à°‚à°¡à°¿',
    takePhoto: 'à°«à±‹à°Ÿà±‹ à°¤à±€à°¯à°‚à°¡à°¿',
    retakePhoto: 'à°®à°³à±à°²à±€ à°«à±‹à°Ÿà±‹ à°¤à±€à°¯à°‚à°¡à°¿',
    switchCamera: 'à°•à±†à°®à±†à°°à°¾ à°®à°¾à°°à±à°šà°‚à°¡à°¿',
    closeCamera: 'à°•à±†à°®à±†à°°à°¾à°¨à± à°®à±‚à°¸à°¿à°µà±‡à°¯à°¿',
    cameraPermissionDenied: 'à°•à±†à°®à±†à°°à°¾ à°…à°¨à±à°®à°¤à°¿ à°¨à°¿à°°à°¾à°•à°°à°¿à°‚à°šà°¬à°¡à°¿à°‚à°¦à°¿. à°¦à°¯à°šà±‡à°¸à°¿ à°•à±†à°®à±†à°°à°¾ à°¯à°¾à°•à±à°¸à±†à°¸à±â€Œà°¨à± à°ªà±à°°à°¾à°°à°‚à°­à°¿à°‚à°šà°‚à°¡à°¿.',
    cameraUnavailable: 'à°•à±†à°®à±†à°°à°¾ à°…à°‚à°¦à±à°¬à°¾à°Ÿà±à°²à±‹ à°²à±‡à°¦à± à°²à±‡à°¦à°¾ à°®à°¦à±à°¦à°¤à± à°²à±‡à°¦à±.',

    waterAdvisorTitle: "à°¸à±à°®à°¾à°°à±à°Ÿà± à°¨à±€à°Ÿà°¿ à°¸à°²à°¹à°¾à°¦à°¾à°°à±",
waterAdvisorSubtitle: "à°®à±€ à°ªà°‚à°Ÿ à°•à±‹à°¸à°‚ à°µà°¾à°¤à°¾à°µà°°à°£ à°†à°§à°¾à°°à°¿à°¤ à°¨à±€à°Ÿà°¿à°ªà°¾à°°à±à°¦à°² à°¸à±‚à°šà°¨à°²à±",
irrigationDecision: "à°¨à±€à°Ÿà°¿à°ªà°¾à°°à±à°¦à°² à°¨à°¿à°°à±à°£à°¯à°‚",
waterAdvisorWhy: "à°ˆ à°¸à±‚à°šà°¨ à°Žà°‚à°¦à±à°•à±?",
waterNeedLabel: "à°¨à±€à°Ÿà°¿ à°…à°µà°¸à°°à°‚",
waterAdvisorNextCheck: "à°¤à°¦à±à°ªà°°à°¿ à°ªà°°à°¿à°¶à±€à°²à°¨",
weatherSource: "à°µà°¾à°¤à°¾à°µà°°à°£ à°®à±‚à°²à°‚",
weatherDataUnavailable: "à°®à±€ à°ªà±à°°à°¾à°‚à°¤à°¾à°¨à°¿à°•à°¿ à°ªà±à°°à°¸à±à°¤à±à°¤à°‚ à°µà°¾à°¤à°¾à°µà°°à°£ à°¸à°®à°¾à°šà°¾à°°à°‚ à°…à°‚à°¦à±à°¬à°¾à°Ÿà±à°²à±‹ à°²à±‡à°¦à±.",
weatherSourceUnavailable: "à°µà°¾à°¤à°¾à°µà°°à°£ à°¸à°®à°¾à°šà°¾à°°à°‚ à°…à°‚à°¦à±à°¬à°¾à°Ÿà±à°²à±‹ à°²à±‡à°¦à±",
waterAdvisorDisclaimerTitle: "à°®à±à°–à±à°¯à°®à±ˆà°¨ à°¸à±‚à°šà°¨",
waterAdvisorDisclaimer: "à°ˆ à°¸à±‚à°šà°¨à°¨à± à°®à°¾à°°à±à°—à°¦à°°à±à°¶à°•à°‚à°—à°¾ à°®à°¾à°¤à±à°°à°®à±‡ à°‰à°ªà°¯à±‹à°—à°¿à°‚à°šà°‚à°¡à°¿. à°¨à±€à°Ÿà°¿à°ªà°¾à°°à±à°¦à°² à°…à°µà°¸à°°à°‚ à°µà°¾à°¤à°¾à°µà°°à°£à°‚, à°¨à±‡à°² à°ªà°°à°¿à°¸à±à°¥à°¿à°¤à°¿, à°ªà°‚à°Ÿ à°¦à°¶ à°®à°°à°¿à°¯à± à°¸à±à°¥à°¾à°¨à°¿à°• à°ªà°°à°¿à°¸à±à°¥à°¿à°¤à±à°²à°ªà±ˆ à°†à°§à°¾à°°à°ªà°¡à°¿ à°‰à°‚à°Ÿà±à°‚à°¦à°¿.",
waterAdvisorNote: "à°ˆ à°¸à±‚à°šà°¨à°ªà±ˆ à°®à°¾à°¤à±à°°à°®à±‡ à°†à°§à°¾à°°à°ªà°¡à°µà°¦à±à°¦à±. à°¨à±€à°°à± à°ªà±†à°Ÿà±à°Ÿà±‡ à°®à±à°‚à°¦à± à°®à±€ à°¨à±‡à°² à°®à°°à°¿à°¯à± à°ªà°‚à°Ÿ à°ªà°°à°¿à°¸à±à°¥à°¿à°¤à°¿à°¨à°¿ à°ªà°°à°¿à°¶à±€à°²à°¿à°‚à°šà°‚à°¡à°¿.",
waterAdvisorUseLocation: "à°¨à°¾ à°¸à±à°¥à°¾à°¨à°¾à°¨à±à°¨à°¿ à°‰à°ªà°¯à±‹à°—à°¿à°‚à°šà°‚à°¡à°¿",
waterAdvisorLocationEnabled: "à°¸à±à°¥à°¾à°¨à°‚ à°ªà±à°°à°¾à°°à°‚à°­à°¿à°‚à°šà°¬à°¡à°¿à°‚à°¦à°¿",
waterAdvisorCurrentCrop: "à°ªà±à°°à°¸à±à°¤à±à°¤ à°ªà°‚à°Ÿ",
waterAdvisorNoCrop: "à°ªà°‚à°Ÿ à°Žà°‚à°šà±à°•à±‹à°²à±‡à°¦à±",

    analyzingImageTitle: 'à°®à±€ à°šà°¿à°¤à±à°°à°¾à°¨à±à°¨à°¿ à°µà°¿à°¶à±à°²à±‡à°·à°¿à°¸à±à°¤à±‹à°‚à°¦à°¿...',
    analyzingImageSubtitle: 'à°®à°¾ AI à°¸à±‚à°•à±à°·à±à°® à°µà°¿à°µà°°à°¾à°²à°¨à± à°¨à°¿à°¶à°¿à°¤à°‚à°—à°¾ à°ªà°°à°¿à°¶à±€à°²à°¿à°¸à±à°¤à±‹à°‚à°¦à°¿.',
    stepUpload: 'à°…à°ªà±â€Œà°²à±‹à°¡à±',
    stepUploadSub: 'à°ªà±à°°à°¾à°¸à±†à°¸à°¿à°‚à°—à± à°•à±‹à°¸à°‚ à°šà°¿à°¤à±à°°à°¾à°¨à±à°¨à°¿ à°¸à°¿à°¦à±à°§à°‚ à°šà±‡à°¸à±à°¤à±‹à°‚à°¦à°¿.',
    stepIdentify: 'à°—à±à°°à±à°¤à°¿à°‚à°ªà±',
    stepIdentifySub: 'à°®à±Šà°•à±à°• à°œà°¾à°¤à°¿ à°®à°°à°¿à°¯à± à°°à°•à°¾à°¨à±à°¨à°¿ à°—à±à°°à±à°¤à°¿à°¸à±à°¤à±‹à°‚à°¦à°¿.',
    stepAnalyze: 'à°µà°¿à°¶à±à°²à±‡à°·à°£',
    stepAnalyzeSub: 'à°µà±à°¯à°¾à°§à°¿ à°²à±‡à°¦à°¾ à°’à°¤à±à°¤à°¿à°¡à°¿ à°¸à°‚à°•à±‡à°¤à°¾à°²à°¨à± à°¸à±à°•à°¾à°¨à± à°šà±‡à°¸à±à°¤à±‹à°‚à°¦à°¿.',
    stepResult: 'à°«à°²à°¿à°¤à°‚',
    stepResultSub: 'à°µà±à°¯à°•à±à°¤à°¿à°—à°¤à±€à°•à°°à°¿à°‚à°šà°¿à°¨ à°¸à°¿à°«à°¾à°°à±à°¸à±à°²à°¨à± à°°à±‚à°ªà±Šà°‚à°¦à°¿à°¸à±à°¤à±‹à°‚à°¦à°¿.',

    multipleCropTitle: 'à°’à°•à°Ÿà°¿ à°•à°‚à°Ÿà±‡ à°Žà°•à±à°•à±à°µ à°ªà°‚à°Ÿà°²à± à°•à°¨à±à°—à±Šà°¨à°¬à°¡à±à°¡à°¾à°¯à°¿.',
    multipleCropSubtitle: 'à°µà°¿à°¶à±à°²à±‡à°·à°£à°¨à± à°•à±Šà°¨à°¸à°¾à°—à°¿à°‚à°šà°¡à°¾à°¨à°¿à°•à°¿ à°¦à°¯à°šà±‡à°¸à°¿ à°•à±à°°à°¿à°‚à°¦à°¿ à°Žà°‚à°ªà°¿à°•à°² à°¨à±à°‚à°¡à°¿ à°¸à°°à±ˆà°¨ à°ªà°‚à°Ÿà°¨à± à°Žà°‚à°šà±à°•à±‹à°‚à°¡à°¿.',
    multipleCropQuestion: 'à°®à±€à°°à± à° à°ªà°‚à°Ÿà°¨à± à°µà°¿à°¶à±à°²à±‡à°·à°¿à°¸à±à°¤à±à°¨à±à°¨à°¾à°°à±?',
    analyzedImageLabel: 'à°µà°¿à°¶à±à°²à±‡à°·à°¿à°‚à°šà°¿à°¨ à°šà°¿à°¤à±à°°à°‚',
    selectCropType: 'à°ªà°‚à°Ÿ à°°à°•à°¾à°¨à±à°¨à°¿ à°Žà°‚à°šà±à°•à±‹à°‚à°¡à°¿:',
    continueAnalysisBtn: 'à°µà°¿à°¶à±à°²à±‡à°·à°£à°¨à± à°•à±Šà°¨à°¸à°¾à°—à°¿à°‚à°šà°‚à°¡à°¿',

    criticalActionRequired: 'à°¤à±à°µà°°à°¿à°¤ à°šà°°à±à°¯ à°…à°µà°¸à°°à°‚',
    optimalHealth: 'à°†à°°à±‹à°—à±à°¯à°‚à°—à°¾ à°‰à°‚à°¦à°¿',
    needsAttention: 'à°¶à±à°°à°¦à±à°§ à°…à°µà°¸à°°à°‚',
    analysisSummaryTitle: 'à°µà°¿à°¶à±à°²à±‡à°·à°£ à°¸à°¾à°°à°¾à°‚à°¶à°‚',
    scannedJustNow: '2 à°¨à°¿à°®à°¿à°·à°¾à°² à°•à±à°°à°¿à°¤à°‚ à°¸à±à°•à°¾à°¨à± à°šà±‡à°¯à°¬à°¡à°¿à°‚à°¦à°¿',
    diseaseDetectedTitle: 'à°—à±à°°à±à°¤à°¿à°‚à°šà°¬à°¡à°¿à°¨ à°µà±à°¯à°¾à°§à°¿',
    confidenceScore: 'à°–à°šà±à°šà°¿à°¤à°¤à±à°µ à°¸à±à°•à±‹à°°à±',
    pestActivityTitle: 'à°ªà±à°°à±à°—à±à°² à°‰à°¨à°¿à°•à°¿',
    noneDetected: 'à°à°¦à±€ à°•à°¨à±à°—à±Šà°¨à°¬à°¡à°²à±‡à°¦à±',
    currentlySafe: 'à°ªà±à°°à°¸à±à°¤à±à°¤à°‚ à°¸à±à°°à°•à±à°·à°¿à°¤à°‚',
    recommendedActionTitle: 'à°¸à°¿à°«à°¾à°°à±à°¸à± à°šà±‡à°¯à°¬à°¡à°¿à°¨ à°šà°°à±à°¯',
    noAnalysisResultAvailable: 'à°‡à°‚à°•à°¾ à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°µà°¿à°¶à±à°²à±‡à°·à°£ à°«à°²à°¿à°¤à°‚ à°…à°‚à°¦à±à°¬à°¾à°Ÿà±à°²à±‹ à°²à±‡à°¦à±.',
    noRecommendationAvailable: 'à°‡à°‚à°•à°¾ à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°¸à°¿à°«à°¾à°°à±à°¸à± à°…à°‚à°¦à±à°¬à°¾à°Ÿà±à°²à±‹ à°²à±‡à°¦à±.',
    valueNone: 'à°à°¦à±€ à°²à±‡à°¦à±',
    statusPending: 'à°ªà±†à°‚à°¡à°¿à°‚à°—à±â€Œà°²à±‹ à°‰à°‚à°¦à°¿',
    logTreatmentPlan: 'à°šà°¿à°•à°¿à°¤à±à°¸ à°ªà±à°°à°£à°¾à°³à°¿à°•à°¨à± à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°‚à°¡à°¿',
    treatmentPlanSaved: 'à°šà°¿à°•à°¿à°¤à±à°¸ à°ªà±à°°à°£à°¾à°³à°¿à°• à°µà°¿à°œà°¯à°µà°‚à°¤à°‚à°—à°¾ à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°¬à°¡à°¿à°‚à°¦à°¿!',
    aiDisclaimer: 'à°—à°®à°¨à°¿à°•: à°ˆ AI à°°à±‚à°ªà±Šà°‚à°¦à°¿à°‚à°šà°¿à°¨ à°µà°¿à°¶à±à°²à±‡à°·à°£ à°¸à°®à°¾à°šà°¾à°° à°ªà±à°°à°¯à±‹à°œà°¨à°¾à°² à°•à±‹à°¸à°‚ à°®à°¾à°¤à±à°°à°®à±‡ à°®à°°à°¿à°¯à± à°‡à°¦à°¿ à°µà±ƒà°¤à±à°¤à°¿à°ªà°°à°®à±ˆà°¨ à°µà±à°¯à°µà°¸à°¾à°¯ à°¨à°¿à°ªà±à°£à±à°² à°¸à°²à°¹à°¾ à°•à°¾à°¦à±. à°…à°‚à°—à±‹à°µà°¿à°¸à± AI à°…à°§à°¿à°• à°–à°šà±à°šà°¿à°¤à°¤à±à°µà°¾à°¨à±à°¨à°¿ à°²à°•à±à°·à±à°¯à°‚à°—à°¾ à°šà±‡à°¸à±à°•à±à°¨à±à°¨à°ªà±à°ªà°Ÿà°¿à°•à±€, à°¤à°ªà±à°ªà± à°—à±à°°à±à°¤à°¿à°‚à°ªà±à°²à± à°¸à°‚à°­à°µà°¿à°‚à°šà°µà°šà±à°šà±. à°°à°¸à°¾à°¯à°¨ à°šà°¿à°•à°¿à°¤à±à°¸à°²à± à°µà°°à±à°¤à°¿à°‚à°šà±‡ à°®à±à°‚à°¦à± à°¸à±à°¥à°¾à°¨à°¿à°• à°µà±à°¯à°µà°¸à°¾à°¯ à°¨à°¿à°ªà±à°£à±à°¡à°¿à°¨à°¿ à°¸à°‚à°ªà±à°°à°¦à°¿à°‚à°šà°‚à°¡à°¿.',

    askAgronomistTitle: 'à°µà±à°¯à°µà°¸à°¾à°¯ à°¨à°¿à°ªà±à°£à±à°¡à°¿à°¤à±‹ à°¸à°‚à°­à°¾à°·à°£',
    askAgronomistSub: 'à°ˆ à°µà°¿à°¶à±à°²à±‡à°·à°£ à°®à°°à°¿à°¯à± à°ªà°‚à°Ÿ à°¸à°‚à°°à°•à±à°·à°£ à°—à±à°°à°¿à°‚à°šà°¿ à°šà°°à±à°šà°¿à°‚à°šà°‚à°¡à°¿',
    chatInputPlaceholder: 'à°®à°‚à°¦à±à°² à°®à±‹à°¤à°¾à°¦à±, à°¸à±‡à°‚à°¦à±à°°à±€à°¯ à°ªà°¦à±à°§à°¤à±à°²à±, à°¨à±€à°Ÿà°¿ à°¯à°¾à°œà°®à°¾à°¨à±à°¯à°‚ à°—à±à°°à°¿à°‚à°šà°¿ à°…à°¡à°—à°‚à°¡à°¿...',
    sendBtn: 'à°ªà°‚à°ªà±',
    thinkingText: 'à°µà±à°¯à°µà°¸à°¾à°¯ à°¨à°¿à°ªà±à°£à±à°¡à± à°¸à±à°ªà°‚à°¦à°¿à°¸à±à°¤à±à°¨à±à°¨à°¾à°°à±...',
    quickPromptOrganic: 'à°¸à±‡à°‚à°¦à±à°°à±€à°¯ à°¨à°¿à°µà°¾à°°à°£à°²à±',
    quickPromptWater: 'à°¨à±€à°Ÿà°¿ à°¯à°¾à°œà°®à°¾à°¨à±à°¯à°‚',
    quickPromptSpread: 'à°µà±à°¯à°¾à°ªà±à°¤à°¿ à°¨à°¿à°µà°¾à°°à°£',
    checkThisNewImage: 'à°ˆ à°•à±Šà°¤à±à°¤ à°šà°¿à°¤à±à°°à°¾à°¨à±à°¨à°¿ à°ªà°°à°¿à°¶à±€à°²à°¿à°‚à°šà°‚à°¡à°¿.',
    chatSavedNote: 'à°ˆ à°¸à°‚à°­à°¾à°·à°£ à°¸à±à°µà°¯à°‚à°šà°¾à°²à°•à°‚à°—à°¾ à°ˆ à°µà°¿à°¶à±à°²à±‡à°·à°£à°¤à±‹ à°­à°¦à±à°°à°ªà°°à°šà°¬à°¡à±à°¤à±à°‚à°¦à°¿.',
    reportDownloaded: 'à°°à±‹à°— à°¨à°¿à°°à±à°§à°¾à°°à°£ à°¨à°¿à°µà±‡à°¦à°¿à°• à°µà°¿à°œà°¯à°µà°‚à°¤à°‚à°—à°¾ à°¡à±Œà°¨à±â€Œà°²à±‹à°¡à± à°šà±‡à°¯à°¬à°¡à°¿à°‚à°¦à°¿.',

    historyDetailsTitle: 'à°µà°¿à°¶à±à°²à±‡à°·à°£ à°µà°¿à°µà°°à°¾à°²à±',
    finalRecommendationTitle: 'à°¤à±à°¦à°¿ à°¸à°¿à°«à°¾à°°à±à°¸à±',
    finalRecommendationSub: 'à°šà°¾à°°à°¿à°¤à±à°°à°• à°¡à±‡à°Ÿà°¾ à°†à°§à°¾à°°à°‚à°—à°¾ AI à°°à±‚à°ªà±Šà°‚à°¦à°¿à°‚à°šà°¿à°¨ à°ªà±à°°à°¾à°‚à°¤à±€à°¯ à°…à°‚à°¤à°°à±à°¦à±ƒà°·à±à°Ÿà°¿.',
    scanMetricsTitle: 'à°¸à±à°•à°¾à°¨à± à°•à±Šà°²à°®à°¾à°¨à°¾à°²à±',
    cropTypeLabel: 'à°ªà°‚à°Ÿ à°°à°•à°‚',
    fieldAreaLabel: 'à°µà°¿à°¸à±à°¤à±€à°°à±à°£à°‚',
    envContextTitle: 'à°ªà°°à±à°¯à°¾à°µà°°à°£ à°¸à°‚à°¦à°°à±à°­à°‚',
    envScanTimeSub: '(à°¸à±à°•à°¾à°¨à± à°¸à°®à°¯à°‚à°²à±‹)',
    envTemperature: 'à°‰à°·à±à°£à±‹à°—à±à°°à°¤',
    envHumidity: 'à°¤à±‡à°®',
    envWeather: 'à°µà°¾à°¤à°¾à°µà°°à°£à°‚',
    weatherPartlyCloudy: 'à°ªà°¾à°•à±à°·à°¿à°•à°‚à°—à°¾ à°®à±‡à°˜à°¾à°µà±ƒà°¤à°‚',
    weatherSunny: 'à°Žà°‚à°¡à°—à°¾ à°‰à°‚à°¦à°¿',
    weatherOvercast: 'à°ªà±‚à°°à±à°¤à°¿à°—à°¾ à°®à±‡à°˜à°¾à°µà±ƒà°¤à°‚',
    downloadReportPdf: 'à°¨à°¿à°µà±‡à°¦à°¿à°•à°¨à± à°¡à±Œà°¨à±â€Œà°²à±‹à°¡à± à°šà±‡à°¯à°‚à°¡à°¿ (PDF)',
    mapView: 'à°®à±à°¯à°¾à°ªà± à°µà±€à°•à±à°·à°£',

    changeLanguageSetting: 'à°­à°¾à°·à°¨à± à°®à°¾à°°à±à°šà°‚à°¡à°¿',
    currentLanguageLabel: 'à°ªà±à°°à°¸à±à°¤à±à°¤ à°­à°¾à°·: à°¤à±†à°²à±à°—à±',
    notificationsSetting: 'à°¨à±‹à°Ÿà°¿à°«à°¿à°•à±‡à°·à°¨à±â€Œà°²à±',
    notificationsSub: 'à°¹à±†à°šà±à°šà°°à°¿à°•à°²à± à°®à°°à°¿à°¯à± à°…à°ªà±â€Œà°¡à±‡à°Ÿà±â€Œà°²à°¨à± à°¨à°¿à°°à±à°µà°¹à°¿à°‚à°šà°‚à°¡à°¿',
    helpCenterSetting: 'à°¸à°¹à°¾à°¯ à°•à±‡à°‚à°¦à±à°°à°‚',
    helpCenterSub: 'à°¤à°°à°šà±à°—à°¾ à°…à°¡à°¿à°—à±‡ à°ªà±à°°à°¶à±à°¨à°²à± à°®à°°à°¿à°¯à± à°®à°¦à±à°¦à°¤à±',
    helpCenterDialogTitle: 'à°¸à°¹à°¾à°¯ à°•à±‡à°‚à°¦à±à°°à°‚',
    helpCenterDialogHeading: 'à°…à°‚à°—à±‹à°µà°¿à°¸à± AI à°¤à±‹ à°¸à°¹à°¾à°¯à°‚ à°•à°¾à°µà°¾à°²à°¾?',
    helpCenterDialogContactText: 'à°®à°¦à±à°¦à°¤à±, à°ªà±à°°à°¶à±à°¨à°²à±, à°¸à°¾à°‚à°•à±‡à°¤à°¿à°• à°¸à°®à°¸à±à°¯à°²à± à°²à±‡à°¦à°¾ à°…à°­à°¿à°ªà±à°°à°¾à°¯à°‚ à°•à±‹à°¸à°‚, à°®à°®à±à°®à°²à±à°¨à°¿ à°‡à°•à±à°•à°¡ à°¸à°‚à°ªà±à°°à°¦à°¿à°‚à°šà°‚à°¡à°¿:',
    helpCenterSupportEmail: 'agnovissupport@gmail.com',
    helpCenterSendEmailBtn: 'à°ˆà°®à±†à°¯à°¿à°²à± à°ªà°‚à°ªà°‚à°¡à°¿',
    helpCenterCopyEmailBtn: 'à°ˆà°®à±†à°¯à°¿à°²à± à°šà°¿à°°à±à°¨à°¾à°®à°¾à°¨à± à°•à°¾à°ªà±€ à°šà±‡à°¯à°‚à°¡à°¿',
    helpCenterEmailCopied: 'à°ˆà°®à±†à°¯à°¿à°²à± à°šà°¿à°°à±à°¨à°¾à°®à°¾ à°•à±à°²à°¿à°ªà±â€Œà°¬à±‹à°°à±à°¡à±â€Œà°•à°¿ à°•à°¾à°ªà±€ à°šà±‡à°¯à°¬à°¡à°¿à°‚à°¦à°¿',
    privacyPolicySetting: 'à°—à±‹à°ªà±à°¯à°¤à°¾ à°µà°¿à°§à°¾à°¨à°‚',
    privacyPolicySub: 'à°¨à°¿à°¬à°‚à°§à°¨à°²à± à°®à°°à°¿à°¯à± à°¡à±‡à°Ÿà°¾ à°µà°¿à°¨à°¿à°¯à±‹à°—à°‚',
    logoutBtn: 'à°²à°¾à°—à±Œà°Ÿà±',
    editProfile: 'à°ªà±à°°à±Šà°«à±ˆà°²à±â€Œà°¨à± à°¸à°µà°°à°¿à°‚à°šà°‚à°¡à°¿',

    cropApple: 'à°†à°ªà°¿à°²à±',
    cropCherry: 'à°šà±†à°°à±à°°à±€',
    cropCorn: 'à°®à±Šà°•à±à°•à°œà±Šà°¨à±à°¨',
    cropGrape: 'à°¦à±à°°à°¾à°•à±à°·',
    cropPeach: 'à°ªà±€à°šà±',
    cropPepper: 'à°®à°¿à°°à°¿à°¯à°¾à°²à±',
    cropPotato: 'à°¬à°‚à°—à°¾à°³à°¾à°¦à±à°‚à°ª',
    cropSquash: 'à°¸à±à°•à±à°µà°¾à°·à±',
    cropStrawberry: 'à°¸à±à°Ÿà±à°°à°¾à°¬à±†à°°à±à°°à±€',
    cropTomato: 'à°Ÿà°®à°¾à°Ÿà°¾',
    cropWheat: 'à°—à±‹à°§à±à°®',
    cropCotton: 'à°ªà°¤à±à°¤à°¿',
    cropRice: 'à°µà°°à°¿',

    statusHealthy: 'à°†à°°à±‹à°—à±à°¯à°‚à°—à°¾ à°‰à°‚à°¦à°¿',
    statusNeedsAttention: 'à°¶à±à°°à°¦à±à°§ à°…à°µà°¸à°°à°‚',
    diseaseEarlyBlight: 'à°…à°°à±à°²à±€ à°¬à±à°²à±ˆà°Ÿà± (à°®à±à°‚à°¦à°¸à±à°¤à± à°¤à±†à°—à±à°²à±)',
    diseaseLateBlight: 'à°²à±‡à°Ÿà± à°¬à±à°²à±ˆà°Ÿà± (à°†à°²à°¸à±à°¯à°ªà± à°¤à±†à°—à±à°²à±)',
    diseaseLeafCurl: 'à°†à°•à± à°®à±à°¡à±à°¤ à°µà±ˆà°°à°¸à±',
    diseaseNone: 'à°à°¦à±€ à°²à±‡à°¦à± (à°†à°°à±‹à°—à±à°¯à°•à°°à°®à±ˆà°¨ à°ªà°‚à°Ÿ)',
    pestNone: 'à°ªà±à°°à±à°—à±à°²à± à°à°µà±€ à°—à±à°°à±à°¤à°¿à°‚à°šà°¬à°¡à°²à±‡à°¦à±',
    pestAphids: 'à°ªà±‡à°¨à± à°ªà±à°°à±à°—à±à°²à± (à°Žà°«à°¿à°¡à±à°¸à±)',
    pestWhitefly: 'à°¤à±†à°²à±à°²à°¦à±‹à°®',

    actionPruneLeavesTitle: 'à°ªà±à°°à°­à°¾à°µà°¿à°¤ à°†à°•à±à°²à°¨à± à°¤à±Šà°²à°—à°¿à°‚à°šà°‚à°¡à°¿',
    actionPruneLeavesDesc: 'à°®à°šà±à°šà°²à± à°•à°¨à°¿à°ªà°¿à°‚à°šà±‡ à°•à±à°°à°¿à°‚à°¦à°¿ à°†à°•à±à°²à°¨à± à°œà°¾à°—à±à°°à°¤à±à°¤à°—à°¾ à°•à°¤à±à°¤à°¿à°°à°¿à°‚à°šà°‚à°¡à°¿. à°µà±à°¯à°¾à°§à°¿ à°µà±à°¯à°¾à°ªà±à°¤à°¿ à°šà±†à°‚à°¦à°•à±à°‚à°¡à°¾ à°µà±€à°Ÿà°¿à°¨à°¿ à°•à°¾à°²à±à°šà°¿à°µà±‡à°¯à°‚à°¡à°¿ à°²à±‡à°¦à°¾ à°¦à±‚à°°à°‚à°—à°¾ à°ªà°¾à°°à°µà±‡à°¯à°‚à°¡à°¿.',
    actionFungicideTitle: 'à°¶à°¿à°²à±€à°‚à°¦à±à°° à°¸à°‚à°¹à°¾à°°à°¿à°£à°¿ à°ªà°¿à°šà°¿à°•à°¾à°°à±€',
    actionFungicideDesc: 'à°°à°¾à°—à°¿ à°†à°§à°¾à°°à°¿à°¤ à°¶à°¿à°²à±€à°‚à°¦à±à°° à°¸à°‚à°¹à°¾à°°à°¿à°£à°¿ à°²à±‡à°¦à°¾ à°•à±à°²à±‹à°°à±‹à°¥à°²à±‹à°¨à°¿à°²à± à°ªà°¿à°šà°¿à°•à°¾à°°à±€ à°šà±‡à°¯à°‚à°¡à°¿. à°¸à±à°¥à°¾à°¨à°¿à°• à°µà°°à±à°·à°ªà°¾à°¤à°¾à°¨à±à°¨à°¿ à°¬à°Ÿà±à°Ÿà°¿ à°ªà±à°°à°¤à°¿ 7-10 à°°à±‹à°œà±à°²à°•à± à°ªà±à°¨à°°à°¾à°µà±ƒà°¤à°‚ à°šà±‡à°¯à°‚à°¡à°¿.',
    actionAirflowTitle: 'à°—à°¾à°²à°¿ à°µà±†à°²à±à°¤à±à°°à±à°¨à± à°®à±†à°°à±à°—à±à°ªà°°à°šà°‚à°¡à°¿',
    actionAirflowDesc: 'à°®à±Šà°•à±à°•à°² à°®à°§à±à°¯ à°¸à°°à±ˆà°¨ à°¦à±‚à°°à°‚ à°‰à°‚à°¡à±‡à°²à°¾ à°šà±‚à°¸à±à°•à±‹à°‚à°¡à°¿ à°®à°°à°¿à°¯à± à°†à°•à±à°²à± à°ªà±Šà°¡à°¿à°—à°¾ à°‰à°‚à°¡à°Ÿà°¾à°¨à°¿à°•à°¿ à°ªà±ˆà°¨à±à°‚à°¡à°¿ à°¨à±€à°°à± à°ªà±‹à°¯à°¡à°‚ à°¨à°¿à°µà°¾à°°à°¿à°‚à°šà°‚à°¡à°¿.',
    actionMaintainProtocolTitle: 'à°ªà±à°°à°¸à±à°¤à±à°¤ à°ªà°°à°¿à°¶à±€à°²à°¨à°¨à± à°•à±Šà°¨à°¸à°¾à°—à°¿à°‚à°šà°‚à°¡à°¿',
    actionMaintainProtocolDesc: 'à°ªà°‚à°Ÿ à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°ªà±‹à°·à°•à°¾à°¹à°¾à°° à°²à±‹à°ªà°‚ à°²à±‡à°¦à°¾ à°ªà±à°°à±à°—à±à°² à°’à°¤à±à°¤à°¿à°¡à°¿ à°²à±‡à°•à±à°‚à°¡à°¾ à°¸à°°à±ˆà°¨ à°†à°°à±‹à°—à±à°¯à°¾à°¨à±à°¨à°¿ à°ªà±à°°à°¦à°°à±à°¶à°¿à°‚à°šà°¿à°‚à°¦à°¿. à°­à°µà°¿à°·à±à°¯à°¤à±à°¤à± à°•à±‹à°¸à°‚ à°ªà±à°°à°¸à±à°¤à±à°¤ à°ªà°°à°¿à°¶à±€à°²à°¨à°¾ à°µà°¿à°§à°¾à°¨à°¾à°¨à±à°¨à°¿ à°•à±Šà°¨à°¸à°¾à°—à°¿à°‚à°šà°‚à°¡à°¿.',

    // Weather
    weatherTitle: 'à°µà±à°¯à°µà°¸à°¾à°¯ à°µà°¾à°¤à°¾à°µà°°à°£ à°‡à°‚à°Ÿà±†à°²à°¿à°œà±†à°¨à±à°¸à±',
    weatherCurrentLocation: 'à°ªà±à°°à°¸à±à°¤à±à°¤ à°ªà±à°°à°¦à±‡à°¶à°‚',
    weatherUseMyLocation: 'à°¨à°¾ à°ªà±à°°à°¦à±‡à°¶à°¾à°¨à±à°¨à°¿ à°‰à°ªà°¯à±‹à°—à°¿à°‚à°šà±',
    weatherChangeLocation: 'à°ªà±à°°à°¦à±‡à°¶à°¾à°¨à±à°¨à°¿ à°®à°¾à°°à±à°šà±',
    weatherSearchLocation: 'à°ªà±à°°à°¦à±‡à°¶à°¾à°¨à±à°¨à°¿ à°µà±†à°¤à°•à°‚à°¡à°¿',
    weatherSearchPlaceholder: 'à°—à±à°°à°¾à°®à°‚, à°ªà°Ÿà±à°Ÿà°£à°‚, à°¨à°—à°°à°‚, à°œà°¿à°²à±à°²à°¾ à°µà±†à°¤à°•à°‚à°¡à°¿...',
    weatherSearching: 'à°µà±†à°¤à±à°•à±à°¤à±à°¨à±à°¨à°¾à°®à±...',
    weatherSearchResults: 'à°¶à±‹à°§à°¨ à°«à°²à°¿à°¤à°¾à°²à±',
    weatherNoResults: 'à°ªà±à°°à°¦à±‡à°¶à°¾à°²à± à°•à°¨à±à°—à±Šà°¨à°¬à°¡à°²à±‡à°¦à±. à°®à°°à±Šà°• à°ªà°¦à°‚ à°ªà±à°°à°¯à°¤à±à°¨à°¿à°‚à°šà°‚à°¡à°¿.',
    weatherLastUpdated: 'à°¨à°µà±€à°•à°°à°¿à°‚à°šà°¬à°¡à°¿à°‚à°¦à°¿:',
    weatherCurrentConditions: 'à°ªà±à°°à°¸à±à°¤à±à°¤ à°ªà°°à°¿à°¸à±à°¥à°¿à°¤à±à°²à±',
    weatherFeelsLike: 'à°…à°¨à±à°­à°µà°¿à°‚à°šà°¿à°¨à°Ÿà±à°²à±',
    weatherHumidity: 'à°†à°°à±à°¦à±à°°à°¤',
    weatherWind: 'à°—à°¾à°²à°¿',
    weatherRainfall: 'à°µà°°à±à°·à°ªà°¾à°¤à°‚',
    weatherRainProbability: 'à°µà°°à±à°· à°¸à°‚à°­à°¾à°µà±à°¯à°¤',
    weatherRisk: 'à°µà°¾à°¤à°¾à°µà°°à°£ à°ªà±à°°à°®à°¾à°¦à°‚',
    weatherRiskLow: 'à°¤à°•à±à°•à±à°µ',
    weatherRiskModerate: 'à°®à°§à±à°¯à°¸à±à°¥',
    weatherRiskHigh: 'à°Žà°•à±à°•à±à°µ',
    weatherFarmAdvisory: 'à°µà±à°¯à°µà°¸à°¾à°¯ à°¸à°²à°¹à°¾',
    weather7DayForecast: '7-à°°à±‹à°œà±à°² à°¸à±‚à°šà°¨',
    weatherFieldWorkOutlook: 'à°ªà°‚à°Ÿ à°ªà°¨à°¿ à°¦à±ƒà°·à±à°Ÿà°¿à°•à±‹à°£à°‚',
    weatherFieldWorkFavorable: 'à°…à°¨à±à°•à±‚à°²à°‚',
    weatherFieldWorkCaution: 'à°œà°¾à°—à±à°°à°¤à±à°¤',
    weatherFieldWorkAvoid: 'à°¨à°¿à°µà°¾à°°à°¿à°‚à°šà±',
    weatherFieldWorkFavorableText: 'à°µà°¾à°¤à°¾à°µà°°à°£à°‚ à°¸à°¾à°§à°¾à°°à°£ à°µà±à°¯à°µà°¸à°¾à°¯ à°•à°¾à°°à±à°¯à°•à°²à°¾à°ªà°¾à°²à°•à± à°…à°¨à±à°•à±‚à°²à°‚à°—à°¾ à°‰à°¨à±à°¨à°Ÿà±à°²à± à°•à°¨à°¿à°ªà°¿à°¸à±à°¤à±à°‚à°¦à°¿.',
    weatherFieldWorkCautionText: 'à°µà°¾à°¤à°¾à°µà°°à°£à°‚ à°•à±Šà°¨à±à°¨à°¿ à°µà±à°¯à°µà°¸à°¾à°¯ à°•à°¾à°°à±à°¯à°•à°²à°¾à°ªà°¾à°²à°¨à± à°ªà±à°°à°­à°¾à°µà°¿à°¤à°‚ à°šà±‡à°¯à°µà°šà±à°šà±. à°ªà°¿à°šà°¿à°•à°¾à°°à°¿ à°šà±‡à°¯à°¡à°¾à°¨à°¿à°•à°¿ à°®à±à°‚à°¦à± à°µà°°à±à°·à°‚ à°®à°°à°¿à°¯à± à°—à°¾à°²à°¿à°¨à°¿ à°¤à°¨à°¿à°–à±€ à°šà±‡à°¯à°‚à°¡à°¿.',
    weatherFieldWorkAvoidText: 'à°µà°¾à°¤à°¾à°µà°°à°£ à°ªà°°à°¿à°¸à±à°¥à°¿à°¤à±à°²à± à°ªà°¿à°šà°¿à°•à°¾à°°à°¿ à°²à±‡à°¦à°¾ à°‡à°¤à°° à°¸à±à°¨à±à°¨à°¿à°¤à°®à±ˆà°¨ à°µà±à°¯à°µà°¸à°¾à°¯ à°•à°¾à°°à±à°¯à°•à°²à°¾à°ªà°¾à°²à°•à± à°…à°¨à±à°•à±‚à°²à°‚à°—à°¾ à°²à±‡à°µà±.',
    weatherCropContext: 'à°µà°¾à°¤à°¾à°µà°°à°£à°‚ + à°ªà°‚à°Ÿ à°¸à°‚à°¦à°°à±à°­à°‚',
    weatherLoading: 'à°µà°¾à°¤à°¾à°µà°°à°£ à°¡à±‡à°Ÿà°¾ à°¤à±†à°¸à±à°¤à±à°¨à±à°¨à°¾à°®à±...',
    weatherUnavailable: 'à°µà°¾à°¤à°¾à°µà°°à°£ à°¡à±‡à°Ÿà°¾ à°¤à°¾à°¤à±à°•à°¾à°²à°¿à°•à°‚à°—à°¾ à°…à°‚à°¦à±à°¬à°¾à°Ÿà±à°²à±‹ à°²à±‡à°¦à±',
    weatherUnavailableText: 'à°ªà±à°°à°¸à±à°¤à±à°¤à°‚ à°ªà±à°°à°¤à±à°¯à°•à±à°· à°µà°¾à°¤à°¾à°µà°°à°£ à°¡à±‡à°Ÿà°¾à°¨à± à°ªà±Šà°‚à°¦à°²à±‡à°‚. à°¦à°¯à°šà±‡à°¸à°¿ à°¤à°°à±à°µà°¾à°¤ à°®à°³à±à°²à±€ à°ªà±à°°à°¯à°¤à±à°¨à°¿à°‚à°šà°‚à°¡à°¿.',
    weatherLocationPermissionDenied: 'à°ªà±à°°à°¦à±‡à°¶ à°ªà±à°°à°¾à°ªà±à°¯à°¤à°¨à± à°…à°¨à±à°®à°¤à°¿à°‚à°šà°²à±‡à°¦à±. à°®à±€ à°µà±à°¯à°µà°¸à°¾à°¯ à°ªà±à°°à°¦à±‡à°¶à°‚ à°•à±‹à°¸à°‚ à°µà±†à°¤à°•à°‚à°¡à°¿.',
    weatherLocationUnavailable: 'à°ªà±à°°à°¦à±‡à°¶à°‚ à°…à°‚à°¦à±à°¬à°¾à°Ÿà±à°²à±‹ à°²à±‡à°¦à±. à°®à±€ à°µà±à°¯à°µà°¸à°¾à°¯ à°ªà±à°°à°¦à±‡à°¶à°‚ à°•à±‹à°¸à°‚ à°µà±†à°¤à°•à°‚à°¡à°¿.',
    weatherRetry: 'à°®à°³à±à°²à±€ à°ªà±à°°à°¯à°¤à±à°¨à°¿à°‚à°šà±',
    weatherToday: 'à°ˆ à°°à±‹à°œà±',
    weatherTomorrow: 'à°°à±‡à°ªà±',
    weatherSpraying: 'à°ªà°¿à°šà°¿à°•à°¾à°°à°¿',
    weatherIrrigation: 'à°¨à±€à°Ÿà°¿à°ªà°¾à°°à±à°¦à°²',
    weatherFieldWork: 'à°ªà°‚à°Ÿ à°ªà°¨à°¿',
    weatherConditionClearSky: 'à°¸à±à°ªà°·à±à°Ÿà°®à±ˆà°¨ à°†à°•à°¾à°¶à°‚',
    weatherConditionMainlyClear: 'à°ªà±à°°à°§à°¾à°¨à°‚à°—à°¾ à°¸à±à°ªà°·à±à°Ÿà°‚',
    weatherConditionPartlyCloudy: 'à°ªà°¾à°•à±à°·à°¿à°•à°‚à°—à°¾ à°®à±‡à°˜à°¾à°µà±ƒà°¤à°‚',
    weatherConditionOvercast: 'à°®à±‡à°˜à°¾à°µà±ƒà°¤à°‚',
    weatherConditionFog: 'à°ªà±Šà°—à°®à°‚à°šà±',
    weatherConditionLightDrizzle: 'à°¤à±‡à°²à°¿à°•à°ªà°¾à°Ÿà°¿ à°šà°¿à°¨à±à°•à±à°²à±',
    weatherConditionModerateDrizzle: 'à°®à°§à±à°¯à°¸à±à°¥ à°šà°¿à°¨à±à°•à±à°²à±',
    weatherConditionDenseDrizzle: 'à°¸à°¾à°‚à°¦à±à°°à°®à±ˆà°¨ à°šà°¿à°¨à±à°•à±à°²à±',
    weatherConditionSlightRain: 'à°¤à±‡à°²à°¿à°•à°ªà°¾à°Ÿà°¿ à°µà°°à±à°·à°‚',
    weatherConditionModerateRain: 'à°®à°§à±à°¯à°¸à±à°¥ à°µà°°à±à°·à°‚',
    weatherConditionHeavyRain: 'à°­à°¾à°°à±€ à°µà°°à±à°·à°‚',
    weatherConditionSlightSnow: 'à°¤à±‡à°²à°¿à°•à°ªà°¾à°Ÿà°¿ à°®à°‚à°šà±',
    weatherConditionModerateSnow: 'à°®à°§à±à°¯à°¸à±à°¥ à°®à°‚à°šà±',
    weatherConditionHeavySnow: 'à°­à°¾à°°à±€ à°®à°‚à°šà±',
    weatherConditionThunderstorm: 'à°‰à°°à±à°®à±à°²à°¤à±‹ à°µà°°à±à°·à°‚',
    weatherConditionRainShowers: 'à°µà°°à±à°·à°ªà± à°œà°²à±à°²à±à°²à±',
    weatherConditionViolentShowers: 'à°¤à±€à°µà±à°°à°®à±ˆà°¨ à°µà°°à±à°·à°ªà± à°œà°²à±à°²à±à°²à±',
  
    historyNoRecordText: 'à°¸à±‡à°µà± à°šà±‡à°¸à°¿à°¨ à°µà°¿à°¶à±à°²à±‡à°·à°£ à°°à°¿à°•à°¾à°°à±à°¡à±à°¨à± à°¤à°¿à°°à°¿à°—à°¿ à°ªà±Šà°‚à°¦à°²à±‡à°•à°ªà±‹à°¯à°¾à°®à±. à°¦à°¯à°šà±‡à°¸à°¿ à°šà°°à°¿à°¤à±à°°à°•à± à°¤à°¿à°°à°¿à°—à°¿ à°µà±†à°³à±à°²à°‚à°¡à°¿.',
    scanNoRecordText: 'à°ªà±à°°à°¸à±à°¤à±à°¤à°‚ à° à°°à±‹à°—à°¨à°¿à°°à±à°§à°¾à°°à°£ à°¡à±‡à°Ÿà°¾ à°•à±à°°à°¿à°¯à°¾à°¶à±€à°²à°‚à°²à±‹ à°²à±‡à°¦à±. à°¦à°¯à°šà±‡à°¸à°¿ à°ªà°‚à°Ÿ à°¸à±à°•à°¾à°¨à± à°šà±‡à°¯à°‚à°¡à°¿.',
    cropSpecimen: 'à°ªà°‚à°Ÿ à°¨à°®à±‚à°¨à°¾',
    noImageAvailable: 'à°šà°¿à°¤à±à°°à°‚ à°…à°‚à°¦à±à°¬à°¾à°Ÿà±à°²à±‹ à°²à±‡à°¦à±',
    agriculturalWarning: 'à°µà±à°¯à°µà°¸à°¾à°¯ à°¹à±†à°šà±à°šà°°à°¿à°•',
    riskAssessmentTitle: 'à°ªà±à°°à°®à°¾à°¦ à°…à°‚à°šà°¨à°¾',
    riskLabel: 'à°ªà±à°°à°®à°¾à°¦à°‚',
    agronomistFollowupTitle: 'à°…à°—à±à°°à±‹à°¨à°®à°¿à°¸à±à°Ÿà± à°«à°¾à°²à±‹-à°…à°ªà±',
    specialistReferralAdvised: 'âš ï¸ à°¨à°¿à°ªà±à°£à±à°² à°°à±†à°«à°°à°²à± à°¸à°²à°¹à°¾: ',
    criticalDiseaseSeverity: 'à°µà±à°¯à°¾à°§à°¿ à°¤à±€à°µà±à°°à°¤ à°•à°¾à°°à°£à°‚à°—à°¾ à°…à°—à±à°°à±‹à°¨à°®à°¿à°¸à±à°Ÿà± à°¸à°®à±€à°•à±à°· à°…à°µà°¸à°°à°‚.',
    recommendedCheckIn: 'ðŸ“… à°¸à°¿à°«à°¾à°°à±à°¸à± à°šà±‡à°¸à°¿à°¨ à°¤à°¨à°¿à°–à±€: ',
    inSevenDays: '7 à°°à±‹à°œà±à°²à±à°²à±‹',
    standardMonitoringProtocol: 'à°ªà±à°°à°¾à°®à°¾à°£à°¿à°• à°ªà°°à±à°¯à°µà±‡à°•à±à°·à°£ à°ªà±à°°à±‹à°Ÿà±‹à°•à°¾à°²à±. à°•à±Šà°¤à±à°¤ à°®à°šà±à°šà°²à± à°•à°¨à°¿à°ªà°¿à°¸à±à°¤à±‡ à°®à°³à±à°²à±€ à°¸à±à°•à°¾à°¨à± à°šà±‡à°¯à°‚à°¡à°¿.',
    steps: 'à°¦à°¶à°²à±',
    statusActive: 'à°•à±à°°à°¿à°¯à°¾à°¶à±€à°²à°‚',
    loadingConversation: 'à°¸à°‚à°­à°¾à°·à°£ à°šà°°à°¿à°¤à±à°° à°²à±‹à°¡à± à°…à°µà±à°¤à±‹à°‚à°¦à°¿...',
    followUpSpecimen: 'à°«à°¾à°²à±‹-à°…à°ªà± à°†à°•à± à°¨à°®à±‚à°¨à°¾',
    followUpSpecimenPreview: 'à°«à°¾à°²à±‹-à°…à°ªà± à°†à°•à± à°¨à°®à±‚à°¨à°¾ à°ªà±à°°à°¿à°µà±à°¯à±‚',
  
    defaultFarmerName: 'à°°à±ˆà°¤à±',
    recentTimestamp: 'à°‡à°Ÿà±€à°µà°²à°¿',
    statusProcessing: 'à°ªà±à°°à°¾à°¸à±†à°¸à± à°šà±‡à°¯à°¬à°¡à±à°¤à±‹à°‚à°¦à°¿...',

    waterAdvisorCheckingForecast:
  "à°¨à±€à°Ÿà°¿à°ªà°¾à°°à±à°¦à°² à°¸à±‚à°šà°¨ à°‡à°µà±à°µà°¡à°¾à°¨à°¿à°•à°¿ à°®à±à°‚à°¦à± à°¤à°¾à°œà°¾ à°µà°¾à°¤à°¾à°µà°°à°£ à°¸à±‚à°šà°¨à°¨à± à°ªà°°à°¿à°¶à±€à°²à°¿à°¸à±à°¤à±‹à°‚à°¦à°¿.",

weatherSourceLive:
  "à°ªà±à°°à°¤à±à°¯à°•à±à°· à°µà°¾à°¤à°¾à°µà°°à°£ à°¸à°®à°¾à°šà°¾à°°à°‚",

weatherSourceFallback:
  "à°ªà±à°°à°¤à±à°¯à°¾à°®à±à°¨à°¾à°¯ à°µà°¾à°¤à°¾à°µà°°à°£ à°¸à°®à°¾à°šà°¾à°°à°‚",
  },

  hi: {
    // Extended Keys (hi)
    alertsTitle: 'à¤¸à¤•à¥à¤°à¤¿à¤¯ à¤šà¥‡à¤¤à¤¾à¤µà¤¨à¤¿à¤¯à¤¾à¤‚ à¤”à¤° à¤…à¤²à¤°à¥à¤Ÿ',
    checkingAlerts: 'à¤–à¥‡à¤¤ à¤•à¥€ à¤šà¥‡à¤¤à¤¾à¤µà¤¨à¤¿à¤¯à¥‹à¤‚ à¤•à¥€ à¤œà¤¾à¤‚à¤š à¤¹à¥‹ à¤°à¤¹à¥€ à¤¹à¥ˆ...',
    noActiveAlerts: 'à¤•à¥‹à¤ˆ à¤¸à¤•à¥à¤°à¤¿à¤¯ à¤«à¤¸à¤² à¤…à¤²à¤°à¥à¤Ÿ à¤¨à¤¹à¥€à¤‚',
    allFieldsNormal: 'à¤¸à¤­à¥€ à¤ªà¤‚à¤œà¥€à¤•à¥ƒà¤¤ à¤–à¥‡à¤¤ à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤®à¥‡à¤‚ à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯ à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤®à¥‡à¤‚ à¤¹à¥ˆà¤‚à¥¤',
    alertMarkedResolved: 'à¤…à¤²à¤°à¥à¤Ÿ à¤•à¤¾ à¤¸à¤®à¤¾à¤§à¤¾à¤¨ à¤•à¤° à¤¦à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾',
    alertReopened: 'à¤…à¤²à¤°à¥à¤Ÿ à¤ªà¥à¤¨à¤ƒ à¤–à¥‹à¤²à¤¾ à¤—à¤¯à¤¾',
    couldNotUpdateAlert: 'à¤…à¤²à¤°à¥à¤Ÿ à¤•à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤…à¤ªà¤¡à¥‡à¤Ÿ à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹ à¤¸à¤•à¥€à¥¤',
    couldNotLoadAlerts: 'à¤«à¤¸à¤² à¤…à¤²à¤°à¥à¤Ÿ à¤²à¥‹à¤¡ à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹ à¤¸à¤•à¥‡à¥¤',
    activeStatus: 'à¤¸à¤•à¥à¤°à¤¿à¤¯',
    resolvedStatus: 'à¤¸à¤®à¤¾à¤§à¤¾à¤¨à¤¿à¤¤',
    markResolved: 'à¤¸à¤®à¤¾à¤§à¤¾à¤¨à¤¿à¤¤ à¤šà¤¿à¤¹à¥à¤¨à¤¿à¤¤ à¤•à¤°à¥‡à¤‚',
    reopen: 'à¤ªà¥à¤¨à¤ƒ à¤–à¥‹à¤²à¥‡à¤‚',
    followUpsTitle: 'à¤¨à¤¿à¤°à¥à¤§à¤¾à¤°à¤¿à¤¤ à¤«à¥‰à¤²à¥‹-à¤…à¤ª',
    loadingFollowUps: 'à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤¶à¥‡à¤¡à¥à¤¯à¥‚à¤² à¤²à¥‹à¤¡ à¤¹à¥‹ à¤°à¤¹à¥‡ à¤¹à¥ˆà¤‚...',
    noPendingFollowUps: 'à¤•à¥‹à¤ˆ à¤²à¤‚à¤¬à¤¿à¤¤ à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ',
    noFollowUpsDesc: 'à¤‡à¤¸ à¤¸à¤®à¤¯ à¤•à¥‹à¤ˆ à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤‰à¤ªà¤šà¤¾à¤° à¤¯à¤¾ à¤ªà¥à¤¨à¤ƒ à¤¨à¤¿à¤°à¥€à¤•à¥à¤·à¤£ à¤¨à¤¿à¤°à¥à¤§à¤¾à¤°à¤¿à¤¤ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤',
    couldNotLoadFollowUps: 'à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤²à¥‹à¤¡ à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹ à¤¸à¤•à¥‡à¥¤',
    failedToUpdateFollowUp: 'à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤…à¤ªà¤¡à¥‡à¤Ÿ à¤•à¤°à¤¨à¥‡ à¤®à¥‡à¤‚ à¤µà¤¿à¤«à¤²',
    followUpScheduled: 'à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤¨à¤¿à¤°à¥à¤§à¤¾à¤°à¤¿à¤¤',
    markCompleted: 'à¤ªà¥‚à¤°à¥à¤£ à¤šà¤¿à¤¹à¥à¤¨à¤¿à¤¤ à¤•à¤°à¥‡à¤‚',
    referralsTitle: 'à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤ž à¤¸à¤®à¥€à¤•à¥à¤·à¤¾ à¤°à¥‡à¤«à¤°à¤²',
    checkingReferrals: 'à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤ž à¤°à¥‡à¤«à¤°à¤² à¤•à¥€ à¤œà¤¾à¤‚à¤š à¤¹à¥‹ à¤°à¤¹à¥€ à¤¹à¥ˆ...',
    noActiveReferrals: 'à¤•à¥‹à¤ˆ à¤¸à¤•à¥à¤°à¤¿à¤¯ à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤ž à¤°à¥‡à¤«à¤°à¤² à¤¨à¤¹à¥€à¤‚',
    noReferralsDesc: 'à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤®à¥‡à¤‚ à¤•à¥ƒà¤·à¤¿ à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤žà¥‹à¤‚ à¤•à¥‹ à¤•à¥‹à¤ˆ à¤®à¤¾à¤®à¤²à¤¾ à¤¸à¤‚à¤¦à¤°à¥à¤­à¤¿à¤¤ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤',
    couldNotLoadReferrals: 'à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤ž à¤°à¥‡à¤«à¤°à¤² à¤²à¥‹à¤¡ à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹ à¤¸à¤•à¥‡à¥¤',
    expertReviewPending: 'à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤ž à¤¸à¤®à¥€à¤•à¥à¤·à¤¾ à¤²à¤‚à¤¬à¤¿à¤¤',
    registeredFields: 'à¤ªà¤‚à¤œà¥€à¤•à¥ƒà¤¤ à¤–à¥‡à¤¤',
    plotNameLabel: 'à¤–à¥‡à¤¤ / à¤ªà¥à¤²à¥‰à¤Ÿ à¤•à¤¾ à¤¨à¤¾à¤®',
    plotNamePlaceholder: 'à¤‰à¤¦à¤¾. à¤‰à¤¤à¥à¤¤à¤°à¥€ à¤–à¥‡à¤¤ à¤Ÿà¤®à¤¾à¤Ÿà¤° à¤¬à¥à¤²à¥‰à¤•',
    primaryCropLabel: 'à¤®à¥à¤–à¥à¤¯ à¤«à¤¸à¤²',
    areaAcresLabel: 'à¤–à¥‡à¤¤ à¤•à¤¾ à¤†à¤•à¤¾à¤° (à¤à¤•à¤¡à¤¼)',
    enterFieldName: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤–à¥‡à¤¤ à¤•à¤¾ à¤¨à¤¾à¤® à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚',
    fieldRegisteredSuccess: 'à¤–à¥‡à¤¤ à¤¸à¤«à¤²à¤¤à¤¾à¤ªà¥‚à¤°à¥à¤µà¤• à¤ªà¤‚à¤œà¥€à¤•à¥ƒà¤¤ à¤•à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾',
    fieldRemovedSuccess: 'à¤–à¥‡à¤¤ à¤¸à¤«à¤²à¤¤à¤¾à¤ªà¥‚à¤°à¥à¤µà¤• à¤¹à¤Ÿà¤¾ à¤¦à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾',
    failedCreateField: 'à¤–à¥‡à¤¤ à¤¬à¤¨à¤¾à¤¨à¥‡ à¤®à¥‡à¤‚ à¤µà¤¿à¤«à¤²',
    failedRemoveField: 'à¤–à¥‡à¤¤ à¤¹à¤Ÿà¤¾à¤¨à¥‡ à¤®à¥‡à¤‚ à¤µà¤¿à¤«à¤²',
    couldNotLoadFields: 'à¤†à¤ªà¤•à¥‡ à¤ªà¤‚à¤œà¥€à¤•à¥ƒà¤¤ à¤–à¥‡à¤¤ à¤²à¥‹à¤¡ à¤¨à¤¹à¥€à¤‚ à¤•à¤¿à¤ à¤œà¤¾ à¤¸à¤•à¥‡à¥¤',
    noFieldsYet: 'à¤…à¤­à¥€ à¤¤à¤• à¤•à¥‹à¤ˆ à¤ªà¤‚à¤œà¥€à¤•à¥ƒà¤¤ à¤–à¥‡à¤¤ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ',
    noFieldsDesc: 'à¤°à¥‹à¤— à¤œà¥‹à¤–à¤¿à¤®, à¤®à¥Œà¤¸à¤® à¤ªà¥‚à¤°à¥à¤µà¤¾à¤¨à¥à¤®à¤¾à¤¨ à¤”à¤° à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤•à¥‹ à¤Ÿà¥à¤°à¥ˆà¤• à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤…à¤ªà¤¨à¥‡ à¤–à¥‡à¤¤à¥‹à¤‚ à¤•à¥‹ à¤ªà¤‚à¤œà¥€à¤•à¥ƒà¤¤ à¤•à¤°à¥‡à¤‚à¥¤',
    addNewField: 'à¤¨à¤¯à¤¾ à¤–à¥‡à¤¤ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚',
    loadingHistory: 'à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤²à¥‹à¤¡ à¤¹à¥‹ à¤°à¤¹à¤¾ à¤¹à¥ˆ...',
    fetchingPastScans: 'à¤†à¤ªà¤•à¥‡ à¤ªà¤¿à¤›à¤²à¥‡ à¤«à¤¸à¤² à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤¿à¤ à¤œà¤¾ à¤°à¤¹à¥‡ à¤¹à¥ˆà¤‚à¥¤',
    failedToLoadHistory: 'à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤²à¥‹à¤¡ à¤•à¤°à¤¨à¥‡ à¤®à¥‡à¤‚ à¤µà¤¿à¤«à¤²',
    noScansMatchSearch: 'à¤†à¤ªà¤•à¥€ à¤–à¥‹à¤œ à¤¸à¥‡ à¤®à¥‡à¤² à¤–à¤¾à¤¤à¤¾ à¤•à¥‹à¤ˆ à¤¸à¥à¤•à¥ˆà¤¨ à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¤¾',
    tryAdjustingSearch: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤…à¤ªà¤¨à¥‡ à¤–à¥‹à¤œ à¤¶à¤¬à¥à¤¦ à¤¯à¤¾ à¤«à¤¼à¤¿à¤²à¥à¤Ÿà¤° à¤¬à¤¦à¤²à¤•à¤° à¤¦à¥‡à¤–à¥‡à¤‚à¥¤',
    issueDetected: 'à¤¸à¤®à¤¸à¥à¤¯à¤¾ à¤ªà¤¾à¤ˆ à¤—à¤ˆ',
    healthyCondition: 'à¤¸à¥à¤µà¤¸à¥à¤¥ à¤¸à¥à¤¥à¤¿à¤¤à¤¿',
    voiceInputUnavailable: 'à¤µà¥‰à¤‡à¤¸ à¤‡à¤¨à¤ªà¥à¤Ÿ à¤…à¤¨à¥à¤ªà¤²à¤¬à¥à¤§ à¤¹à¥ˆ à¤¯à¤¾ à¤®à¤¾à¤‡à¤•à¥à¤°à¥‹à¤«à¤¼à¥‹à¤¨ à¤•à¥€ à¤…à¤¨à¥à¤®à¤¤à¤¿ à¤¨à¤¹à¥€à¤‚ à¤¦à¥€ à¤—à¤ˆà¥¤',
    speechNotSupported: 'à¤‡à¤¸ à¤¬à¥à¤°à¤¾à¤‰à¤œà¤¼à¤° à¤®à¥‡à¤‚ à¤¸à¥à¤ªà¥€à¤š à¤°à¤¿à¤•à¤—à¥à¤¨à¤¿à¤¶à¤¨ à¤¸à¤®à¤°à¥à¤¥à¤¿à¤¤ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤',
    listeningPrompt: 'à¤¸à¥à¤¨ à¤°à¤¹à¤¾ à¤¹à¥ˆ... à¤…à¤ªà¤¨à¤¾ à¤•à¥ƒà¤·à¤¿ à¤¸à¤‚à¤¬à¤‚à¤§à¥€ à¤ªà¥à¤°à¤¶à¥à¤¨ à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤°à¥‚à¤ª à¤¸à¥‡ à¤¬à¥‹à¤²à¥‡à¤‚à¥¤',
    ttsNotSupported: 'à¤‡à¤¸ à¤¬à¥à¤°à¤¾à¤‰à¤œà¤¼à¤° à¤®à¥‡à¤‚ à¤Ÿà¥‡à¤•à¥à¤¸à¥à¤Ÿ-à¤Ÿà¥‚-à¤¸à¥à¤ªà¥€à¤š à¤¸à¤®à¤°à¥à¤¥à¤¿à¤¤ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤',
    consultingGemini: 'à¤œà¥‡à¤®à¤¿à¤¨à¥€ à¤•à¥ƒà¤·à¤¿ à¤¸à¤²à¤¾à¤¹à¤•à¤¾à¤° à¤®à¥‰à¤¡à¤² à¤¸à¥‡ à¤ªà¤°à¤¾à¤®à¤°à¥à¤¶ à¤²à¤¿à¤¯à¤¾ à¤œà¤¾ à¤°à¤¹à¤¾ à¤¹à¥ˆ...',
    chatSuggestion1: 'à¤Ÿà¤®à¤¾à¤Ÿà¤° à¤®à¥‡à¤‚ à¤…à¤—à¥‡à¤¤à¥€ à¤à¥à¤²à¤¸à¤¾ à¤°à¥‹à¤— à¤¸à¥‡ à¤•à¥ˆà¤¸à¥‡ à¤¬à¤šà¤¾à¤µ à¤•à¤°à¥‡à¤‚?',
    chatSuggestion2: 'à¤®à¤¾à¤¹à¥‚ à¤”à¤° à¤¥à¥à¤°à¤¿à¤ªà¥à¤¸ à¤•à¥€à¤Ÿà¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤¬à¤¸à¥‡ à¤…à¤šà¥à¤›à¤¾ à¤œà¥ˆà¤µà¤¿à¤• à¤•à¥€à¤Ÿà¤¨à¤¾à¤¶à¤•?',
    chatSuggestion3: 'à¤«à¤¸à¤² à¤®à¥‡à¤‚ à¤«à¥‚à¤² à¤†à¤¨à¥‡ à¤•à¥€ à¤…à¤µà¤¸à¥à¤¥à¤¾ à¤®à¥‡à¤‚ à¤•à¥Œà¤¨ à¤¸à¤¾ à¤‰à¤°à¥à¤µà¤°à¤• à¤¦à¥‡à¤‚?',
    chatSuggestion4: 'à¤¬à¤¾à¤°à¤¿à¤¶ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤–à¥‡à¤¤ à¤®à¥‡à¤‚ à¤œà¤² à¤¨à¤¿à¤•à¤¾à¤¸à¥€ à¤•à¤¾ à¤ªà¥à¤°à¤¬à¤‚à¤§à¤¨ à¤•à¥ˆà¤¸à¥‡ à¤•à¤°à¥‡à¤‚?',
    chatInputPlaceholder: 'à¤‰à¤°à¥à¤µà¤°à¤•, à¤«à¤¸à¤² à¤°à¥‹à¤—, à¤œà¥ˆà¤µà¤¿à¤• à¤¸à¥à¤ªà¥à¤°à¥‡ à¤•à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚ à¤ªà¥‚à¤›à¥‡à¤‚...',
    listen: 'à¤¸à¥à¤¨à¥‡à¤‚',
    speakQuestion: 'à¤ªà¥à¤°à¤¶à¥à¤¨ à¤¬à¥‹à¤²à¥‡à¤‚',
    aiAgronomistTitle: 'à¤à¤†à¤ˆ à¤•à¥ƒà¤·à¤¿ à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤ž à¤šà¥ˆà¤Ÿ',
    weatherConditionClear: 'à¤¸à¤¾à¤« à¤†à¤¸à¤®à¤¾à¤¨',
    weatherConditionPartlyCloudy: 'à¤†à¤‚à¤¶à¤¿à¤• à¤¬à¤¾à¤¦à¤²',
    weatherConditionCloudy: 'à¤¬à¤¾à¤¦à¤² à¤›à¤¾à¤ à¤°à¤¹à¥‡à¤‚à¤—à¥‡',
    weatherConditionOvercast: 'à¤˜à¤¨à¥‡ à¤¬à¤¾à¤¦à¤²',
    weatherConditionFog: 'à¤•à¥‹à¤¹à¤°à¤¾ / à¤§à¥à¤‚à¤§',
    weatherConditionDrizzle: 'à¤¹à¤²à¥à¤•à¥€ à¤¬à¥‚à¤‚à¤¦à¤¾à¤¬à¤¾à¤‚à¤¦à¥€',
    weatherConditionRain: 'à¤µà¤°à¥à¤·à¤¾',
    weatherConditionHeavyRain: 'à¤­à¤¾à¤°à¥€ à¤µà¤°à¥à¤·à¤¾',
    weatherConditionThunderstorm: 'à¤—à¤°à¤œ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤¬à¥Œà¤›à¤¾à¤°à¥‡à¤‚',
    weatherAdvisoryPrecipitation: 'à¤¬à¤¾à¤°à¤¿à¤¶ à¤•à¥€ à¤…à¤¤à¥à¤¯à¤§à¤¿à¤• à¤¸à¤‚à¤­à¤¾à¤µà¤¨à¤¾ à¤¹à¥ˆà¥¤ à¤µà¤°à¥à¤·à¤¾ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤•à¥€à¤Ÿà¤¨à¤¾à¤¶à¤• à¤¯à¤¾ à¤«à¤«à¥‚à¤‚à¤¦à¤¨à¤¾à¤¶à¤• à¤•à¤¾ à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ à¤¸à¥à¤¥à¤—à¤¿à¤¤ à¤•à¤°à¤¨à¥‡ à¤ªà¤° à¤µà¤¿à¤šà¤¾à¤° à¤•à¤°à¥‡à¤‚à¥¤',
    weatherAdvisoryHumidity: 'à¤…à¤§à¤¿à¤• à¤¨à¤®à¥€ à¤”à¤° à¤¬à¤¾à¤°à¤¿à¤¶ à¤¸à¥‡ à¤«à¤«à¥‚à¤‚à¤¦ à¤œà¤¨à¤¿à¤¤ à¤°à¥‹à¤—à¥‹à¤‚ à¤•à¤¾ à¤–à¤¤à¤°à¤¾ à¤¬à¤¢à¤¼ à¤¸à¤•à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤«à¤¸à¤²à¥‹à¤‚ à¤•à¥€ à¤¬à¤¾à¤°à¥€à¤•à¥€ à¤¸à¥‡ à¤¨à¤¿à¤—à¤°à¤¾à¤¨à¥€ à¤•à¤°à¥‡à¤‚à¥¤',
    weatherAdvisoryNormal: 'à¤«à¤¸à¤² à¤µà¥ƒà¤¦à¥à¤§à¤¿ à¤”à¤° à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯ à¤•à¥ƒà¤·à¤¿ à¤•à¤¾à¤°à¥à¤¯à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤®à¥Œà¤¸à¤® à¤…à¤¨à¥à¤•à¥‚à¤² à¤¹à¥ˆà¥¤',
    weatherAdvisoryHot: 'à¤¤à¤¾à¤ªà¤®à¤¾à¤¨ à¤…à¤§à¤¿à¤• à¤¹à¥ˆà¥¤ à¤—à¤°à¥à¤®à¥€ à¤•à¥‡ à¤¤à¤¨à¤¾à¤µ à¤¸à¥‡ à¤¬à¤šà¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤«à¤¸à¤²à¥‹à¤‚ à¤•à¥‹ à¤ªà¤°à¥à¤¯à¤¾à¤ªà¥à¤¤ à¤ªà¤¾à¤¨à¥€ à¤¦à¥‡à¤‚à¥¤',
    weatherAdvisoryWind: 'à¤¤à¥‡à¤œ à¤¹à¤µà¤¾à¤à¤‚ à¤šà¤² à¤°à¤¹à¥€ à¤¹à¥ˆà¤‚à¥¤ à¤¦à¤µà¤¾à¤“à¤‚ à¤•à¥‡ à¤‰à¤¡à¤¼à¤¨à¥‡ à¤¸à¥‡ à¤¬à¤šà¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¤à¥‡à¤œ à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ à¤¨ à¤•à¤°à¥‡à¤‚à¥¤',
    couldNotFetchWeather: 'à¤®à¥Œà¤¸à¤® à¤•à¤¾ à¤ªà¥‚à¤°à¥à¤µà¤¾à¤¨à¥à¤®à¤¾à¤¨ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹ à¤¸à¤•à¤¾à¥¤',
    unknownLocation: 'à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤¸à¥à¤¥à¤¾à¤¨',
    currentConditions: 'à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤¸à¥à¤¥à¤¿à¤¤à¤¿',
    sevenDayForecast: '7-à¤¦à¤¿à¤µà¤¸à¥€à¤¯ à¤ªà¥‚à¤°à¥à¤µà¤¾à¤¨à¥à¤®à¤¾à¤¨',
    feelsLike: 'à¤®à¤¹à¤¸à¥‚à¤¸ à¤¤à¤¾à¤ªà¤®à¤¾à¤¨',
    humidityLabel: 'à¤¨à¤®à¥€ / à¤†à¤°à¥à¤¦à¥à¤°à¤¤à¤¾',
    windLabel: 'à¤¹à¤µà¤¾ à¤•à¥€ à¤—à¤¤à¤¿',
    precipitationLabel: 'à¤µà¤°à¥à¤·à¤¾ à¤•à¥€ à¤®à¤¾à¤¤à¥à¤°à¤¾',
    couldNotProcessImage: 'à¤›à¤µà¤¿ à¤¸à¤‚à¤¸à¤¾à¤§à¤¿à¤¤ à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹ à¤¸à¤•à¥€à¥¤ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ªà¥à¤¨à¤ƒ à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤•à¤°à¥‡à¤‚à¥¤',
    couldNotSendQuery: 'à¤ªà¥à¤°à¤¶à¥à¤¨ à¤­à¥‡à¤œà¤¾ à¤¨à¤¹à¥€à¤‚ à¤œà¤¾ à¤¸à¤•à¤¾à¥¤ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ªà¥à¤¨à¤ƒ à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤•à¤°à¥‡à¤‚à¥¤',
    steps: 'à¤•à¤¦à¤®',
    noRecommendationAvailable: 'à¤•à¥‹à¤ˆ à¤µà¤¿à¤¶à¤¿à¤·à¥à¤Ÿ à¤…à¤¨à¥à¤¶à¤‚à¤¸à¤¾ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤',
    quickPromptOrganic: 'à¤œà¥ˆà¤µà¤¿à¤• à¤‰à¤ªà¤šà¤¾à¤° à¤”à¤° à¤‰à¤ªà¤¾à¤¯',
    quickPromptChemical: 'à¤°à¤¾à¤¸à¤¾à¤¯à¤¨à¤¿à¤• à¤«à¤«à¥‚à¤‚à¤¦à¤¨à¤¾à¤¶à¤• à¤µà¤¿à¤•à¤²à¥à¤ª',
    quickPromptPrevention: 'à¤…à¤—à¤²à¥‡ à¤®à¥Œà¤¸à¤® à¤•à¥‡ à¤²à¤¿à¤ à¤¨à¤¿à¤µà¤¾à¤°à¤• à¤‰à¤ªà¤¾à¤¯',
    quickPromptFertilizer: 'à¤°à¥‹à¤— à¤•à¥‡ à¤¦à¥Œà¤°à¤¾à¤¨ à¤‰à¤°à¥à¤µà¤°à¤• à¤¸à¤‚à¤¬à¤‚à¤§à¥€ à¤¸à¤²à¤¾à¤¹',
    expertReferralDesc: 'à¤à¤†à¤ˆ à¤¨à¥‡ à¤—à¤‚à¤­à¥€à¤° à¤²à¤•à¥à¤·à¤£à¥‹à¤‚ à¤•à¤¾ à¤ªà¤¤à¤¾ à¤²à¤—à¤¾à¤¯à¤¾ à¤¹à¥ˆ, à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤ž à¤¸à¤®à¥€à¤•à¥à¤·à¤¾ à¤†à¤µà¤¶à¥à¤¯à¤• à¤¹à¥ˆà¥¤',
    followUpScheduledDesc: 'à¤‰à¤ªà¤šà¤¾à¤° à¤•à¥€ à¤ªà¥à¤°à¤—à¤¤à¤¿ à¤•à¥€ à¤ªà¥à¤·à¥à¤Ÿà¤¿ à¤•à¥‡ à¤²à¤¿à¤ à¤¨à¤¿à¤°à¥à¤§à¤¾à¤°à¤¿à¤¤ à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤¸à¥à¤•à¥ˆà¤¨à¥¤',
    cropHealthAlerts: 'à¤«à¤¸à¤² à¤¸à¥à¤µà¤¾à¤¸à¥à¤¥à¥à¤¯ à¤…à¤²à¤°à¥à¤Ÿ',
    treatmentFollowups: 'à¤‰à¤ªà¤šà¤¾à¤° à¤«à¥‰à¤²à¥‹-à¤…à¤ª',
    expertReferrals: 'à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤ž à¤°à¥‡à¤«à¤°à¤²',
    myFarmlandPlots: 'à¤®à¥‡à¤°à¥‡ à¤–à¥‡à¤¤ à¤”à¤° à¤ªà¥à¤²à¥‰à¤Ÿ',

    appName: 'à¤…à¤‚à¤—à¥‹à¤µà¤¿à¤¸ AI',
    sihTagline: 'SIH26131 à¤ªà¥à¤²à¥‡à¤Ÿà¤«à¥‰à¤°à¥à¤®',
    tagline: 'à¤¸à¤Ÿà¥€à¤• à¤•à¥ƒà¤·à¤¿ à¤‰à¤ªà¤•à¤°à¤£à¥‹à¤‚ à¤”à¤° à¤‰à¤ªà¤¯à¥‹à¤—à¥€ AI à¤…à¤‚à¤¤à¤°à¥à¤¦à¥ƒà¤·à¥à¤Ÿà¤¿ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤…à¤ªà¤¨à¥‡ à¤–à¥‡à¤¤ à¤•à¥‹ à¤¸à¤¶à¤•à¥à¤¤ à¤¬à¤¨à¤¾à¤à¤‚à¥¤',
    back: 'à¤µà¤¾à¤ªà¤¸',
    share: 'à¤¸à¤¾à¤à¤¾ à¤•à¤°à¥‡à¤‚',
    close: 'à¤¬à¤‚à¤¦ à¤•à¤°à¥‡à¤‚',
    confirm: 'à¤ªà¥à¤·à¥à¤Ÿà¤¿ à¤•à¤°à¥‡à¤‚',
    cancel: 'à¤°à¤¦à¥à¤¦ à¤•à¤°à¥‡à¤‚',
    save: 'à¤¸à¤¹à¥‡à¤œà¥‡à¤‚',
    edit: 'à¤¸à¤‚à¤ªà¤¾à¤¦à¤¿à¤¤ à¤•à¤°à¥‡à¤‚',
    delete: 'à¤¹à¤Ÿà¤¾à¤à¤‚',
    viewAll: 'à¤¸à¤­à¥€ à¤¦à¥‡à¤–à¥‡à¤‚',
    viewDetails: 'à¤µà¤¿à¤µà¤°à¤£ à¤¦à¥‡à¤–à¥‡à¤‚',
    takeAction: 'à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ à¤•à¤°à¥‡à¤‚',
    detailsUnavailable: 'à¤µà¤¿à¤µà¤°à¤£ à¤…à¤¨à¥à¤ªà¤²à¤¬à¥à¤§',
    loadOlderScans: 'à¤ªà¥à¤°à¤¾à¤¨à¥‡ à¤¸à¥à¤•à¥ˆà¤¨ à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚',
    searchPlaceholder: 'à¤«à¤¸à¤²à¥‡à¤‚, à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤¯à¤¾ à¤¤à¤¾à¤°à¥€à¤– à¤–à¥‹à¤œà¥‡à¤‚...',
    filter: 'à¤«à¤¼à¤¿à¤²à¥à¤Ÿà¤°',
    all: 'à¤¸à¤­à¥€',
    today: 'à¤†à¤œ',
    yesterday: 'à¤•à¤²',
    minsAgo: 'à¤®à¤¿à¤¨à¤Ÿ à¤ªà¤¹à¤²à¥‡',

    chooseLanguageTitle: 'à¤…à¤ªà¤¨à¥€ à¤­à¤¾à¤·à¤¾ à¤šà¥à¤¨à¥‡à¤‚',
    chooseLanguageSubtitle: 'à¤…à¤‚à¤—à¥‹à¤µà¤¿à¤¸ AI à¤‡à¤‚à¤Ÿà¤°à¤«à¤¼à¥‡à¤¸ à¤•à¥‡ à¤²à¤¿à¤ à¤…à¤ªà¤¨à¥€ à¤ªà¤¸à¤‚à¤¦à¥€à¤¦à¤¾ à¤­à¤¾à¤·à¤¾ à¤šà¥à¤¨à¥‡à¤‚à¥¤',
    continueBtn: 'à¤†à¤—à¥‡ à¤¬à¤¢à¤¼à¥‡à¤‚',
    languageChangedSuccess: 'à¤­à¤¾à¤·à¤¾ à¤¸à¤«à¤²à¤¤à¤¾à¤ªà¥‚à¤°à¥à¤µà¤• à¤¬à¤¦à¤² à¤¦à¥€ à¤—à¤ˆ à¤¹à¥ˆ!',
    langEnglish: 'à¤…à¤‚à¤—à¥à¤°à¥‡à¤œà¤¼à¥€ (English)',
    langTelugu: 'à¤¤à¥‡à¤²à¥à¤—à¥ (Telugu)',
    langHindi: 'à¤¹à¤¿à¤¨à¥à¤¦à¥€ (Hindi)',
    langMarathi: 'à¤®à¤°à¤¾à¤ à¥€ (Marathi)',

    welcomeHeader: 'à¤…à¤‚à¤—à¥‹à¤µà¤¿à¤¸ AI',
    welcomeSubtitle: 'à¤¸à¤Ÿà¥€à¤• à¤•à¥ƒà¤·à¤¿ à¤‰à¤ªà¤•à¤°à¤£à¥‹à¤‚ à¤”à¤° à¤µà¥à¤¯à¤¾à¤µà¤¹à¤¾à¤°à¤¿à¤• AI à¤¸à¤²à¤¾à¤¹ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤…à¤ªà¤¨à¥€ à¤–à¥‡à¤¤à¥€ à¤•à¥‹ à¤¸à¤¶à¤•à¥à¤¤ à¤¬à¤¨à¤¾à¤à¤‚à¥¤',
    landingWelcomeTo: 'à¤¸à¥à¤µà¤¾à¤—à¤¤ à¤¹à¥ˆ',
    landingCompanionText: 'à¤«à¤¸à¤² à¤¸à¥à¤µà¤¾à¤¸à¥à¤¥à¥à¤¯, à¤•à¥€à¤Ÿ à¤ªà¤¹à¤šà¤¾à¤¨ à¤”à¤° à¤¬à¥‡à¤¹à¤¤à¤° à¤–à¥‡à¤¤à¥€ à¤•à¥‡ à¤²à¤¿à¤ à¤†à¤ªà¤•à¤¾ à¤¸à¥à¤®à¤¾à¤°à¥à¤Ÿ à¤¸à¤¾à¤¥à¥€à¥¤',
    landingAnalyzeCrop: 'à¤«à¤¸à¤² à¤•à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¥‡à¤‚',
    landingHistory: 'à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸',
    landingTrustedByFarmers: 'à¤•à¤¿à¤¸à¤¾à¤¨à¥‹à¤‚ à¤•à¤¾ à¤­à¤°à¥‹à¤¸à¤¾',
    landingFarmersCount: '2.5K+ à¤•à¤¿à¤¸à¤¾à¤¨',
    landingMoveCursorHint: 'à¤–à¥‡à¤¤ à¤ªà¤° à¤…à¤ªà¤¨à¤¾ à¤•à¤°à¥à¤¸à¤° à¤²à¥‡ à¤œà¤¾à¤à¤‚',
    landingFarmerSignIn: 'à¤•à¤¿à¤¸à¤¾à¤¨ à¤²à¥‰à¤—à¤¿à¤¨',
    mobileOrEmailLabel: 'à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤¨à¤‚à¤¬à¤° à¤¯à¤¾ à¤ˆà¤®à¥‡à¤²',
    mobileOrEmailPlaceholder: 'à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤¨à¤‚à¤¬à¤° à¤¯à¤¾ à¤ˆà¤®à¥‡à¤² à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚',
    loginBtn: 'à¤†à¤—à¥‡ à¤¬à¤¢à¤¼à¥‡à¤‚',
    newToAgriVision: 'à¤…à¤‚à¤—à¥‹à¤µà¤¿à¤¸ à¤ªà¤° à¤¨à¤ à¤¹à¥ˆà¤‚?',
    createAccount: 'à¤–à¤¾à¤¤à¤¾ à¤¬à¤¨à¤¾à¤à¤‚',
    fullNameLabel: 'à¤ªà¥‚à¤°à¤¾ à¤¨à¤¾à¤®',
    fullNamePlaceholder: 'à¤‰à¤¦à¤¾. à¤°à¤®à¥‡à¤¶ à¤ªà¤Ÿà¥‡à¤²',
    emailLabel: 'à¤ˆà¤®à¥‡à¤² à¤ªà¤¤à¤¾',
    emailPlaceholder: 'farmer@AgnoVis.ai',
    phoneLabel: 'à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤¨à¤‚à¤¬à¤°',
    phonePlaceholder: '10 à¤…à¤‚à¤•à¥‹à¤‚ à¤•à¤¾ à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤¨à¤‚à¤¬à¤°',
    registerTab: 'à¤¨à¤ à¤•à¤¿à¤¸à¤¾à¤¨ à¤•à¤¾ à¤ªà¤‚à¤œà¥€à¤•à¤°à¤£',
    loginTab: 'à¤–à¤¾à¤¤à¥‡ à¤®à¥‡à¤‚ à¤²à¥‰à¤—à¤¿à¤¨ à¤•à¤°à¥‡à¤‚',
    registerBtn: 'à¤ªà¤‚à¤œà¥€à¤•à¤°à¤£ à¤•à¤°à¥‡à¤‚ à¤”à¤° à¤†à¤—à¥‡ à¤¬à¤¢à¤¼à¥‡à¤‚',
    alreadyHaveAccount: 'à¤•à¥à¤¯à¤¾ à¤ªà¤¹à¤²à¥‡ à¤¸à¥‡ à¤ªà¤‚à¤œà¥€à¤•à¥ƒà¤¤ à¤¹à¥ˆà¤‚?',
    loginLink: 'à¤¯à¤¹à¤¾à¤ à¤²à¥‰à¤—à¤¿à¤¨ à¤•à¤°à¥‡à¤‚',
    registerLink: 'à¤…à¤­à¥€ à¤ªà¤‚à¤œà¥€à¤•à¤°à¤£ à¤•à¤°à¥‡à¤‚',
    userNotFound: 'à¤‡à¤¨ à¤µà¤¿à¤µà¤°à¤£à¥‹à¤‚ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤•à¥‹à¤ˆ à¤•à¤¿à¤¸à¤¾à¤¨ à¤–à¤¾à¤¤à¤¾ à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¤¾à¥¤ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ªà¤¹à¤²à¥‡ à¤ªà¤‚à¤œà¥€à¤•à¤°à¤£ à¤•à¤°à¥‡à¤‚à¥¤',
    accountNotFound: 'à¤–à¤¾à¤¤à¤¾ à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¤¾à¥¤ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ªà¤¹à¤²à¥‡ à¤ªà¤‚à¤œà¥€à¤•à¤°à¤£ à¤•à¤°à¥‡à¤‚à¥¤',
    invalidLoginDetails: 'à¤…à¤®à¤¾à¤¨à¥à¤¯ à¤²à¥‰à¤—à¤¿à¤¨ à¤µà¤¿à¤µà¤°à¤£à¥¤ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ªà¥à¤¨à¤ƒ à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤•à¤°à¥‡à¤‚à¥¤',
    invalidIdentifierFormat: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤à¤• à¤®à¤¾à¤¨à¥à¤¯ à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤¨à¤‚à¤¬à¤° à¤¯à¤¾ à¤ˆà¤®à¥‡à¤² à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤',
    enterValidPassword: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤…à¤ªà¤¨à¤¾ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚ (à¤•à¤® à¤¸à¥‡ à¤•à¤® 4 à¤…à¤•à¥à¤·à¤°)à¥¤',
    passwordLabel: 'à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡',
    passwordPlaceholder: 'à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚',
    preferredLanguageLabel: 'à¤ªà¤¸à¤‚à¤¦à¥€à¤¦à¤¾ à¤­à¤¾à¤·à¤¾',
    registerNowLink: 'à¤…à¤­à¥€ à¤ªà¤‚à¤œà¥€à¤•à¤°à¤£ à¤•à¤°à¥‡à¤‚',
    enterValidName: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤…à¤ªà¤¨à¤¾ à¤ªà¥‚à¤°à¤¾ à¤¨à¤¾à¤® à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚ (à¤•à¤® à¤¸à¥‡ à¤•à¤® 2 à¤…à¤•à¥à¤·à¤°)à¥¤',
    enterValidEmail: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤à¤• à¤µà¥ˆà¤§ à¤ˆà¤®à¥‡à¤² à¤ªà¤¤à¤¾ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤',
    enterValidPhone: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤à¤• à¤®à¤¾à¤¨à¥à¤¯ 10 à¤…à¤‚à¤•à¥‹à¤‚ à¤•à¤¾ à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤¨à¤‚à¤¬à¤° à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤',
    registrationSuccess: 'à¤•à¤¿à¤¸à¤¾à¤¨ à¤–à¤¾à¤¤à¤¾ à¤¸à¤«à¤²à¤¤à¤¾à¤ªà¥‚à¤°à¥à¤µà¤• à¤ªà¤‚à¤œà¥€à¤•à¥ƒà¤¤ à¤•à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾!',
    loginSuccess: 'à¤²à¥‰à¤—à¤¿à¤¨ à¤¸à¤«à¤²! à¤ªà¥à¤¨à¤ƒ à¤¸à¥à¤µà¤¾à¤—à¤¤ à¤¹à¥ˆà¥¤',
    accountDetails: 'à¤–à¤¾à¤¤à¤¾ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€',
    registeredOn: 'à¤ªà¤‚à¤œà¥€à¤•à¤°à¤£ à¤¤à¤¿à¤¥à¤¿',
    noAnalysesYet: 'à¤…à¤­à¥€ à¤¤à¤• à¤•à¥‹à¤ˆ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¨à¤¹à¥€à¤‚ à¤¹à¥à¤† à¤¹à¥ˆ',
    noAnalysesYetSub: 'à¤…à¤ªà¤¨à¤¾ à¤ªà¤¹à¤²à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¶à¥à¤°à¥‚ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤«à¤¸à¤² à¤•à¥€ à¤¤à¤¸à¥à¤µà¥€à¤° à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚ à¤¯à¤¾ à¤–à¥€à¤‚à¤šà¥‡à¤‚à¥¤',
    startScanNow: 'à¤ªà¤¹à¤²à¤¾ à¤¸à¥à¤•à¥ˆà¤¨ à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‡à¤‚',
    analyzeMyCropBtn: 'à¤®à¥‡à¤°à¥€ à¤«à¤¸à¤² à¤•à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¥‡à¤‚',
    memberVerified: 'à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¿à¤¤ à¤•à¤¿à¤¸à¤¾à¤¨',
    sessionRestored: 'à¤¸à¥à¤µà¤¾à¤—à¤¤ à¤¹à¥ˆ! à¤†à¤ªà¤•à¤¾ à¤¸à¤¤à¥à¤° à¤ªà¥à¤¨à¤ƒ à¤¸à¤•à¥à¤°à¤¿à¤¯ à¤•à¤° à¤¦à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾ à¤¹à¥ˆà¥¤',
    memberUserId: 'à¤•à¤¿à¤¸à¤¾à¤¨ ID',

    navHome: 'à¤¹à¥‹à¤®',
    navHistory: 'à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸',
    navProfile: 'à¤ªà¥à¤°à¥‹à¤«à¤¼à¤¾à¤‡à¤²',
    navFields: 'à¤–à¥‡à¤¤',
    navChat: 'AI à¤šà¥ˆà¤Ÿ',
    navAlerts: 'à¤…à¤²à¤°à¥à¤Ÿ',
    weatherForecast: 'à¤®à¥Œà¤¸à¤® à¤ªà¥‚à¤°à¥à¤µà¤¾à¤¨à¥à¤®à¤¾à¤¨',

    greetingPrefix: 'à¤¶à¥à¤­ à¤ªà¥à¤°à¤­à¤¾à¤¤',
    greetingReadyText: 'à¤•à¥à¤¯à¤¾ à¤†à¤ª à¤†à¤œ à¤…à¤ªà¤¨à¥‡ à¤–à¥‡à¤¤à¥‹à¤‚ à¤•à¤¾ à¤¨à¤¿à¤°à¥€à¤•à¥à¤·à¤£ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¤à¥ˆà¤¯à¤¾à¤° à¤¹à¥ˆà¤‚?',
    analyzeMyCrop: 'à¤®à¥‡à¤°à¥€ à¤«à¤¸à¤² à¤•à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¥‡à¤‚',
    captureImage: 'à¤¤à¤¸à¥à¤µà¥€à¤° à¤²à¥‡à¤‚',
    captureImageSub: 'à¤²à¤¾à¤‡à¤µ à¤¸à¥à¤•à¥ˆà¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤•à¥ˆà¤®à¤°à¥‡ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚',
    uploadImage: 'à¤¤à¤¸à¥à¤µà¥€à¤° à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚',
    uploadImageSub: 'à¤—à¥ˆà¤²à¤°à¥€ à¤¸à¥‡ à¤šà¤¯à¤¨ à¤•à¤°à¥‡à¤‚',
    recentAnalyses: 'à¤¹à¤¾à¤²à¤¿à¤¯à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£',
    aiInsightsTips: 'AI à¤…à¤‚à¤¤à¤°à¥à¤¦à¥ƒà¤·à¥à¤Ÿà¤¿ à¤”à¤° à¤¸à¥à¤à¤¾à¤µ',
    wateringWindowTipTitle: 'à¤¸à¤¿à¤‚à¤šà¤¾à¤ˆ à¤•à¤¾ à¤¸à¤°à¥à¤µà¥‹à¤¤à¥à¤¤à¤® à¤¸à¤®à¤¯',
    wateringWindowTipDesc: 'à¤–à¥‡à¤¤ B à¤®à¥‡à¤‚ à¤®à¤¿à¤Ÿà¥à¤Ÿà¥€ à¤•à¥€ à¤¨à¤®à¥€ à¤¸à¥‡à¤‚à¤¸à¤° à¤•à¥‡ à¤†à¤§à¤¾à¤° à¤ªà¤°, à¤†à¤œ à¤¶à¤¾à¤® 4 à¤¸à¥‡ 6 à¤¬à¤œà¥‡ à¤•à¥‡ à¤¬à¥€à¤š à¤¸à¤¿à¤‚à¤šà¤¾à¤ˆ à¤•à¤°à¤¨à¤¾ à¤¸à¤¬à¤¸à¥‡ à¤‰à¤ªà¤¯à¥à¤•à¥à¤¤ à¤°à¤¹à¥‡à¤—à¤¾à¥¤',
    pestAlertTipTitle: 'à¤•à¥€à¤Ÿ à¤šà¥‡à¤¤à¤¾à¤µà¤¨à¥€: à¤®à¤¾à¤¹à¥‚ (à¤à¤«à¤¿à¤¡à¥à¤¸)',
    pestAlertTipDesc: 'à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¥€à¤¯ à¤¡à¥‡à¤Ÿà¤¾ à¤‡à¤¸ à¤¸à¤ªà¥à¤¤à¤¾à¤¹ à¤à¤«à¤¿à¤¡à¥à¤¸ à¤•à¥‡ à¤‰à¤šà¥à¤š à¤œà¥‹à¤–à¤¿à¤® à¤•à¤¾ à¤¸à¤‚à¤•à¥‡à¤¤ à¤¦à¥‡à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤—à¥à¤°à¥€à¤¨à¤¹à¤¾à¤‰à¤¸ 1 à¤•à¥‡ à¤²à¤¿à¤ à¤¨à¤¿à¤µà¤¾à¤°à¤• à¤¸à¥à¤•à¥ˆà¤¨à¤¿à¤‚à¤— à¤•à¤°à¥‡à¤‚à¥¤',

    // Tips for a Better Scan
    scanTipsTitle: 'à¤¬à¥‡à¤¹à¤¤à¤° à¤¸à¥à¤•à¥ˆà¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¥à¤à¤¾à¤µ',
    scanTipsSubtitle: 'à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤”à¤° à¤…à¤šà¥à¤›à¥€ à¤°à¥‹à¤¶à¤¨à¥€ à¤µà¤¾à¤²à¥€ à¤¤à¤¸à¥à¤µà¥€à¤°à¥‡à¤‚ AgnoVis AI à¤•à¥‹ à¤¬à¥‡à¤¹à¤¤à¤° à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤ªà¥à¤°à¤¦à¤¾à¤¨ à¤•à¤°à¤¨à¥‡ à¤®à¥‡à¤‚ à¤®à¤¦à¤¦ à¤•à¤°à¤¤à¥€ à¤¹à¥ˆà¤‚à¥¤',
    scanTip1: 'à¤ªà¤¤à¥à¤¤à¥€ à¤•à¥€ à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤¤à¤¸à¥à¤µà¥€à¤° à¤²à¥‡à¤‚',
    scanTip2: 'à¤ªà¥à¤°à¤­à¤¾à¤µà¤¿à¤¤ à¤¹à¤¿à¤¸à¥à¤¸à¤¾ à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤°à¥‚à¤ª à¤¸à¥‡ à¤¦à¤¿à¤–à¤¾à¤ˆ à¤¦à¥‡à¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤',
    scanTip3: 'à¤…à¤šà¥à¤›à¥€ à¤°à¥‹à¤¶à¤¨à¥€ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚',
    scanTip4: 'à¤§à¥à¤‚à¤§à¤²à¥€ à¤¯à¤¾ à¤¦à¥‚à¤° à¤•à¥€ à¤¤à¤¸à¥à¤µà¥€à¤°à¥‹à¤‚ à¤¸à¥‡ à¤¬à¤šà¥‡à¤‚',
    startAnalysisCta: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‡à¤‚ â†’',

    // What AgnoVis AI Can Detect
    whatCanDetectTitle: 'AgnoVis AI à¤•à¥à¤¯à¤¾ à¤ªà¤¹à¤šà¤¾à¤¨ à¤¸à¤•à¤¤à¤¾ à¤¹à¥ˆ',
    supportedCropsSubtitle: 'à¤¸à¤®à¤°à¥à¤¥à¤¿à¤¤ à¤«à¤¸à¤²à¥‡à¤‚',
    diseaseDetectionTitle: 'à¤°à¥‹à¤— à¤ªà¤¹à¤šà¤¾à¤¨',
    diseaseDetectionDesc: 'à¤«à¤¸à¤² à¤°à¥‹à¤—à¥‹à¤‚ à¤”à¤° à¤¸à¥à¤µà¤¸à¥à¤¥ à¤¸à¥à¤¥à¤¿à¤¤à¤¿à¤¯à¥‹à¤‚ à¤•à¥€ à¤à¤†à¤ˆ-à¤¸à¤‚à¤šà¤¾à¤²à¤¿à¤¤ à¤ªà¤¹à¤šà¤¾à¤¨à¥¤',
    pestDetectionTitle: 'à¤•à¥€à¤Ÿ à¤ªà¤¹à¤šà¤¾à¤¨',
    pestDetectionDesc: 'à¤«à¤¸à¤²-à¤†à¤§à¤¾à¤°à¤¿à¤¤ à¤•à¥€à¤Ÿ à¤«à¤¼à¤¿à¤²à¥à¤Ÿà¤°à¤¿à¤‚à¤— à¤•à¥‡ à¤¸à¤¾à¤¥ à¤•à¥€à¤Ÿ à¤ªà¤¹à¤šà¤¾à¤¨à¥¤',
    managementRecommendationsTitle: 'à¤ªà¥à¤°à¤¬à¤‚à¤§à¤¨ à¤¸à¤¿à¤«à¤¾à¤°à¤¿à¤¶à¥‡à¤‚',
    managementRecommendationsDesc: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¥‡ à¤†à¤§à¤¾à¤° à¤ªà¤° à¤µà¥à¤¯à¤¾à¤µà¤¹à¤¾à¤°à¤¿à¤• à¤…à¤—à¤²à¥‡ à¤•à¤¦à¤®à¥‹à¤‚ à¤•à¤¾ à¤®à¤¾à¤°à¥à¤—à¤¦à¤°à¥à¤¶à¤¨ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚à¥¤',

    captureCropImageTitle: 'à¤«à¤¸à¤² à¤•à¥€ à¤¤à¤¸à¥à¤µà¥€à¤° à¤²à¥‡à¤‚',
    captureCropImageSubtitle: 'AI à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¥‡ à¤²à¤¿à¤ à¤«à¤¸à¤² à¤¯à¤¾ à¤ªà¥à¤°à¤­à¤¾à¤µà¤¿à¤¤ à¤ªà¤¤à¥à¤¤à¥€ à¤•à¥€ à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤¤à¤¸à¥à¤µà¥€à¤° à¤²à¥‡à¤‚à¥¤',
    openCamera: 'à¤•à¥ˆà¤®à¤°à¤¾ à¤–à¥‹à¤²à¥‡à¤‚',
    openCameraSub: 'à¤…à¤­à¥€ à¤¨à¤ˆ à¤¤à¤¸à¥à¤µà¥€à¤° à¤²à¥‡à¤‚',
    uploadFromGallery: 'à¤—à¥ˆà¤²à¤°à¥€ à¤¸à¥‡ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚',
    uploadFromGallerySub: 'à¤®à¥Œà¤œà¥‚à¤¦à¤¾ à¤¤à¤¸à¥à¤µà¥€à¤° à¤šà¥à¤¨à¥‡à¤‚',
    photoGuidelinesTitle: 'à¤«à¥‹à¤Ÿà¥‹ à¤¸à¤‚à¤¬à¤‚à¤§à¥€ à¤¦à¤¿à¤¶à¤¾à¤¨à¤¿à¤°à¥à¤¦à¥‡à¤¶',
    guideline1: 'à¤…à¤šà¥à¤›à¤¾ à¤”à¤° à¤ªà¥à¤°à¤¾à¤•à¥ƒà¤¤à¤¿à¤• à¤ªà¥à¤°à¤•à¤¾à¤¶ à¤¸à¥à¤¨à¤¿à¤¶à¥à¤šà¤¿à¤¤ à¤•à¤°à¥‡à¤‚à¥¤ à¤—à¤¹à¤°à¥€ à¤›à¤¾à¤¯à¤¾ à¤¸à¥‡ à¤¬à¤šà¥‡à¤‚à¥¤',
    guideline2: 'à¤µà¤¿à¤·à¤¯ à¤•à¥‹ à¤•à¥‡à¤‚à¤¦à¥à¤°à¤¿à¤¤ à¤”à¤° à¤«à¥‹à¤•à¤¸ à¤®à¥‡à¤‚ à¤°à¤–à¥‡à¤‚à¥¤',
    guideline3: 'à¤ªà¥‚à¤°à¥‡ à¤ªà¥à¤°à¤­à¤¾à¤µà¤¿à¤¤ à¤•à¥à¤·à¥‡à¤¤à¥à¤° à¤•à¥€ à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤¤à¤¸à¥à¤µà¥€à¤° à¤²à¥‡à¤‚à¥¤',
    analyzeImageBtn: 'à¤¤à¤¸à¥à¤µà¥€à¤° à¤•à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¥‡à¤‚',
    selectImageHint: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¶à¥à¤°à¥‚ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤«à¤¸à¤² à¤šà¥à¤¨à¥‡à¤‚ à¤”à¤° à¤¤à¤¸à¥à¤µà¥€à¤° à¤ªà¥à¤°à¤¦à¤¾à¤¨ à¤•à¤°à¥‡à¤‚à¥¤',
    changeImage: 'à¤¤à¤¸à¥à¤µà¥€à¤° à¤¬à¤¦à¤²à¥‡à¤‚',
    testWithSample: 'à¤¨à¤®à¥‚à¤¨à¤¾ à¤«à¤¸à¤²à¥‡à¤‚ à¤†à¤œà¤¼à¤®à¤¾à¤à¤‚',
    noImageSelectedYet: 'à¤…à¤­à¥€ à¤¤à¤• à¤•à¥‹à¤ˆ à¤šà¤¿à¤¤à¥à¤° à¤¨à¤¹à¥€à¤‚ à¤šà¥à¤¨à¤¾ à¤—à¤¯à¤¾',
    noImageSelectedSub: 'à¤†à¤—à¥‡ à¤¬à¤¢à¤¼à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¤¤à¥à¤¤à¥€ à¤•à¤¾ à¤«à¥‹à¤Ÿà¥‹ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚ à¤¯à¤¾ à¤•à¥ˆà¤®à¤°à¥‡ à¤¸à¥‡ à¤²à¥‡à¤‚à¥¤',
    pleaseSelectCrop: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ªà¤¹à¤²à¥‡ à¤à¤• à¤«à¤¸à¤² à¤šà¥à¤¨à¥‡à¤‚à¥¤',
    pleaseSelectCropFirst: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ªà¤¹à¤²à¥‡ à¤à¤• à¤«à¤¸à¤² à¤šà¥à¤¨à¥‡à¤‚à¥¤',
    pleaseUploadOrCapture: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤à¤• à¤›à¤µà¤¿ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚ à¤¯à¤¾ à¤«à¥‹à¤Ÿà¥‹ à¤²à¥‡à¤‚à¥¤',
    pleaseSelectCropAndImage: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤à¤• à¤«à¤¸à¤² à¤šà¥à¤¨à¥‡à¤‚ à¤”à¤° à¤à¤• à¤›à¤µà¤¿ à¤ªà¥à¤°à¤¦à¤¾à¤¨ à¤•à¤°à¥‡à¤‚à¥¤',
    selectCropLabel: 'à¤«à¤¸à¤² à¤šà¥à¤¨à¥‡à¤‚',
    selectedCropLabel: 'à¤šà¥à¤¨à¥€ à¤—à¤ˆ à¤«à¤¸à¤²',
    noCropSelectedYet: 'à¤…à¤­à¥€ à¤•à¥‹à¤ˆ à¤«à¤¸à¤² à¤¨à¤¹à¥€à¤‚ à¤šà¥à¤¨à¥€ à¤—à¤ˆ',
    readyForAnalysis: 'AI à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¥‡ à¤²à¤¿à¤ à¤¤à¥ˆà¤¯à¤¾à¤°',
    cameraSource: 'à¤•à¥ˆà¤®à¤°à¤¾ à¤«à¥‹à¤Ÿà¥‹',
    uploadSource: 'à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¥€ à¤—à¤ˆ à¤«à¥‹à¤Ÿà¥‹',
    removeImage: 'à¤›à¤µà¤¿ à¤¹à¤Ÿà¤¾à¤à¤‚',
    takePhoto: 'à¤«à¥‹à¤Ÿà¥‹ à¤²à¥‡à¤‚',
    retakePhoto: 'à¤¦à¥‹à¤¬à¤¾à¤°à¤¾ à¤«à¥‹à¤Ÿà¥‹ à¤²à¥‡à¤‚',
    switchCamera: 'à¤•à¥ˆà¤®à¤°à¤¾ à¤¬à¤¦à¤²à¥‡à¤‚',
    closeCamera: 'à¤•à¥ˆà¤®à¤°à¤¾ à¤¬à¤‚à¤¦ à¤•à¤°à¥‡à¤‚',
    cameraPermissionDenied: 'à¤•à¥ˆà¤®à¤°à¤¾ à¤…à¤¨à¥à¤®à¤¤à¤¿ à¤…à¤¸à¥à¤µà¥€à¤•à¥ƒà¤¤ à¤•à¤° à¤¦à¥€ à¤—à¤ˆà¥¤ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤•à¥ˆà¤®à¤°à¤¾ à¤à¤•à¥à¤¸à¥‡à¤¸ à¤¸à¤•à¥à¤·à¤® à¤•à¤°à¥‡à¤‚à¥¤',
    cameraUnavailable: 'à¤•à¥ˆà¤®à¤°à¤¾ à¤…à¤¨à¥à¤ªà¤²à¤¬à¥à¤§ à¤¹à¥ˆ à¤¯à¤¾ à¤¸à¤®à¤°à¥à¤¥à¤¿à¤¤ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤',

    analyzingImageTitle: 'à¤†à¤ªà¤•à¥€ à¤¤à¤¸à¥à¤µà¥€à¤° à¤•à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾ à¤°à¤¹à¤¾ à¤¹à¥ˆ...',
    analyzingImageSubtitle: 'à¤¹à¤®à¤¾à¤°à¤¾ AI à¤¬à¤¾à¤°à¥€à¤•à¤¿à¤¯à¥‹à¤‚ à¤•à¥€ à¤—à¤¹à¤°à¤¾à¤ˆ à¤¸à¥‡ à¤œà¤¾à¤‚à¤š à¤•à¤° à¤°à¤¹à¤¾ à¤¹à¥ˆà¥¤',
    stepUpload: 'à¤…à¤ªà¤²à¥‹à¤¡',
    stepUploadSub: 'à¤ªà¥à¤°à¤¸à¤‚à¤¸à¥à¤•à¤°à¤£ à¤•à¥‡ à¤²à¤¿à¤ à¤¤à¤¸à¥à¤µà¥€à¤° à¤¤à¥ˆà¤¯à¤¾à¤° à¤•à¥€ à¤œà¤¾ à¤°à¤¹à¥€ à¤¹à¥ˆà¥¤',
    stepIdentify: 'à¤ªà¤¹à¤šà¤¾à¤¨',
    stepIdentifySub: 'à¤ªà¥Œà¤§à¥‡ à¤•à¥€ à¤ªà¥à¤°à¤œà¤¾à¤¤à¤¿ à¤”à¤° à¤•à¤¿à¤¸à¥à¤® à¤•à¥€ à¤ªà¤¹à¤šà¤¾à¤¨ à¤•à¥€ à¤œà¤¾ à¤°à¤¹à¥€ à¤¹à¥ˆà¥¤',
    stepAnalyze: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£',
    stepAnalyzeSub: 'à¤°à¥‹à¤— à¤¯à¤¾ à¤¤à¤¨à¤¾à¤µ à¤•à¥‡ à¤¸à¤‚à¤•à¥‡à¤¤à¥‹à¤‚ à¤•à¥€ à¤œà¤¾à¤‚à¤š à¤•à¥€ à¤œà¤¾ à¤°à¤¹à¥€ à¤¹à¥ˆà¥¤',
    stepResult: 'à¤ªà¤°à¤¿à¤£à¤¾à¤®',
    stepResultSub: 'à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤¸à¤¿à¤«à¤¾à¤°à¤¿à¤¶à¥‡à¤‚ à¤¤à¥ˆà¤¯à¤¾à¤° à¤•à¥€ à¤œà¤¾ à¤°à¤¹à¥€ à¤¹à¥ˆà¤‚à¥¤',

    multipleCropTitle: 'à¤à¤• à¤¸à¥‡ à¤…à¤§à¤¿à¤• à¤¸à¤‚à¤­à¤¾à¤µà¤¿à¤¤ à¤«à¤¸à¤²à¥‡à¤‚ à¤®à¤¿à¤²à¥€à¤‚à¥¤',
    multipleCropSubtitle: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤œà¤¾à¤°à¥€ à¤°à¤–à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤¨à¥€à¤šà¥‡ à¤¦à¤¿à¤ à¤—à¤ à¤µà¤¿à¤•à¤²à¥à¤ªà¥‹à¤‚ à¤®à¥‡à¤‚ à¤¸à¥‡ à¤¸à¤¹à¥€ à¤«à¤¸à¤² à¤•à¤¾ à¤šà¤¯à¤¨ à¤•à¤°à¥‡à¤‚à¥¤',
    multipleCropQuestion: 'à¤†à¤ª à¤•à¤¿à¤¸ à¤«à¤¸à¤² à¤•à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤° à¤°à¤¹à¥‡ à¤¹à¥ˆà¤‚?',
    analyzedImageLabel: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤¿à¤¤ à¤¤à¤¸à¥à¤µà¥€à¤°',
    selectCropType: 'à¤«à¤¸à¤² à¤•à¤¾ à¤ªà¥à¤°à¤•à¤¾à¤° à¤šà¥à¤¨à¥‡à¤‚:',
    continueAnalysisBtn: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤œà¤¾à¤°à¥€ à¤°à¤–à¥‡à¤‚',

    criticalActionRequired: 'à¤¤à¥à¤µà¤°à¤¿à¤¤ à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ à¤†à¤µà¤¶à¥à¤¯à¤•',
    optimalHealth: 'à¤‰à¤¤à¥à¤•à¥ƒà¤·à¥à¤Ÿ à¤¸à¥à¤µà¤¾à¤¸à¥à¤¥à¥à¤¯',
    needsAttention: 'à¤§à¥à¤¯à¤¾à¤¨ à¤¦à¥‡à¤¨à¥‡ à¤•à¥€ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾',
    analysisSummaryTitle: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¸à¤¾à¤°à¤¾à¤‚à¤¶',
    scannedJustNow: '2 à¤®à¤¿à¤¨à¤Ÿ à¤ªà¤¹à¤²à¥‡ à¤¸à¥à¤•à¥ˆà¤¨ à¤•à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾',
    diseaseDetectedTitle: 'à¤°à¥‹à¤— à¤•à¤¾ à¤ªà¤¤à¤¾ à¤šà¤²à¤¾',
    confidenceScore: 'à¤¸à¤Ÿà¥€à¤•à¤¤à¤¾ à¤¸à¥à¤•à¥‹à¤°',
    pestActivityTitle: 'à¤•à¥€à¤Ÿ à¤—à¤¤à¤¿à¤µà¤¿à¤§à¤¿',
    noneDetected: 'à¤•à¥‹à¤ˆ à¤•à¥€à¤Ÿ à¤¨à¤¹à¥€à¤‚ à¤ªà¤¾à¤¯à¤¾ à¤—à¤¯à¤¾',
    currentlySafe: 'à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤®à¥‡à¤‚ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤',
    recommendedActionTitle: 'à¤¸à¤¿à¤«à¤¾à¤°à¤¿à¤¶ à¤•à¥€ à¤—à¤ˆ à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ',
    noAnalysisResultAvailable: 'à¤…à¤­à¥€ à¤¤à¤• à¤•à¥‹à¤ˆ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤ªà¤°à¤¿à¤£à¤¾à¤® à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤',
    noRecommendationAvailable: 'à¤…à¤­à¥€ à¤¤à¤• à¤•à¥‹à¤ˆ à¤…à¤¨à¥à¤¶à¤‚à¤¸à¤¾ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤',
    valueNone: 'à¤•à¥‹à¤ˆ à¤¨à¤¹à¥€à¤‚',
    statusPending: 'à¤²à¤‚à¤¬à¤¿à¤¤',
    logTreatmentPlan: 'à¤‰à¤ªà¤šà¤¾à¤° à¤¯à¥‹à¤œà¤¨à¤¾ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚',
    treatmentPlanSaved: 'à¤‰à¤ªà¤šà¤¾à¤° à¤¯à¥‹à¤œà¤¨à¤¾ à¤¸à¤«à¤²à¤¤à¤¾à¤ªà¥‚à¤°à¥à¤µà¤• à¤¸à¤¹à¥‡à¤œ à¤²à¥€ à¤—à¤ˆ!',
    aiDisclaimer: 'à¤…à¤¸à¥à¤µà¥€à¤•à¤°à¤£: à¤¯à¤¹ AI-à¤œà¤¨à¤¿à¤¤ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¥‡à¤µà¤² à¤¸à¥‚à¤šà¤¨à¤¾à¤¤à¥à¤®à¤• à¤‰à¤¦à¥à¤¦à¥‡à¤¶à¥à¤¯à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤¹à¥ˆ à¤”à¤° à¤ªà¥‡à¤¶à¥‡à¤µà¤° à¤•à¥ƒà¤·à¤¿ à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤ž à¤•à¥€ à¤¸à¤²à¤¾à¤¹ à¤•à¤¾ à¤µà¤¿à¤•à¤²à¥à¤ª à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤ à¤¹à¤¾à¤²à¤¾à¤‚à¤•à¤¿ à¤…à¤‚à¤—à¥‹à¤µà¤¿à¤¸ AI à¤‰à¤šà¥à¤š à¤¸à¤Ÿà¥€à¤•à¤¤à¤¾ à¤•à¤¾ à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ, à¤—à¤²à¤¤ à¤ªà¤¹à¤šà¤¾à¤¨ à¤•à¥€ à¤¸à¤‚à¤­à¤¾à¤µà¤¨à¤¾ à¤¹à¥‹ à¤¸à¤•à¤¤à¥€ à¤¹à¥ˆà¥¤ à¤°à¤¾à¤¸à¤¾à¤¯à¤¨à¤¿à¤• à¤‰à¤ªà¤šà¤¾à¤° à¤²à¤¾à¤—à¥‚ à¤•à¤°à¤¨à¥‡ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤¹à¤®à¥‡à¤¶à¤¾ à¤¸à¥à¤¥à¤¾à¤¨à¥€à¤¯ à¤ªà¥à¤°à¤®à¤¾à¤£à¤¿à¤¤ à¤•à¥ƒà¤·à¤¿ à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤ž à¤¸à¥‡ à¤ªà¥à¤·à¥à¤Ÿà¤¿ à¤•à¤°à¥‡à¤‚à¥¤',

    askAgronomistTitle: 'à¤•à¥ƒà¤·à¤¿ à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤ž à¤¸à¥‡ à¤ªà¥‚à¤›à¥‡à¤‚',
    askAgronomistSub: 'à¤‡à¤¸ à¤¨à¤¿à¤¦à¤¾à¤¨ à¤”à¤° à¤«à¤¸à¤² à¤¦à¥‡à¤–à¤­à¤¾à¤² à¤ªà¤° à¤¬à¤¾à¤¤à¤šà¥€à¤¤ à¤œà¤¾à¤°à¥€ à¤°à¤–à¥‡à¤‚',
    chatInputPlaceholder: 'à¤¦à¤µà¤¾ à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ, à¤œà¥ˆà¤µà¤¿à¤• à¤‰à¤ªà¤¾à¤¯, à¤¸à¤¿à¤‚à¤šà¤¾à¤ˆ à¤†à¤¦à¤¿ à¤•à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚ à¤ªà¥‚à¤›à¥‡à¤‚...',
    sendBtn: 'à¤­à¥‡à¤œà¥‡à¤‚',
    thinkingText: 'à¤•à¥ƒà¤·à¤¿ à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤ž à¤‰à¤¤à¥à¤¤à¤° à¤¦à¥‡ à¤°à¤¹à¥‡ à¤¹à¥ˆà¤‚...',
    quickPromptOrganic: 'à¤œà¥ˆà¤µà¤¿à¤• à¤‰à¤ªà¤šà¤¾à¤°',
    quickPromptWater: 'à¤¸à¤¿à¤‚à¤šà¤¾à¤ˆ à¤¸à¤²à¤¾à¤¹',
    quickPromptSpread: 'à¤«à¥ˆà¤²à¤¾à¤µ à¤°à¥‹à¤•à¥‡à¤‚',
    checkThisNewImage: 'à¤‡à¤¸ à¤¨à¤ à¤šà¤¿à¤¤à¥à¤° à¤•à¥€ à¤œà¤¾à¤‚à¤š à¤•à¤°à¥‡à¤‚à¥¤',
    chatSavedNote: 'à¤¯à¤¹ à¤¬à¤¾à¤¤à¤šà¥€à¤¤ à¤‡à¤¸ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤¸à¥à¤µà¤¤à¤ƒ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤¹à¥ˆà¥¤',
    reportDownloaded: 'à¤¨à¤¿à¤¦à¤¾à¤¨ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤¸à¤«à¤²à¤¤à¤¾à¤ªà¥‚à¤°à¥à¤µà¤• à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤¹à¥‹ à¤—à¤ˆà¥¤',

    historyDetailsTitle: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤µà¤¿à¤µà¤°à¤£',
    finalRecommendationTitle: 'à¤…à¤‚à¤¤à¤¿à¤® à¤¸à¤¿à¤«à¤¾à¤°à¤¿à¤¶',
    finalRecommendationSub: 'à¤à¤¤à¤¿à¤¹à¤¾à¤¸à¤¿à¤• à¤¡à¥‡à¤Ÿà¤¾ à¤ªà¤° à¤†à¤§à¤¾à¤°à¤¿à¤¤ AI à¤œà¤¨à¤¿à¤¤ à¤¸à¥à¤¥à¤¾à¤¨à¥€à¤¯ à¤…à¤‚à¤¤à¤°à¥à¤¦à¥ƒà¤·à¥à¤Ÿà¤¿à¥¤',
    scanMetricsTitle: 'à¤¸à¥à¤•à¥ˆà¤¨ à¤®à¥‡à¤Ÿà¥à¤°à¤¿à¤•à¥à¤¸',
    cropTypeLabel: 'à¤«à¤¸à¤² à¤•à¤¾ à¤ªà¥à¤°à¤•à¤¾à¤°',
    fieldAreaLabel: 'à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤²',
    envContextTitle: 'à¤ªà¤°à¥à¤¯à¤¾à¤µà¤°à¤£à¥€à¤¯ à¤¸à¤‚à¤¦à¤°à¥à¤­',
    envScanTimeSub: '(à¤¸à¥à¤•à¥ˆà¤¨ à¤•à¥‡ à¤¸à¤®à¤¯)',
    envTemperature: 'à¤¤à¤¾à¤ªà¤®à¤¾à¤¨',
    envHumidity: 'à¤¨à¤®à¥€',
    envWeather: 'à¤®à¥Œà¤¸à¤®',
    weatherPartlyCloudy: 'à¤†à¤‚à¤¶à¤¿à¤• à¤°à¥‚à¤ª à¤¸à¥‡ à¤¬à¤¾à¤¦à¤²',
    weatherSunny: 'à¤§à¥‚à¤ª à¤µà¤¾à¤²à¤¾',
    weatherOvercast: 'à¤¬à¤¾à¤¦à¤² à¤›à¤¾à¤ à¤¹à¥à¤',
    downloadReportPdf: 'à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚ (PDF)',
    mapView: 'à¤®à¤¾à¤¨à¤šà¤¿à¤¤à¥à¤° à¤¦à¥ƒà¤¶à¥à¤¯',

    changeLanguageSetting: 'à¤­à¤¾à¤·à¤¾ à¤¬à¤¦à¤²à¥‡à¤‚',
    currentLanguageLabel: 'à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨: à¤¹à¤¿à¤¨à¥à¤¦à¥€',
    notificationsSetting: 'à¤¸à¥‚à¤šà¤¨à¤¾à¤à¤‚',
    notificationsSub: 'à¤…à¤²à¤°à¥à¤Ÿ à¤”à¤° à¤…à¤ªà¤¡à¥‡à¤Ÿ à¤ªà¥à¤°à¤¬à¤‚à¤§à¤¿à¤¤ à¤•à¤°à¥‡à¤‚',
    helpCenterSetting: 'à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤•à¥‡à¤‚à¤¦à¥à¤°',
    helpCenterSub: 'à¤…à¤•à¥à¤¸à¤° à¤ªà¥‚à¤›à¥‡ à¤œà¤¾à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤ªà¥à¤°à¤¶à¥à¤¨ à¤”à¤° à¤¸à¤®à¤°à¥à¤¥à¤¨',
    helpCenterDialogTitle: 'à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤•à¥‡à¤‚à¤¦à¥à¤°',
    helpCenterDialogHeading: 'à¤…à¤‚à¤—à¥‹à¤µà¤¿à¤¸ AI à¤•à¥‡ à¤¸à¤¾à¤¥ à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤šà¤¾à¤¹à¤¿à¤?',
    helpCenterDialogContactText: 'à¤¸à¤®à¤°à¥à¤¥à¤¨, à¤ªà¥à¤°à¤¶à¥à¤¨à¥‹à¤‚, à¤¤à¤•à¤¨à¥€à¤•à¥€ à¤¸à¤®à¤¸à¥à¤¯à¤¾à¤“à¤‚ à¤¯à¤¾ à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾ à¤•à¥‡ à¤²à¤¿à¤, à¤¹à¤®à¤¸à¥‡ à¤¯à¤¹à¤¾à¤‚ à¤¸à¤‚à¤ªà¤°à¥à¤• à¤•à¤°à¥‡à¤‚:',
    helpCenterSupportEmail: 'agnovissupport@gmail.com',
    helpCenterSendEmailBtn: 'à¤ˆà¤®à¥‡à¤² à¤­à¥‡à¤œà¥‡à¤‚',
    helpCenterCopyEmailBtn: 'à¤ˆà¤®à¥‡à¤² à¤ªà¤¤à¤¾ à¤•à¥‰à¤ªà¥€ à¤•à¤°à¥‡à¤‚',
    helpCenterEmailCopied: 'à¤ˆà¤®à¥‡à¤² à¤ªà¤¤à¤¾ à¤•à¥à¤²à¤¿à¤ªà¤¬à¥‹à¤°à¥à¤¡ à¤ªà¤° à¤•à¥‰à¤ªà¥€ à¤•à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾',
    privacyPolicySetting: 'à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾ à¤¨à¥€à¤¤à¤¿',
    privacyPolicySub: 'à¤¨à¤¿à¤¯à¤® à¤”à¤° à¤¡à¥‡à¤Ÿà¤¾ à¤‰à¤ªà¤¯à¥‹à¤—',
    logoutBtn: 'à¤²à¥‰à¤—à¤†à¤‰à¤Ÿ',
    editProfile: 'à¤ªà¥à¤°à¥‹à¤«à¤¼à¤¾à¤‡à¤² à¤¸à¤‚à¤ªà¤¾à¤¦à¤¿à¤¤ à¤•à¤°à¥‡à¤‚',

    cropApple: 'à¤¸à¥‡à¤¬',
    cropCherry: 'à¤šà¥‡à¤°à¥€',
    cropCorn: 'à¤®à¤•à¥à¤•à¤¾',
    cropGrape: 'à¤…à¤‚à¤—à¥‚à¤°',
    cropPeach: 'à¤†à¤¡à¤¼à¥‚',
    cropPepper: 'à¤¶à¤¿à¤®à¤²à¤¾ à¤®à¤¿à¤°à¥à¤š',
    cropPotato: 'à¤†à¤²à¥‚',
    cropSquash: 'à¤¸à¥à¤•à¥à¤µà¥ˆà¤¶',
    cropStrawberry: 'à¤¸à¥à¤Ÿà¥à¤°à¥‰à¤¬à¥‡à¤°à¥€',
    cropTomato: 'à¤Ÿà¤®à¤¾à¤Ÿà¤°',
    cropWheat: 'à¤—à¥‡à¤¹à¥‚à¤',
    cropCotton: 'à¤•à¤ªà¤¾à¤¸',
    cropRice: 'à¤šà¤¾à¤µà¤² / à¤§à¤¾à¤¨',

    statusHealthy: 'à¤¸à¥à¤µà¤¸à¥à¤¥',
    statusNeedsAttention: 'à¤§à¥à¤¯à¤¾à¤¨ à¤¦à¥‡à¤¨à¥‡ à¤•à¥€ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾',
    diseaseEarlyBlight: 'à¤…à¤°à¥à¤²à¥€ à¤¬à¥à¤²à¤¾à¤‡à¤Ÿ (à¤…à¤—à¥‡à¤¤à¥€ à¤à¥à¤²à¤¸à¤¾)',
    diseaseLateBlight: 'à¤²à¥‡à¤Ÿ à¤¬à¥à¤²à¤¾à¤‡à¤Ÿ (à¤ªà¤›à¥‡à¤¤à¥€ à¤à¥à¤²à¤¸à¤¾)',
    diseaseLeafCurl: 'à¤ªà¤¤à¥à¤¤à¥€ à¤®à¤°à¥‹à¤¡à¤¼ à¤µà¤¾à¤¯à¤°à¤¸',
    diseaseNone: 'à¤•à¥‹à¤ˆ à¤°à¥‹à¤— à¤¨à¤¹à¥€à¤‚ (à¤¸à¥à¤µà¤¸à¥à¤¥ à¤«à¤¸à¤²)',
    pestNone: 'à¤•à¥‹à¤ˆ à¤•à¥€à¤Ÿ à¤¨à¤¹à¥€à¤‚ à¤ªà¤¾à¤¯à¤¾ à¤—à¤¯à¤¾',
    pestAphids: 'à¤®à¤¾à¤¹à¥‚ (à¤à¤«à¤¿à¤¡à¥à¤¸)',
    pestWhitefly: 'à¤¸à¤«à¥‡à¤¦ à¤®à¤•à¥à¤–à¥€',

    actionPruneLeavesTitle: 'à¤ªà¥à¤°à¤­à¤¾à¤µà¤¿à¤¤ à¤ªà¤¤à¥à¤¤à¤¿à¤¯à¥‹à¤‚ à¤•à¥‹ à¤¹à¤Ÿà¤¾à¤à¤‚',
    actionPruneLeavesDesc: 'à¤¸à¤‚à¤•à¥à¤°à¤®à¤¿à¤¤ à¤ªà¤¤à¥à¤¤à¤¿à¤¯à¥‹à¤‚ à¤•à¥‹ à¤¸à¤¾à¤µà¤§à¤¾à¤¨à¥€ à¤¸à¥‡ à¤•à¤¾à¤Ÿà¥‡à¤‚à¥¤ à¤¬à¥€à¤œà¤¾à¤£à¥à¤“à¤‚ à¤•à¥‡ à¤ªà¥à¤°à¤¸à¤¾à¤° à¤•à¥‹ à¤°à¥‹à¤•à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤‡à¤¨à¥à¤¹à¥‡à¤‚ à¤–à¤¾à¤¦ à¤®à¥‡à¤‚ à¤¨ à¤¡à¤¾à¤²à¥‡à¤‚ à¤¬à¤²à¥à¤•à¤¿ à¤œà¤²à¤¾ à¤¦à¥‡à¤‚ à¤¯à¤¾ à¤¨à¤·à¥à¤Ÿ à¤•à¤° à¤¦à¥‡à¤‚à¥¤',
    actionFungicideTitle: 'à¤«à¤«à¥‚à¤‚à¤¦à¤¨à¤¾à¤¶à¤• à¤•à¤¾ à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ',
    actionFungicideDesc: 'à¤•à¥‰à¤ªà¤° à¤†à¤§à¤¾à¤°à¤¿à¤¤ à¤«à¤«à¥‚à¤‚à¤¦à¤¨à¤¾à¤¶à¤• à¤¯à¤¾ à¤•à¥à¤²à¥‹à¤°à¥‹à¤¥à¥ˆà¤²à¥‹à¤¨à¤¿à¤² à¤•à¤¾ à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ à¤•à¤°à¥‡à¤‚à¥¤ à¤¸à¥à¤¥à¤¾à¤¨à¥€à¤¯ à¤¬à¤¾à¤°à¤¿à¤¶ à¤•à¥‡ à¤…à¤¨à¥à¤¸à¤¾à¤° à¤¹à¤° 7-10 à¤¦à¤¿à¤¨à¥‹à¤‚ à¤®à¥‡à¤‚ à¤¦à¥‹à¤¹à¤°à¤¾à¤à¤‚à¥¤',
    actionAirflowTitle: 'à¤¹à¤µà¤¾ à¤•à¤¾ à¤ªà¥à¤°à¤µà¤¾à¤¹ à¤¸à¥à¤§à¤¾à¤°à¥‡à¤‚',
    actionAirflowDesc: 'à¤ªà¥Œà¤§à¥‹à¤‚ à¤•à¥‡ à¤¬à¥€à¤š à¤ªà¤°à¥à¤¯à¤¾à¤ªà¥à¤¤ à¤¦à¥‚à¤°à¥€ à¤°à¤–à¥‡à¤‚ à¤”à¤° à¤ªà¤¤à¥à¤¤à¤¿à¤¯à¥‹à¤‚ à¤•à¥‹ à¤¸à¥‚à¤–à¤¾ à¤°à¤–à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤Šà¤ªà¤° à¤¸à¥‡ à¤ªà¤¾à¤¨à¥€ à¤¦à¥‡à¤¨à¥‡ à¤¸à¥‡ à¤¬à¤šà¥‡à¤‚à¥¤',
    actionMaintainProtocolTitle: 'à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤¦à¥‡à¤–à¤­à¤¾à¤² à¤¬à¤¨à¤¾à¤ à¤°à¤–à¥‡à¤‚',
    actionMaintainProtocolDesc: 'à¤«à¤¸à¤² à¤¬à¤¿à¤¨à¤¾ à¤•à¤¿à¤¸à¥€ à¤ªà¥‹à¤·à¤£ à¤•à¥€ à¤•à¤®à¥€ à¤¯à¤¾ à¤•à¥€à¤Ÿ à¤¤à¤¨à¤¾à¤µ à¤•à¥‡ à¤‰à¤¤à¥à¤•à¥ƒà¤·à¥à¤Ÿ à¤¸à¥à¤µà¤¾à¤¸à¥à¤¥à¥à¤¯ à¤ªà¥à¤°à¤¦à¤°à¥à¤¶à¤¿à¤¤ à¤•à¤° à¤°à¤¹à¥€ à¤¹à¥ˆà¥¤ à¤¨à¤¿à¤¯à¤®à¤¿à¤¤ à¤…à¤µà¤²à¥‹à¤•à¤¨ à¤¬à¤¨à¤¾à¤ à¤°à¤–à¥‡à¤‚à¥¤',

    // Weather
    weatherTitle: 'à¤•à¥ƒà¤·à¤¿ à¤®à¥Œà¤¸à¤® à¤¬à¥à¤¦à¥à¤§à¤¿à¤®à¤¤à¥à¤¤à¤¾',
    weatherCurrentLocation: 'à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤¸à¥à¤¥à¤¾à¤¨',
    weatherUseMyLocation: 'à¤®à¥‡à¤°à¤¾ à¤¸à¥à¤¥à¤¾à¤¨ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚',
    weatherChangeLocation: 'à¤¸à¥à¤¥à¤¾à¤¨ à¤¬à¤¦à¤²à¥‡à¤‚',
    weatherSearchLocation: 'à¤¸à¥à¤¥à¤¾à¤¨ à¤–à¥‹à¤œà¥‡à¤‚',
    weatherSearchPlaceholder: 'à¤—à¤¾à¤à¤µ, à¤•à¤¸à¥à¤¬à¤¾, à¤¶à¤¹à¤°, à¤œà¤¿à¤²à¤¾ à¤–à¥‹à¤œà¥‡à¤‚...',
    weatherSearching: 'à¤–à¥‹à¤œ à¤°à¤¹à¥‡ à¤¹à¥ˆà¤‚...',
    weatherSearchResults: 'à¤–à¥‹à¤œ à¤ªà¤°à¤¿à¤£à¤¾à¤®',
    weatherNoResults: 'à¤•à¥‹à¤ˆ à¤¸à¥à¤¥à¤¾à¤¨ à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¤¾à¥¤ à¤…à¤²à¤— à¤¶à¤¬à¥à¤¦ à¤†à¤œà¤¼à¤®à¤¾à¤à¤‚à¥¤',
    weatherLastUpdated: 'à¤…à¤ªà¤¡à¥‡à¤Ÿ:',
    weatherCurrentConditions: 'à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤¸à¥à¤¥à¤¿à¤¤à¤¿à¤¯à¤¾à¤‚',
    weatherFeelsLike: 'à¤®à¤¹à¤¸à¥‚à¤¸ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆ',
    weatherHumidity: 'à¤¨à¤®à¥€',
    weatherWind: 'à¤¹à¤µà¤¾',
    weatherRainfall: 'à¤µà¤°à¥à¤·à¤¾',
    weatherRainProbability: 'à¤¬à¤¾à¤°à¤¿à¤¶ à¤•à¥€ à¤¸à¤‚à¤­à¤¾à¤µà¤¨à¤¾',
    weatherRisk: 'à¤®à¥Œà¤¸à¤® à¤œà¥‹à¤–à¤¿à¤®',
    weatherRiskLow: 'à¤•à¤®',
    weatherRiskModerate: 'à¤®à¤§à¥à¤¯à¤®',
    weatherRiskHigh: 'à¤‰à¤šà¥à¤š',
    weatherFarmAdvisory: 'à¤•à¥ƒà¤·à¤¿ à¤¸à¤²à¤¾à¤¹',
    weather7DayForecast: '7-à¤¦à¤¿à¤¨ à¤•à¤¾ à¤ªà¥‚à¤°à¥à¤µà¤¾à¤¨à¥à¤®à¤¾à¤¨',
    weatherFieldWorkOutlook: 'à¤–à¥‡à¤¤ à¤•à¤¾à¤°à¥à¤¯ à¤¦à¥ƒà¤·à¥à¤Ÿà¤¿à¤•à¥‹à¤£',
    weatherFieldWorkFavorable: 'à¤…à¤¨à¥à¤•à¥‚à¤²',
    weatherFieldWorkCaution: 'à¤¸à¤¾à¤µà¤§à¤¾à¤¨à¥€',
    weatherFieldWorkAvoid: 'à¤Ÿà¤¾à¤²à¥‡à¤‚',
    weatherFieldWorkFavorableText: 'à¤®à¥Œà¤¸à¤® à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯ à¤•à¥ƒà¤·à¤¿ à¤—à¤¤à¤¿à¤µà¤¿à¤§à¤¿à¤¯à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤…à¤¨à¥à¤•à¥‚à¤² à¤ªà¥à¤°à¤¤à¥€à¤¤ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆà¥¤',
    weatherFieldWorkCautionText: 'à¤®à¥Œà¤¸à¤® à¤•à¥à¤› à¤•à¥ƒà¤·à¤¿ à¤—à¤¤à¤¿à¤µà¤¿à¤§à¤¿à¤¯à¥‹à¤‚ à¤•à¥‹ à¤ªà¥à¤°à¤­à¤¾à¤µà¤¿à¤¤ à¤•à¤° à¤¸à¤•à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤¬à¤¾à¤°à¤¿à¤¶ à¤”à¤° à¤¹à¤µà¤¾ à¤œà¤¾à¤‚à¤šà¥‡à¤‚à¥¤',
    weatherFieldWorkAvoidText: 'à¤®à¥Œà¤¸à¤® à¤•à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ à¤¯à¤¾ à¤…à¤¨à¥à¤¯ à¤¸à¤‚à¤µà¥‡à¤¦à¤¨à¤¶à¥€à¤² à¤•à¥ƒà¤·à¤¿ à¤—à¤¤à¤¿à¤µà¤¿à¤§à¤¿à¤¯à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤…à¤¨à¥à¤•à¥‚à¤² à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤',
    weatherCropContext: 'à¤®à¥Œà¤¸à¤® + à¤«à¤¸à¤² à¤¸à¤‚à¤¦à¤°à¥à¤­',
    weatherLoading: 'à¤®à¥Œà¤¸à¤® à¤¡à¥‡à¤Ÿà¤¾ à¤²à¤¾ à¤°à¤¹à¥‡ à¤¹à¥ˆà¤‚...',
    weatherUnavailable: 'à¤®à¥Œà¤¸à¤® à¤¡à¥‡à¤Ÿà¤¾ à¤…à¤¸à¥à¤¥à¤¾à¤¯à¥€ à¤°à¥‚à¤ª à¤¸à¥‡ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¹à¥€à¤‚',
    weatherUnavailableText: 'à¤²à¤¾à¤‡à¤µ à¤®à¥Œà¤¸à¤® à¤¡à¥‡à¤Ÿà¤¾ à¤‡à¤¸ à¤¸à¤®à¤¯ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤¨à¤¹à¥€à¤‚ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾ à¤¸à¤•à¤¤à¤¾à¥¤ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤¬à¤¾à¤¦ à¤®à¥‡à¤‚ à¤ªà¥à¤¨à¤ƒ à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤•à¤°à¥‡à¤‚à¥¤',
    weatherLocationPermissionDenied: 'à¤¸à¥à¤¥à¤¾à¤¨ à¤ªà¤¹à¥à¤‚à¤š à¤•à¥€ à¤…à¤¨à¥à¤®à¤¤à¤¿ à¤¨à¤¹à¥€à¤‚ à¤¦à¥€ à¤—à¤ˆà¥¤ à¤…à¤ªà¤¨à¥‡ à¤•à¥ƒà¤·à¤¿ à¤¸à¥à¤¥à¤¾à¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤–à¥‹à¤œà¥‡à¤‚à¥¤',
    weatherLocationUnavailable: 'à¤¸à¥à¤¥à¤¾à¤¨ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¹à¥€à¤‚à¥¤ à¤…à¤ªà¤¨à¥‡ à¤•à¥ƒà¤·à¤¿ à¤¸à¥à¤¥à¤¾à¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤–à¥‹à¤œà¥‡à¤‚à¥¤',
    weatherRetry: 'à¤ªà¥à¤¨à¤ƒ à¤ªà¥à¤°à¤¯à¤¾à¤¸',
    weatherToday: 'à¤†à¤œ',
    weatherTomorrow: 'à¤•à¤²',
    weatherSpraying: 'à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ',
    weatherIrrigation: 'à¤¸à¤¿à¤‚à¤šà¤¾à¤ˆ',
    weatherFieldWork: 'à¤–à¥‡à¤¤ à¤•à¤¾à¤°à¥à¤¯',
    weatherConditionClearSky: 'à¤¸à¤¾à¤« à¤†à¤¸à¤®à¤¾à¤¨',
    weatherConditionMainlyClear: 'à¤®à¥à¤–à¥à¤¯ à¤°à¥‚à¤ª à¤¸à¥‡ à¤¸à¤¾à¤«',
    weatherConditionPartlyCloudy: 'à¤†à¤‚à¤¶à¤¿à¤• à¤°à¥‚à¤ª à¤¸à¥‡ à¤¬à¤¾à¤¦à¤²',
    weatherConditionOvercast: 'à¤¬à¤¾à¤¦à¤²à¥‹à¤‚ à¤¸à¥‡ à¤¢à¤•à¤¾',
    weatherConditionFog: 'à¤•à¥‹à¤¹à¤°à¤¾',
    weatherConditionLightDrizzle: 'à¤¹à¤²à¥à¤•à¥€ à¤¬à¥‚à¤‚à¤¦à¤¾à¤¬à¤¾à¤‚à¤¦à¥€',
    weatherConditionModerateDrizzle: 'à¤®à¤§à¥à¤¯à¤® à¤¬à¥‚à¤‚à¤¦à¤¾à¤¬à¤¾à¤‚à¤¦à¥€',
    weatherConditionDenseDrizzle: 'à¤˜à¤¨à¥€ à¤¬à¥‚à¤‚à¤¦à¤¾à¤¬à¤¾à¤‚à¤¦à¥€',
    weatherConditionSlightRain: 'à¤¹à¤²à¥à¤•à¥€ à¤¬à¤¾à¤°à¤¿à¤¶',
    weatherConditionModerateRain: 'à¤®à¤§à¥à¤¯à¤® à¤¬à¤¾à¤°à¤¿à¤¶',
    weatherConditionHeavyRain: 'à¤­à¤¾à¤°à¥€ à¤¬à¤¾à¤°à¤¿à¤¶',
    weatherConditionSlightSnow: 'à¤¹à¤²à¥à¤•à¥€ à¤¬à¤°à¥à¤«',
    weatherConditionModerateSnow: 'à¤®à¤§à¥à¤¯à¤® à¤¬à¤°à¥à¤«',
    weatherConditionHeavySnow: 'à¤­à¤¾à¤°à¥€ à¤¬à¤°à¥à¤«',
    weatherConditionThunderstorm: 'à¤—à¤œà¤¬à¤¾à¤œà¥€ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤¬à¤¾à¤°à¤¿à¤¶',
    weatherConditionRainShowers: 'à¤¬à¤¾à¤°à¤¿à¤¶ à¤•à¥€ à¤¬à¥Œà¤›à¤¾à¤°à¥‡à¤‚',
    weatherConditionViolentShowers: 'à¤¤à¥‡à¤œà¤¼ à¤¬à¥Œà¤›à¤¾à¤°à¥‡à¤‚',
  
    historyNoRecordText: 'à¤¸à¤¹à¥‡à¤œà¤¾ à¤—à¤¯à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤¨à¤¹à¥€à¤‚ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾ à¤¸à¤•à¤¾à¥¤ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤ªà¤° à¤µà¤¾à¤ªà¤¸ à¤²à¥Œà¤Ÿà¥‡à¤‚à¥¤',
    scanNoRecordText: 'à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤®à¥‡à¤‚ à¤•à¥‹à¤ˆ à¤¨à¥ˆà¤¦à¤¾à¤¨à¤¿à¤• à¤¡à¥‡à¤Ÿà¤¾ à¤¸à¤•à¥à¤°à¤¿à¤¯ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤«à¤¸à¤² à¤¸à¥à¤•à¥ˆà¤¨ à¤•à¤°à¥‡à¤‚à¥¤',
    cropSpecimen: 'à¤«à¤¸à¤² à¤•à¤¾ à¤¨à¤®à¥‚à¤¨à¤¾',
    noImageAvailable: 'à¤•à¥‹à¤ˆ à¤›à¤µà¤¿ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ',
    agriculturalWarning: 'à¤•à¥ƒà¤·à¥€ à¤šà¥‡à¤¤à¤¾à¤µà¤¨à¥€',
    riskAssessmentTitle: 'à¤œà¥‹à¤–à¤¿à¤® à¤®à¥‚à¤²à¥à¤¯à¤¾à¤‚à¤•à¤¨',
    riskLabel: 'à¤œà¥‹à¤–à¤¿à¤®',
    agronomistFollowupTitle: 'à¤•à¥ƒà¤·à¤¿ à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨à¥€ à¤«à¥‰à¤²à¥‹-à¤…à¤ª',
    specialistReferralAdvised: 'âš ï¸ à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤ž à¤°à¥‡à¤«à¤°à¤² à¤•à¥€ à¤¸à¤²à¤¾à¤¹: ',
    criticalDiseaseSeverity: 'à¤—à¤‚à¤­à¥€à¤° à¤¬à¥€à¤®à¤¾à¤°à¥€ à¤•à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤•à¥‡ à¤²à¤¿à¤ à¤•à¥ƒà¤·à¤¿ à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨à¥€ à¤¸à¤®à¥€à¤•à¥à¤·à¤¾ à¤•à¥€ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾ à¤¹à¥ˆà¥¤',
    recommendedCheckIn: 'ðŸ“… à¤…à¤¨à¥à¤¶à¤‚à¤¸à¤¿à¤¤ à¤šà¥‡à¤•-à¤‡à¤¨: ',
    inSevenDays: '7 à¤¦à¤¿à¤¨à¥‹à¤‚ à¤®à¥‡à¤‚',
    standardMonitoringProtocol: 'à¤®à¤¾à¤¨à¤• à¤¨à¤¿à¤—à¤°à¤¾à¤¨à¥€ à¤ªà¥à¤°à¥‹à¤Ÿà¥‹à¤•à¥‰à¤²à¥¤ à¤¨à¤ à¤˜à¤¾à¤µ à¤µà¤¿à¤•à¤¸à¤¿à¤¤ à¤¹à¥‹à¤¨à¥‡ à¤ªà¤° à¤«à¤¿à¤° à¤¸à¥‡ à¤¸à¥à¤•à¥ˆà¤¨ à¤•à¤°à¥‡à¤‚à¥¤',
    steps: 'à¤•à¤¦à¤®',
    statusActive: 'à¤¸à¤•à¥à¤°à¤¿à¤¯',
    loadingConversation: 'à¤¬à¤¾à¤¤à¤šà¥€à¤¤ à¤•à¤¾ à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤²à¥‹à¤¡ à¤¹à¥‹ à¤°à¤¹à¤¾ à¤¹à¥ˆ...',
    followUpSpecimen: 'à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤ªà¤¤à¥à¤¤à¥€ à¤•à¤¾ à¤¨à¤®à¥‚à¤¨à¤¾',
    followUpSpecimenPreview: 'à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤ªà¤¤à¥à¤¤à¥€ à¤•à¥‡ à¤¨à¤®à¥‚à¤¨à¥‡ à¤•à¤¾ à¤ªà¥‚à¤°à¥à¤µà¤¾à¤µà¤²à¥‹à¤•à¤¨',
  
    defaultFarmerName: 'à¤•à¤¿à¤¸à¤¾à¤¨',
    recentTimestamp: 'à¤¹à¤¾à¤²à¤¿à¤¯à¤¾',
    statusProcessing: 'à¤ªà¥à¤°à¥‹à¤¸à¥‡à¤¸ à¤¹à¥‹ à¤°à¤¹à¤¾ à¤¹à¥ˆ...',

    waterAdvisorCheckingForecast:
  "à¤¸à¤¿à¤‚à¤šà¤¾à¤ˆ à¤•à¤¾ à¤¸à¥à¤à¤¾à¤µ à¤¦à¥‡à¤¨à¥‡ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤¨à¤µà¥€à¤¨à¤¤à¤® à¤®à¥Œà¤¸à¤® à¤ªà¥‚à¤°à¥à¤µà¤¾à¤¨à¥à¤®à¤¾à¤¨ à¤•à¥€ à¤œà¤¾à¤à¤š à¤•à¥€ à¤œà¤¾ à¤°à¤¹à¥€ à¤¹à¥ˆà¥¤",

weatherSourceLive:
  "à¤²à¤¾à¤‡à¤µ à¤®à¥Œà¤¸à¤® à¤•à¥€ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€",

weatherSourceFallback:
  "à¤µà¥ˆà¤•à¤²à¥à¤ªà¤¿à¤• à¤®à¥Œà¤¸à¤® à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€",

  waterAdvisorTitle: "à¤¸à¥à¤®à¤¾à¤°à¥à¤Ÿ à¤œà¤² à¤¸à¤²à¤¾à¤¹à¤•à¤¾à¤°",
waterAdvisorSubtitle: "à¤†à¤ªà¤•à¥€ à¤«à¤¸à¤² à¤•à¥‡ à¤²à¤¿à¤ à¤®à¥Œà¤¸à¤® à¤†à¤§à¤¾à¤°à¤¿à¤¤ à¤¸à¤¿à¤‚à¤šà¤¾à¤ˆ à¤¸à¥à¤à¤¾à¤µ",
irrigationDecision: "à¤¸à¤¿à¤‚à¤šà¤¾à¤ˆ à¤•à¤¾ à¤¨à¤¿à¤°à¥à¤£à¤¯",
waterAdvisorWhy: "à¤¯à¤¹ à¤¸à¥à¤à¤¾à¤µ à¤•à¥à¤¯à¥‹à¤‚?",
waterNeedLabel: "à¤ªà¤¾à¤¨à¥€ à¤•à¥€ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾",
waterAdvisorNextCheck: "à¤…à¤—à¤²à¥€ à¤œà¤¾à¤à¤š",
weatherSource: "à¤®à¥Œà¤¸à¤® à¤¸à¥à¤°à¥‹à¤¤",
weatherDataUnavailable: "à¤†à¤ªà¤•à¥‡ à¤¸à¥à¤¥à¤¾à¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤®à¥Œà¤¸à¤® à¤•à¥€ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤…à¤­à¥€ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤",
weatherSourceUnavailable: "à¤®à¥Œà¤¸à¤® à¤•à¥€ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ",
waterAdvisorDisclaimerTitle: "à¤®à¤¹à¤¤à¥à¤µà¤ªà¥‚à¤°à¥à¤£",
waterAdvisorDisclaimer: "à¤‡à¤¸ à¤¸à¥à¤à¤¾à¤µ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¥‡à¤µà¤² à¤®à¤¾à¤°à¥à¤—à¤¦à¤°à¥à¤¶à¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤•à¤°à¥‡à¤‚à¥¤ à¤¸à¤¿à¤‚à¤šà¤¾à¤ˆ à¤•à¥€ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾ à¤®à¥Œà¤¸à¤®, à¤®à¤¿à¤Ÿà¥à¤Ÿà¥€ à¤•à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¤¿, à¤«à¤¸à¤² à¤•à¥€ à¤…à¤µà¤¸à¥à¤¥à¤¾ à¤”à¤° à¤¸à¥à¤¥à¤¾à¤¨à¥€à¤¯ à¤ªà¤°à¤¿à¤¸à¥à¤¥à¤¿à¤¤à¤¿à¤¯à¥‹à¤‚ à¤ªà¤° à¤¨à¤¿à¤°à¥à¤­à¤° à¤•à¤°à¤¤à¥€ à¤¹à¥ˆà¥¤",
waterAdvisorNote: "à¤•à¥‡à¤µà¤² à¤‡à¤¸ à¤¸à¥à¤à¤¾à¤µ à¤ªà¤° à¤¨à¤¿à¤°à¥à¤­à¤° à¤¨ à¤°à¤¹à¥‡à¤‚à¥¤ à¤¸à¤¿à¤‚à¤šà¤¾à¤ˆ à¤•à¤°à¤¨à¥‡ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤®à¤¿à¤Ÿà¥à¤Ÿà¥€ à¤”à¤° à¤«à¤¸à¤² à¤•à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤œà¤¾à¤à¤š à¤²à¥‡à¤‚à¥¤",
waterAdvisorUseLocation: "à¤®à¥‡à¤°à¤¾ à¤¸à¥à¤¥à¤¾à¤¨ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚",
waterAdvisorLocationEnabled: "à¤¸à¥à¤¥à¤¾à¤¨ à¤¸à¤•à¥à¤·à¤® à¤¹à¥ˆ",
waterAdvisorCurrentCrop: "à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤«à¤¸à¤²",
waterAdvisorNoCrop: "à¤•à¥‹à¤ˆ à¤«à¤¸à¤² à¤šà¤¯à¤¨à¤¿à¤¤ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ",
  },

  mr: {
    // Extended Keys (mr)
    alertsTitle: 'à¤¸à¤•à¥à¤°à¤¿à¤¯ à¤¸à¥‚à¤šà¤¨à¤¾ à¤†à¤£à¤¿ à¤‡à¤¶à¤¾à¤°à¥‡',
    checkingAlerts: 'à¤¶à¥‡à¤¤à¤¾à¤¤à¥€à¤² à¤‡à¤¶à¤¾à¤°à¥\u200dà¤¯à¤¾à¤‚à¤šà¥€ à¤¤à¤ªà¤¾à¤¸à¤£à¥€ à¤¸à¥à¤°à¥‚ à¤†à¤¹à¥‡...',
    noActiveAlerts: 'à¤•à¥‹à¤£à¤¤à¥€à¤¹à¥€ à¤¸à¤•à¥à¤°à¤¿à¤¯ à¤ªà¥€à¤• à¤¸à¥‚à¤šà¤¨à¤¾ à¤¨à¤¾à¤¹à¥€',
    allFieldsNormal: 'à¤¸à¤°à¥à¤µ à¤¨à¥‹à¤‚à¤¦à¤£à¥€à¤•à¥ƒà¤¤ à¤¶à¥‡à¤¤à¤‚ à¤¸à¤§à¥à¤¯à¤¾ à¤¨à¤¿à¤°à¥‹à¤—à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¥€à¤¤ à¤†à¤¹à¥‡à¤¤.',
    alertMarkedResolved: 'à¤¸à¥‚à¤šà¤¨à¤¾ à¤¸à¥‹à¤¡à¤µà¤²à¥€ à¤®à¥à¤¹à¤£à¥‚à¤¨ à¤šà¤¿à¤¨à¥à¤¹à¤¾à¤‚à¤•à¤¿à¤¤ à¤•à¥‡à¤²à¥€',
    alertReopened: 'à¤¸à¥‚à¤šà¤¨à¤¾ à¤ªà¥à¤¨à¥à¤¹à¤¾ à¤‰à¤˜à¤¡à¤²à¥€ à¤—à¥‡à¤²à¥€',
    couldNotUpdateAlert: 'à¤¸à¥‚à¤šà¤¨à¥‡à¤šà¥€ à¤¸à¥à¤¥à¤¿à¤¤à¥€ à¤…à¤ªà¤¡à¥‡à¤Ÿ à¤•à¤°à¤¤à¤¾ à¤†à¤²à¥€ à¤¨à¤¾à¤¹à¥€.',
    couldNotLoadAlerts: 'à¤ªà¥€à¤• à¤¸à¥‚à¤šà¤¨à¤¾ à¤²à¥‹à¤¡ à¤•à¤°à¤¤à¤¾ à¤†à¤²à¥à¤¯à¤¾ à¤¨à¤¾à¤¹à¥€à¤¤.',
    activeStatus: 'à¤¸à¤•à¥à¤°à¤¿à¤¯',
    resolvedStatus: 'à¤¨à¤¿à¤µà¤¾à¤°à¤£ à¤à¤¾à¤²à¥‡',
    markResolved: 'à¤¨à¤¿à¤µà¤¾à¤°à¤£ à¤à¤¾à¤²à¥‡ à¤®à¥à¤¹à¤£à¥‚à¤¨ à¤–à¥‚à¤£ à¤•à¤°à¤¾',
    reopen: 'à¤ªà¥à¤¨à¥à¤¹à¤¾ à¤‰à¤˜à¤¡à¤¾',
    followUpsTitle: 'à¤¨à¤¿à¤¯à¥‹à¤œà¤¿à¤¤ à¤«à¥‰à¤²à¥‹-à¤…à¤ª',
    loadingFollowUps: 'à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤µà¥‡à¤³à¤¾à¤ªà¤¤à¥à¤°à¤• à¤²à¥‹à¤¡ à¤¹à¥‹à¤¤ à¤†à¤¹à¥‡...',
    noPendingFollowUps: 'à¤•à¥‹à¤£à¤¤à¤¾à¤¹à¥€ à¤ªà¥à¤°à¤²à¤‚à¤¬à¤¿à¤¤ à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤¨à¤¾à¤¹à¥€',
    noFollowUpsDesc: 'à¤¸à¤§à¥à¤¯à¤¾ à¤•à¥‹à¤£à¤¤à¤¾à¤¹à¥€ à¤ªà¤¾à¤ à¤ªà¥à¤°à¤¾à¤µà¤¾ à¤‰à¤ªà¤šà¤¾à¤° à¤•à¤¿à¤‚à¤µà¤¾ à¤«à¥‡à¤°à¤¤à¤ªà¤¾à¤¸à¤£à¥€ à¤¨à¤¿à¤¯à¥‹à¤œà¤¿à¤¤ à¤¨à¤¾à¤¹à¥€.',
    couldNotLoadFollowUps: 'à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤²à¥‹à¤¡ à¤•à¤°à¤¤à¤¾ à¤†à¤²à¥‡ à¤¨à¤¾à¤¹à¥€à¤¤.',
    failedToUpdateFollowUp: 'à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤…à¤ªà¤¡à¥‡à¤Ÿ à¤•à¤°à¤£à¥à¤¯à¤¾à¤¤ à¤…à¤ªà¤¯à¤¶à¥€',
    followUpScheduled: 'à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤¨à¤¿à¤¯à¥‹à¤œà¤¿à¤¤',
    markCompleted: 'à¤ªà¥‚à¤°à¥à¤£ à¤à¤¾à¤²à¥‡ à¤®à¥à¤¹à¤£à¥‚à¤¨ à¤–à¥‚à¤£ à¤•à¤°à¤¾',
    referralsTitle: 'à¤¤à¤œà¥à¤œà¥à¤ž à¤ªà¥à¤¨à¤°à¤¾à¤µà¤²à¥‹à¤•à¤¨ à¤¸à¤‚à¤¦à¤°à¥à¤­',
    checkingReferrals: 'à¤¤à¤œà¥à¤œà¥à¤ž à¤¸à¤‚à¤¦à¤°à¥à¤­ à¤¤à¤ªà¤¾à¤¸à¤£à¥€ à¤¸à¥à¤°à¥‚ à¤†à¤¹à¥‡...',
    noActiveReferrals: 'à¤•à¥‹à¤£à¤¤à¤¾à¤¹à¥€ à¤¸à¤•à¥à¤°à¤¿à¤¯ à¤¤à¤œà¥à¤œà¥à¤ž à¤¸à¤‚à¤¦à¤°à¥à¤­ à¤¨à¤¾à¤¹à¥€',
    noReferralsDesc: 'à¤¸à¤§à¥à¤¯à¤¾ à¤•à¥ƒà¤·à¥€ à¤¤à¤œà¥à¤œà¥à¤žà¤¾à¤‚à¤•à¤¡à¥‡ à¤•à¥‹à¤£à¤¤à¤¾à¤¹à¥€ à¤µà¤¿à¤·à¤¯ à¤¸à¤‚à¤¦à¤°à¥à¤­à¤¿à¤¤ à¤¨à¤¾à¤¹à¥€.',
    couldNotLoadReferrals: 'à¤¤à¤œà¥à¤œà¥à¤ž à¤¸à¤‚à¤¦à¤°à¥à¤­ à¤²à¥‹à¤¡ à¤•à¤°à¤¤à¤¾ à¤†à¤²à¥‡ à¤¨à¤¾à¤¹à¥€à¤¤.',
    expertReviewPending: 'à¤¤à¤œà¥à¤œà¥à¤ž à¤ªà¥à¤¨à¤°à¤¾à¤µà¤²à¥‹à¤•à¤¨ à¤ªà¥à¤°à¤²à¤‚à¤¬à¤¿à¤¤',
    registeredFields: 'à¤¨à¥‹à¤‚à¤¦à¤£à¥€à¤•à¥ƒà¤¤ à¤¶à¥‡à¤¤à¤‚',
    plotNameLabel: 'à¤¶à¥‡à¤¤à¤¾à¤šà¥‡ / à¤ªà¥à¤²à¥‰à¤Ÿà¤šà¥‡ à¤¨à¤¾à¤µ',
    plotNamePlaceholder: 'à¤‰à¤¦à¤¾. à¤‰à¤¤à¥à¤¤à¤° à¤¶à¥‡à¤¤ à¤Ÿà¥‹à¤®à¥…à¤Ÿà¥‹ à¤ªà¥à¤²à¥‰à¤Ÿ',
    primaryCropLabel: 'à¤®à¥à¤–à¥à¤¯ à¤ªà¥€à¤•',
    areaAcresLabel: 'à¤¶à¥‡à¤¤à¤¾à¤šà¤¾ à¤†à¤•à¤¾à¤° (à¤à¤•à¤°)',
    enterFieldName: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤¶à¥‡à¤¤à¤¾à¤šà¥‡ à¤¨à¤¾à¤µ à¤ªà¥à¤°à¤µà¤¿à¤·à¥à¤Ÿ à¤•à¤°à¤¾',
    fieldRegisteredSuccess: 'à¤¶à¥‡à¤¤ à¤¯à¤¶à¤¸à¥à¤µà¥€à¤°à¤¿à¤¤à¥à¤¯à¤¾ à¤¨à¥‹à¤‚à¤¦à¤£à¥€à¤•à¥ƒà¤¤ à¤à¤¾à¤²à¥‡',
    fieldRemovedSuccess: 'à¤¶à¥‡à¤¤ à¤¯à¤¶à¤¸à¥à¤µà¥€à¤°à¤¿à¤¤à¥à¤¯à¤¾ à¤•à¤¾à¤¢à¥‚à¤¨ à¤Ÿà¤¾à¤•à¤²à¥‡',
    failedCreateField: 'à¤¶à¥‡à¤¤ à¤¤à¤¯à¤¾à¤° à¤•à¤°à¤£à¥à¤¯à¤¾à¤¤ à¤…à¤ªà¤¯à¤¶à¥€',
    failedRemoveField: 'à¤¶à¥‡à¤¤ à¤•à¤¾à¤¢à¥‚à¤¨ à¤Ÿà¤¾à¤•à¤£à¥à¤¯à¤¾à¤¤ à¤…à¤ªà¤¯à¤¶à¥€',
    couldNotLoadFields: 'à¤¤à¥à¤®à¤šà¥€ à¤¨à¥‹à¤‚à¤¦à¤£à¥€à¤•à¥ƒà¤¤ à¤¶à¥‡à¤¤à¤‚ à¤²à¥‹à¤¡ à¤•à¤°à¤¤à¤¾ à¤†à¤²à¥€ à¤¨à¤¾à¤¹à¥€à¤¤.',
    noFieldsYet: 'à¤…à¤¦à¥à¤¯à¤¾à¤ª à¤•à¥‹à¤£à¤¤à¥‡à¤¹à¥€ à¤¨à¥‹à¤‚à¤¦à¤£à¥€à¤•à¥ƒà¤¤ à¤¶à¥‡à¤¤ à¤¨à¤¾à¤¹à¥€',
    noFieldsDesc: 'à¤°à¥‹à¤— à¤œà¥‹à¤–à¥€à¤®, à¤¹à¤µà¤¾à¤®à¤¾à¤¨ à¤…à¤‚à¤¦à¤¾à¤œ à¤†à¤£à¤¿ à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤Ÿà¥à¤°à¥…à¤• à¤•à¤°à¤£à¥à¤¯à¤¾à¤¸à¤¾à¤ à¥€ à¤†à¤ªà¤²à¥à¤¯à¤¾ à¤¶à¥‡à¤¤à¤¾à¤‚à¤šà¥€ à¤¨à¥‹à¤‚à¤¦à¤£à¥€ à¤•à¤°à¤¾.',
    addNewField: 'à¤¨à¤µà¥€à¤¨ à¤¶à¥‡à¤¤ à¤œà¥‹à¤¡à¤¾',
    loadingHistory: 'à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤²à¥‹à¤¡ à¤¹à¥‹à¤¤ à¤†à¤¹à¥‡...',
    fetchingPastScans: 'à¤¤à¥à¤®à¤šà¥‡ à¤®à¤¾à¤—à¥€à¤² à¤ªà¥€à¤• à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤†à¤£à¤²à¥‡ à¤œà¤¾à¤¤ à¤†à¤¹à¥‡.',
    failedToLoadHistory: 'à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤²à¥‹à¤¡ à¤•à¤°à¤£à¥à¤¯à¤¾à¤¤ à¤…à¤ªà¤¯à¤¶à¥€',
    noScansMatchSearch: 'à¤†à¤ªà¤²à¥à¤¯à¤¾ à¤¶à¥‹à¤§à¤¾à¤¶à¥€ à¤œà¥à¤³à¤£à¤¾à¤°à¥‡ à¤•à¥‹à¤£à¤¤à¥‡à¤¹à¥€ à¤¸à¥à¤•à¥…à¤¨ à¤†à¤¢à¤³à¤²à¥‡ à¤¨à¤¾à¤¹à¥€',
    tryAdjustingSearch: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤†à¤ªà¤²à¥‡ à¤¶à¥‹à¤§ à¤¶à¤¬à¥à¤¦ à¤•à¤¿à¤‚à¤µà¤¾ à¤«à¤¿à¤²à¥à¤Ÿà¤°à¥à¤¸ à¤¬à¤¦à¤²à¥‚à¤¨ à¤ªà¤¹à¤¾.',
    issueDetected: 'à¤¸à¤®à¤¸à¥à¤¯à¤¾ à¤†à¤¢à¤³à¤²à¥€',
    healthyCondition: 'à¤¨à¤¿à¤°à¥‹à¤—à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¥€',
    voiceInputUnavailable: 'à¤µà¥à¤¹à¥‰à¤ˆà¤¸ à¤‡à¤¨à¤ªà¥à¤Ÿ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¾à¤¹à¥€ à¤•à¤¿à¤‚à¤µà¤¾ à¤®à¤¾à¤¯à¤•à¥à¤°à¥‹à¤«à¥‹à¤¨à¤šà¥€ à¤ªà¤°à¤µà¤¾à¤¨à¤—à¥€ à¤¨à¤¾à¤•à¤¾à¤°à¤²à¥€ à¤—à¥‡à¤²à¥€ à¤†à¤¹à¥‡.',
    speechNotSupported: 'à¤¯à¤¾ à¤¬à¥à¤°à¤¾à¤‰à¤à¤°à¤®à¤§à¥à¤¯à¥‡ à¤¸à¥à¤ªà¥€à¤š à¤°à¥‡à¤•à¤—à¥à¤¨à¤¿à¤¶à¤¨ à¤¸à¤®à¤°à¥à¤¥à¤¿à¤¤ à¤¨à¤¾à¤¹à¥€.',
    listeningPrompt: 'à¤à¤•à¤¤ à¤†à¤¹à¥‡... à¤†à¤ªà¤²à¤¾ à¤¶à¥‡à¤¤à¥€à¤µà¤¿à¤·à¤¯à¤• à¤ªà¥à¤°à¤¶à¥à¤¨ à¤¸à¥à¤ªà¤·à¥à¤Ÿà¤ªà¤£à¥‡ à¤¬à¥‹à¤²à¤¾.',
    ttsNotSupported: 'à¤¯à¤¾ à¤¬à¥à¤°à¤¾à¤‰à¤à¤°à¤®à¤§à¥à¤¯à¥‡ à¤Ÿà¥‡à¤•à¥à¤¸à¥à¤Ÿ-à¤Ÿà¥‚-à¤¸à¥à¤ªà¥€à¤š à¤¸à¤®à¤°à¥à¤¥à¤¿à¤¤ à¤¨à¤¾à¤¹à¥€.',
    consultingGemini: 'à¤œà¥‡à¤®à¤¿à¤¨à¥€ à¤•à¥ƒà¤·à¥€ à¤¸à¤²à¥à¤²à¤¾à¤—à¤¾à¤° à¤®à¥‰à¤¡à¥‡à¤²à¤šà¤¾ à¤¸à¤²à¥à¤²à¤¾ à¤˜à¥‡à¤¤ à¤†à¤¹à¥‡...',
    chatSuggestion1: 'à¤Ÿà¥‹à¤®à¥…à¤Ÿà¥‹à¤®à¤§à¥€à¤² à¤²à¤µà¤•à¤° à¤¯à¥‡à¤£à¤¾à¤°à¤¾ à¤•à¤°à¤ªà¤¾ à¤•à¤¸à¤¾ à¤°à¥‹à¤–à¤¾à¤µà¤¾?',
    chatSuggestion2: 'à¤®à¤¾à¤µà¤¾ à¤†à¤£à¤¿ à¤«à¥à¤²à¤•à¤¿à¤¡à¥à¤¯à¤¾à¤‚à¤¸à¤¾à¤ à¥€ à¤¸à¤°à¥à¤µà¥‹à¤¤à¥à¤¤à¤® à¤¸à¥‡à¤‚à¤¦à¥à¤°à¤¿à¤¯ à¤«à¤µà¤¾à¤°à¤£à¥€ à¤•à¥‹à¤£à¤¤à¥€?',
    chatSuggestion3: 'à¤«à¥à¤²à¥‹à¤±à¥à¤¯à¤¾à¤šà¥à¤¯à¤¾ à¤…à¤µà¤¸à¥à¤¥à¥‡à¤¤ à¤–à¤¤à¤¾à¤‚à¤šà¥‡ à¤¯à¥‹à¤—à¥à¤¯ à¤µà¥‡à¤³à¤¾à¤ªà¤¤à¥à¤°à¤• à¤•à¤¾à¤¯ à¤…à¤¸à¤¾à¤µà¥‡?',
    chatSuggestion4: 'à¤ªà¤¾à¤µà¤¸à¤¾à¤ªà¥‚à¤°à¥à¤µà¥€ à¤¶à¥‡à¤¤à¤¾à¤¤à¥€à¤² à¤ªà¤¾à¤£à¥à¤¯à¤¾à¤šà¤¾ à¤¨à¤¿à¤šà¤°à¤¾ à¤•à¤¸à¤¾ à¤•à¤°à¤¾à¤µà¤¾?',
    chatInputPlaceholder: 'à¤–à¤¤à¥‡, à¤ªà¥€à¤• à¤°à¥‹à¤—, à¤¸à¥‡à¤‚à¤¦à¥à¤°à¤¿à¤¯ à¤«à¤µà¤¾à¤°à¤£à¥€à¤¬à¤¦à¥à¤¦à¤² à¤µà¤¿à¤šà¤¾à¤°à¤¾...',
    listen: 'à¤à¤•à¤¾',
    speakQuestion: 'à¤ªà¥à¤°à¤¶à¥à¤¨ à¤¬à¥‹à¤²à¤¾',
    aiAgronomistTitle: 'à¤à¤†à¤¯ à¤•à¥ƒà¤·à¥€ à¤¤à¤œà¥à¤œà¥à¤ž à¤¸à¤‚à¤µà¤¾à¤¦',
    weatherConditionClear: 'à¤¨à¤¿à¤°à¤­à¥à¤° à¤†à¤•à¤¾à¤¶',
    weatherConditionPartlyCloudy: 'à¤…à¤‚à¤¶à¤¤à¤ƒ à¤¢à¤—à¤¾à¤³',
    weatherConditionCloudy: 'à¤¢à¤—à¤¾à¤³ à¤µà¤¾à¤¤à¤¾à¤µà¤°à¤£',
    weatherConditionOvercast: 'à¤ªà¥‚à¤°à¥à¤£ à¤¢à¤—à¤¾à¤³',
    weatherConditionFog: 'à¤§à¥à¤•à¥‡ / à¤§à¥à¤•à¥‡à¤¯à¥à¤•à¥à¤¤',
    weatherConditionDrizzle: 'à¤¹à¤²à¤•à¥€ à¤°à¤¿à¤®à¤à¤¿à¤®',
    weatherConditionRain: 'à¤ªà¤¾à¤Šà¤¸',
    weatherConditionHeavyRain: 'à¤®à¥à¤¸à¤³à¤§à¤¾à¤° à¤ªà¤¾à¤Šà¤¸',
    weatherConditionThunderstorm: 'à¤µà¤¾à¤¦à¤³à¥€ à¤ªà¤¾à¤Šà¤¸',
    weatherAdvisoryPrecipitation: 'à¤ªà¤¾à¤µà¤¸à¤¾à¤šà¥€ à¤¦à¤¾à¤Ÿ à¤¶à¤•à¥à¤¯à¤¤à¤¾ à¤†à¤¹à¥‡. à¤ªà¤¾à¤Šà¤¸ à¤ªà¤¡à¤£à¥à¤¯à¤¾à¤ªà¥‚à¤°à¥à¤µà¥€ à¤•à¥€à¤Ÿà¤•à¤¨à¤¾à¤¶à¤• à¤•à¤¿à¤‚à¤µà¤¾ à¤¬à¥à¤°à¤¶à¥€à¤¨à¤¾à¤¶à¤• à¤«à¤µà¤¾à¤°à¤£à¥€ à¤ªà¥à¤¢à¥‡ à¤¢à¤•à¤²à¤£à¥à¤¯à¤¾à¤šà¤¾ à¤µà¤¿à¤šà¤¾à¤° à¤•à¤°à¤¾.',
    weatherAdvisoryHumidity: 'à¤œà¤¾à¤¸à¥à¤¤ à¤†à¤°à¥à¤¦à¥à¤°à¤¤à¤¾ à¤†à¤£à¤¿ à¤ªà¤¾à¤µà¤¸à¤¾à¤®à¥à¤³à¥‡ à¤¬à¥à¤°à¤¶à¥€à¤œà¤¨à¥à¤¯ à¤°à¥‹à¤—à¤¾à¤‚à¤šà¤¾ à¤§à¥‹à¤•à¤¾ à¤µà¤¾à¤¢à¥‚ à¤¶à¤•à¤¤à¥‹. à¤ªà¤¿à¤•à¤¾à¤‚à¤µà¤° à¤¬à¤¾à¤°à¤•à¤¾à¤ˆà¤¨à¥‡ à¤²à¤•à¥à¤· à¤ à¥‡à¤µà¤¾.',
    weatherAdvisoryNormal: 'à¤ªà¥€à¤• à¤µà¤¾à¤¢à¥€à¤¸à¤¾à¤ à¥€ à¤†à¤£à¤¿ à¤¨à¤¿à¤¯à¤®à¤¿à¤¤ à¤¶à¥‡à¤¤à¥€à¤•à¤¾à¤®à¤¾à¤‚à¤¸à¤¾à¤ à¥€ à¤…à¤¨à¥à¤•à¥‚à¤² à¤¹à¤µà¤¾à¤®à¤¾à¤¨.',
    weatherAdvisoryHot: 'à¤¤à¤¾à¤ªà¤®à¤¾à¤¨ à¤œà¤¾à¤¸à¥à¤¤ à¤†à¤¹à¥‡. à¤‰à¤·à¥à¤£à¤¤à¥‡à¤šà¥à¤¯à¤¾ à¤¤à¤¾à¤£à¤¾à¤ªà¤¾à¤¸à¥‚à¤¨ à¤¬à¤šà¤¾à¤µ à¤•à¤°à¤£à¥à¤¯à¤¾à¤¸à¤¾à¤ à¥€ à¤ªà¤¿à¤•à¤¾à¤‚à¤¨à¤¾ à¤µà¥‡à¤³à¥‡à¤µà¤° à¤ªà¤¾à¤£à¥€ à¤¦à¥à¤¯à¤¾.',
    weatherAdvisoryWind: 'à¤µà¥‡à¤—à¤¾à¤¨à¥‡ à¤µà¤¾à¤°à¥‡ à¤µà¤¾à¤¹à¤¤ à¤†à¤¹à¥‡à¤¤. à¤«à¤µà¤¾à¤°à¤£à¥€ à¤µà¤¾à¤¯à¤¾ à¤œà¤¾à¤Š à¤¨à¤¯à¥‡ à¤®à¥à¤¹à¤£à¥‚à¤¨ à¤«à¤µà¤¾à¤°à¤£à¥€ à¤Ÿà¤¾à¤³à¤¾à¤µà¥€.',
    couldNotFetchWeather: 'à¤¹à¤µà¤¾à¤®à¤¾à¤¨à¤¾à¤šà¤¾ à¤…à¤‚à¤¦à¤¾à¤œ à¤®à¤¿à¤³à¤µà¤¤à¤¾ à¤†à¤²à¤¾ à¤¨à¤¾à¤¹à¥€.',
    unknownLocation: 'à¤¸à¤§à¥à¤¯à¤¾à¤šà¥‡ à¤¸à¥à¤¥à¤¾à¤¨',
    currentConditions: 'à¤¸à¤§à¥à¤¯à¤¾à¤šà¥€ à¤¸à¥à¤¥à¤¿à¤¤à¥€',
    sevenDayForecast: '7 à¤¦à¤¿à¤µà¤¸à¤¾à¤‚à¤šà¤¾ à¤…à¤‚à¤¦à¤¾à¤œ',
    feelsLike: 'à¤­à¤¾à¤¸à¤£à¤¾à¤°à¥‡ à¤¤à¤¾à¤ªà¤®à¤¾à¤¨',
    humidityLabel: 'à¤†à¤°à¥à¤¦à¥à¤°à¤¤à¤¾',
    windLabel: 'à¤µà¤¾à¤±à¥à¤¯à¤¾à¤šà¤¾ à¤µà¥‡à¤—',
    precipitationLabel: 'à¤ªà¤°à¥à¤œà¤¨à¥à¤¯à¤µà¥ƒà¤·à¥à¤Ÿà¥€',
    couldNotProcessImage: 'à¤ªà¥à¤°à¤¤à¤¿à¤®à¤¾ à¤ªà¥à¤°à¤•à¥à¤°à¤¿à¤¯à¤¾ à¤•à¤°à¤¤à¤¾ à¤†à¤²à¥€ à¤¨à¤¾à¤¹à¥€. à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ªà¥à¤¨à¥à¤¹à¤¾ à¤ªà¥à¤°à¤¯à¤¤à¥à¤¨ à¤•à¤°à¤¾.',
    couldNotSendQuery: 'à¤ªà¥à¤°à¤¶à¥à¤¨ à¤ªà¤¾à¤ à¤µà¤¤à¤¾ à¤†à¤²à¤¾ à¤¨à¤¾à¤¹à¥€. à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ªà¥à¤¨à¥à¤¹à¤¾ à¤ªà¥à¤°à¤¯à¤¤à¥à¤¨ à¤•à¤°à¤¾.',
    steps: 'à¤Ÿà¤ªà¥à¤ªà¥‡',
    noRecommendationAvailable: 'à¤•à¥‹à¤£à¤¤à¥€à¤¹à¥€ à¤µà¤¿à¤¶à¤¿à¤·à¥à¤Ÿ à¤¶à¤¿à¤«à¤¾à¤°à¤¸ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¾à¤¹à¥€.',
    quickPromptOrganic: 'à¤¸à¥‡à¤‚à¤¦à¥à¤°à¤¿à¤¯ à¤¨à¤¿à¤¯à¤‚à¤¤à¥à¤°à¤£ à¤‰à¤ªà¤¾à¤¯',
    quickPromptChemical: 'à¤°à¤¾à¤¸à¤¾à¤¯à¤¨à¤¿à¤• à¤¬à¥à¤°à¤¶à¥€à¤¨à¤¾à¤¶à¤• à¤ªà¤°à¥à¤¯à¤¾à¤¯',
    quickPromptPrevention: 'à¤ªà¥à¤¢à¥€à¤² à¤¹à¤‚à¤—à¤¾à¤®à¤¾à¤¸à¤¾à¤ à¥€ à¤ªà¥à¤°à¤¤à¤¿à¤¬à¤‚à¤§à¤¾à¤¤à¥à¤®à¤• à¤‰à¤ªà¤¾à¤¯',
    quickPromptFertilizer: 'à¤°à¥‹à¤—à¤¾à¤šà¥à¤¯à¤¾ à¤•à¤¾à¤³à¤¾à¤¤ à¤–à¤¤ à¤µà¥à¤¯à¤µà¤¸à¥à¤¥à¤¾à¤ªà¤¨ à¤¸à¤²à¥à¤²à¤¾',
    expertReferralDesc: 'à¤à¤†à¤¯à¤¨à¥‡ à¤—à¤‚à¤­à¥€à¤° à¤²à¤•à¥à¤·à¤£à¥‡ à¤¶à¥‹à¤§à¤²à¥€ à¤†à¤¹à¥‡à¤¤, à¤¤à¤œà¥à¤œà¥à¤ž à¤®à¤¾à¤°à¥à¤—à¤¦à¤°à¥à¤¶à¤¨à¤¾à¤šà¥€ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾ à¤†à¤¹à¥‡.',
    followUpScheduledDesc: 'à¤‰à¤ªà¤šà¤¾à¤°à¤¾à¤šà¥€ à¤ªà¥à¤°à¤—à¤¤à¥€ à¤¤à¤ªà¤¾à¤¸à¤£à¥à¤¯à¤¾à¤¸à¤¾à¤ à¥€ à¤¨à¤¿à¤¯à¥‹à¤œà¤¿à¤¤ à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤¸à¥à¤•à¥…à¤¨.',
    cropHealthAlerts: 'à¤ªà¥€à¤• à¤†à¤°à¥‹à¤—à¥à¤¯ à¤¸à¥‚à¤šà¤¨à¤¾',
    treatmentFollowups: 'à¤‰à¤ªà¤šà¤¾à¤° à¤ªà¤¾à¤ à¤ªà¥à¤°à¤¾à¤µà¤¾',
    expertReferrals: 'à¤¤à¤œà¥à¤œà¥à¤ž à¤¸à¤‚à¤¦à¤°à¥à¤­',
    myFarmlandPlots: 'à¤®à¤¾à¤à¥€ à¤¶à¥‡à¤¤à¤‚ à¤†à¤£à¤¿ à¤ªà¥à¤²à¥‰à¤Ÿ',

    appName: 'à¤…à¤‚à¤—à¥‹à¤µà¤¿à¤¸ AI',
    sihTagline: 'SIH26131 à¤ªà¥à¤²à¥…à¤Ÿà¤«à¥‰à¤°à¥à¤®',
    tagline: 'à¤…à¤šà¥‚à¤• à¤•à¥ƒà¤·à¥€ à¤¸à¤¾à¤§à¤¨à¥‡ à¤†à¤£à¤¿ à¤µà¥à¤¯à¤¾à¤µà¤¹à¤¾à¤°à¤¿à¤• AI à¤¸à¤²à¥à¤²à¥à¤¯à¤¾à¤¨à¥‡ à¤†à¤ªà¤²à¥à¤¯à¤¾ à¤¶à¥‡à¤¤à¥€à¤²à¤¾ à¤¸à¤•à¥à¤·à¤® à¤¬à¤¨à¤µà¤¾.',
    back: 'à¤®à¤¾à¤—à¥‡',
    share: 'à¤¶à¥‡à¤…à¤° à¤•à¤°à¤¾',
    close: 'à¤¬à¤‚à¤¦ à¤•à¤°à¤¾',
    confirm: 'à¤ªà¥à¤·à¥à¤Ÿà¥€ à¤•à¤°à¤¾',
    cancel: 'à¤°à¤¦à¥à¤¦ à¤•à¤°à¤¾',
    save: 'à¤œà¤¤à¤¨ à¤•à¤°à¤¾',
    edit: 'à¤¸à¤‚à¤ªà¤¾à¤¦à¤¿à¤¤ à¤•à¤°à¤¾',
    delete: 'à¤¹à¤Ÿà¤µà¤¾',
    viewAll: 'à¤¸à¤°à¥à¤µ à¤ªà¤¹à¤¾',
    viewDetails: 'à¤¤à¤ªà¤¶à¥€à¤² à¤ªà¤¹à¤¾',
    takeAction: 'à¤•à¥ƒà¤¤à¥€ à¤•à¤°à¤¾',
    detailsUnavailable: 'à¤¤à¤ªà¤¶à¥€à¤² à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¾à¤¹à¥€',
    loadOlderScans: 'à¤œà¥à¤¨à¥‡ à¤¸à¥à¤•à¥…à¤¨ à¤²à¥‹à¤¡ à¤•à¤°à¤¾',
    searchPlaceholder: 'à¤ªà¤¿à¤•à¥‡, à¤¸à¥à¤¥à¤¿à¤¤à¥€ à¤•à¤¿à¤‚à¤µà¤¾ à¤¤à¤¾à¤°à¥€à¤– à¤¶à¥‹à¤§à¤¾...',
    filter: 'à¤«à¤¿à¤²à¥à¤Ÿà¤°',
    all: 'à¤¸à¤°à¥à¤µ',
    today: 'à¤†à¤œ',
    yesterday: 'à¤•à¤¾à¤²',
    minsAgo: 'à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾à¤‚à¤ªà¥‚à¤°à¥à¤µà¥€',

    chooseLanguageTitle: 'à¤¤à¥à¤®à¤šà¥€ à¤­à¤¾à¤·à¤¾ à¤¨à¤¿à¤µà¤¡à¤¾',
    chooseLanguageSubtitle: 'à¤…à¤‚à¤—à¥‹à¤µà¤¿à¤¸ AI à¤‡à¤‚à¤Ÿà¤°à¤«à¥‡à¤¸à¤¸à¤¾à¤ à¥€ à¤¤à¥à¤®à¤šà¥€ à¤ªà¤¸à¤‚à¤¤à¥€à¤šà¥€ à¤­à¤¾à¤·à¤¾ à¤¨à¤¿à¤µà¤¡à¤¾.',
    continueBtn: 'à¤ªà¥à¤¢à¥‡ à¤šà¤¾à¤²à¥‚ à¤ à¥‡à¤µà¤¾',
    languageChangedSuccess: 'à¤­à¤¾à¤·à¤¾ à¤¯à¤¶à¤¸à¥à¤µà¥€à¤°à¥€à¤¤à¥à¤¯à¤¾ à¤¬à¤¦à¤²à¤²à¥€!',
    langEnglish: 'à¤‡à¤‚à¤—à¥à¤°à¤œà¥€ (English)',
    langTelugu: 'à¤¤à¥‡à¤²à¤—à¥‚ (Telugu)',
    langHindi: 'à¤¹à¤¿à¤‚à¤¦à¥€ (Hindi)',
    langMarathi: 'à¤®à¤°à¤¾à¤ à¥€ (Marathi)',

    welcomeHeader: 'à¤…à¤‚à¤—à¥‹à¤µà¤¿à¤¸ AI',
    welcomeSubtitle: 'à¤•à¥ƒà¤·à¥€ AI à¤®à¤¾à¤°à¥à¤—à¤¦à¤°à¥à¤¶à¤¨ à¤†à¤£à¤¿ à¤…à¤šà¥‚à¤• à¤¸à¤¾à¤§à¤¨à¤¾à¤‚à¤¸à¤¹ à¤†à¤ªà¤²à¥à¤¯à¤¾ à¤¶à¥‡à¤¤à¤¾à¤šà¥‡ à¤‰à¤¤à¥à¤ªà¤¾à¤¦à¤¨ à¤µà¤¾à¤¢à¤µà¤¾.',
    landingWelcomeTo: 'à¤¸à¥à¤µà¤¾à¤—à¤¤ à¤†à¤¹à¥‡',
    landingCompanionText: 'à¤ªà¥€à¤• à¤†à¤°à¥‹à¤—à¥à¤¯, à¤•à¥€à¤¡ à¤¨à¤¿à¤¯à¤‚à¤¤à¥à¤°à¤£ à¤†à¤£à¤¿ à¤‰à¤¤à¥à¤¤à¤® à¤¶à¥‡à¤¤à¥€à¤¸à¤¾à¤ à¥€ à¤¤à¥à¤®à¤šà¤¾ à¤¸à¥à¤®à¤¾à¤°à¥à¤Ÿ à¤¸à¤¾à¤¥à¥€à¤¦à¤¾à¤°.',
    landingAnalyzeCrop: 'à¤ªà¥€à¤• à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¤¾',
    landingHistory: 'à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸',
    landingTrustedByFarmers: 'à¤¶à¥‡à¤¤à¤•à¤±à¥à¤¯à¤¾à¤‚à¤šà¤¾ à¤µà¤¿à¤¶à¥à¤µà¤¾à¤¸',
    landingFarmersCount: 'à¥¨.à¥«K+ à¤¶à¥‡à¤¤à¤•à¤°à¥€',
    landingMoveCursorHint: 'à¤¶à¥‡à¤¤à¤¾à¤µà¤° à¤¤à¥à¤®à¤šà¤¾ à¤•à¤°à¥à¤¸à¤° à¤«à¤¿à¤°à¤µà¤¾',
    landingFarmerSignIn: 'à¤¶à¥‡à¤¤à¤•à¤°à¥€ à¤²à¥‰à¤—à¤¿à¤¨',
    mobileOrEmailLabel: 'à¤®à¥‹à¤¬à¤¾à¤ˆà¤² à¤¨à¤‚à¤¬à¤° à¤•à¤¿à¤‚à¤µà¤¾ à¤ˆà¤®à¥‡à¤²',
    mobileOrEmailPlaceholder: 'à¤®à¥‹à¤¬à¤¾à¤ˆà¤² à¤¨à¤‚à¤¬à¤° à¤•à¤¿à¤‚à¤µà¤¾ à¤ˆà¤®à¥‡à¤² à¤ªà¥à¤°à¤µà¤¿à¤·à¥à¤Ÿ à¤•à¤°à¤¾',
    loginBtn: 'à¤ªà¥à¤¢à¥‡ à¤šà¤¾à¤²à¥‚ à¤ à¥‡à¤µà¤¾',
    newToAgriVision: 'à¤…à¤‚à¤—à¥‹à¤µà¤¿à¤¸à¤µà¤° à¤¨à¤µà¥€à¤¨ à¤†à¤¹à¤¾à¤¤?',
    createAccount: 'à¤–à¤¾à¤¤à¥‡ à¤¤à¤¯à¤¾à¤° à¤•à¤°à¤¾',
    fullNameLabel: 'à¤ªà¥‚à¤°à¥à¤£ à¤¨à¤¾à¤µ',
    fullNamePlaceholder: 'à¤‰à¤¦à¤¾. à¤°à¤®à¥‡à¤¶ à¤ªà¤Ÿà¥‡à¤²',
    emailLabel: 'à¤ˆà¤®à¥‡à¤² à¤ªà¤¤à¥à¤¤à¤¾',
    emailPlaceholder: 'farmer@AgnoVis.ai',
    phoneLabel: 'à¤®à¥‹à¤¬à¤¾à¤ˆà¤² à¤¨à¤‚à¤¬à¤°',
    phonePlaceholder: 'à¥§à¥¦ à¤…à¤‚à¤•à¥€ à¤®à¥‹à¤¬à¤¾à¤ˆà¤² à¤¨à¤‚à¤¬à¤°',
    registerTab: 'à¤¨à¤µà¥€à¤¨ à¤¶à¥‡à¤¤à¤•à¤°à¥€ à¤¨à¥‹à¤‚à¤¦à¤£à¥€',
    loginTab: 'à¤–à¤¾à¤¤à¥à¤¯à¤¾à¤¤ à¤²à¥‰à¤—à¤¿à¤¨ à¤•à¤°à¤¾',
    registerBtn: 'à¤¨à¥‹à¤‚à¤¦à¤£à¥€ à¤•à¤°à¤¾ à¤†à¤£à¤¿ à¤ªà¥à¤¢à¥‡ à¤œà¤¾',
    alreadyHaveAccount: 'à¤†à¤§à¥€à¤š à¤–à¤¾à¤¤à¥‡ à¤†à¤¹à¥‡ à¤•à¤¾?',
    loginLink: 'à¤¯à¥‡à¤¥à¥‡ à¤²à¥‰à¤—à¤¿à¤¨ à¤•à¤°à¤¾',
    registerLink: 'à¤†à¤¤à¤¾ à¤¨à¥‹à¤‚à¤¦à¤£à¥€ à¤•à¤°à¤¾',
    userNotFound: 'à¤¯à¤¾ à¤¤à¤ªà¤¶à¤¿à¤²à¤¾à¤‚à¤¸à¤¹ à¤•à¥‹à¤£à¤¤à¤¾à¤¹à¥€ à¤¶à¥‡à¤¤à¤•à¤°à¥€ à¤†à¤¢à¤³à¤²à¤¾ à¤¨à¤¾à¤¹à¥€. à¤•à¥ƒà¤ªà¤¯à¤¾ à¤†à¤§à¥€ à¤¨à¥‹à¤‚à¤¦à¤£à¥€ à¤•à¤°à¤¾.',
    accountNotFound: 'à¤–à¤¾à¤¤à¥‡ à¤†à¤¢à¤³à¤²à¥‡ à¤¨à¤¾à¤¹à¥€. à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ªà¥à¤°à¤¥à¤® à¤¨à¥‹à¤‚à¤¦à¤£à¥€ à¤•à¤°à¤¾.',
    invalidLoginDetails: 'à¤…à¤µà¥ˆà¤§ à¤²à¥‰à¤—à¤¿à¤¨ à¤¤à¤ªà¤¶à¥€à¤². à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ªà¥à¤¨à¥à¤¹à¤¾ à¤ªà¥à¤°à¤¯à¤¤à¥à¤¨ à¤•à¤°à¤¾.',
    invalidIdentifierFormat: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤µà¥ˆà¤§ à¤®à¥‹à¤¬à¤¾à¤ˆà¤² à¤¨à¤‚à¤¬à¤° à¤•à¤¿à¤‚à¤µà¤¾ à¤ˆà¤®à¥‡à¤² à¤ªà¥à¤°à¤µà¤¿à¤·à¥à¤Ÿ à¤•à¤°à¤¾.',
    enterValidPassword: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤†à¤ªà¤²à¤¾ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤ªà¥à¤°à¤µà¤¿à¤·à¥à¤Ÿ à¤•à¤°à¤¾ (à¤•à¤¿à¤®à¤¾à¤¨ à¥ª à¤…à¤•à¥à¤·à¤°à¥‡).',
    passwordLabel: 'à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡',
    passwordPlaceholder: 'à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤ªà¥à¤°à¤µà¤¿à¤·à¥à¤Ÿ à¤•à¤°à¤¾',
    preferredLanguageLabel: 'à¤ªà¤¸à¤‚à¤¤à¥€à¤šà¥€ à¤­à¤¾à¤·à¤¾',
    registerNowLink: 'à¤†à¤¤à¤¾ à¤¨à¥‹à¤‚à¤¦à¤£à¥€ à¤•à¤°à¤¾',
    enterValidName: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤†à¤ªà¤²à¥‡ à¤ªà¥‚à¤°à¥à¤£ à¤¨à¤¾à¤µ à¤ªà¥à¤°à¤µà¤¿à¤·à¥à¤Ÿ à¤•à¤°à¤¾ (à¤•à¤¿à¤®à¤¾à¤¨ à¥¨ à¤…à¤•à¥à¤·à¤°à¥‡).',
    enterValidEmail: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤µà¥ˆà¤§ à¤ˆà¤®à¥‡à¤² à¤ªà¤¤à¥à¤¤à¤¾ à¤ªà¥à¤°à¤µà¤¿à¤·à¥à¤Ÿ à¤•à¤°à¤¾.',
    enterValidPhone: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤µà¥ˆà¤§ à¥§à¥¦ à¤…à¤‚à¤•à¥€ à¤®à¥‹à¤¬à¤¾à¤ˆà¤² à¤¨à¤‚à¤¬à¤° à¤ªà¥à¤°à¤µà¤¿à¤·à¥à¤Ÿ à¤•à¤°à¤¾.',
    registrationSuccess: 'à¤¶à¥‡à¤¤à¤•à¤°à¥€ à¤–à¤¾à¤¤à¥‡ à¤¯à¤¶à¤¸à¥à¤µà¥€à¤°à¥€à¤¤à¥à¤¯à¤¾ à¤¨à¥‹à¤‚à¤¦à¤µà¤²à¥‡ à¤—à¥‡à¤²à¥‡!',
    loginSuccess: 'à¤²à¥‰à¤—à¤¿à¤¨ à¤¯à¤¶à¤¸à¥à¤µà¥€! à¤ªà¥à¤¨à¥à¤¹à¤¾ à¤¸à¥à¤µà¤¾à¤—à¤¤ à¤†à¤¹à¥‡.',
    accountDetails: 'à¤–à¤¾à¤¤à¥à¤¯à¤¾à¤šà¤¾ à¤¤à¤ªà¤¶à¥€à¤²',
    registeredOn: 'à¤¨à¥‹à¤‚à¤¦à¤£à¥€ à¤¤à¤¾à¤°à¥€à¤–',
    noAnalysesYet: 'à¤…à¤¦à¥à¤¯à¤¾à¤ª à¤•à¥‹à¤£à¤¤à¥‡à¤¹à¥€ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¨à¤¾à¤¹à¥€',
    noAnalysesYetSub: 'à¤†à¤ªà¤²à¥‡ à¤ªà¤¹à¤¿à¤²à¥‡ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¸à¥à¤°à¥‚ à¤•à¤°à¤£à¥à¤¯à¤¾à¤¸à¤¾à¤ à¥€ à¤ªà¤¿à¤•à¤¾à¤šà¤¾ à¤«à¥‹à¤Ÿà¥‹ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¤¾ à¤•à¤¿à¤‚à¤µà¤¾ à¤•à¤¾à¤¢à¤¾.',
    startScanNow: 'à¤ªà¤¹à¤¿à¤²à¤¾ à¤¸à¥à¤•à¥…à¤¨ à¤¸à¥à¤°à¥‚ à¤•à¤°à¤¾',
    analyzeMyCropBtn: 'à¤®à¤¾à¤à¥à¤¯à¤¾ à¤ªà¤¿à¤•à¤¾à¤šà¥‡ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¤¾',
    memberVerified: 'à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¿à¤¤ à¤¶à¥‡à¤¤à¤•à¤°à¥€',
    sessionRestored: 'à¤¸à¥à¤µà¤¾à¤—à¤¤ à¤†à¤¹à¥‡! à¤¤à¥à¤®à¤šà¥‡ à¤¸à¤¤à¥à¤° à¤ªà¥à¤¨à¤°à¥à¤¸à¤‚à¤šà¤¯à¤¿à¤¤ à¤•à¥‡à¤²à¥‡ à¤—à¥‡à¤²à¥‡.',
    memberUserId: 'à¤¶à¥‡à¤¤à¤•à¤°à¥€ ID',

    navHome: 'à¤¹à¥‹à¤®',
    navHistory: 'à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸',
    navProfile: 'à¤ªà¥à¤°à¥‹à¤«à¤¾à¤‡à¤²',
    navFields: 'à¤¶à¥‡à¤¤',
    navChat: 'AI à¤šà¥…à¤Ÿ',
    navAlerts: 'à¤¸à¥‚à¤šà¤¨à¤¾',
    weatherForecast: 'à¤¹à¤µà¤¾à¤®à¤¾à¤¨ à¤…à¤‚à¤¦à¤¾à¤œ',

    greetingPrefix: 'à¤¶à¥à¤­ à¤¸à¤•à¤¾à¤³',
    greetingReadyText: 'à¤†à¤œ à¤¤à¥à¤®à¤šà¥à¤¯à¤¾ à¤¶à¥‡à¤¤à¤¾à¤šà¥€ à¤ªà¤¾à¤¹à¤£à¥€ à¤•à¤°à¤£à¥à¤¯à¤¾à¤¸ à¤¤à¤¯à¤¾à¤° à¤†à¤¹à¤¾à¤¤ à¤•à¤¾?',
    analyzeMyCrop: 'à¤®à¤¾à¤à¥à¤¯à¤¾ à¤ªà¤¿à¤•à¤¾à¤šà¥‡ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¤¾',
    captureImage: 'à¤«à¥‹à¤Ÿà¥‹ à¤•à¤¾à¤¢à¤¾',
    captureImageSub: 'à¤¥à¥‡à¤Ÿ à¤¸à¥à¤•à¥…à¤¨à¤¸à¤¾à¤ à¥€ à¤•à¥…à¤®à¥‡à¤°à¤¾ à¤µà¤¾à¤ªà¤°à¤¾',
    uploadImage: 'à¤«à¥‹à¤Ÿà¥‹ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¤¾',
    uploadImageSub: 'à¤—à¥…à¤²à¤°à¥€à¤®à¤§à¥‚à¤¨ à¤¨à¤¿à¤µà¤¡à¤¾',
    recentAnalyses: 'à¤…à¤²à¥€à¤•à¤¡à¥€à¤² à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£à¥‡',
    aiInsightsTips: 'AI à¤¸à¥‚à¤šà¤¨à¤¾ à¤†à¤£à¤¿ à¤¸à¤²à¥à¤²à¥‡',
    wateringWindowTipTitle: 'à¤ªà¤¾à¤£à¥€ à¤¦à¥‡à¤£à¥à¤¯à¤¾à¤šà¥€ à¤¯à¥‹à¤—à¥à¤¯ à¤µà¥‡à¤³',
    wateringWindowTipDesc: 'à¤¶à¥‡à¤¤ B à¤®à¤§à¥€à¤² à¤®à¤¾à¤¤à¥€à¤¤à¥€à¤² à¤†à¤°à¥à¤¦à¥à¤°à¤¤à¤¾ à¤¸à¥‡à¤¨à¥à¤¸à¤°à¤¨à¥à¤¸à¤¾à¤°, à¤†à¤œ à¤¦à¥à¤ªà¤¾à¤°à¥€ 4 à¤¤à¥‡ 6 à¤¦à¤°à¤®à¥à¤¯à¤¾à¤¨ à¤ªà¤¾à¤£à¥€ à¤¦à¥‡à¤£à¥‡ à¤¸à¤°à¥à¤µà¥‹à¤¤à¥à¤¤à¤® à¤ à¤°à¥‡à¤².',
    pestAlertTipTitle: 'à¤•à¥€à¤¡ à¤‡à¤¶à¤¾à¤°à¤¾: à¤®à¤¾à¤µà¤¾ (à¤…à¥…à¤«à¤¿à¤¡à¥à¤¸)',
    pestAlertTipDesc: 'à¤ªà¥à¤°à¤¾à¤¦à¥‡à¤¶à¤¿à¤• à¤†à¤•à¤¡à¥‡à¤µà¤¾à¤°à¥€à¤¨à¥à¤¸à¤¾à¤° à¤¯à¤¾ à¤†à¤ à¤µà¤¡à¥à¤¯à¤¾à¤¤ à¤®à¤¾à¤µà¥à¤¯à¤¾à¤šà¤¾ à¤ªà¥à¤°à¤¾à¤¦à¥à¤°à¥à¤­à¤¾à¤µ à¤µà¤¾à¤¢à¤£à¥à¤¯à¤¾à¤šà¥€ à¤¶à¤•à¥à¤¯à¤¤à¤¾ à¤†à¤¹à¥‡. à¤—à¥à¤°à¥€à¤¨à¤¹à¤¾à¤Šà¤¸ 1 à¤šà¥€ à¤¤à¤ªà¤¾à¤¸à¤£à¥€ à¤•à¤°à¤¾.',

    // Tips for a Better Scan
    scanTipsTitle: 'à¤‰à¤¤à¥à¤•à¥ƒà¤·à¥à¤Ÿ à¤¸à¥à¤•à¥…à¤¨à¤¸à¤¾à¤ à¥€ à¤‰à¤ªà¤¯à¥à¤•à¥à¤¤ à¤Ÿà¤¿à¤ªà¥à¤¸',
    scanTipsSubtitle: 'à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤†à¤£à¤¿ à¤¯à¥‹à¤—à¥à¤¯ à¤ªà¥à¤°à¤•à¤¾à¤¶ à¤…à¤¸à¤²à¥‡à¤²à¥€ à¤›à¤¾à¤¯à¤¾à¤šà¤¿à¤¤à¥à¤°à¥‡ AgnoVis AI à¤²à¤¾ à¤…à¤§à¤¿à¤• à¤…à¤šà¥‚à¤• à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¦à¥‡à¤£à¥à¤¯à¤¾à¤¸ à¤®à¤¦à¤¤ à¤•à¤°à¤¤à¤¾à¤¤.',
    scanTip1: 'à¤ªà¤¾à¤¨à¤¾à¤šà¥‡ à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤›à¤¾à¤¯à¤¾à¤šà¤¿à¤¤à¥à¤° à¤•à¤¾à¤¢à¤¾',
    scanTip2: 'à¤¬à¤¾à¤§à¤¿à¤¤ à¤­à¤¾à¤— à¤¸à¥à¤ªà¤·à¥à¤Ÿà¤ªà¤£à¥‡ à¤¦à¤¿à¤¸à¥‡à¤² à¤¯à¤¾à¤šà¥€ à¤–à¤¾à¤¤à¥à¤°à¥€ à¤•à¤°à¤¾',
    scanTip3: 'à¤šà¤¾à¤‚à¤—à¤²à¥à¤¯à¤¾ à¤ªà¥à¤°à¤•à¤¾à¤¶à¤¾à¤šà¤¾ à¤µà¤¾à¤ªà¤° à¤•à¤°à¤¾',
    scanTip4: 'à¤…à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤•à¤¿à¤‚à¤µà¤¾ à¤–à¥‚à¤ª à¤²à¤¾à¤‚à¤¬à¥‚à¤¨ à¤˜à¥‡à¤¤à¤²à¥‡à¤²à¥‡ à¤«à¥‹à¤Ÿà¥‹ à¤Ÿà¤¾à¤³à¤¾',
    startAnalysisCta: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¸à¥à¤°à¥‚ à¤•à¤°à¤¾ â†’',

    // What AgnoVis AI Can Detect
    whatCanDetectTitle: 'AgnoVis AI à¤•à¤¾à¤¯ à¤¶à¥‹à¤§à¥‚ à¤¶à¤•à¤¤à¥‡',
    supportedCropsSubtitle: 'à¤¸à¤®à¤°à¥à¤¥à¤¿à¤¤ à¤ªà¤¿à¤•à¥‡',
    diseaseDetectionTitle: 'à¤°à¥‹à¤— à¤¨à¤¿à¤¦à¤¾à¤¨',
    diseaseDetectionDesc: 'à¤ªà¤¿à¤•à¤¾à¤‚à¤šà¥‡ à¤°à¥‹à¤— à¤†à¤£à¤¿ à¤¨à¤¿à¤°à¥‹à¤—à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¥€à¤šà¥‡ à¤à¤†à¤¯-à¤†à¤§à¤¾à¤°à¤¿à¤¤ à¤…à¤šà¥‚à¤• à¤¨à¤¿à¤¦à¤¾à¤¨.',
    pestDetectionTitle: 'à¤•à¥€à¤Ÿà¤• à¤“à¤³à¤–',
    pestDetectionDesc: 'à¤ªà¥€à¤•à¤¨à¤¿à¤¹à¤¾à¤¯ à¤«à¤¿à¤²à¥à¤Ÿà¤°à¤¿à¤‚à¤—à¤¸à¤¹ à¤•à¥€à¤Ÿà¤•à¤¾à¤‚à¤šà¤¾ à¤…à¤šà¥‚à¤• à¤¶à¥‹à¤§.',
    managementRecommendationsTitle: 'à¤µà¥à¤¯à¤µà¤¸à¥à¤¥à¤¾à¤ªà¤¨ à¤¶à¤¿à¤«à¤¾à¤°à¤¸à¥€',
    managementRecommendationsDesc: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£à¤¾à¤µà¤° à¤†à¤§à¤¾à¤°à¤¿à¤¤ à¤ªà¥à¤¢à¥€à¤² à¤µà¥à¤¯à¤¾à¤µà¤¹à¤¾à¤°à¤¿à¤• à¤‰à¤ªà¤¾à¤¯à¤¯à¥‹à¤œà¤¨à¤¾à¤‚à¤šà¥‡ à¤®à¤¾à¤°à¥à¤—à¤¦à¤°à¥à¤¶à¤¨ à¤®à¤¿à¤³à¤µà¤¾.',

    captureCropImageTitle: 'à¤ªà¤¿à¤•à¤¾à¤šà¤¾ à¤«à¥‹à¤Ÿà¥‹ à¤•à¤¾à¤¢à¤¾',
    captureCropImageSubtitle: 'AI à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£à¤¾à¤¸à¤¾à¤ à¥€ à¤ªà¤¿à¤•à¤¾à¤šà¤¾ à¤•à¤¿à¤‚à¤µà¤¾ à¤¬à¤¾à¤§à¤¿à¤¤ à¤ªà¤¾à¤¨à¤¾à¤šà¤¾ à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤«à¥‹à¤Ÿà¥‹ à¤˜à¥à¤¯à¤¾.',
    openCamera: 'à¤•à¥…à¤®à¥‡à¤°à¤¾ à¤‰à¤˜à¤¡à¤¾',
    openCameraSub: 'à¤†à¤¤à¤¾ à¤¨à¤µà¥€à¤¨ à¤«à¥‹à¤Ÿà¥‹ à¤˜à¥à¤¯à¤¾',
    uploadFromGallery: 'à¤—à¥…à¤²à¤°à¥€à¤®à¤§à¥‚à¤¨ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¤¾',
    uploadFromGallerySub: 'à¤µà¤¿à¤¦à¥à¤¯à¤®à¤¾à¤¨ à¤«à¥‹à¤Ÿà¥‹ à¤¨à¤¿à¤µà¤¡à¤¾',
    photoGuidelinesTitle: 'à¤«à¥‹à¤Ÿà¥‹ à¤®à¤¾à¤°à¥à¤—à¤¦à¤°à¥à¤¶à¤• à¤¤à¤¤à¥à¤¤à¥à¤µà¥‡',
    guideline1: 'à¤šà¤¾à¤‚à¤—à¤²à¤¾, à¤¨à¥ˆà¤¸à¤°à¥à¤—à¤¿à¤• à¤ªà¥à¤°à¤•à¤¾à¤¶ à¤…à¤¸à¤²à¥à¤¯à¤¾à¤šà¥€ à¤–à¤¾à¤¤à¥à¤°à¥€ à¤•à¤°à¤¾. à¤—à¤¡à¤¦ à¤¸à¤¾à¤µà¤²à¥à¤¯à¤¾ à¤Ÿà¤¾à¤³à¤¾.',
    guideline2: 'à¤µà¤¿à¤·à¤¯à¤¾à¤µà¤° à¤¯à¥‹à¤—à¥à¤¯ à¤«à¥‹à¤•à¤¸ à¤†à¤£à¤¿ à¤®à¤§à¥à¤¯à¤­à¤¾à¤—à¥€ à¤ à¥‡à¤µà¤¾.',
    guideline3: 'à¤¸à¤‚à¤ªà¥‚à¤°à¥à¤£ à¤¬à¤¾à¤§à¤¿à¤¤ à¤­à¤¾à¤— à¤¸à¥à¤ªà¤·à¥à¤Ÿà¤ªà¤£à¥‡ à¤«à¥‹à¤Ÿà¥‹à¤®à¤§à¥à¤¯à¥‡ à¤˜à¥à¤¯à¤¾.',
    analyzeImageBtn: 'à¤«à¥‹à¤Ÿà¥‹à¤šà¥‡ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¤¾',
    selectImageHint: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¸à¤•à¥à¤·à¤® à¤•à¤°à¤£à¥à¤¯à¤¾à¤¸à¤¾à¤ à¥€ à¤ªà¥€à¤• à¤¨à¤¿à¤µà¤¡à¤¾ à¤†à¤£à¤¿ à¤«à¥‹à¤Ÿà¥‹ à¤ªà¥à¤°à¤¦à¤¾à¤¨ à¤•à¤°à¤¾.',
    changeImage: 'à¤«à¥‹à¤Ÿà¥‹ à¤¬à¤¦à¤²à¤¾',
    testWithSample: 'à¤¨à¤®à¥à¤¨à¤¾ à¤ªà¤¿à¤•à¥‡ à¤¤à¤ªà¤¾à¤¸à¤¾',
    noImageSelectedYet: 'à¤…à¤¦à¥à¤¯à¤¾à¤ª à¤•à¥‹à¤£à¤¤à¥€à¤¹à¥€ à¤ªà¥à¤°à¤¤à¤¿à¤®à¤¾ à¤¨à¤¿à¤µà¤¡à¤²à¥‡à¤²à¥€ à¤¨à¤¾à¤¹à¥€',
    noImageSelectedSub: 'à¤ªà¥à¤¢à¥‡ à¤œà¤¾à¤£à¥à¤¯à¤¾à¤¸à¤¾à¤ à¥€ à¤ªà¤¾à¤¨à¤¾à¤šà¤¾ à¤«à¥‹à¤Ÿà¥‹ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¤¾ à¤•à¤¿à¤‚à¤µà¤¾ à¤•à¥…à¤®à¥‡à¤±à¥à¤¯à¤¾à¤¨à¥‡ à¤•à¤¾à¤¢à¤¾.',
    pleaseSelectCrop: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ªà¥à¤°à¤¥à¤® à¤à¤• à¤ªà¥€à¤• à¤¨à¤¿à¤µà¤¡à¤¾.',
    pleaseSelectCropFirst: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ªà¥à¤°à¤¥à¤® à¤à¤• à¤ªà¥€à¤• à¤¨à¤¿à¤µà¤¡à¤¾.',
    pleaseUploadOrCapture: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤à¤• à¤ªà¥à¤°à¤¤à¤¿à¤®à¤¾ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¤¾ à¤•à¤¿à¤‚à¤µà¤¾ à¤«à¥‹à¤Ÿà¥‹ à¤•à¤¾à¤¢à¤¾.',
    pleaseSelectCropAndImage: 'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤à¤• à¤ªà¥€à¤• à¤¨à¤¿à¤µà¤¡à¤¾ à¤†à¤£à¤¿ à¤ªà¥à¤°à¤¤à¤¿à¤®à¤¾ à¤ªà¥à¤°à¤¦à¤¾à¤¨ à¤•à¤°à¤¾.',
    selectCropLabel: 'à¤ªà¥€à¤• à¤¨à¤¿à¤µà¤¡à¤¾',
    selectedCropLabel: 'à¤¨à¤¿à¤µà¤¡à¤²à¥‡à¤²à¥‡ à¤ªà¥€à¤•',
    noCropSelectedYet: 'à¤…à¤¦à¥à¤¯à¤¾à¤ª à¤•à¥‹à¤£à¤¤à¥‡à¤¹à¥€ à¤ªà¥€à¤• à¤¨à¤¿à¤µà¤¡à¤²à¥‡à¤²à¥‡ à¤¨à¤¾à¤¹à¥€',
    readyForAnalysis: 'AI à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£à¤¾à¤¸à¤¾à¤ à¥€ à¤¸à¤œà¥à¤œ',
    cameraSource: 'à¤•à¥…à¤®à¥‡à¤°à¤¾ à¤«à¥‹à¤Ÿà¥‹',
    uploadSource: 'à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¥‡à¤²à¥‡à¤²à¤¾ à¤«à¥‹à¤Ÿà¥‹',
    removeImage: 'à¤ªà¥à¤°à¤¤à¤¿à¤®à¤¾ à¤•à¤¾à¤¢à¤¾',
    takePhoto: 'à¤«à¥‹à¤Ÿà¥‹ à¤˜à¥à¤¯à¤¾',
    retakePhoto: 'à¤ªà¥à¤¨à¥à¤¹à¤¾ à¤«à¥‹à¤Ÿà¥‹ à¤˜à¥à¤¯à¤¾',
    switchCamera: 'à¤•à¥…à¤®à¥‡à¤°à¤¾ à¤¬à¤¦à¤²à¤¾',
    closeCamera: 'à¤•à¥…à¤®à¥‡à¤°à¤¾ à¤¬à¤‚à¤¦ à¤•à¤°à¤¾',
    cameraPermissionDenied: 'à¤•à¥…à¤®à¥‡à¤°à¤¾ à¤ªà¤°à¤µà¤¾à¤¨à¤—à¥€ à¤¨à¤¾à¤•à¤¾à¤°à¤²à¥€ à¤—à¥‡à¤²à¥€. à¤•à¥ƒà¤ªà¤¯à¤¾ à¤•à¥…à¤®à¥‡à¤°à¤¾ à¤ªà¥à¤°à¤µà¥‡à¤¶ à¤¸à¤•à¥à¤·à¤® à¤•à¤°à¤¾.',
    cameraUnavailable: 'à¤•à¥…à¤®à¥‡à¤°à¤¾ à¤…à¤¨à¥à¤ªà¤²à¤¬à¥à¤§ à¤†à¤¹à¥‡ à¤•à¤¿à¤‚à¤µà¤¾ à¤¸à¤®à¤°à¥à¤¥à¤¿à¤¤ à¤¨à¤¾à¤¹à¥€.',

    analyzingImageTitle: 'à¤¤à¥à¤®à¤šà¥à¤¯à¤¾ à¤«à¥‹à¤Ÿà¥‹à¤šà¥‡ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¤¤ à¤†à¤¹à¥‡...',
    analyzingImageSubtitle: 'à¤†à¤®à¤šà¥‡ AI à¤ªà¤¿à¤•à¤¾à¤šà¥à¤¯à¤¾ à¤¸à¥à¤¥à¤¿à¤¤à¥€à¤šà¥€ à¤¸à¤–à¥‹à¤² à¤¤à¤ªà¤¾à¤¸à¤£à¥€ à¤•à¤°à¤¤ à¤†à¤¹à¥‡.',
    stepUpload: 'à¤…à¤ªà¤²à¥‹à¤¡',
    stepUploadSub: 'à¤ªà¥à¤°à¤•à¥à¤°à¤¿à¤¯à¥‡à¤¸à¤¾à¤ à¥€ à¤«à¥‹à¤Ÿà¥‹ à¤¤à¤¯à¤¾à¤° à¤•à¤°à¤¤ à¤†à¤¹à¥‡.',
    stepIdentify: 'à¤“à¤³à¤–',
    stepIdentifySub: 'à¤ªà¤¿à¤•à¤¾à¤šà¥€ à¤œà¤¾à¤¤ à¤†à¤£à¤¿ à¤ªà¥à¤°à¤•à¤¾à¤° à¤“à¤³à¤–à¤¤ à¤†à¤¹à¥‡.',
    stepAnalyze: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£',
    stepAnalyzeSub: 'à¤°à¥‹à¤— à¤•à¤¿à¤‚à¤µà¤¾ à¤•à¥€à¤¡ à¤²à¤•à¥à¤·à¤£à¤¾à¤‚à¤šà¥€ à¤¤à¤ªà¤¾à¤¸à¤£à¥€ à¤•à¤°à¤¤ à¤†à¤¹à¥‡.',
    stepResult: 'à¤¨à¤¿à¤•à¤¾à¤²',
    stepResultSub: 'à¤µà¥ˆà¤¯à¤•à¥à¤¤à¤¿à¤•à¥ƒà¤¤ à¤¶à¤¿à¤«à¤¾à¤°à¤¸à¥€ à¤¤à¤¯à¤¾à¤° à¤•à¤°à¤¤ à¤†à¤¹à¥‡.',

    multipleCropTitle: 'à¤à¤•à¤¾à¤ªà¥‡à¤•à¥à¤·à¤¾ à¤œà¤¾à¤¸à¥à¤¤ à¤¸à¤‚à¤­à¤¾à¤µà¥à¤¯ à¤ªà¤¿à¤•à¥‡ à¤†à¤¢à¤³à¤²à¥€.',
    multipleCropSubtitle: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¸à¥à¤°à¥‚ à¤ à¥‡à¤µà¤£à¥à¤¯à¤¾à¤¸à¤¾à¤ à¥€ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤–à¤¾à¤²à¥€à¤² à¤ªà¤°à¥à¤¯à¤¾à¤¯à¤¾à¤‚à¤®à¤§à¥‚à¤¨ à¤¯à¥‹à¤—à¥à¤¯ à¤ªà¥€à¤• à¤¨à¤¿à¤µà¤¡à¤¾.',
    multipleCropQuestion: 'à¤¤à¥à¤®à¥à¤¹à¥€ à¤•à¥‹à¤£à¤¤à¥à¤¯à¤¾ à¤ªà¤¿à¤•à¤¾à¤šà¥‡ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¤¤ à¤†à¤¹à¤¾à¤¤?',
    analyzedImageLabel: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤¿à¤¤ à¤«à¥‹à¤Ÿà¥‹',
    selectCropType: 'à¤ªà¥€à¤• à¤ªà¥à¤°à¤•à¤¾à¤° à¤¨à¤¿à¤µà¤¡à¤¾:',
    continueAnalysisBtn: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤ªà¥à¤¢à¥‡ à¤šà¤¾à¤²à¥‚ à¤ à¥‡à¤µà¤¾',

    criticalActionRequired: 'à¤¤à¥à¤µà¤°à¥€à¤¤ à¤•à¤¾à¤°à¤µà¤¾à¤ˆ à¤†à¤µà¤¶à¥à¤¯à¤•',
    optimalHealth: 'à¤‰à¤¤à¥à¤¤à¤® à¤†à¤°à¥‹à¤—à¥à¤¯',
    needsAttention: 'à¤²à¤•à¥à¤· à¤¦à¥‡à¤£à¥‡ à¤†à¤µà¤¶à¥à¤¯à¤•',
    analysisSummaryTitle: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¸à¤¾à¤°à¤¾à¤‚à¤¶',
    scannedJustNow: 'à¥¨ à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾à¤‚à¤ªà¥‚à¤°à¥à¤µà¥€ à¤¸à¥à¤•à¥…à¤¨ à¤•à¥‡à¤²à¥‡',
    diseaseDetectedTitle: 'à¤†à¤¢à¤³à¤²à¥‡à¤²à¤¾ à¤°à¥‹à¤—',
    confidenceScore: 'à¤†à¤¤à¥à¤®à¤µà¤¿à¤¶à¥à¤µà¤¾à¤¸ à¤¸à¥à¤•à¥‹à¤…à¤°',
    pestActivityTitle: 'à¤•à¥€à¤¡ à¤•à¥à¤°à¤¿à¤¯à¤¾à¤•à¤²à¤¾à¤ª',
    noneDetected: 'à¤•à¤¾à¤¹à¥€à¤¹à¥€ à¤†à¤¢à¤³à¤²à¥‡ à¤¨à¤¾à¤¹à¥€',
    currentlySafe: 'à¤¸à¤§à¥à¤¯à¤¾ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤',
    recommendedActionTitle: 'à¤¶à¤¿à¤«à¤¾à¤°à¤¸ à¤•à¥‡à¤²à¥‡à¤²à¥€ à¤•à¥ƒà¤¤à¥€',
    noAnalysisResultAvailable: 'à¤…à¤¦à¥à¤¯à¤¾à¤ª à¤•à¥‹à¤£à¤¤à¥‡à¤¹à¥€ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¨à¤¿à¤•à¤¾à¤² à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¾à¤¹à¥€.',
    noRecommendationAvailable: 'à¤…à¤¦à¥à¤¯à¤¾à¤ª à¤•à¥‹à¤£à¤¤à¥€à¤¹à¥€ à¤¶à¤¿à¤«à¤¾à¤°à¤¸ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¾à¤¹à¥€.',
    valueNone: 'à¤•à¤¾à¤¹à¥€ à¤¨à¤¾à¤¹à¥€',
    statusPending: 'à¤ªà¥à¤°à¤²à¤‚à¤¬à¤¿à¤¤',
    logTreatmentPlan: 'à¤‰à¤ªà¤šà¤¾à¤° à¤¯à¥‹à¤œà¤¨à¤¾ à¤œà¤¤à¤¨ à¤•à¤°à¤¾',
    treatmentPlanSaved: 'à¤‰à¤ªà¤šà¤¾à¤° à¤¯à¥‹à¤œà¤¨à¤¾ à¤¯à¤¶à¤¸à¥à¤µà¥€à¤°à¥€à¤¤à¥à¤¯à¤¾ à¤œà¤¤à¤¨ à¤•à¥‡à¤²à¥€ à¤—à¥‡à¤²à¥€!',
    aiDisclaimer: 'à¤¹à¤¾ à¤•à¥‡à¤µà¤³ AI à¤†à¤§à¤¾à¤°à¤¿à¤¤ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£à¤¾à¤šà¤¾ à¤ªà¤°à¤¿à¤£à¤¾à¤® à¤†à¤¹à¥‡ à¤†à¤£à¤¿ à¤¹à¥‡ à¤¨à¤¿à¤¶à¥à¤šà¤¿à¤¤ à¤¨à¤¿à¤¦à¤¾à¤¨ à¤¨à¤¾à¤¹à¥€. à¤•à¥‹à¤£à¤¤à¥€à¤¹à¥€ à¤•à¥ƒà¤¤à¥€ à¤•à¤°à¤£à¥à¤¯à¤¾à¤ªà¥‚à¤°à¥à¤µà¥€ à¤ªà¤¾à¤¤à¥à¤° à¤•à¥ƒà¤·à¥€ à¤¤à¤œà¥à¤œà¥à¤žà¤¾à¤‚à¤šà¤¾ à¤¸à¤²à¥à¤²à¤¾ à¤˜à¥‡à¤Šà¤¨ à¤¨à¤¿à¤•à¤¾à¤²à¤¾à¤šà¥€ à¤–à¤¾à¤¤à¥à¤°à¥€ à¤•à¤°à¤¾.',

    askAgronomistTitle: 'à¤•à¥ƒà¤·à¥€ à¤¸à¤²à¥à¤²à¤¾à¤—à¤¾à¤°à¤¾à¤¶à¥€ à¤šà¤°à¥à¤šà¤¾ à¤•à¤°à¤¾',
    askAgronomistSub: 'à¤¯à¤¾ à¤¨à¤¿à¤¦à¤¾à¤¨à¤¾à¤¬à¤¾à¤¬à¤¤ à¤†à¤£à¤¿ à¤ªà¥€à¤• à¤¸à¤‚à¤°à¤•à¥à¤·à¤£à¤¾à¤µà¤° à¤¸à¤‚à¤µà¤¾à¤¦ à¤¸à¥à¤°à¥‚ à¤ à¥‡à¤µà¤¾',
    chatInputPlaceholder: 'à¤«à¤µà¤¾à¤°à¤£à¥€ à¤ªà¥à¤°à¤®à¤¾à¤£, à¤¸à¥‡à¤‚à¤¦à¥à¤°à¤¿à¤¯ à¤‰à¤ªà¤¾à¤¯, à¤ªà¤¾à¤£à¥€ à¤µà¥à¤¯à¤µà¤¸à¥à¤¥à¤¾à¤ªà¤¨à¤¾à¤¬à¤¦à¥à¤¦à¤² à¤µà¤¿à¤šà¤¾à¤°à¤¾...',
    sendBtn: 'à¤ªà¤¾à¤ à¤µà¤¾',
    thinkingText: 'à¤•à¥ƒà¤·à¥€ à¤¸à¤²à¥à¤²à¤¾à¤—à¤¾à¤° à¤‰à¤¤à¥à¤¤à¤° à¤¦à¥‡à¤¤ à¤†à¤¹à¥‡à¤¤...',
    quickPromptOrganic: 'à¤¸à¥‡à¤‚à¤¦à¥à¤°à¤¿à¤¯ à¤‰à¤ªà¤¾à¤¯',
    quickPromptWater: 'à¤ªà¤¾à¤£à¥€ à¤¸à¤²à¥à¤²à¤¾',
    quickPromptSpread: 'à¤ªà¥à¤°à¤¸à¤¾à¤° à¤°à¥‹à¤–à¤¾',
    checkThisNewImage: 'à¤¯à¤¾ à¤¨à¤µà¥€à¤¨ à¤šà¤¿à¤¤à¥à¤°à¤¾à¤šà¥€ à¤¤à¤ªà¤¾à¤¸à¤£à¥€ à¤•à¤°à¤¾.',
    chatSavedNote: 'à¤¹à¤¾ à¤¸à¤‚à¤µà¤¾à¤¦ à¤†à¤ªà¥‹à¤†à¤ª à¤¯à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¨à¥‹à¤‚à¤¦à¥€à¤¸à¥‹à¤¬à¤¤ à¤œà¤¤à¤¨ à¤•à¥‡à¤²à¤¾ à¤œà¤¾à¤¤à¥‹.',
    reportDownloaded: 'à¤¨à¤¿à¤¦à¤¾à¤¨ à¤…à¤¹à¤µà¤¾à¤² à¤¯à¤¶à¤¸à¥à¤µà¥€à¤°à¥€à¤¤à¥à¤¯à¤¾ à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤à¤¾à¤²à¤¾.',

    historyDetailsTitle: 'à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤¤à¤ªà¤¶à¥€à¤²',
    finalRecommendationTitle: 'à¤¤à¥à¤¦à¥€ à¤¶à¤¿à¤«à¤¾à¤°à¤¸',
    finalRecommendationSub: 'à¤®à¤¾à¤—à¥€à¤² à¤¡à¥‡à¤Ÿà¤¾à¤µà¤° à¤†à¤§à¤¾à¤°à¤¿à¤¤ AI à¤œà¤¨à¤¿à¤¤ à¤¸à¥à¤¥à¤¾à¤¨à¤¿à¤• à¤…à¤‚à¤¤à¤°à¥à¤¦à¥ƒà¤·à¥à¤Ÿà¥€.',
    scanMetricsTitle: 'à¤¸à¥à¤•à¥…à¤¨ à¤®à¥‡à¤Ÿà¥à¤°à¤¿à¤•à¥à¤¸',
    cropTypeLabel: 'à¤ªà¥€à¤• à¤ªà¥à¤°à¤•à¤¾à¤°',
    fieldAreaLabel: 'à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤³',
    envContextTitle: 'à¤ªà¤°à¥à¤¯à¤¾à¤µà¤°à¤£à¥€à¤¯ à¤¸à¤‚à¤¦à¤°à¥à¤­',
    envScanTimeSub: '(à¤¸à¥à¤•à¥…à¤¨à¤šà¥à¤¯à¤¾ à¤µà¥‡à¤³à¥€)',
    envTemperature: 'à¤¤à¤¾à¤ªà¤®à¤¾à¤¨',
    envHumidity: 'à¤†à¤°à¥à¤¦à¥à¤°à¤¤à¤¾',
    envWeather: 'à¤¹à¤µà¤¾à¤®à¤¾à¤¨',
    weatherPartlyCloudy: 'à¤…à¤‚à¤¶à¤¤à¤ƒ à¤¢à¤—à¤¾à¤³',
    weatherSunny: 'à¤¸à¥‚à¤°à¥à¤¯à¤ªà¥à¤°à¤•à¤¾à¤¶à¤¿à¤¤',
    weatherOvercast: 'à¤¢à¤—à¤¾à¤³',
    downloadReportPdf: 'à¤…à¤¹à¤µà¤¾à¤² à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¤°à¤¾ (PDF)',
    mapView: 'à¤¨à¤•à¤¾à¤¶à¤¾ à¤¦à¥ƒà¤¶à¥à¤¯',

    changeLanguageSetting: 'à¤­à¤¾à¤·à¤¾ à¤¬à¤¦à¤²à¤¾',
    currentLanguageLabel: 'à¤¸à¤§à¥à¤¯à¤¾: à¤®à¤°à¤¾à¤ à¥€',
    notificationsSetting: 'à¤¸à¥‚à¤šà¤¨à¤¾',
    notificationsSub: 'à¤…â€à¥…à¤²à¤°à¥à¤Ÿ à¤†à¤£à¤¿ à¤…à¤ªà¤¡à¥‡à¤Ÿà¥à¤¸ à¤µà¥à¤¯à¤µà¤¸à¥à¤¥à¤¾à¤ªà¤¿à¤¤ à¤•à¤°à¤¾',
    helpCenterSetting: 'à¤®à¤¦à¤¤ à¤•à¥‡à¤‚à¤¦à¥à¤°',
    helpCenterSub: 'à¤µà¤¾à¤°à¤‚à¤µà¤¾à¤° à¤µà¤¿à¤šà¤¾à¤°à¤²à¥‡ à¤œà¤¾à¤£à¤¾à¤°à¥‡ à¤ªà¥à¤°à¤¶à¥à¤¨ à¤†à¤£à¤¿ à¤®à¤¦à¤¤',
    helpCenterDialogTitle: 'à¤®à¤¦à¤¤ à¤•à¥‡à¤‚à¤¦à¥à¤°',
    helpCenterDialogHeading: 'à¤…à¤‚à¤—à¥‹à¤µà¤¿à¤¸ AI à¤¸à¤¹ à¤®à¤¦à¤¤ à¤¹à¤µà¥€ à¤†à¤¹à¥‡ à¤•à¤¾?',
    helpCenterDialogContactText: 'à¤®à¤¦à¤¤, à¤ªà¥à¤°à¤¶à¥à¤¨, à¤¤à¤¾à¤‚à¤¤à¥à¤°à¤¿à¤• à¤¸à¤®à¤¸à¥à¤¯à¤¾ à¤•à¤¿à¤‚à¤µà¤¾ à¤…à¤­à¤¿à¤ªà¥à¤°à¤¾à¤¯à¤¾à¤¸à¤¾à¤ à¥€, à¤†à¤®à¤šà¥à¤¯à¤¾à¤¶à¥€ à¤¯à¥‡à¤¥à¥‡ à¤¸à¤‚à¤ªà¤°à¥à¤• à¤¸à¤¾à¤§à¤¾:',
    helpCenterSupportEmail: 'agnovissupport@gmail.com',
    helpCenterSendEmailBtn: 'à¤ˆà¤®à¥‡à¤² à¤ªà¤¾à¤ à¤µà¤¾',
    helpCenterCopyEmailBtn: 'à¤ˆà¤®à¥‡à¤² à¤ªà¤¤à¥à¤¤à¤¾ à¤•à¥‰à¤ªà¥€ à¤•à¤°à¤¾',
    helpCenterEmailCopied: 'à¤ˆà¤®à¥‡à¤² à¤ªà¤¤à¥à¤¤à¤¾ à¤•à¥à¤²à¤¿à¤ªà¤¬à¥‹à¤°à¥à¤¡à¤µà¤° à¤•à¥‰à¤ªà¥€ à¤•à¥‡à¤²à¤¾',
    privacyPolicySetting: 'à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾ à¤§à¥‹à¤°à¤£',
    privacyPolicySub: 'à¤…à¤Ÿà¥€ à¤†à¤£à¤¿ à¤¡à¥‡à¤Ÿà¤¾ à¤µà¤¾à¤ªà¤°',
    logoutBtn: 'à¤²à¥‰à¤—à¤†à¤‰à¤Ÿ',
    editProfile: 'à¤ªà¥à¤°à¥‹à¤«à¤¾à¤‡à¤² à¤¸à¤‚à¤ªà¤¾à¤¦à¤¿à¤¤ à¤•à¤°à¤¾',

    cropApple: 'à¤¸à¤«à¤°à¤šà¤‚à¤¦',
    cropCherry: 'à¤šà¥‡à¤°à¥€',
    cropCorn: 'à¤®à¤•à¤¾',
    cropGrape: 'à¤¦à¥à¤°à¤¾à¤•à¥à¤·',
    cropPeach: 'à¤ªà¥€à¤š',
    cropPepper: 'à¤®à¤¿à¤°à¤šà¥€',
    cropPotato: 'à¤¬à¤Ÿà¤¾à¤Ÿà¤¾',
    cropSquash: 'à¤¸à¥à¤•à¥à¤µà¥…à¤¶',
    cropStrawberry: 'à¤¸à¥à¤Ÿà¥à¤°à¥‰à¤¬à¥‡à¤°à¥€',
    cropTomato: 'à¤Ÿà¥‹à¤®à¥…à¤Ÿà¥‹',
    cropWheat: 'à¤—à¤¹à¥‚',
    cropCotton: 'à¤•à¤¾à¤ªà¥‚à¤¸',
    cropRice: 'à¤­à¤¾à¤¤ / à¤¤à¤¾à¤‚à¤¦à¥‚à¤³',

    statusHealthy: 'à¤¨à¤¿à¤°à¥‹à¤—à¥€',
    statusNeedsAttention: 'à¤²à¤•à¥à¤· à¤¦à¥‡à¤£à¥‡ à¤†à¤µà¤¶à¥à¤¯à¤•',
    diseaseEarlyBlight: 'à¤…à¤°à¥à¤²à¥€ à¤¬à¥à¤²à¤¾à¤‡à¤Ÿ (à¤•à¤°à¤ªà¤¾)',
    diseaseLateBlight: 'à¤²à¥‡à¤Ÿ à¤¬à¥à¤²à¤¾à¤‡à¤Ÿ (à¤¤à¤¾à¤‚à¤¬à¥‡à¤°à¤¾)',
    diseaseLeafCurl: 'à¤ªà¤°à¥à¤£à¤•à¥à¤‚à¤šà¤¨ (à¤²à¥€à¤« à¤•à¤°à¥à¤² à¤µà¥à¤¹à¤¾à¤¯à¤°à¤¸)',
    diseaseNone: 'à¤•à¥‹à¤£à¤¤à¤¾à¤¹à¥€ à¤°à¥‹à¤— à¤¨à¤¾à¤¹à¥€ (à¤¨à¤¿à¤°à¥‹à¤—à¥€ à¤ªà¥€à¤•)',
    pestNone: 'à¤•à¥‹à¤£à¤¤à¥€à¤¹à¥€ à¤•à¥€à¤¡ à¤†à¤¢à¤³à¤²à¥€ à¤¨à¤¾à¤¹à¥€',
    pestAphids: 'à¤®à¤¾à¤µà¤¾ (à¤…à¥…à¤«à¤¿à¤¡à¥à¤¸)',
    pestWhitefly: 'à¤ªà¤¾à¤‚à¤¢à¤°à¥€ à¤®à¤¾à¤¶à¥€',

    actionPruneLeavesTitle: 'à¤ªà¥à¤°à¤­à¤¾à¤µà¤¿à¤¤ à¤ªà¤¾à¤¨à¥‡ à¤•à¤¾à¤¢à¤¾',
    actionPruneLeavesDesc: 'à¤°à¥‹à¤—à¤Ÿ à¤ªà¤¾à¤¨à¥‡ à¤•à¤¾à¤³à¤œà¥€à¤ªà¥‚à¤°à¥à¤µà¤• à¤›à¤¾à¤Ÿà¥‚à¤¨ à¤•à¤¾à¤¢à¤¾. à¤¬à¥à¤°à¤¶à¥€à¤šà¤¾ à¤ªà¥à¤°à¤¸à¤¾à¤° à¤°à¥‹à¤–à¤£à¥à¤¯à¤¾à¤¸à¤¾à¤ à¥€ à¤¹à¥€ à¤ªà¤¾à¤¨à¥‡ à¤•à¤‚à¤ªà¥‹à¤¸à¥à¤Ÿà¤®à¤§à¥à¤¯à¥‡ à¤Ÿà¤¾à¤•à¥‚ à¤¨à¤•à¤¾, à¤¤à¤° à¤œà¤¾à¤³à¥‚à¤¨ à¤•à¤¿à¤‚à¤µà¤¾ à¤¨à¤·à¥à¤Ÿ à¤•à¤°à¤¾.',
    actionFungicideTitle: 'à¤¬à¥à¤°à¤¶à¥€à¤¨à¤¾à¤¶à¤• à¤«à¤µà¤¾à¤°à¤£à¥€',
    actionFungicideDesc: 'à¤•à¥‰à¤ªà¤° à¤†à¤§à¤¾à¤°à¤¿à¤¤ à¤¬à¥à¤°à¤¶à¥€à¤¨à¤¾à¤¶à¤• à¤•à¤¿à¤‚à¤µà¤¾ à¤•à¥à¤²à¥‹à¤°à¥‹à¤¥à¥…à¤²à¥‹à¤¨à¤¿à¤² à¤«à¤µà¤¾à¤°à¤¾. à¤¸à¥à¤¥à¤¾à¤¨à¤¿à¤• à¤ªà¤¾à¤µà¤¸à¤¾à¤¨à¥à¤¸à¤¾à¤° à¤¦à¤° à¥­-à¥§à¥¦ à¤¦à¤¿à¤µà¤¸à¤¾à¤‚à¤¨à¥€ à¤ªà¥à¤¨à¤°à¤¾à¤µà¥ƒà¤¤à¥à¤¤à¥€ à¤•à¤°à¤¾.',
    actionAirflowTitle: 'à¤¹à¤µà¤¾ à¤–à¥‡à¤³à¤¤à¥€ à¤ à¥‡à¤µà¤¾',
    actionAirflowDesc: 'à¤à¤¾à¤¡à¤¾à¤‚à¤®à¤§à¥à¤¯à¥‡ à¤¯à¥‹à¤—à¥à¤¯ à¤…à¤‚à¤¤à¤° à¤ à¥‡à¤µà¤¾ à¤†à¤£à¤¿ à¤ªà¤¾à¤¨à¥‡ à¤•à¥‹à¤°à¤¡à¥€ à¤°à¤¾à¤¹à¤£à¥à¤¯à¤¾à¤¸à¤¾à¤ à¥€ à¤µà¤°à¥‚à¤¨ à¤ªà¤¾à¤£à¥€ à¤¦à¥‡à¤£à¥‡ à¤Ÿà¤¾à¤³à¤¾.',
    actionMaintainProtocolTitle: 'à¤¸à¤§à¥à¤¯à¤¾à¤šà¥€ à¤¦à¥‡à¤–à¤­à¤¾à¤² à¤¸à¥à¤°à¥‚ à¤ à¥‡à¤µà¤¾',
    actionMaintainProtocolDesc: 'à¤ªà¤¿à¤•à¤¾à¤¤ à¤•à¥‹à¤£à¤¤à¥€à¤¹à¥€ à¤…à¤¨à¥à¤¨à¤¦à¥à¤°à¤µà¥à¤¯à¤¾à¤‚à¤šà¥€ à¤•à¤®à¤¤à¤°à¤¤à¤¾ à¤•à¤¿à¤‚à¤µà¤¾ à¤•à¤¿à¤¡à¥€à¤šà¤¾ à¤¤à¤¾à¤£ à¤¨à¤¸à¥‚à¤¨ à¤‰à¤¤à¥à¤¤à¤® à¤†à¤°à¥‹à¤—à¥à¤¯ à¤¦à¤¿à¤¸à¥‚à¤¨ à¤¯à¥‡à¤¤ à¤†à¤¹à¥‡. à¤¨à¤¿à¤¯à¤®à¤¿à¤¤ à¤¨à¤¿à¤°à¥€à¤•à¥à¤·à¤£ à¤¸à¥à¤°à¥‚ à¤ à¥‡à¤µà¤¾.',

    // Weather
    weatherTitle: 'à¤¶à¥‡à¤¤à¥€ à¤¹à¤µà¤¾à¤®à¤¾à¤¨ à¤¬à¥à¤¦à¥à¤§à¤¿à¤®à¤¤à¥à¤¤à¤¾',
    weatherCurrentLocation: 'à¤¸à¤§à¥à¤¯à¤¾à¤šà¥‡ à¤¸à¥à¤¥à¤¾à¤¨',
    weatherUseMyLocation: 'à¤®à¤¾à¤à¥‡ à¤¸à¥à¤¥à¤¾à¤¨ à¤µà¤¾à¤ªà¤°à¤¾',
    weatherChangeLocation: 'à¤¸à¥à¤¥à¤¾à¤¨ à¤¬à¤¦à¤²à¤¾',
    weatherSearchLocation: 'à¤¸à¥à¤¥à¤¾à¤¨ à¤¶à¥‹à¤§à¤¾',
    weatherSearchPlaceholder: 'à¤—à¤¾à¤µ, à¤—à¤¾à¤µà¤ à¤¾à¤£, à¤¶à¤¹à¤°, à¤œà¤¿à¤²à¥à¤¹à¤¾ à¤¶à¥‹à¤§à¤¾...',
    weatherSearching: 'à¤¶à¥‹à¤§à¤¤ à¤†à¤¹à¥‡...',
    weatherSearchResults: 'à¤¶à¥‹à¤§ à¤ªà¤°à¤¿à¤£à¤¾à¤®',
    weatherNoResults: 'à¤•à¥‹à¤£à¤¤à¥‡à¤¹à¥€ à¤¸à¥à¤¥à¤¾à¤¨ à¤¸à¤¾à¤ªà¤¡à¤²à¥‡ à¤¨à¤¾à¤¹à¥€. à¤µà¥‡à¤—à¤³à¤¾ à¤¶à¤¬à¥à¤¦ à¤ªà¥à¤°à¤¯à¤¤à¥à¤¨ à¤•à¤°à¤¾.',
    weatherLastUpdated: 'à¤…à¤ªà¤¡à¥‡à¤Ÿ:',
    weatherCurrentConditions: 'à¤¸à¤§à¥à¤¯à¤¾à¤šà¥€ à¤ªà¤°à¤¿à¤¸à¥à¤¥à¤¿à¤¤à¥€',
    weatherFeelsLike: 'à¤œà¤£à¤¾à¤¸ à¤¯à¥‡à¤¤à¥‡',
    weatherHumidity: 'à¤†à¤°à¥à¤¦à¥à¤°à¤¤à¤¾',
    weatherWind: 'à¤µà¤¾à¤°à¤¾',
    weatherRainfall: 'à¤ªà¤¾à¤Šà¤¸',
    weatherRainProbability: 'à¤ªà¤¾à¤µà¤¸à¤¾à¤šà¥€ à¤¶à¤•à¥à¤¯à¤¤à¤¾',
    weatherRisk: 'à¤¹à¤µà¤¾à¤®à¤¾à¤¨ à¤§à¥‹à¤•à¤¾',
    weatherRiskLow: 'à¤•à¤®à¥€',
    weatherRiskModerate: 'à¤®à¤§à¥à¤¯à¤®',
    weatherRiskHigh: 'à¤œà¤¾à¤¸à¥à¤¤',
    weatherFarmAdvisory: 'à¤¶à¥‡à¤¤à¥€ à¤¸à¤²à¥à¤²à¤¾',
    weather7DayForecast: 'à¥­-à¤¦à¤¿à¤µà¤¸à¤¾à¤‚à¤šà¤¾ à¤…à¤‚à¤¦à¤¾à¤œ',
    weatherFieldWorkOutlook: 'à¤¶à¥‡à¤¤à¥€ à¤•à¤¾à¤®à¤¾à¤šà¥‡ à¤¦à¥ƒà¤·à¥à¤Ÿà¤¿à¤•à¥‹à¤£',
    weatherFieldWorkFavorable: 'à¤…à¤¨à¥à¤•à¥‚à¤²',
    weatherFieldWorkCaution: 'à¤¸à¤¾à¤µà¤§à¤—à¤¿à¤°à¥€',
    weatherFieldWorkAvoid: 'à¤Ÿà¤¾à¤³à¤¾',
    weatherFieldWorkFavorableText: 'à¤¹à¤µà¤¾à¤®à¤¾à¤¨ à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯ à¤¶à¥‡à¤¤à¥€ à¤•à¥à¤°à¤¿à¤¯à¤¾à¤•à¤²à¤¾à¤ªà¤¾à¤‚à¤¸à¤¾à¤ à¥€ à¤…à¤¨à¥à¤•à¥‚à¤² à¤†à¤¹à¥‡.',
    weatherFieldWorkCautionText: 'à¤¹à¤µà¤¾à¤®à¤¾à¤¨ à¤•à¤¾à¤¹à¥€ à¤¶à¥‡à¤¤à¥€ à¤•à¥à¤°à¤¿à¤¯à¤¾à¤•à¤²à¤¾à¤ªà¤¾à¤‚à¤µà¤° à¤ªà¤°à¤¿à¤£à¤¾à¤® à¤•à¤°à¥‚ à¤¶à¤•à¤¤à¥‡. à¤«à¤µà¤¾à¤°à¤£à¥€à¤ªà¥‚à¤°à¥à¤µà¥€ à¤ªà¤¾à¤Šà¤¸ à¤†à¤£à¤¿ à¤µà¤¾à¤°à¤¾ à¤¤à¤ªà¤¾à¤¸à¤¾.',
    weatherFieldWorkAvoidText: 'à¤¹à¤µà¤¾à¤®à¤¾à¤¨ à¤ªà¤°à¤¿à¤¸à¥à¤¥à¤¿à¤¤à¥€ à¤«à¤µà¤¾à¤°à¤£à¥€ à¤•à¤¿à¤‚à¤µà¤¾ à¤‡à¤¤à¤° à¤¸à¤‚à¤µà¥‡à¤¦à¤¨à¤¶à¥€à¤² à¤¶à¥‡à¤¤à¥€ à¤•à¥à¤°à¤¿à¤¯à¤¾à¤•à¤²à¤¾à¤ªà¤¾à¤‚à¤¸à¤¾à¤ à¥€ à¤…à¤¨à¥à¤•à¥‚à¤² à¤¨à¤¾à¤¹à¥€.',
    weatherCropContext: 'à¤¹à¤µà¤¾à¤®à¤¾à¤¨ + à¤ªà¥€à¤• à¤¸à¤‚à¤¦à¤°à¥à¤­',
    weatherLoading: 'à¤¹à¤µà¤¾à¤®à¤¾à¤¨ à¤¡à¥‡à¤Ÿà¤¾ à¤†à¤£à¤¤ à¤†à¤¹à¥‡...',
    weatherUnavailable: 'à¤¹à¤µà¤¾à¤®à¤¾à¤¨ à¤¡à¥‡à¤Ÿà¤¾ à¤¤à¤¾à¤¤à¥à¤ªà¥à¤°à¤¤à¤¾ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¾à¤¹à¥€',
    weatherUnavailableText: 'à¤¥à¥‡à¤Ÿ à¤¹à¤µà¤¾à¤®à¤¾à¤¨ à¤¡à¥‡à¤Ÿà¤¾ à¤†à¤¤à¤¾ à¤®à¤¿à¤³à¤µà¤¤à¤¾ à¤¯à¥‡à¤¤ à¤¨à¤¾à¤¹à¥€. à¤•à¥ƒà¤ªà¤¯à¤¾ à¤¨à¤‚à¤¤à¤° à¤ªà¥à¤¨à¥à¤¹à¤¾ à¤ªà¥à¤°à¤¯à¤¤à¥à¤¨ à¤•à¤°à¤¾.',
    weatherLocationPermissionDenied: 'à¤¸à¥à¤¥à¤¾à¤¨ à¤ªà¥à¤°à¤µà¥‡à¤¶ à¤ªà¤°à¤µà¤¾à¤¨à¤—à¥€ à¤¨à¤¾à¤•à¤¾à¤°à¤²à¥€. à¤†à¤ªà¤²à¥à¤¯à¤¾ à¤¶à¥‡à¤¤à¥€ à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤¸à¤¾à¤ à¥€ à¤¶à¥‹à¤§à¤¾.',
    weatherLocationUnavailable: 'à¤¸à¥à¤¥à¤¾à¤¨ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¾à¤¹à¥€. à¤†à¤ªà¤²à¥à¤¯à¤¾ à¤¶à¥‡à¤¤à¥€ à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤¸à¤¾à¤ à¥€ à¤¶à¥‹à¤§à¤¾.',
    weatherRetry: 'à¤ªà¥à¤¨à¥à¤¹à¤¾ à¤ªà¥à¤°à¤¯à¤¤à¥à¤¨ à¤•à¤°à¤¾',
    weatherToday: 'à¤†à¤œ',
    weatherTomorrow: 'à¤‰à¤¦à¥à¤¯à¤¾',
    weatherSpraying: 'à¤«à¤µà¤¾à¤°à¤£à¥€',
    weatherIrrigation: 'à¤¸à¤¿à¤‚à¤šà¤¨',
    weatherFieldWork: 'à¤¶à¥‡à¤¤à¥€ à¤•à¤¾à¤®',
    weatherConditionClearSky: 'à¤¸à¥à¤µà¤šà¥à¤› à¤†à¤•à¤¾à¤¶',
    weatherConditionMainlyClear: 'à¤®à¥à¤–à¥à¤¯à¤¤à¤ƒ à¤¸à¥à¤µà¤šà¥à¤›',
    weatherConditionPartlyCloudy: 'à¤…à¤°à¥à¤§à¤µà¤Ÿ à¤¢à¤—à¤¾à¤³',
    weatherConditionOvercast: 'à¤¢à¤—à¤¾à¤³',
    weatherConditionFog: 'à¤§à¥à¤•à¥‡',
    weatherConditionLightDrizzle: 'à¤¹à¤²à¤•à¥€ à¤°à¤¿à¤®à¤à¤¿à¤®',
    weatherConditionModerateDrizzle: 'à¤®à¤§à¥à¤¯à¤® à¤°à¤¿à¤®à¤à¤¿à¤®',
    weatherConditionDenseDrizzle: 'à¤¦à¤¾à¤Ÿ à¤°à¤¿à¤®à¤à¤¿à¤®',
    weatherConditionSlightRain: 'à¤¹à¤²à¤•à¤¾ à¤ªà¤¾à¤Šà¤¸',
    weatherConditionModerateRain: 'à¤®à¤§à¥à¤¯à¤® à¤ªà¤¾à¤Šà¤¸',
    weatherConditionHeavyRain: 'à¤œà¥‹à¤°à¤¦à¤¾à¤° à¤ªà¤¾à¤Šà¤¸',
    weatherConditionSlightSnow: 'à¤¹à¤²à¤•à¥€ à¤¬à¤°à¥à¤«',
    weatherConditionModerateSnow: 'à¤®à¤§à¥à¤¯à¤® à¤¬à¤°à¥à¤«',
    weatherConditionHeavySnow: 'à¤œà¥‹à¤°à¤¦à¤¾à¤° à¤¬à¤°à¥à¤«',
    weatherConditionThunderstorm: 'à¤µà¤¾à¤œà¤³à¥à¤¯à¤¾à¤¸à¤¹ à¤ªà¤¾à¤Šà¤¸',
    weatherConditionRainShowers: 'à¤ªà¤¾à¤µà¤¸à¤¾à¤šà¥à¤¯à¤¾ à¤¸à¤°à¥€',
    weatherConditionViolentShowers: 'à¤¤à¥€à¤µà¥à¤° à¤¸à¤°à¥€',
  
    historyNoRecordText: 'à¤œà¤¤à¤¨ à¤•à¥‡à¤²à¥‡à¤²à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤°à¥‡à¤•à¥‰à¤°à¥à¤¡ à¤ªà¥à¤¨à¤°à¥à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‚ à¤¶à¤•à¤²à¥‹ à¤¨à¤¾à¤¹à¥€. à¤•à¥ƒà¤ªà¤¯à¤¾ à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸à¤¾à¤µà¤° à¤ªà¤°à¤¤ à¤œà¤¾.',
    scanNoRecordText: 'à¤¸à¤§à¥à¤¯à¤¾ à¤•à¥‹à¤£à¤¤à¤¾à¤¹à¥€ à¤¡à¤¾à¤¯à¤—à¥à¤¨à¥‹à¤¸à¥à¤Ÿà¤¿à¤• à¤¡à¥‡à¤Ÿà¤¾ à¤¸à¤•à¥à¤°à¤¿à¤¯ à¤¨à¤¾à¤¹à¥€. à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ªà¥€à¤• à¤¸à¥à¤•à¥…à¤¨ à¤•à¤°à¤¾.',
    cropSpecimen: 'à¤ªà¤¿à¤•à¤¾à¤šà¤¾ à¤¨à¤®à¥à¤¨à¤¾',
    noImageAvailable: 'à¤•à¥‹à¤£à¤¤à¥€à¤¹à¥€ à¤ªà¥à¤°à¤¤à¤¿à¤®à¤¾ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¾à¤¹à¥€',
    agriculturalWarning: 'à¤•à¥ƒà¤·à¥€ à¤šà¥‡à¤¤à¤¾à¤µà¤£à¥€',
    riskAssessmentTitle: 'à¤§à¥‹à¤•à¤¾ à¤®à¥‚à¤²à¥à¤¯à¤¾à¤‚à¤•à¤¨',
    riskLabel: 'à¤§à¥‹à¤•à¤¾',
    agronomistFollowupTitle: 'à¤•à¥ƒà¤·à¥€à¤¤à¤œà¥à¤œà¥à¤ž à¤«à¥‰à¤²à¥‹-à¤…à¤ª',
    specialistReferralAdvised: 'âš ï¸ à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤ž à¤¸à¤‚à¤¦à¤°à¥à¤­à¤¾à¤šà¤¾ à¤¸à¤²à¥à¤²à¤¾: ',
    criticalDiseaseSeverity: 'à¤—à¤‚à¤­à¥€à¤° à¤°à¥‹à¤—à¤¾à¤šà¥à¤¯à¤¾ à¤¤à¥€à¤µà¥à¤°à¤¤à¥‡à¤®à¥à¤³à¥‡ à¤•à¥ƒà¤·à¥€à¤¤à¤œà¥à¤œà¥à¤žà¤¾à¤‚à¤šà¥à¤¯à¤¾ à¤ªà¥à¤¨à¤°à¤¾à¤µà¤²à¥‹à¤•à¤¨à¤¾à¤šà¥€ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾ à¤†à¤¹à¥‡.',
    recommendedCheckIn: 'ðŸ“… à¤¶à¤¿à¤«à¤¾à¤°à¤¸ à¤•à¥‡à¤²à¥‡à¤²à¥‡ à¤šà¥‡à¤•-à¤‡à¤¨: ',
    inSevenDays: '7 à¤¦à¤¿à¤µà¤¸à¤¾à¤‚à¤¤',
    standardMonitoringProtocol: 'à¤®à¤¾à¤¨à¤• à¤¨à¤¿à¤°à¥€à¤•à¥à¤·à¤£ à¤ªà¥à¤°à¥‹à¤Ÿà¥‹à¤•à¥‰à¤². à¤¨à¤µà¥€à¤¨ à¤¡à¤¾à¤— à¤µà¤¿à¤•à¤¸à¤¿à¤¤ à¤à¤¾à¤²à¥à¤¯à¤¾à¤¸ à¤ªà¥à¤¨à¥à¤¹à¤¾ à¤¸à¥à¤•à¥…à¤¨ à¤•à¤°à¤¾.',
    steps: 'à¤ªà¤¾à¤¯à¤±à¥à¤¯à¤¾',
    statusActive: 'à¤¸à¤•à¥à¤°à¤¿à¤¯',
    loadingConversation: 'à¤¸à¤‚à¤­à¤¾à¤·à¤£ à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤²à¥‹à¤¡ à¤•à¤°à¤¤ à¤†à¤¹à¥‡...',
    followUpSpecimen: 'à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤ªà¤¾à¤¨à¤¾à¤šà¤¾ à¤¨à¤®à¥à¤¨à¤¾',
    followUpSpecimenPreview: 'à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤ªà¤¾à¤¨à¤¾à¤šà¤¾ à¤¨à¤®à¥à¤¨à¤¾ à¤ªà¥‚à¤°à¥à¤µà¤¾à¤µà¤²à¥‹à¤•à¤¨',
  
    defaultFarmerName: 'à¤¶à¥‡à¤¤à¤•à¤°à¥€',
    recentTimestamp: 'à¤…à¤²à¥€à¤•à¤¡à¥€à¤²',
    statusProcessing: 'à¤ªà¥à¤°à¤•à¥à¤°à¤¿à¤¯à¤¾ à¤¹à¥‹à¤¤ à¤†à¤¹à¥‡...',

    waterAdvisorCheckingForecast:
  "à¤¸à¤¿à¤‚à¤šà¤¨à¤¾à¤šà¥€ à¤¸à¥‚à¤šà¤¨à¤¾ à¤¦à¥‡à¤£à¥à¤¯à¤¾à¤ªà¥‚à¤°à¥à¤µà¥€ à¤¤à¤¾à¤œà¥à¤¯à¤¾ à¤¹à¤µà¤¾à¤®à¤¾à¤¨ à¤…à¤‚à¤¦à¤¾à¤œà¤¾à¤šà¥€ à¤¤à¤ªà¤¾à¤¸à¤£à¥€ à¤•à¥‡à¤²à¥€ à¤œà¤¾à¤¤ à¤†à¤¹à¥‡.",

weatherSourceLive:
  "à¤¥à¥‡à¤Ÿ à¤¹à¤µà¤¾à¤®à¤¾à¤¨ à¤®à¤¾à¤¹à¤¿à¤¤à¥€",

weatherSourceFallback:
  "à¤ªà¤°à¥à¤¯à¤¾à¤¯à¥€ à¤¹à¤µà¤¾à¤®à¤¾à¤¨ à¤®à¤¾à¤¹à¤¿à¤¤à¥€",

waterAdvisorTitle: "à¤¸à¥à¤®à¤¾à¤°à¥à¤Ÿ à¤ªà¤¾à¤£à¥€ à¤¸à¤²à¥à¤²à¤¾à¤—à¤¾à¤°",
waterAdvisorSubtitle: "à¤¤à¥à¤®à¤šà¥à¤¯à¤¾ à¤ªà¤¿à¤•à¤¾à¤¸à¤¾à¤ à¥€ à¤¹à¤µà¤¾à¤®à¤¾à¤¨à¤¾à¤µà¤° à¤†à¤§à¤¾à¤°à¤¿à¤¤ à¤¸à¤¿à¤‚à¤šà¤¨ à¤¸à¥‚à¤šà¤¨à¤¾",
irrigationDecision: "à¤¸à¤¿à¤‚à¤šà¤¨à¤¾à¤šà¤¾ à¤¨à¤¿à¤°à¥à¤£à¤¯",
waterAdvisorWhy: "à¤¹à¥€ à¤¸à¥‚à¤šà¤¨à¤¾ à¤•à¤¾?",
waterNeedLabel: "à¤ªà¤¾à¤£à¥à¤¯à¤¾à¤šà¥€ à¤—à¤°à¤œ",
waterAdvisorNextCheck: "à¤ªà¥à¤¢à¥€à¤² à¤¤à¤ªà¤¾à¤¸à¤£à¥€",
weatherSource: "à¤¹à¤µà¤¾à¤®à¤¾à¤¨ à¤¸à¥à¤°à¥‹à¤¤",
weatherDataUnavailable: "à¤¤à¥à¤®à¤šà¥à¤¯à¤¾ à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤¸à¤¾à¤ à¥€ à¤¸à¤§à¥à¤¯à¤¾ à¤¹à¤µà¤¾à¤®à¤¾à¤¨à¤¾à¤šà¥€ à¤®à¤¾à¤¹à¤¿à¤¤à¥€ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¾à¤¹à¥€.",
weatherSourceUnavailable: "à¤¹à¤µà¤¾à¤®à¤¾à¤¨à¤¾à¤šà¥€ à¤®à¤¾à¤¹à¤¿à¤¤à¥€ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¾à¤¹à¥€",
waterAdvisorDisclaimerTitle: "à¤®à¤¹à¤¤à¥à¤¤à¥à¤µà¤¾à¤šà¥‡",
waterAdvisorDisclaimer: "à¤¯à¤¾ à¤¸à¥‚à¤šà¤¨à¥‡à¤šà¤¾ à¤µà¤¾à¤ªà¤° à¤«à¤•à¥à¤¤ à¤®à¤¾à¤°à¥à¤—à¤¦à¤°à¥à¤¶à¤¨à¤¾à¤¸à¤¾à¤ à¥€ à¤•à¤°à¤¾. à¤¸à¤¿à¤‚à¤šà¤¨à¤¾à¤šà¥€ à¤—à¤°à¤œ à¤¹à¤µà¤¾à¤®à¤¾à¤¨, à¤®à¤¾à¤¤à¥€à¤šà¥€ à¤¸à¥à¤¥à¤¿à¤¤à¥€, à¤ªà¤¿à¤•à¤¾à¤šà¥€ à¤…à¤µà¤¸à¥à¤¥à¤¾ à¤†à¤£à¤¿ à¤¸à¥à¤¥à¤¾à¤¨à¤¿à¤• à¤ªà¤°à¤¿à¤¸à¥à¤¥à¤¿à¤¤à¥€à¤‚à¤µà¤° à¤…à¤µà¤²à¤‚à¤¬à¥‚à¤¨ à¤…à¤¸à¤¤à¥‡.",
waterAdvisorNote: "à¤•à¥‡à¤µà¤³ à¤¯à¤¾ à¤¸à¥‚à¤šà¤¨à¥‡à¤µà¤° à¤…à¤µà¤²à¤‚à¤¬à¥‚à¤¨ à¤°à¤¾à¤¹à¥‚ à¤¨à¤•à¤¾. à¤¸à¤¿à¤‚à¤šà¤¨ à¤•à¤°à¤£à¥à¤¯à¤¾à¤ªà¥‚à¤°à¥à¤µà¥€ à¤®à¤¾à¤¤à¥€ à¤†à¤£à¤¿ à¤ªà¤¿à¤•à¤¾à¤šà¥€ à¤¸à¥à¤¥à¤¿à¤¤à¥€ à¤¤à¤ªà¤¾à¤¸à¤¾.",
waterAdvisorUseLocation: "à¤®à¤¾à¤à¥‡ à¤¸à¥à¤¥à¤¾à¤¨ à¤µà¤¾à¤ªà¤°à¤¾",
waterAdvisorLocationEnabled: "à¤¸à¥à¤¥à¤¾à¤¨ à¤¸à¤•à¥à¤·à¤® à¤†à¤¹à¥‡",
waterAdvisorCurrentCrop: "à¤¸à¤§à¥à¤¯à¤¾à¤šà¥‡ à¤ªà¥€à¤•",
waterAdvisorNoCrop: "à¤•à¥‹à¤£à¤¤à¥‡à¤¹à¥€ à¤ªà¥€à¤• à¤¨à¤¿à¤µà¤¡à¤²à¥‡à¤²à¥‡ à¤¨à¤¾à¤¹à¥€",

  }
};


