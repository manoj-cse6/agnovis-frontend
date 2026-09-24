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

  // Smart Water Advisor
  waterAdvisorTitle: string;
  waterAdvisorSubtitle: string;
  irrigationDecision: string;
  waterAdvisorWhy: string;
  waterNeedLabel: string;
  waterAdvisorNextCheck: string;
  weatherSource: string;
  weatherDataUnavailable: string;
  weatherSourceUnavailable: string;
  waterAdvisorDisclaimerTitle: string;
  waterAdvisorDisclaimer: string;
  waterAdvisorNote: string;
  waterAdvisorUseLocation: string;
  waterAdvisorLocationEnabled: string;
  waterAdvisorCurrentCrop: string;
  waterAdvisorNoCrop: string;
  waterAdvisorCheckingForecast: string;
  weatherSourceLive: string;
  weatherSourceFallback: string;

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
  valueNone: string;
  statusPending: string;
  logTreatmentPlan: string;
  treatmentPlanSaved: string;
  aiDisclaimer: string;

  // Chat continuation
  askAgronomistTitle: string;
  askAgronomistSub: string;
  sendBtn: string;
  thinkingText: string;
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
  weatherConditionLightDrizzle: string;
  weatherConditionModerateDrizzle: string;
  weatherConditionDenseDrizzle: string;
  weatherConditionSlightRain: string;
  weatherConditionModerateRain: string;
  weatherConditionSlightSnow: string;
  weatherConditionModerateSnow: string;
  weatherConditionHeavySnow: string;
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
    chatInputPlaceholder: 'Ask about pesticide dosage, organic methods, irrigation management...',
    listen: 'Listen',
    speakQuestion: 'Speak Question',
    aiAgronomistTitle: 'AI Agronomist Chat',
    weatherConditionClear: 'Clear Sky',
    weatherConditionPartlyCloudy: 'Partly Cloudy',
    weatherConditionCloudy: 'Cloudy',
    weatherConditionOvercast: 'Overcast',
    weatherConditionFog: 'Fog',
    weatherConditionDrizzle: 'Light Drizzle',
    weatherConditionRain: 'Rain',
    weatherConditionHeavyRain: 'Heavy Rain',
    weatherConditionThunderstorm: 'Thunderstorm',
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
    steps: 'Steps',
    noRecommendationAvailable: 'No recommendation available yet.',
    quickPromptOrganic: 'Organic remedies',
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
    startAnalysisCta: 'Start Analysis →',

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

    waterAdvisorTitle: 'Smart Water Advisor',
    waterAdvisorSubtitle: 'Weather-based irrigation guidance for your crop',
    irrigationDecision: 'Irrigation Decision',
    waterAdvisorWhy: 'Why this recommendation?',
    waterNeedLabel: 'Water Need',
    waterAdvisorNextCheck: 'Next Check',
    weatherSource: 'Weather Source',
    weatherDataUnavailable: 'Weather data is currently unavailable for your location.',
    weatherSourceUnavailable: 'Weather source unavailable',
    waterAdvisorDisclaimerTitle: 'Important',
    waterAdvisorDisclaimer: 'Use this recommendation as guidance only. Irrigation needs depend on weather, soil condition, crop stage, and local conditions.',
    waterAdvisorNote: 'Do not rely on this recommendation alone. Check your soil and crop condition before irrigating.',
    waterAdvisorUseLocation: 'Use My Location',
    waterAdvisorLocationEnabled: 'Location enabled',
    waterAdvisorCurrentCrop: 'Current Crop',
    waterAdvisorNoCrop: 'No crop selected',
    waterAdvisorCheckingForecast: 'Checking the latest forecast before giving irrigation guidance.',
    weatherSourceLive: 'Live weather data',
    weatherSourceFallback: 'Fallback data',

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

    historyNoRecordText: 'Could not retrieve the saved analysis record. Please return to History.',
    scanNoRecordText: 'No diagnostic data currently active. Please perform a crop scan.',
    cropSpecimen: 'Crop Specimen',
    noImageAvailable: 'No Image Available',
    agriculturalWarning: 'Agricultural Warning',
    riskAssessmentTitle: 'Risk Assessment',
    riskLabel: 'Risk',
    agronomistFollowupTitle: 'Agronomist Follow-up',
    specialistReferralAdvised: '⚠️ Specialist Referral Advised: ',
    criticalDiseaseSeverity: 'Critical disease severity requires agronomist review.',
    recommendedCheckIn: '📅 Recommended check-in: ',
    inSevenDays: 'In 7 days',
    standardMonitoringProtocol: 'Standard monitoring protocol. Rescan if new lesions develop.',
    statusActive: 'Active',
    loadingConversation: 'Loading conversation history...',
    followUpSpecimen: 'Follow-up leaf specimen',
    followUpSpecimenPreview: 'Follow-up leaf specimen preview',
    defaultFarmerName: 'Farmer',
    recentTimestamp: 'Recent',
    statusProcessing: 'Processing...',
  },

  te: {
    // Extended Keys (te)
    alertsTitle: 'సక్రియ హెచ్చరికలు & సమాచారం',
    checkingAlerts: 'పొలం హెచ్చరికలను తనిఖీ చేస్తోంది...',
    noActiveAlerts: 'ఎటువంటి పంట హెచ్చరికలు లేవు',
    allFieldsNormal: 'నమోదైన అన్ని పొలాలు ప్రస్తుతం ఆరోగ్యకరంగా ఉన్నాయి.',
    alertMarkedResolved: 'హెచ్చరిక పరిష్కరించబడినట్లు గుర్తించబడింది',
    alertReopened: 'హెచ్చరిక పునఃప్రారంభించబడింది',
    couldNotUpdateAlert: 'హెచ్చరిక స్థితిని నవీకరించడం సాధ్యం కాలేదు.',
    couldNotLoadAlerts: 'పంట హెచ్చరికలను లోడ్ చేయడం సాధ్యం కాలేదు.',
    activeStatus: 'సక్రియం',
    resolvedStatus: 'పరిష్కరించబడింది',
    markResolved: 'పరిష్కరించినట్లు గుర్తించు',
    reopen: 'తిరిగి తెరువు',
    followUpsTitle: 'షెడ్యూల్ చేసిన తదుపరి తనిఖీలు',
    loadingFollowUps: 'తదుపరి తనిఖీల వివరాలు లోడ్ అవుతున్నాయి...',
    noPendingFollowUps: 'ఎటువంటి పెండింగ్ తనిఖీలు లేవు',
    noFollowUpsDesc: 'ప్రస్తుతం ఎటువంటి తదుపరి చికిత్సలు లేదా పునఃపరిశీలనలు షెడ్యూల్ చేయబడలేదు.',
    couldNotLoadFollowUps: 'తదుపరి తనిఖీల జాబితాను లోడ్ చేయడం సాధ్యం కాలేదు.',
    failedToUpdateFollowUp: 'తదుపరి తనిఖీ స్థితిని నవీకరించడం విఫలమైంది',
    followUpScheduled: 'తదుపరి తనిఖీ నిర్ణయించబడింది',
    markCompleted: 'పూర్తయినట్లు గుర్తించు',
    referralsTitle: 'నిపుణుల పరిశీలన రెఫరల్స్',
    checkingReferrals: 'నిపుణుల రెఫరల్స్ తనిఖీ చేస్తోంది...',
    noActiveReferrals: 'ఎటువంటి యాక్టివ్ నిపుణుల రెఫరల్స్ లేవు',
    noReferralsDesc: 'ప్రస్తుతం వ్యవసాయ నిపుణుల పరిశీలనకు పంపబడిన సమస్యలు లేవు.',
    couldNotLoadReferrals: 'నిపుణుల రెఫరల్స్ లోడ్ చేయడం సాధ్యం కాలేదు.',
    expertReviewPending: 'నిపుణుల పరిశీలన పెండింగ్‌లో ఉంది',
    registeredFields: 'నమోదైన పొలాలు',
    plotNameLabel: 'పొలం / ప్లాట్ పేరు',
    plotNamePlaceholder: 'ఉదా. ఉత్తర పొలం టమాటా తోట',
    primaryCropLabel: 'ప్రధాన పంట',
    areaAcresLabel: 'పొలం పరిమాణం (ఎకరాలు)',
    enterFieldName: 'దయచేసి పొలం పేరును నమోదు చేయండి',
    fieldRegisteredSuccess: 'పొలం విజయవంతంగా నమోదు చేయబడింది',
    fieldRemovedSuccess: 'పొలం విజయవంతంగా తొలగించబడింది',
    failedCreateField: 'పొలాన్ని నమోదు చేయడం విఫలమైంది',
    failedRemoveField: 'పొలాన్ని తొలగించడం విఫలమైంది',
    couldNotLoadFields: 'నమోదైన పొలాలను లోడ్ చేయడం సాధ్యం కాలేదు.',
    noFieldsYet: 'ఇంకా పొలాలు నమోదు కాలేదు',
    noFieldsDesc: 'తెగుళ్ల ప్రమాదాలు, వాతావరణ సమాచారం మరియు చరిత్రను ట్రాక్ చేయడానికి మీ పొలాలను నమోదు చేయండి.',
    addNewField: 'కొత్త పొలాన్ని జోడించండి',
    loadingHistory: 'చరిత్ర లోడ్ అవుతోంది...',
    fetchingPastScans: 'మీ గత పంట విశ్లేషణలను తెస్తోంది.',
    failedToLoadHistory: 'చరిత్రను లోడ్ చేయడం విఫలమైంది',
    noScansMatchSearch: 'మీ శోధనకు తగిన విశ్లేషణలు ఏవీ కనుగొనబడలేదు',
    tryAdjustingSearch: 'దయచేసి వేరే పదాలతో లేదా ఫిల్టర్‌లతో శోధించండి.',
    issueDetected: 'సమస్య గుర్తించబడింది',
    healthyCondition: 'ఆరోగ్యకరమైన స్థితి',
    voiceInputUnavailable: 'వాయిస్ ఇన్‌పుట్ అందుబాటులో లేదు లేదా మైక్రోఫోన్ అనుమతి నిరాకరించబడింది.',
    speechNotSupported: 'ఈ బ్రౌజర్‌లో వాయిస్ రికగ్నిషన్ సపోర్ట్ లేదు.',
    listeningPrompt: 'వింటోంది... మీ వ్యవసాయ ప్రశ్నను స్పష్టంగా మాట్లాడండి.',
    ttsNotSupported: 'ఈ బ్రౌజర్‌లో వాయిస్ రీడవుట్ సపోర్ట్ లేదు.',
    consultingGemini: 'జెమిని వ్యవసాయ సలహా మోడల్‌ను సంప్రదిస్తోంది...',
    chatSuggestion1: 'టమాటాలో ముందస్తు ఆకుమాడు తెగులును ఎలా నివారించాలి?',
    chatSuggestion2: 'పేను బంక, తామర పురుగులకు ఉత్తమ సేంద్రీయ పిచికారీ ఏది?',
    chatSuggestion3: 'పూత దశలో పాటించవలసిన ఎరువుల షెడ్యూల్ ఏమిటి?',
    chatSuggestion4: 'భారీ వర్షాలకు ముందు పొలంలో నీటి పారుదల ఎలా నిర్వహించాలి?',
    chatInputPlaceholder: 'మందుల మోతాదు, సేంద్రీయ పద్ధతులు, నీటి యాజమాన్యం గురించి అడగండి...',
    listen: 'వినండి',
    speakQuestion: 'ప్రశ్న మాట్లాడండి',
    aiAgronomistTitle: 'AI వ్యవసాయ నిపుణుల చాట్',
    weatherConditionClear: 'నిర్మలమైన ఆకాశం',
    weatherConditionPartlyCloudy: 'పాక్షికంగా మేఘావృతం',
    weatherConditionCloudy: 'మేఘావృతం',
    weatherConditionOvercast: 'దట్టమైన మేఘాలు',
    weatherConditionFog: 'పొగమంచు',
    weatherConditionDrizzle: 'తేలికపాటి జల్లులు',
    weatherConditionRain: 'వర్షం',
    weatherConditionHeavyRain: 'భారీ వర్షం',
    weatherConditionThunderstorm: 'ఉరుములతో కూడిన వర్షం',
    weatherAdvisoryPrecipitation: 'వర్షం కురిసే అవకాశం ఎక్కువగా ఉంది. వర్షానికి ముందు క్రిమిసంహారకాలు లేదా శిలీంద్రనాశకాల పిచికారీని వాయిదా వేయండి.',
    weatherAdvisoryHumidity: 'అధిక తేమ మరియు వర్షం వల్ల శిలీంధ్ర తెగుళ్లు పెరిగే ప్రమాదం ఉంది. పంటను నిశితంగా పరిశీలించండి.',
    weatherAdvisoryNormal: 'పంట పెరుగుదలకు మరియు సాధారణ వ్యవసాయ పనులకు అనుకూలమైన వాతావరణం.',
    weatherAdvisoryHot: 'అధిక ఉష్ణోగ్రతలు నమోదవుతున్నాయి. పంట వడలిపోకుండా తగినంత నీటిపారుదల అందించండి.',
    weatherAdvisoryWind: 'ఈదురు గాలులు వీస్తున్నాయి. మందు వృథా కాకుండా ఉండేందుకు పిచికారీని నివారించండి.',
    couldNotFetchWeather: 'వాతావరణ సమాచారాన్ని పొందడం సాధ్యం కాలేదు.',
    unknownLocation: 'ప్రస్తుత ప్రదేశం',
    currentConditions: 'ప్రస్తుత వాతావరణం',
    sevenDayForecast: '7 రోజుల వాతావరణ సూచన',
    feelsLike: 'అనిపించే ఉష్ణోగ్రత',
    humidityLabel: 'గాలిలో తేమ',
    windLabel: 'గాలి వేగం',
    precipitationLabel: 'వర్షపాతం',
    couldNotProcessImage: 'చిత్రాన్ని ప్రాసెస్ చేయడం సాధ్యం కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి.',
    couldNotSendQuery: 'ప్రశ్నను పంపడం సాధ్యం కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి.',
    steps: 'దశలు',
    noRecommendationAvailable: 'ఇంకా ఎటువంటి సిఫార్సు అందుబాటులో లేదు.',
    quickPromptOrganic: 'సేంద్రీయ నివారణలు',
    quickPromptChemical: 'రసాయన శిలీంద్రనాశక మందులు',
    quickPromptPrevention: 'తదుపరి పంట కాలం కోసం నివారణ చర్యలు',
    quickPromptFertilizer: 'తెగులు సోకినప్పుడు ఎరువుల సలహా',
    expertReferralDesc: 'AI తీవ్రమైన లక్షణాలను గుర్తించింది, వ్యవసాయ నిపుణుల పరిశీలన అవసరం.',
    followUpScheduledDesc: 'చికిత్స పురోగతిని ధృవీకరించడానికి షెడ్యూల్ చేసిన తదుపరి స్కాన్.',
    cropHealthAlerts: 'పంట ఆరోగ్య హెచ్చరికలు',
    treatmentFollowups: 'చికిత్స తదుపరి తనిఖీలు',
    expertReferrals: 'నిపుణుల రెఫరల్స్',
    myFarmlandPlots: 'నా పొలాలు & ప్లాట్లు',

    appName: 'అంగోవిస్ AI',
    sihTagline: 'SIH26131 వేదిక',
    tagline: 'ఖచ్చితమైన వ్యవసాయ ఉపకరణాలు మరియు ఆచరణాత్మక AI మార్గదర్శకాలతో మీ వ్యవసాయాన్ని బలోపేతం చేయండి.',
    back: 'వెనుకకు',
    share: 'భాగస్వామ్యం',
    close: 'మూసివేయి',
    confirm: 'నిర్ధారించండి',
    cancel: 'రద్దు చేయండి',
    save: 'సేవ్ చేయండి',
    edit: 'సవరించండి',
    delete: 'తొలగించండి',
    viewAll: 'అన్నీ చూడండి',
    viewDetails: 'వివరాలు చూడండి',
    takeAction: 'చర్య తీసుకోండి',
    detailsUnavailable: 'వివరాలు అందుబాటులో లేవు',
    loadOlderScans: 'పాత స్కాన్‌లను లోడ్ చేయండి',
    searchPlaceholder: 'పంటలు, స్థితి లేదా తేదీని శోధించండి...',
    filter: 'ఫిల్టర్',
    all: 'అన్నీ',
    today: 'ఈ రోజు',
    yesterday: 'నిన్న',
    minsAgo: 'నిమిషాల క్రితం',

    chooseLanguageTitle: 'మీ భాషను ఎంచుకోండి',
    chooseLanguageSubtitle: 'అంగోవిస్ AI ఇంటర్‌ఫేస్ కోసం మీరు ఇష్టపడే భాషను ఎంచుకోండి.',
    continueBtn: 'కొనసాగించండి',
    languageChangedSuccess: 'భాష విజయవంతంగా మార్చబడింది!',
    langEnglish: 'ఇంగ్లీష్',
    langTelugu: 'తెలుగు',
    langHindi: 'హిందీ',
    langMarathi: 'మరాఠీ',

    welcomeHeader: 'అంగోవిస్ AI',
    welcomeSubtitle: 'ఖచ్చితమైన వ్యవసాయ ఉపకరణాలు మరియు ఆచరణాత్మక AI సూచనలతో మీ వ్యవసాయాన్ని మెరుగుపరచండి.',
    landingWelcomeTo: 'స్వాగతం',
    landingCompanionText: 'పంట ఆరోగ్యం, తెగుళ్ల గుర్తింపు మరియు మెరుగైన వ్యవసాయం కోసం మీ స్మార్ట్ సహచరుడు.',
    landingAnalyzeCrop: 'పంటను విశ్లేషించండి',
    landingHistory: 'చరిత్ర',
    landingTrustedByFarmers: 'రైతుల విశ్వాసం',
    landingFarmersCount: '2.5K+ రైతులు',
    landingMoveCursorHint: 'పొలంపై కర్సర్‌ను తరలించండి',
    landingFarmerSignIn: 'రైతు లాగిన్',
    mobileOrEmailLabel: 'మొబైల్ నంబర్ లేదా ఈమెయిల్',
    mobileOrEmailPlaceholder: 'మొబైల్ నంబర్ లేదా ఈమెయిల్ నమోదు చేయండి',
    loginBtn: 'కొనసాగించండి',
    newToAgriVision: 'అంగోవిస్‌కి కొత్తవారా?',
    createAccount: 'ఖాతాను సృష్టించండి',
    fullNameLabel: 'పూర్తి పేరు',
    fullNamePlaceholder: 'ఉదా: రమేష్ పటేల్',
    emailLabel: 'ఈమెయిల్ చిరునామా',
    emailPlaceholder: 'farmer@AgnoVis.ai',
    phoneLabel: 'మొబైల్ నంబర్',
    phonePlaceholder: '10 అంకెల మొబైల్ నంబర్',
    registerTab: 'కొత్త రైతు నమోదు',
    loginTab: 'ఖాతాలోకి లాగిన్ అవ్వండి',
    registerBtn: 'నమోదు చేసుకుని కొనసాగండి',
    alreadyHaveAccount: 'ఇప్పటికే ఖాతా ఉందా?',
    loginLink: 'ఇక్కడ లాగిన్ అవ్వండి',
    registerLink: 'ఇప్పుడే నమోదు చేసుకోండి',
    userNotFound: 'ఈ వివరాలతో రైతు ఖాతా కనుగొనబడలేదు. దయచేసి ముందుగా నమోదు చేసుకోండి.',
    accountNotFound: 'ఖాతా కనుగొనబడలేదు. దయచేసి ముందుగా నమోదు చేసుకోండి.',
    invalidLoginDetails: 'చెల్లని లాగిన్ వివరాలు. దయచేసి మళ్లీ ప్రయత్నించండి.',
    invalidIdentifierFormat: 'దయచేసి సరైన మొబైల్ నంబర్ లేదా ఈమెయిల్ నమోదు చేయండి.',
    enterValidPassword: 'దయచేసి మీ పాస్‌వర్డ్ నమోదు చేయండి (కనీసం 4 అక్షరాలు).',
    passwordLabel: 'పాస్‌వర్డ్',
    passwordPlaceholder: 'పాస్‌వర్డ్ నమోదు చేయండి',
    preferredLanguageLabel: 'ప్రాధాన్య భాష',
    registerNowLink: 'ఇప్పుడే నమోదు చేసుకోండి',
    enterValidName: 'దయచేసి మీ పూర్తి పేరును నమోదు చేయండి (కనీసం 2 అక్షరాలు).',
    enterValidEmail: 'దయచేసి సరైన ఈమెయిల్ చిరునామాను నమోదు చేయండి.',
    enterValidPhone: 'దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్‌ను నమోదు చేయండి.',
    registrationSuccess: 'రైతు ఖాతా విజయవంతంగా నమోదు చేయబడింది!',
    loginSuccess: 'లాగిన్ విజయవంతమైంది! స్వాగతం.',
    accountDetails: 'ఖాతా సమాచారం',
    registeredOn: 'నమోదైన తేదీ',
    noAnalysesYet: 'ఇంకా ఎటువంటి విశ్లేషణలు లేవు',
    noAnalysesYetSub: 'మీ మొదటి విశ్లేషణను ప్రారంభించడానికి పంట చిత్రాన్ని అప్‌లోడ్ చేయండి లేదా ఫోటో తీయండి.',
    startScanNow: 'మొదటి స్కాన్ ప్రారంభించండి',
    analyzeMyCropBtn: 'నా పంటను విశ్లేషించండి',
    memberVerified: 'ధృవీకరించబడిన రైతు',
    sessionRestored: 'స్వాగతం! మీ సెషన్ పునరుద్ధరించబడింది.',
    memberUserId: 'రైతు ID',

    navHome: 'హోమ్',
    navHistory: 'చరిత్ర',
    navProfile: 'ప్రొఫైల్',
    navFields: 'పొలాలు',
    navChat: 'AI చాట్',
    navAlerts: 'హెచ్చరికలు',
    weatherForecast: 'వాతావరణ సూచన',

    greetingPrefix: 'శుభోదయం',
    greetingReadyText: 'ఈ రోజు మీ పంట పొలాలను తనిఖీ చేయడానికి సిద్ధంగా ఉన్నారా?',
    analyzeMyCrop: 'నా పంటను విశ్లేషించండి',
    captureImage: 'చిత్రాన్ని తీయండి',
    captureImageSub: 'లైవ్ స్కాన్ కోసం కెమెరా ఉపయోగించండి',
    uploadImage: 'చిత్రాన్ని అప్‌లోడ్ చేయండి',
    uploadImageSub: 'గ్యాలరీ నుండి ఎంచుకోండి',
    recentAnalyses: 'ఇటీవలి విశ్లేషణలు',
    aiInsightsTips: 'AI అంతర్దృష్టులు & చిట్కాలు',
    wateringWindowTipTitle: 'సరైన నీటిపారుదల సమయం',
    wateringWindowTipDesc: 'ఫీల్డ్ B లోని నేల తేమ సెన్సార్ల ఆధారంగా, ఈ రోజు సాయంత్రం 4 PM నుండి 6 PM మధ్య నీరు పెట్టడం ఉత్తమం.',
    pestAlertTipTitle: 'పురుగు హెచ్చరిక: పేను పురుగులు (ఎఫిడ్స్)',
    pestAlertTipDesc: 'ప్రాంతీయ డేటా ప్రకారం ఈ వారం ఎఫిడ్స్ దాడి ముప్పు ఎక్కువ. గ్రీన్‌హౌస్ 1 లో ముందస్తు పరిశీలన చేయండి.',

    // Tips for a Better Scan
    scanTipsTitle: 'మెరుగైన స్కాన్ కోసం చిట్కాలు',
    scanTipsSubtitle: 'స్పష్టమైన, మంచి వెలుతురు ఉన్న చిత్రాలు AgnoVis AI మరింత ఖచ్చితమైన విశ్లేషణను అందించడానికి సహాయపడతాయి.',
    scanTip1: 'ఆకు యొక్క స్పష్టమైన ఫోటో తీయండి',
    scanTip2: 'తెగులు సోకిన భాగం స్పష్టంగా కనిపించేలా చూసుకోండి',
    scanTip3: 'మంచి వెలుతురు ఉపయోగించండి',
    scanTip4: 'మసకగా లేదా దూరంగా ఉన్న చిత్రాలను నివారించండి',
    startAnalysisCta: 'విశ్లేషణ ప్రారంభించండి →',

    // What AgnoVis AI Can Detect
    whatCanDetectTitle: 'AgnoVis AI ఏమి గుర్తించగలదు',
    supportedCropsSubtitle: 'మద్దతు ఉన్న పంటలు',
    diseaseDetectionTitle: 'వ్యాధి గుర్తింపు',
    diseaseDetectionDesc: 'పంట వ్యాధులు మరియు ఆరోగ్యకరమైన పరిస్థితుల యొక్క AI ఆధారిత గుర్తింపు.',
    pestDetectionTitle: 'కీటకాల గుర్తింపు',
    pestDetectionDesc: 'పంట ఆధారిత ఫిల్టరింగ్‌తో తెగుళ్లు/కీటకాల గుర్తింపు.',
    managementRecommendationsTitle: 'యాజమాన్య సిఫార్సులు',
    managementRecommendationsDesc: 'విశ్లేషణ ఆధారంగా ఆచరణాత్మక తదుపరి కార్యాచరణ మార్గదర్శకత్వాన్ని పొందండి.',

    captureCropImageTitle: 'పంట చిత్రాన్ని తీయండి',
    captureCropImageSubtitle: 'AI విశ్లేషణ కోసం పంట లేదా ప్రభావిత ఆకు యొక్క స్పష్టమైన ఫోటో తీయండి.',
    openCamera: 'కెమెరా తెరవండి',
    openCameraSub: 'ఇప్పుడే కొత్త ఫోటో తీయండి',
    uploadFromGallery: 'గ్యాలరీ నుండి అప్‌లోడ్ చేయండి',
    uploadFromGallerySub: 'ఉన్న ఫోటోను ఎంచుకోండి',
    photoGuidelinesTitle: 'ఫోటో మార్గదర్శకాలు',
    guideline1: 'మంచి సహజ కాంతి ఉండేలా చూడండి. బలమైన నీడలను నివారించండి.',
    guideline2: 'విషయాన్ని దృష్టిలో (ఫోకస్) మరియు మధ్యలో ఉంచండి.',
    guideline3: 'మొత్తం ప్రభావిత ప్రాంతాన్ని స్పష్టంగా ఫోటో తీయండి.',
    analyzeImageBtn: 'చిత్రాన్ని విశ్లేషించండి',
    selectImageHint: 'విశ్లేషణను ప్రారంభించడానికి పంటను ఎంచుకుని చిత్రాన్ని అందించండి.',
    changeImage: 'చిత్రాన్ని మార్చండి',
    testWithSample: 'నమూనా పంటలను పరీక్షించండి',
    noImageSelectedYet: 'ఇంకా ఎటువంటి చిత్రం ఎంపిక చేయలేదు',
    noImageSelectedSub: 'కొనసాగడానికి ఆకు ఫోటోను అప్‌లోడ్ చేయండి లేదా కెమెరాతో తీయండి.',
    pleaseSelectCrop: 'దయచేసి ముందుగా ఒక పంటను ఎంచుకోండి.',
    pleaseSelectCropFirst: 'దయచేసి ముందుగా ఒక పంటను ఎంచుకోండి.',
    pleaseUploadOrCapture: 'దయచేసి చిత్రాన్ని అప్‌లోడ్ చేయండి లేదా ఫోటో తీయండి.',
    pleaseSelectCropAndImage: 'దయచేసి పంటను ఎంచుకుని, చిత్రాన్ని అందించండి.',
    selectCropLabel: 'పంటను ఎంచుకోండి',
    selectedCropLabel: 'ఎంచుకున్న పంట',
    noCropSelectedYet: 'ఇంకా ఏ పంటనూ ఎంచుకోలేదు',
    readyForAnalysis: 'AI విశ్లేషణకు సిద్ధంగా ఉంది',
    cameraSource: 'కెమెరా ఫోటో',
    uploadSource: 'అప్‌లోడ్ చేసిన ఫోటో',
    removeImage: 'చిత్రాన్ని తీసివేయండి',
    takePhoto: 'ఫోటో తీయండి',
    retakePhoto: 'మళ్లీ ఫోటో తీయండి',
    switchCamera: 'కెమెరా మార్చండి',
    closeCamera: 'కెమెరాను మూసివేయి',
    cameraPermissionDenied: 'కెమెరా అనుమతి నిరాకరించబడింది. దయచేసి కెమెరా యాక్సెస్‌ను ప్రారంభించండి.',
    cameraUnavailable: 'కెమెరా అందుబాటులో లేదు లేదా మద్దతు లేదు.',

    waterAdvisorTitle: 'స్మార్ట్ నీటి సలహాదారు',
    waterAdvisorSubtitle: 'మీ పంట కోసం వాతావరణ ఆధారిత నీటిపారుదల సూచనలు',
    irrigationDecision: 'నీటిపారుదల నిర్ణయం',
    waterAdvisorWhy: 'ఈ సూచన ఎందుకు?',
    waterNeedLabel: 'నీటి అవసరం',
    waterAdvisorNextCheck: 'తదుపరి పరిశీలన',
    weatherSource: 'వాతావరణ మూలం',
    weatherDataUnavailable: 'మీ ప్రాంతానికి ప్రస్తుతం వాతావరణ సమాచారం అందుబాటులో లేదు.',
    weatherSourceUnavailable: 'వాతావరణ సమాచారం అందుబాటులో లేదు',
    waterAdvisorDisclaimerTitle: 'ముఖ్యమైన సూచన',
    waterAdvisorDisclaimer: 'ఈ సూచనను మార్గదర్శకంగా మాత్రమే ఉపయోగించండి. నీటిపారుదల అవసరం వాతావరణం, నేల పరిస్థితి, పంట దశ మరియు స్థానిక పరిస్థితులపై ఆధారపడి ఉంటుంది.',
    waterAdvisorNote: 'ఈ సూచనపై మాత్రమే ఆధారపడవద్దు. నీరు పెట్టే ముందు మీ నేల మరియు పంట పరిస్థితిని పరిశీలించండి.',
    waterAdvisorUseLocation: 'నా స్థానాన్ని ఉపయోగించండి',
    waterAdvisorLocationEnabled: 'స్థానం ప్రారంభించబడింది',
    waterAdvisorCurrentCrop: 'ప్రస్తుత పంట',
    waterAdvisorNoCrop: 'పంట ఎంచుకోలేదు',
    waterAdvisorCheckingForecast: 'నీటిపారుదల సూచన ఇవ్వడానికి ముందు తాజా వాతావరణ సూచనను పరిశీలిస్తోంది.',
    weatherSourceLive: 'ప్రత్యక్ష వాతావరణ సమాచారం',
    weatherSourceFallback: 'ప్రత్యామ్నాయ వాతావరణ సమాచారం',

    analyzingImageTitle: 'మీ చిత్రాన్ని విశ్లేషిస్తోంది...',
    analyzingImageSubtitle: 'మా AI సూక్ష్మ వివరాలను నిశితంగా పరిశీలిస్తోంది.',
    stepUpload: 'అప్‌లోడ్',
    stepUploadSub: 'ప్రాసెసింగ్ కోసం చిత్రాన్ని సిద్ధం చేస్తోంది.',
    stepIdentify: 'గుర్తింపు',
    stepIdentifySub: 'మొక్క జాతి మరియు రకాన్ని గుర్తిస్తోంది.',
    stepAnalyze: 'విశ్లేషణ',
    stepAnalyzeSub: 'వ్యాధి లేదా ఒత్తిడి సంకేతాలను స్కాన్ చేస్తోంది.',
    stepResult: 'ఫలితం',
    stepResultSub: 'వ్యక్తిగతీకరించిన సిఫార్సులను రూపొందిస్తోంది.',

    multipleCropTitle: 'ఒకటి కంటే ఎక్కువ పంటలు కనుగొనబడ్డాయి.',
    multipleCropSubtitle: 'విశ్లేషణను కొనసాగించడానికి దయచేసి కింది ఎంపికల నుండి సరైన పంటను ఎంచుకోండి.',
    multipleCropQuestion: 'మీరు ఏ పంటను విశ్లేషిస్తున్నారు?',
    analyzedImageLabel: 'విశ్లేషించిన చిత్రం',
    selectCropType: 'పంట రకాన్ని ఎంచుకోండి:',
    continueAnalysisBtn: 'విశ్లేషణను కొనసాగించండి',

    criticalActionRequired: 'తక్షణ చర్య అవసరం',
    optimalHealth: 'ఆరోగ్యంగా ఉంది',
    needsAttention: 'శ్రద్ధ అవసరం',
    analysisSummaryTitle: 'విశ్లేషణ సారాంశం',
    scannedJustNow: '2 నిమిషాల క్రితం స్కాన్ చేయబడింది',
    diseaseDetectedTitle: 'గుర్తించబడిన వ్యాధి',
    confidenceScore: 'ఖచ్చితత్వ స్కోర్',
    pestActivityTitle: 'పురుగుల ఉనికి',
    noneDetected: 'ఏదీ కనుగొనబడలేదు',
    currentlySafe: 'ప్రస్తుతం సురక్షితం',
    recommendedActionTitle: 'సిఫార్సు చేయబడిన చర్య',
    noAnalysisResultAvailable: 'ఇంకా ఎటువంటి విశ్లేషణ ఫలితం అందుబాటులో లేదు.',
    valueNone: 'ఏదీ లేదు',
    statusPending: 'పెండింగ్‌లో ఉంది',
    logTreatmentPlan: 'చికిత్స ప్రణాళికను నమోదు చేయండి',
    treatmentPlanSaved: 'చికిత్స ప్రణాళిక విజయవంతంగా నమోదు చేయబడింది!',
    aiDisclaimer: 'గమనిక: ఈ AI రూపొందించిన విశ్లేషణ సమాచార ప్రయోజనాల కోసం మాత్రమే మరియు ఇది వృత్తిపరమైన వ్యవసాయ నిపుణుల సలహా కాదు. అంగోవిస్ AI అధిక ఖచ్చితత్వాన్ని లక్ష్యంగా చేసుకున్నప్పటికీ, తప్పు గుర్తింపులు సంభవించవచ్చు. రసాయన చికిత్సలు వర్తించే ముందు స్థానిక వ్యవసాయ నిపుణుడిని సంప్రదించండి.',

    askAgronomistTitle: 'వ్యవసాయ నిపుణుడితో సంభాషణ',
    askAgronomistSub: 'ఈ విశ్లేషణ మరియు పంట సంరక్షణ గురించి చర్చించండి',
    sendBtn: 'పంపు',
    thinkingText: 'వ్యవసాయ నిపుణుడు స్పందిస్తున్నారు...',
    quickPromptWater: 'నీటి యాజమాన్యం',
    quickPromptSpread: 'వ్యాప్తి నివారణ',
    checkThisNewImage: 'ఈ కొత్త చిత్రాన్ని పరిశీలించండి.',
    chatSavedNote: 'ఈ సంభాషణ స్వయంచాలకంగా ఈ విశ్లేషణతో భద్రపరచబడుతుంది.',
    reportDownloaded: 'రోగ నిర్ధారణ నివేదిక విజయవంతంగా డౌన్‌లోడ్ చేయబడింది.',

    // Weather
    weatherTitle: 'వ్యవసాయ వాతావరణ ఇంటెలిజెన్స్',
    weatherCurrentLocation: 'ప్రస్తుత ప్రదేశం',
    weatherUseMyLocation: 'నా ప్రదేశాన్ని ఉపయోగించు',
    weatherChangeLocation: 'ప్రదేశాన్ని మార్చు',
    weatherSearchLocation: 'ప్రదేశాన్ని వెతకండి',
    weatherSearchPlaceholder: 'గ్రామం, పట్టణం, నగరం, జిల్లా వెతకండి...',
    weatherSearching: 'వెతుకుతున్నాము...',
    weatherSearchResults: 'శోధన ఫలితాలు',
    weatherNoResults: 'ప్రదేశాలు కనుగొనబడలేదు. మరొక పదం ప్రయత్నించండి.',
    weatherLastUpdated: 'నవీకరించబడింది:',
    weatherCurrentConditions: 'ప్రస్తుత పరిస్థితులు',
    weatherFeelsLike: 'అనుభవించినట్లు',
    weatherHumidity: 'ఆర్ద్రత',
    weatherWind: 'గాలి',
    weatherRainfall: 'వర్షపాతం',
    weatherRainProbability: 'వర్ష సంభావ్యత',
    weatherRisk: 'వాతావరణ ప్రమాదం',
    weatherRiskLow: 'తక్కువ',
    weatherRiskModerate: 'మధ్యస్థ',
    weatherRiskHigh: 'ఎక్కువ',
    weatherFarmAdvisory: 'వ్యవసాయ సలహా',
    weather7DayForecast: '7-రోజుల సూచన',
    weatherFieldWorkOutlook: 'పంట పని దృష్టికోణం',
    weatherFieldWorkFavorable: 'అనుకూలం',
    weatherFieldWorkCaution: 'జాగ్రత్త',
    weatherFieldWorkAvoid: 'నివారించు',
    weatherFieldWorkFavorableText: 'వాతావరణం సాధారణ వ్యవసాయ కార్యకలాపాలకు అనుకూలంగా ఉన్నట్లు కనిపిస్తుంది.',
    weatherFieldWorkCautionText: 'వాతావరణం కొన్ని వ్యవసాయ కార్యకలాపాలను ప్రభావితం చేయవచ్చు. పిచికారి చేయడానికి ముందు వర్షం మరియు గాలిని తనిఖీ చేయండి.',
    weatherFieldWorkAvoidText: 'వాతావరణ పరిస్థితులు పిచికారి లేదా ఇతర సున్నితమైన వ్యవసాయ కార్యకలాపాలకు అనుకూలంగా లేవు.',
    weatherCropContext: 'వాతావరణం + పంట సందర్భం',
    weatherLoading: 'వాతావరణ డేటా తెస్తున్నాము...',
    weatherUnavailable: 'వాతావరణ డేటా తాత్కాలికంగా అందుబాటులో లేదు',
    weatherUnavailableText: 'ప్రస్తుతం ప్రత్యక్ష వాతావరణ డేటాను పొందలేము. దయచేసి తర్వాత మళ్లీ ప్రయత్నించండి.',
    weatherLocationPermissionDenied: 'ప్రదేశ ప్రాప్యతను అనుమతించలేదు. మీ వ్యవసాయ ప్రదేశం కోసం వెతకండి.',
    weatherLocationUnavailable: 'ప్రదేశం అందుబాటులో లేదు. మీ వ్యవసాయ ప్రదేశం కోసం వెతకండి.',
    weatherRetry: 'మళ్లీ ప్రయత్నించు',
    weatherToday: 'ఈ రోజు',
    weatherTomorrow: 'రేపు',
    weatherSpraying: 'పిచికారి',
    weatherIrrigation: 'నీటిపారుదల',
    weatherFieldWork: 'పంట పని',
    weatherConditionClearSky: 'స్పష్టమైన ఆకాశం',
    weatherConditionMainlyClear: 'ప్రధానంగా స్పష్టం',
    weatherConditionLightDrizzle: 'తేలికపాటి చినుకులు',
    weatherConditionModerateDrizzle: 'మధ్యస్థ చినుకులు',
    weatherConditionDenseDrizzle: 'సాంద్రమైన చినుకులు',
    weatherConditionSlightRain: 'తేలికపాటి వర్షం',
    weatherConditionModerateRain: 'మధ్యస్థ వర్షం',
    weatherConditionSlightSnow: 'తేలికపాటి మంచు',
    weatherConditionModerateSnow: 'మధ్యస్థ మంచు',
    weatherConditionHeavySnow: 'భారీ మంచు',
    weatherConditionRainShowers: 'వర్షపు జల్లులు',
    weatherConditionViolentShowers: 'తీవ్రమైన వర్షపు జల్లులు',

    historyDetailsTitle: 'విశ్లేషణ వివరాలు',
    finalRecommendationTitle: 'తుది సిఫార్సు',
    finalRecommendationSub: 'చారిత్రక డేటా ఆధారంగా AI రూపొందించిన ప్రాంతీయ అంతర్దృష్టి.',
    scanMetricsTitle: 'స్కాన్ కొలమానాలు',
    cropTypeLabel: 'పంట రకం',
    fieldAreaLabel: 'విస్తీర్ణం',
    envContextTitle: 'పర్యావరణ సందర్భం',
    envScanTimeSub: '(స్కాన్ సమయంలో)',
    envTemperature: 'ఉష్ణోగ్రత',
    envHumidity: 'తేమ',
    envWeather: 'వాతావరణం',
    weatherPartlyCloudy: 'పాక్షికంగా మేఘావృతం',
    weatherSunny: 'ఎండగా ఉంది',
    weatherOvercast: 'పూర్తిగా మేఘావృతం',
    downloadReportPdf: 'నివేదికను డౌన్‌లోడ్ చేయండి (PDF)',
    mapView: 'మ్యాప్ వీక్షణ',

    changeLanguageSetting: 'భాషను మార్చండి',
    currentLanguageLabel: 'ప్రస్తుత భాష: తెలుగు',
    notificationsSetting: 'నోటిఫికేషన్‌లు',
    notificationsSub: 'హెచ్చరికలు మరియు అప్‌డేట్‌లను నిర్వహించండి',
    helpCenterSetting: 'సహాయ కేంద్రం',
    helpCenterSub: 'తరచుగా అడిగే ప్రశ్నలు మరియు మద్దతు',
    helpCenterDialogTitle: 'సహాయ కేంద్రం',
    helpCenterDialogHeading: 'అంగోవిస్ AI తో సహాయం కావాలా?',
    helpCenterDialogContactText: 'మద్దతు, ప్రశ్నలు, సాంకేతిక సమస్యలు లేదా అభిప్రాయం కోసం, మమ్మల్ని ఇక్కడ సంప్రదించండి:',
    helpCenterSupportEmail: 'agnovissupport@gmail.com',
    helpCenterSendEmailBtn: 'ఈమెయిల్ పంపండి',
    helpCenterCopyEmailBtn: 'ఈమెయిల్ చిరునామాను కాపీ చేయండి',
    helpCenterEmailCopied: 'ఈమెయిల్ చిరునామా క్లిప్‌బోర్డ్‌కి కాపీ చేయబడింది',
    privacyPolicySetting: 'గోప్యతా విధానం',
    privacyPolicySub: 'నిబంధనలు మరియు డేటా వినియోగం',
    logoutBtn: 'లాగౌట్',
    editProfile: 'ప్రొఫైల్‌ను సవరించండి',

    cropApple: 'ఆపిల్',
    cropCherry: 'చెర్రీ',
    cropCorn: 'మొక్కజొన్న',
    cropGrape: 'ద్రాక్ష',
    cropPeach: 'పీచ్',
    cropPepper: 'మిరియాలు',
    cropPotato: 'బంగాళాదుంప',
    cropSquash: 'స్క్వాష్',
    cropStrawberry: 'స్ట్రాబెర్రీ',
    cropTomato: 'టమాటా',
    cropWheat: 'గోధుమ',
    cropCotton: 'పత్తి',
    cropRice: 'వరి',

    statusHealthy: 'ఆరోగ్యంగా ఉంది',
    statusNeedsAttention: 'శ్రద్ధ అవసరం',
    diseaseEarlyBlight: 'అర్లీ బ్లైట్ (ముందస్తు తెగులు)',
    diseaseLateBlight: 'లేట్ బ్లైట్ (ఆలస్యపు తెగులు)',
    diseaseLeafCurl: 'ఆకు ముడుత వైరస్',
    diseaseNone: 'ఏదీ లేదు (ఆరోగ్యకరమైన పంట)',
    pestNone: 'పురుగులు ఏవీ గుర్తించబడలేదు',
    pestAphids: 'పేను పురుగులు (ఎఫిడ్స్)',
    pestWhitefly: 'తెల్లదోమ',

    actionPruneLeavesTitle: 'ప్రభావిత ఆకులను తొలగించండి',
    actionPruneLeavesDesc: 'మచ్చలు కనిపించే కింది ఆకులను జాగ్రత్తగా కత్తిరించండి. వ్యాధి వ్యాప్తి చెందకుండా వీటిని కాల్చివేయండి లేదా దూరంగా పారవేయండి.',
    actionFungicideTitle: 'శిలీంద్ర సంహారిణి పిచికారీ',
    actionFungicideDesc: 'రాగి ఆధారిత శిలీంద్ర సంహారిణి లేదా క్లోరోథలోనిల్ పిచికారీ చేయండి. స్థానిక వర్షపాతాన్ని బట్టి ప్రతి 7-10 రోజులకు పునరావృతం చేయండి.',
    actionAirflowTitle: 'గాలి వెలుతురును మెరుగుపరచండి',
    actionAirflowDesc: 'మొక్కల మధ్య సరైన దూరం ఉండేలా చూసుకోండి మరియు ఆకులు పొడిగా ఉండటానికి పైనుండి నీరు పోయడం నివారించండి.',
    actionMaintainProtocolTitle: 'ప్రస్తుత పరిశీలనను కొనసాగించండి',
    actionMaintainProtocolDesc: 'పంట ఎటువంటి పోషకాహార లోపం లేదా పురుగుల ఒత్తిడి లేకుండా సరైన ఆరోగ్యాన్ని ప్రదర్శించింది. భవిష్యత్తు కోసం ప్రస్తుత పరిశీలనా విధానాన్ని కొనసాగించండి.',

    historyNoRecordText: 'సేవ్ చేసిన విశ్లేషణ రికార్డును తిరిగి పొందలేకపోయాము. దయచేసి చరిత్రకు తిరిగి వెళ్లండి.',
    scanNoRecordText: 'ప్రస్తుతం ఏ రోగనిర్ధారణ డేటా క్రియాశీలంలో లేదు. దయచేసి పంట స్కాన్ చేయండి.',
    cropSpecimen: 'పంట నమూనా',
    noImageAvailable: 'చిత్రం అందుబాటులో లేదు',
    agriculturalWarning: 'వ్యవసాయ హెచ్చరిక',
    riskAssessmentTitle: 'ప్రమాద అంచనా',
    riskLabel: 'ప్రమాదం',
    agronomistFollowupTitle: 'అగ్రోనమిస్ట్ ఫాలో-అప్',
    specialistReferralAdvised: '⚠️ నిపుణుల రెఫరల్ సలహా: ',
    criticalDiseaseSeverity: 'వ్యాధి తీవ్రత కారణంగా అగ్రోనమిస్ట్ సమీక్ష అవసరం.',
    recommendedCheckIn: '📅 సిఫార్సు చేసిన తనిఖీ: ',
    inSevenDays: '7 రోజుల్లో',
    standardMonitoringProtocol: 'ప్రామాణిక పర్యవేక్షణ ప్రోటోకాల్. కొత్త మచ్చలు కనిపిస్తే మళ్లీ స్కాన్ చేయండి.',
    statusActive: 'క్రియాశీలం',
    loadingConversation: 'సంభాషణ చరిత్ర లోడ్ అవుతోంది...',
    followUpSpecimen: 'ఫాలో-అప్ ఆకు నమూనా',
    followUpSpecimenPreview: 'ఫాలో-అప్ ఆకు నమూనా ప్రివ్యూ',
    defaultFarmerName: 'రైతు',
    recentTimestamp: 'ఇటీవలి',
    statusProcessing: 'ప్రాసెస్ చేయబడుతోంది...',
  },

  hi: {
    // Extended Keys (hi)
    alertsTitle: 'सक्रिय चेतावनियां और अलर्ट',
    checkingAlerts: 'खेत की चेतावनियों की जांच हो रही है...',
    noActiveAlerts: 'कोई सक्रिय फसल अलर्ट नहीं',
    allFieldsNormal: 'सभी पंजीकृत खेत वर्तमान में सामान्य स्थिति में हैं।',
    alertMarkedResolved: 'अलर्ट का समाधान कर दिया गया',
    alertReopened: 'अलर्ट पुनः खोला गया',
    couldNotUpdateAlert: 'अलर्ट की स्थिति अपडेट नहीं हो सकी।',
    couldNotLoadAlerts: 'फसल अलर्ट लोड नहीं हो सके।',
    activeStatus: 'सक्रिय',
    resolvedStatus: 'समाधानित',
    markResolved: 'समाधानित चिह्नित करें',
    reopen: 'पुनः खोलें',
    followUpsTitle: 'निर्धारित फॉलो-अप',
    loadingFollowUps: 'फॉलो-अप शेड्यूल लोड हो रहे हैं...',
    noPendingFollowUps: 'कोई लंबित फॉलो-अप नहीं है',
    noFollowUpsDesc: 'इस समय कोई फॉलो-अप उपचार या पुनः निरीक्षण निर्धारित नहीं है।',
    couldNotLoadFollowUps: 'फॉलो-अप लोड नहीं हो सके।',
    failedToUpdateFollowUp: 'फॉलो-अप अपडेट करने में विफल',
    followUpScheduled: 'फॉलो-अप निर्धारित',
    markCompleted: 'पूर्ण चिह्नित करें',
    referralsTitle: 'विशेषज्ञ समीक्षा रेफरल',
    checkingReferrals: 'विशेषज्ञ रेफरल की जांच हो रही है...',
    noActiveReferrals: 'कोई सक्रिय विशेषज्ञ रेफरल नहीं',
    noReferralsDesc: 'वर्तमान में कृषि विशेषज्ञों को कोई मामला संदर्भित नहीं है।',
    couldNotLoadReferrals: 'विशेषज्ञ रेफरल लोड नहीं हो सके।',
    expertReviewPending: 'विशेषज्ञ समीक्षा लंबित',
    registeredFields: 'पंजीकृत खेत',
    plotNameLabel: 'खेत / प्लॉट का नाम',
    plotNamePlaceholder: 'उदा. उत्तरी खेत टमाटर ब्लॉक',
    primaryCropLabel: 'मुख्य फसल',
    areaAcresLabel: 'खेत का आकार (एकड़)',
    enterFieldName: 'कृपया खेत का नाम दर्ज करें',
    fieldRegisteredSuccess: 'खेत सफलतापूर्वक पंजीकृत किया गया',
    fieldRemovedSuccess: 'खेत सफलतापूर्वक हटा दिया गया',
    failedCreateField: 'खेत बनाने में विफल',
    failedRemoveField: 'खेत हटाने में विफल',
    couldNotLoadFields: 'आपके पंजीकृत खेत लोड नहीं किए जा सके।',
    noFieldsYet: 'अभी तक कोई पंजीकृत खेत नहीं है',
    noFieldsDesc: 'रोग जोखिम, मौसम पूर्वानुमान और इतिहास को ट्रैक करने के लिए अपने खेतों को पंजीकृत करें।',
    addNewField: 'नया खेत जोड़ें',
    loadingHistory: 'इतिहास लोड हो रहा है...',
    fetchingPastScans: 'आपके पिछले फसल विश्लेषण प्राप्त किए जा रहे हैं।',
    failedToLoadHistory: 'इतिहास लोड करने में विफल',
    noScansMatchSearch: 'आपकी खोज से मेल खाता कोई स्कैन नहीं मिला',
    tryAdjustingSearch: 'कृपया अपने खोज शब्द या फ़िल्टर बदलकर देखें।',
    issueDetected: 'समस्या पाई गई',
    healthyCondition: 'स्वस्थ स्थिति',
    voiceInputUnavailable: 'वॉइस इनपुट अनुपलब्ध है या माइक्रोफ़ोन की अनुमति नहीं दी गई।',
    speechNotSupported: 'इस ब्राउज़र में स्पीच रिकग्निशन समर्थित नहीं है।',
    listeningPrompt: 'सुन रहा है... अपना कृषि संबंधी प्रश्न स्पष्ट रूप से बोलें।',
    ttsNotSupported: 'इस ब्राउज़र में टेक्स्ट-टू-स्पीच समर्थित नहीं है।',
    consultingGemini: 'जेमिनी कृषि सलाहकार मॉडल से परामर्श लिया जा रहा है...',
    chatSuggestion1: 'टमाटर में अगेती झुलसा रोग से कैसे बचाव करें?',
    chatSuggestion2: 'माहू और थ्रिप्स कीटों के लिए सबसे अच्छा जैविक कीटनाशक?',
    chatSuggestion3: 'फसल में फूल आने की अवस्था में कौन सा उर्वरक दें?',
    chatSuggestion4: 'बारिश से पहले खेत में जल निकासी का प्रबंधन कैसे करें?',
    chatInputPlaceholder: 'दवा छिड़काव, जैविक उपाय, सिंचाई आदि के बारे में पूछें...',
    listen: 'सुनें',
    speakQuestion: 'प्रश्न बोलें',
    aiAgronomistTitle: 'एआई कृषि विशेषज्ञ चैट',
    weatherConditionClear: 'साफ आसमान',
    weatherConditionPartlyCloudy: 'आंशिक बादल',
    weatherConditionCloudy: 'बादल छाए रहेंगे',
    weatherConditionOvercast: 'घने बादल',
    weatherConditionFog: 'कोहरा / धुंध',
    weatherConditionDrizzle: 'हल्की बूंदाबांदी',
    weatherConditionRain: 'वर्षा',
    weatherConditionHeavyRain: 'भारी वर्षा',
    weatherConditionThunderstorm: 'गरज के साथ बौछारें',
    weatherAdvisoryPrecipitation: 'बारिश की अत्यधिक संभावना है। वर्षा से पहले कीटनाशक या फफूंदनाशक का छिड़काव स्थगित करने पर विचार करें।',
    weatherAdvisoryHumidity: 'अधिक नमी और बारिश से फफूंद जनित रोगों का खतरा बढ़ सकता है। फसलों की बारीकी से निगरानी करें।',
    weatherAdvisoryNormal: 'फसल वृद्धि और सामान्य कृषि कार्यों के लिए मौसम अनुकूल है।',
    weatherAdvisoryHot: 'तापमान अधिक है। गर्मी के तनाव से बचाने के लिए फसलों को पर्याप्त पानी दें।',
    weatherAdvisoryWind: 'तेज हवाएं चल रही हैं। दवाओं के उड़ने से बचने के लिए तेज छिड़काव न करें।',
    couldNotFetchWeather: 'मौसम का पूर्वानुमान प्राप्त नहीं हो सका।',
    unknownLocation: 'वर्तमान स्थान',
    currentConditions: 'वर्तमान स्थिति',
    sevenDayForecast: '7-दिवसीय पूर्वानुमान',
    feelsLike: 'महसूस तापमान',
    humidityLabel: 'नमी / आर्द्रता',
    windLabel: 'हवा की गति',
    precipitationLabel: 'वर्षा की मात्रा',
    couldNotProcessImage: 'छवि संसाधित नहीं हो सकी। कृपया पुनः प्रयास करें।',
    couldNotSendQuery: 'प्रश्न भेजा नहीं जा सका। कृपया पुनः प्रयास करें।',
    steps: 'कदम',
    noRecommendationAvailable: 'अभी तक कोई अनुशंसा उपलब्ध नहीं है।',
    quickPromptOrganic: 'जैविक उपचार',
    quickPromptChemical: 'रासायनिक फफूंदनाशक विकल्प',
    quickPromptPrevention: 'अगले मौसम के लिए निवारक उपाय',
    quickPromptFertilizer: 'रोग के दौरान उर्वरक संबंधी सलाह',
    expertReferralDesc: 'एआई ने गंभीर लक्षणों का पता लगाया है, विशेषज्ञ समीक्षा आवश्यक है।',
    followUpScheduledDesc: 'उपचार की प्रगति की पुष्टि के लिए निर्धारित फॉलो-अप स्कैन।',
    cropHealthAlerts: 'फसल स्वास्थ्य अलर्ट',
    treatmentFollowups: 'उपचार फॉलो-अप',
    expertReferrals: 'विशेषज्ञ रेफरल',
    myFarmlandPlots: 'मेरे खेत और प्लॉट',

    appName: 'अंगोविस AI',
    sihTagline: 'SIH26131 प्लेटफॉर्म',
    tagline: 'सटीक कृषि उपकरणों और उपयोगी AI अंतर्दृष्टि के साथ अपने खेत को सशक्त बनाएं।',
    back: 'वापस',
    share: 'साझा करें',
    close: 'बंद करें',
    confirm: 'पुष्टि करें',
    cancel: 'रद्द करें',
    save: 'सहेजें',
    edit: 'संपादित करें',
    delete: 'हटाएं',
    viewAll: 'सभी देखें',
    viewDetails: 'विवरण देखें',
    takeAction: 'कार्रवाई करें',
    detailsUnavailable: 'विवरण अनुपलब्ध',
    loadOlderScans: 'पुराने स्कैन लोड करें',
    searchPlaceholder: 'फसलें, स्थिति या तारीख खोजें...',
    filter: 'फ़िल्टर',
    all: 'सभी',
    today: 'आज',
    yesterday: 'कल',
    minsAgo: 'मिनट पहले',

    chooseLanguageTitle: 'अपनी भाषा चुनें',
    chooseLanguageSubtitle: 'अंगोविस AI इंटरफ़ेस के लिए अपनी पसंदीदा भाषा चुनें।',
    continueBtn: 'आगे बढ़ें',
    languageChangedSuccess: 'भाषा सफलतापूर्वक बदल दी गई है!',
    langEnglish: 'अंग्रेज़ी (English)',
    langTelugu: 'तेलुगु (Telugu)',
    langHindi: 'हिन्दी (Hindi)',
    langMarathi: 'मराठी (Marathi)',

    welcomeHeader: 'अंगोविस AI',
    welcomeSubtitle: 'सटीक कृषि उपकरणों और व्यावहारिक AI सलाह के साथ अपनी खेती को सशक्त बनाएं।',
    landingWelcomeTo: 'स्वागत है',
    landingCompanionText: 'फसल स्वास्थ्य, कीट पहचान और बेहतर खेती के लिए आपका स्मार्ट साथी।',
    landingAnalyzeCrop: 'फसल का विश्लेषण करें',
    landingHistory: 'इतिहास',
    landingTrustedByFarmers: 'किसानों का भरोसा',
    landingFarmersCount: '2.5K+ किसान',
    landingMoveCursorHint: 'खेत पर अपना कर्सर ले जाएं',
    landingFarmerSignIn: 'किसान लॉगिन',
    mobileOrEmailLabel: 'मोबाइल नंबर या ईमेल',
    mobileOrEmailPlaceholder: 'मोबाइल नंबर या ईमेल दर्ज करें',
    loginBtn: 'आगे बढ़ें',
    newToAgriVision: 'अंगोविस पर नए हैं?',
    createAccount: 'खाता बनाएं',
    fullNameLabel: 'पूरा नाम',
    fullNamePlaceholder: 'उदा. रमेश पटेल',
    emailLabel: 'ईमेल पता',
    emailPlaceholder: 'farmer@AgnoVis.ai',
    phoneLabel: 'मोबाइल नंबर',
    phonePlaceholder: '10 अंकों का मोबाइल नंबर',
    registerTab: 'नए किसान का पंजीकरण',
    loginTab: 'खाते में लॉगिन करें',
    registerBtn: 'पंजीकरण करें और आगे बढ़ें',
    alreadyHaveAccount: 'क्या पहले से पंजीकृत हैं?',
    loginLink: 'यहाँ लॉगिन करें',
    registerLink: 'अभी पंजीकरण करें',
    userNotFound: 'इन विवरणों के साथ कोई किसान खाता नहीं मिला। कृपया पहले पंजीकरण करें।',
    accountNotFound: 'खाता नहीं मिला। कृपया पहले पंजीकरण करें।',
    invalidLoginDetails: 'अमान्य लॉगिन विवरण। कृपया पुनः प्रयास करें।',
    invalidIdentifierFormat: 'कृपया एक मान्य मोबाइल नंबर या ईमेल दर्ज करें।',
    enterValidPassword: 'कृपया अपना पासवर्ड दर्ज करें (कम से कम 4 अक्षर)।',
    passwordLabel: 'पासवर्ड',
    passwordPlaceholder: 'पासवर्ड दर्ज करें',
    preferredLanguageLabel: 'पसंदीदा भाषा',
    registerNowLink: 'अभी पंजीकरण करें',
    enterValidName: 'कृपया अपना पूरा नाम दर्ज करें (कम से कम 2 अक्षर)।',
    enterValidEmail: 'कृपया एक वैध ईमेल पता दर्ज करें।',
    enterValidPhone: 'कृपया एक मान्य 10 अंकों का मोबाइल नंबर दर्ज करें।',
    registrationSuccess: 'किसान खाता सफलतापूर्वक पंजीकृत किया गया!',
    loginSuccess: 'लॉगिन सफल! पुनः स्वागत है।',
    accountDetails: 'खाता जानकारी',
    registeredOn: 'पंजीकरण तिथि',
    noAnalysesYet: 'अभी तक कोई विश्लेषण नहीं हुआ है',
    noAnalysesYetSub: 'अपना पहला विश्लेषण शुरू करने के लिए फसल की तस्वीर अपलोड करें या खींचें।',
    startScanNow: 'पहला स्कैन शुरू करें',
    analyzeMyCropBtn: 'मेरी फसल का विश्लेषण करें',
    memberVerified: 'सत्यापित किसान',
    sessionRestored: 'स्वागत है! आपका सत्र पुनः सक्रिय कर दिया गया है।',
    memberUserId: 'किसान ID',

    navHome: 'होम',
    navHistory: 'इतिहास',
    navProfile: 'प्रोफ़ाइल',
    navFields: 'खेत',
    navChat: 'AI चैट',
    navAlerts: 'अलर्ट',
    weatherForecast: 'मौसम पूर्वानुमान',

    greetingPrefix: 'शुभ प्रभात',
    greetingReadyText: 'क्या आप आज अपने खेतों का निरीक्षण करने के लिए तैयार हैं?',
    analyzeMyCrop: 'मेरी फसल का विश्लेषण करें',
    captureImage: 'तस्वीर लें',
    captureImageSub: 'लाइव स्कैन के लिए कैमरे का उपयोग करें',
    uploadImage: 'तस्वीर अपलोड करें',
    uploadImageSub: 'गैलरी से चयन करें',
    recentAnalyses: 'हालिया विश्लेषण',
    aiInsightsTips: 'AI अंतर्दृष्टि और सुझाव',
    wateringWindowTipTitle: 'सिंचाई का सर्वोत्तम समय',
    wateringWindowTipDesc: 'खेत B में मिट्टी की नमी सेंसर के आधार पर, आज शाम 4 से 6 बजे के बीच सिंचाई करना सबसे उपयुक्त रहेगा।',
    pestAlertTipTitle: 'कीट चेतावनी: माहू (एफिड्स)',
    pestAlertTipDesc: 'क्षेत्रीय डेटा इस सप्ताह एफिड्स के उच्च जोखिम का संकेत देता है। ग्रीनहाउस 1 के लिए निवारक स्कैनिंग करें।',

    // Tips for a Better Scan
    scanTipsTitle: 'बेहतर स्कैन के लिए सुझाव',
    scanTipsSubtitle: 'स्पष्ट और अच्छी रोशनी वाली तस्वीरें AgnoVis AI को बेहतर विश्लेषण प्रदान करने में मदद करती हैं।',
    scanTip1: 'पत्ती की स्पष्ट तस्वीर लें',
    scanTip2: 'प्रभावित हिस्सा स्पष्ट रूप से दिखाई देना चाहिए',
    scanTip3: 'अच्छी रोशनी का उपयोग करें',
    scanTip4: 'धुंधली या दूर की तस्वीरों से बचें',
    startAnalysisCta: 'विश्लेषण शुरू करें →',

    // What AgnoVis AI Can Detect
    whatCanDetectTitle: 'AgnoVis AI क्या पहचान सकता है',
    supportedCropsSubtitle: 'समर्थित फसलें',
    diseaseDetectionTitle: 'रोग पहचान',
    diseaseDetectionDesc: 'फसल रोगों और स्वस्थ स्थितियों की एआई-संचालित पहचान।',
    pestDetectionTitle: 'कीट पहचान',
    pestDetectionDesc: 'फसल-आधारित कीट फ़िल्टरिंग के साथ कीट पहचान।',
    managementRecommendationsTitle: 'प्रबंधन सिफारिशें',
    managementRecommendationsDesc: 'विश्लेषण के आधार पर व्यावहारिक अगले कदमों का मार्गदर्शन प्राप्त करें।',

    captureCropImageTitle: 'फसल की तस्वीर लें',
    captureCropImageSubtitle: 'AI विश्लेषण के लिए फसल या प्रभावित पत्ती की स्पष्ट तस्वीर लें।',
    openCamera: 'कैमरा खोलें',
    openCameraSub: 'अभी नई तस्वीर लें',
    uploadFromGallery: 'गैलरी से अपलोड करें',
    uploadFromGallerySub: 'मौजूदा तस्वीर चुनें',
    photoGuidelinesTitle: 'फोटो संबंधी दिशानिर्देश',
    guideline1: 'अच्छा और प्राकृतिक प्रकाश सुनिश्चित करें। गहरी छाया से बचें।',
    guideline2: 'विषय को केंद्रित और फोकस में रखें।',
    guideline3: 'पूरे प्रभावित क्षेत्र की स्पष्ट तस्वीर लें।',
    analyzeImageBtn: 'तस्वीर का विश्लेषण करें',
    selectImageHint: 'विश्लेषण शुरू करने के लिए फसल चुनें और तस्वीर प्रदान करें।',
    changeImage: 'तस्वीर बदलें',
    testWithSample: 'नमूना फसलें आज़माएं',
    noImageSelectedYet: 'अभी तक कोई चित्र नहीं चुना गया',
    noImageSelectedSub: 'आगे बढ़ने के लिए पत्ती का फोटो अपलोड करें या कैमरे से लें।',
    pleaseSelectCrop: 'कृपया पहले एक फसल चुनें।',
    pleaseSelectCropFirst: 'कृपया पहले एक फसल चुनें।',
    pleaseUploadOrCapture: 'कृपया एक छवि अपलोड करें या फोटो लें।',
    pleaseSelectCropAndImage: 'कृपया एक फसल चुनें और एक छवि प्रदान करें।',
    selectCropLabel: 'फसल चुनें',
    selectedCropLabel: 'चुनी गई फसल',
    noCropSelectedYet: 'अभी कोई फसल नहीं चुनी गई',
    readyForAnalysis: 'AI विश्लेषण के लिए तैयार',
    cameraSource: 'कैमरा फोटो',
    uploadSource: 'अपलोड की गई फोटो',
    removeImage: 'छवि हटाएं',
    takePhoto: 'फोटो लें',
    retakePhoto: 'दोबारा फोटो लें',
    switchCamera: 'कैमरा बदलें',
    closeCamera: 'कैमरा बंद करें',
    cameraPermissionDenied: 'कैमरा अनुमति अस्वीकृत कर दी गई। कृपया कैमरा एक्सेस सक्षम करें।',
    cameraUnavailable: 'कैमरा अनुपलब्ध है या समर्थित नहीं है।',

    waterAdvisorTitle: 'स्मार्ट जल सलाहकार',
    waterAdvisorSubtitle: 'आपकी फसल के लिए मौसम आधारित सिंचाई सुझाव',
    irrigationDecision: 'सिंचाई का निर्णय',
    waterAdvisorWhy: 'यह सुझाव क्यों?',
    waterNeedLabel: 'पानी की आवश्यकता',
    waterAdvisorNextCheck: 'अगली जाँच',
    weatherSource: 'मौसम स्रोत',
    weatherDataUnavailable: 'आपके स्थान के लिए मौसम की जानकारी अभी उपलब्ध नहीं है।',
    weatherSourceUnavailable: 'मौसम की जानकारी उपलब्ध नहीं है',
    waterAdvisorDisclaimerTitle: 'महत्वपूर्ण',
    waterAdvisorDisclaimer: 'इस सुझाव का उपयोग केवल मार्गदर्शन के लिए करें। सिंचाई की आवश्यकता मौसम, मिट्टी की स्थिति, फसल की अवस्था और स्थानीय परिस्थितियों पर निर्भर करती है।',
    waterAdvisorNote: 'केवल इस सुझाव पर निर्भर न रहें। सिंचाई करने से पहले मिट्टी और फसल की स्थिति जाँच लें।',
    waterAdvisorUseLocation: 'मेरा स्थान उपयोग करें',
    waterAdvisorLocationEnabled: 'स्थान सक्षम है',
    waterAdvisorCurrentCrop: 'वर्तमान फसल',
    waterAdvisorNoCrop: 'कोई फसल चयनित नहीं है',
    waterAdvisorCheckingForecast: 'सिंचाई का सुझाव देने से पहले नवीनतम मौसम पूर्वानुमान की जाँच की जा रही है।',
    weatherSourceLive: 'लाइव मौसम की जानकारी',
    weatherSourceFallback: 'वैकल्पिक मौसम जानकारी',

    analyzingImageTitle: 'आपकी तस्वीर का विश्लेषण किया जा रहा है...',
    analyzingImageSubtitle: 'हमारा AI बारीकियों की गहराई से जांच कर रहा है।',
    stepUpload: 'अपलोड',
    stepUploadSub: 'प्रसंस्करण के लिए तस्वीर तैयार की जा रही है।',
    stepIdentify: 'पहचान',
    stepIdentifySub: 'पौधे की प्रजाति और किस्म की पहचान की जा रही है।',
    stepAnalyze: 'विश्लेषण',
    stepAnalyzeSub: 'रोग या तनाव के संकेतों की जांच की जा रही है।',
    stepResult: 'परिणाम',
    stepResultSub: 'व्यक्तिगत सिफारिशें तैयार की जा रही हैं।',

    multipleCropTitle: 'एक से अधिक संभावित फसलें मिलीं।',
    multipleCropSubtitle: 'विश्लेषण जारी रखने के लिए कृपया नीचे दिए गए विकल्पों में से सही फसल का चयन करें।',
    multipleCropQuestion: 'आप किस फसल का विश्लेषण कर रहे हैं?',
    analyzedImageLabel: 'विश्लेषित तस्वीर',
    selectCropType: 'फसल का प्रकार चुनें:',
    continueAnalysisBtn: 'विश्लेषण जारी रखें',

    criticalActionRequired: 'त्वरित कार्रवाई आवश्यक',
    optimalHealth: 'उत्कृष्ट स्वास्थ्य',
    needsAttention: 'ध्यान देने की आवश्यकता',
    analysisSummaryTitle: 'विश्लेषण सारांश',
    scannedJustNow: '2 मिनट पहले स्कैन किया गया',
    diseaseDetectedTitle: 'रोग का पता चला',
    confidenceScore: 'सटीकता स्कोर',
    pestActivityTitle: 'कीट गतिविधि',
    noneDetected: 'कोई कीट नहीं पाया गया',
    currentlySafe: 'वर्तमान में सुरक्षित',
    recommendedActionTitle: 'सिफारिश की गई कार्रवाई',
    noAnalysisResultAvailable: 'अभी तक कोई विश्लेषण परिणाम उपलब्ध नहीं है।',
    valueNone: 'कोई नहीं',
    statusPending: 'लंबित',
    logTreatmentPlan: 'उपचार योजना दर्ज करें',
    treatmentPlanSaved: 'उपचार योजना सफलतापूर्वक सहेज ली गई!',
    aiDisclaimer: 'अस्वीकरण: यह AI-जनित विश्लेषण केवल सूचनात्मक उद्देश्यों के लिए है और पेशेवर कृषि विशेषज्ञ की सलाह का विकल्प नहीं है। हालांकि अंगोविस AI उच्च सटीकता का प्रयास करता है, गलत पहचान की संभावना हो सकती है। रासायनिक उपचार लागू करने से पहले हमेशा स्थानीय प्रमाणित कृषि विशेषज्ञ से पुष्टि करें।',

    askAgronomistTitle: 'कृषि विशेषज्ञ से पूछें',
    askAgronomistSub: 'इस निदान और फसल देखभाल पर बातचीत जारी रखें',
    sendBtn: 'भेजें',
    thinkingText: 'कृषि विशेषज्ञ उत्तर दे रहे हैं...',
    quickPromptWater: 'सिंचाई सलाह',
    quickPromptSpread: 'फैलाव रोकें',
    checkThisNewImage: 'इस नए चित्र की जांच करें।',
    chatSavedNote: 'यह बातचीत इस विश्लेषण रिकॉर्ड के साथ स्वतः सुरक्षित है।',
    reportDownloaded: 'निदान रिपोर्ट सफलतापूर्वक डाउनलोड हो गई।',

    // Weather
    weatherTitle: 'कृषि मौसम बुद्धिमत्ता',
    weatherCurrentLocation: 'वर्तमान स्थान',
    weatherUseMyLocation: 'मेरा स्थान उपयोग करें',
    weatherChangeLocation: 'स्थान बदलें',
    weatherSearchLocation: 'स्थान खोजें',
    weatherSearchPlaceholder: 'गाँव, कस्बा, शहर, जिला खोजें...',
    weatherSearching: 'खोज रहे हैं...',
    weatherSearchResults: 'खोज परिणाम',
    weatherNoResults: 'कोई स्थान नहीं मिला। अलग शब्द आज़माएं।',
    weatherLastUpdated: 'अपडेट:',
    weatherCurrentConditions: 'वर्तमान स्थितियां',
    weatherFeelsLike: 'महसूस होता है',
    weatherHumidity: 'नमी',
    weatherWind: 'हवा',
    weatherRainfall: 'वर्षा',
    weatherRainProbability: 'बारिश की संभावना',
    weatherRisk: 'मौसम जोखिम',
    weatherRiskLow: 'कम',
    weatherRiskModerate: 'मध्यम',
    weatherRiskHigh: 'उच्च',
    weatherFarmAdvisory: 'कृषि सलाह',
    weather7DayForecast: '7-दिन का पूर्वानुमान',
    weatherFieldWorkOutlook: 'खेत कार्य दृष्टिकोण',
    weatherFieldWorkFavorable: 'अनुकूल',
    weatherFieldWorkCaution: 'सावधानी',
    weatherFieldWorkAvoid: 'टालें',
    weatherFieldWorkFavorableText: 'मौसम सामान्य कृषि गतिविधियों के लिए अनुकूल प्रतीत होता है।',
    weatherFieldWorkCautionText: 'मौसम कुछ कृषि गतिविधियों को प्रभावित कर सकता है। छिड़काव से पहले बारिश और हवा जांचें।',
    weatherFieldWorkAvoidText: 'मौसम की स्थिति छिड़काव या अन्य संवेदनशील कृषि गतिविधियों के लिए अनुकूल नहीं है।',
    weatherCropContext: 'मौसम + फसल संदर्भ',
    weatherLoading: 'मौसम डेटा ला रहे हैं...',
    weatherUnavailable: 'मौसम डेटा अस्थायी रूप से उपलब्ध नहीं',
    weatherUnavailableText: 'लाइव मौसम डेटा इस समय प्राप्त नहीं किया जा सकता। कृपया बाद में पुनः प्रयास करें।',
    weatherLocationPermissionDenied: 'स्थान पहुंच की अनुमति नहीं दी गई। अपने कृषि स्थान के लिए खोजें।',
    weatherLocationUnavailable: 'स्थान उपलब्ध नहीं। अपने कृषि स्थान के लिए खोजें।',
    weatherRetry: 'पुनः प्रयास',
    weatherToday: 'आज',
    weatherTomorrow: 'कल',
    weatherSpraying: 'छिड़काव',
    weatherIrrigation: 'सिंचाई',
    weatherFieldWork: 'खेत कार्य',
    weatherConditionClearSky: 'साफ आसमान',
    weatherConditionMainlyClear: 'मुख्य रूप से साफ',
    weatherConditionLightDrizzle: 'हल्की बूंदाबांदी',
    weatherConditionModerateDrizzle: 'मध्यम बूंदाबांदी',
    weatherConditionDenseDrizzle: 'घनी बूंदाबांदी',
    weatherConditionSlightRain: 'हल्की बारिश',
    weatherConditionModerateRain: 'मध्यम बारिश',
    weatherConditionSlightSnow: 'हल्की बर्फ',
    weatherConditionModerateSnow: 'मध्यम बर्फ',
    weatherConditionHeavySnow: 'भारी बर्फ',
    weatherConditionRainShowers: 'बारिश की बौछारें',
    weatherConditionViolentShowers: 'तेज़ बौछारें',

    historyDetailsTitle: 'विश्लेषण इतिहास विवरण',
    finalRecommendationTitle: 'अंतिम सिफारिश',
    finalRecommendationSub: 'ऐतिहासिक डेटा पर आधारित AI जनित स्थानीय अंतर्दृष्टि।',
    scanMetricsTitle: 'स्कैन मेट्रिक्स',
    cropTypeLabel: 'फसल का प्रकार',
    fieldAreaLabel: 'क्षेत्रफल',
    envContextTitle: 'पर्यावरणीय संदर्भ',
    envScanTimeSub: '(स्कैन के समय)',
    envTemperature: 'तापमान',
    envHumidity: 'नमी',
    envWeather: 'मौसम',
    weatherPartlyCloudy: 'आंशिक रूप से बादल',
    weatherSunny: 'धूप वाला',
    weatherOvercast: 'बादल छाए हुए',
    downloadReportPdf: 'रिपोर्ट डाउनलोड करें (PDF)',
    mapView: 'मानचित्र दृश्य',

    changeLanguageSetting: 'भाषा बदलें',
    currentLanguageLabel: 'वर्तमान: हिन्दी',
    notificationsSetting: 'सूचनाएं',
    notificationsSub: 'अलर्ट और अपडेट प्रबंधित करें',
    helpCenterSetting: 'सहायता केंद्र',
    helpCenterSub: 'अक्सर पूछे जाने वाले प्रश्न और समर्थन',
    helpCenterDialogTitle: 'सहायता केंद्र',
    helpCenterDialogHeading: 'अंगोविस AI के साथ सहायता चाहिए?',
    helpCenterDialogContactText: 'समर्थन, प्रश्नों, तकनीकी समस्याओं या प्रतिक्रिया के लिए, हमसे यहां संपर्क करें:',
    helpCenterSupportEmail: 'agnovissupport@gmail.com',
    helpCenterSendEmailBtn: 'ईमेल भेजें',
    helpCenterCopyEmailBtn: 'ईमेल पता कॉपी करें',
    helpCenterEmailCopied: 'ईमेल पता क्लिपबोर्ड पर कॉपी किया गया',
    privacyPolicySetting: 'गोपनीयता नीति',
    privacyPolicySub: 'नियम और डेटा उपयोग',
    logoutBtn: 'लॉगआउट',
    editProfile: 'प्रोफ़ाइल संपादित करें',

    cropApple: 'सेब',
    cropCherry: 'चेरी',
    cropCorn: 'मक्का',
    cropGrape: 'अंगूर',
    cropPeach: 'आड़ू',
    cropPepper: 'शिमला मिर्च',
    cropPotato: 'आलू',
    cropSquash: 'स्क्वैश',
    cropStrawberry: 'स्ट्रॉबेरी',
    cropTomato: 'टमाटर',
    cropWheat: 'गेहूँ',
    cropCotton: 'कपास',
    cropRice: 'चावल / धान',

    statusHealthy: 'स्वस्थ',
    statusNeedsAttention: 'ध्यान देने की आवश्यकता',
    diseaseEarlyBlight: 'अर्ली ब्लाइट (अगेती झुलसा)',
    diseaseLateBlight: 'लेट ब्लाइट (पछेती झुलसा)',
    diseaseLeafCurl: 'पत्ती मरोड़ वायरस',
    diseaseNone: 'कोई रोग नहीं (स्वस्थ फसल)',
    pestNone: 'कोई कीट नहीं पाया गया',
    pestAphids: 'माहू (एफिड्स)',
    pestWhitefly: 'सफेद मक्खी',

    actionPruneLeavesTitle: 'प्रभावित पत्तियों को हटाएं',
    actionPruneLeavesDesc: 'संक्रमित पत्तियों को सावधानी से काटें। बीजाणुओं के प्रसार को रोकने के लिए इन्हें खाद में न डालें बल्कि जला दें या नष्ट कर दें।',
    actionFungicideTitle: 'फफूंदनाशक का छिड़काव',
    actionFungicideDesc: 'कॉपर आधारित फफूंदनाशक या क्लोरोथैलोनिल का छिड़काव करें। स्थानीय बारिश के अनुसार हर 7-10 दिनों में दोहराएं।',
    actionAirflowTitle: 'हवा का प्रवाह सुधारें',
    actionAirflowDesc: 'पौधों के बीच पर्याप्त दूरी रखें और पत्तियों को सूखा रखने के लिए ऊपर से पानी देने से बचें।',
    actionMaintainProtocolTitle: 'वर्तमान देखभाल बनाए रखें',
    actionMaintainProtocolDesc: 'फसल बिना किसी पोषण की कमी या कीट तनाव के उत्कृष्ट स्वास्थ्य प्रदर्शित कर रही है। नियमित अवलोकन बनाए रखें।',

    historyNoRecordText: 'सहेजा गया विश्लेषण रिकॉर्ड प्राप्त नहीं किया जा सका। कृपया इतिहास पर वापस लौटें।',
    scanNoRecordText: 'वर्तमान में कोई नैदानिक डेटा सक्रिय नहीं है। कृपया फसल स्कैन करें।',
    cropSpecimen: 'फसल का नमूना',
    noImageAvailable: 'कोई छवि उपलब्ध नहीं है',
    agriculturalWarning: 'कृषि चेतावनी',
    riskAssessmentTitle: 'जोखिम मूल्यांकन',
    riskLabel: 'जोखिम',
    agronomistFollowupTitle: 'कृषि विज्ञानी फॉलो-अप',
    specialistReferralAdvised: '⚠️ विशेषज्ञ रेफरल की सलाह: ',
    criticalDiseaseSeverity: 'गंभीर बीमारी की स्थिति के लिए कृषि विज्ञानी समीक्षा की आवश्यकता है।',
    recommendedCheckIn: '📅 अनुशंसित चेक-इन: ',
    inSevenDays: '7 दिनों में',
    standardMonitoringProtocol: 'मानक निगरानी प्रोटोकॉल। नए घाव विकसित होने पर फिर से स्कैन करें।',
    statusActive: 'सक्रिय',
    loadingConversation: 'बातचीत का इतिहास लोड हो रहा है...',
    followUpSpecimen: 'फॉलो-अप पत्ती का नमूना',
    followUpSpecimenPreview: 'फॉलो-अप पत्ती के नमूने का पूर्वावलोकन',
    defaultFarmerName: 'किसान',
    recentTimestamp: 'हालिया',
    statusProcessing: 'प्रोसेस हो रहा है...',
  },

  mr: {
    // Extended Keys (mr)
    alertsTitle: 'सक्रिय सूचना आणि इशारे',
    checkingAlerts: 'शेतातील इशाऱ्यांची तपासणी सुरू आहे...',
    noActiveAlerts: 'कोणतीही सक्रिय पीक सूचना नाही',
    allFieldsNormal: 'सर्व नोंदणीकृत शेतं सध्या निरोगी स्थितीत आहेत.',
    alertMarkedResolved: 'सूचना सोडवली म्हणून चिन्हांकित केली',
    alertReopened: 'सूचना पुन्हा उघडली गेली',
    couldNotUpdateAlert: 'सूचनेची स्थिती अपडेट करता आली नाही.',
    couldNotLoadAlerts: 'पीक सूचना लोड करता आल्या नाहीत.',
    activeStatus: 'सक्रिय',
    resolvedStatus: 'निवारण झाले',
    markResolved: 'निवारण झाले म्हणून खूण करा',
    reopen: 'पुन्हा उघडा',
    followUpsTitle: 'नियोजित फॉलो-अप',
    loadingFollowUps: 'फॉलो-अप वेळापत्रक लोड होत आहे...',
    noPendingFollowUps: 'कोणताही प्रलंबित फॉलो-अप नाही',
    noFollowUpsDesc: 'सध्या कोणताही पाठपुरावा उपचार किंवा फेरतपासणी नियोजित नाही.',
    couldNotLoadFollowUps: 'फॉलो-अप लोड करता आले नाहीत.',
    failedToUpdateFollowUp: 'फॉलो-अप अपडेट करण्यात अपयशी',
    followUpScheduled: 'फॉलो-अप नियोजित',
    markCompleted: 'पूर्ण झाले म्हणून खूण करा',
    referralsTitle: 'तज्ज्ञ पुनरावलोकन संदर्भ',
    checkingReferrals: 'तज्ज्ञ संदर्भ तपासणी सुरू आहे...',
    noActiveReferrals: 'कोणताही सक्रिय तज्ज्ञ संदर्भ नाही',
    noReferralsDesc: 'सध्या कृषी तज्ज्ञांकडे कोणताही विषय संदर्भित नाही.',
    couldNotLoadReferrals: 'तज्ज्ञ संदर्भ लोड करता आले नाहीत.',
    expertReviewPending: 'तज्ज्ञ पुनरावलोकन प्रलंबित',
    registeredFields: 'नोंदणीकृत शेतं',
    plotNameLabel: 'शेताचे / प्लॉटचे नाव',
    plotNamePlaceholder: 'उदा. उत्तर शेत टोमॅटो प्लॉट',
    primaryCropLabel: 'मुख्य पीक',
    areaAcresLabel: 'शेताचा आकार (एकर)',
    enterFieldName: 'कृपया शेताचे नाव प्रविष्ट करा',
    fieldRegisteredSuccess: 'शेत यशस्वीरित्या नोंदणीकृत झाले',
    fieldRemovedSuccess: 'शेत यशस्वीरित्या काढून टाकले',
    failedCreateField: 'शेत तयार करण्यात अपयशी',
    failedRemoveField: 'शेत काढून टाकण्यात अपयशी',
    couldNotLoadFields: 'तुमची नोंदणीकृत शेतं लोड करता आली नाहीत.',
    noFieldsYet: 'अद्याप कोणतेही नोंदणीकृत शेत नाही',
    noFieldsDesc: 'रोग जोखीम, हवामान अंदाज आणि इतिहास ट्रॅक करण्यासाठी आपल्या शेतांची नोंदणी करा.',
    addNewField: 'नवीन शेत जोडा',
    loadingHistory: 'इतिहास लोड होत आहे...',
    fetchingPastScans: 'तुमचे मागील पीक विश्लेषण आणले जात आहे.',
    failedToLoadHistory: 'इतिहास लोड करण्यात अपयशी',
    noScansMatchSearch: 'आपल्या शोधाशी जुळणारे कोणतेही स्कॅन आढळले नाही',
    tryAdjustingSearch: 'कृपया आपले शोध शब्द किंवा फिल्टर्स बदलून पहा.',
    issueDetected: 'समस्या आढळली',
    healthyCondition: 'निरोगी स्थिती',
    voiceInputUnavailable: 'व्हॉईस इनपुट उपलब्ध नाही किंवा मायक्रोफोनची परवानगी नाकारली गेली आहे.',
    speechNotSupported: 'या ब्राउझरमध्ये स्पीच रेकग्निशन समर्थित नाही.',
    listeningPrompt: 'ऐकत आहे... आपला शेतीविषयक प्रश्न स्पष्टपणे बोला.',
    ttsNotSupported: 'या ब्राउझरमध्ये टेक्स्ट-टू-स्पीच समर्थित नाही.',
    consultingGemini: 'जेमिनी कृषी सल्लागार मॉडेलचा सल्ला घेत आहे...',
    chatSuggestion1: 'टोमॅटोमधील लवकर येणारा करपा कसा रोखावा?',
    chatSuggestion2: 'मावा आणि फुलकिड्यांसाठी सर्वोत्तम सेंद्रिय फवारणी कोणती?',
    chatSuggestion3: 'फुलोऱ्याच्या अवस्थेत खतांचे योग्य वेळापत्रक काय असावे?',
    chatSuggestion4: 'पावसापूर्वी शेतातील पाण्याचा निचरा कसा करावा?',
    chatInputPlaceholder: 'फवारणी प्रमाण, सेंद्रिय उपाय, पाणी व्यवस्थापनाबद्दल विचारा...',
    listen: 'ऐका',
    speakQuestion: 'प्रश्न बोला',
    aiAgronomistTitle: 'AI कृषी तज्ज्ञ संवाद',
    weatherConditionClear: 'निरभ्र आकाश',
    weatherConditionPartlyCloudy: 'अंशतः ढगाळ',
    weatherConditionCloudy: 'ढगाळ वातावरण',
    weatherConditionOvercast: 'पूर्ण ढगाळ',
    weatherConditionFog: 'धुके',
    weatherConditionDrizzle: 'हलकी रिमझिम',
    weatherConditionRain: 'पाऊस',
    weatherConditionHeavyRain: 'मुसळधार पाऊस',
    weatherConditionThunderstorm: 'वादळी पाऊस',
    weatherAdvisoryPrecipitation: 'पावसाची दाट शक्यता आहे. पाऊस पडण्यापूर्वी कीटकनाशक किंवा बुरशीनाशक फवारणी पुढे ढकलण्याचा विचार करा.',
    weatherAdvisoryHumidity: 'जास्त आर्द्रता आणि पावसामुळे बुरशीजन्य रोगांचा धोका वाढू शकतो. पिकांवर बारकाईने लक्ष ठेवा.',
    weatherAdvisoryNormal: 'पीक वाढीसाठी आणि नियमित शेतीकामांसाठी अनुकूल हवामान.',
    weatherAdvisoryHot: 'तापमान जास्त आहे. उष्णतेच्या ताणापासून बचाव करण्यासाठी पिकांना वेळेवर पाणी द्या.',
    weatherAdvisoryWind: 'वेगाने वारे वाहत आहेत. फवारणी वाया जाऊ नये म्हणून फवारणी टाळावी.',
    couldNotFetchWeather: 'हवामानाचा अंदाज मिळवता आला नाही.',
    unknownLocation: 'सध्याचे स्थान',
    currentConditions: 'सध्याची स्थिती',
    sevenDayForecast: '7 दिवसांचा अंदाज',
    feelsLike: 'भासणारे तापमान',
    humidityLabel: 'आर्द्रता',
    windLabel: 'वाऱ्याचा वेग',
    precipitationLabel: 'पर्जन्यवृष्टी',
    couldNotProcessImage: 'प्रतिमा प्रक्रिया करता आली नाही. कृपया पुन्हा प्रयत्न करा.',
    couldNotSendQuery: 'प्रश्न पाठवता आला नाही. कृपया पुन्हा प्रयत्न करा.',
    steps: 'पायऱ्या',
    noRecommendationAvailable: 'अद्याप कोणतीही शिफारस उपलब्ध नाही.',
    quickPromptOrganic: 'सेंद्रिय उपाय',
    quickPromptChemical: 'रासायनिक बुरशीनाशक पर्याय',
    quickPromptPrevention: 'पुढील हंगामासाठी प्रतिबंधात्मक उपाय',
    quickPromptFertilizer: 'रोगाच्या काळात खत व्यवस्थापन सल्ला',
    expertReferralDesc: 'AI ने गंभीर लक्षणे शोधली आहेत, तज्ज्ञ मार्गदर्शनाची आवश्यकता आहे.',
    followUpScheduledDesc: 'उपचाराची प्रगती तपासण्यासाठी नियोजित फॉलो-अप स्कॅन.',
    cropHealthAlerts: 'पीक आरोग्य सूचना',
    treatmentFollowups: 'उपचार पाठपुरावा',
    expertReferrals: 'तज्ज्ञ संदर्भ',
    myFarmlandPlots: 'माझी शेतं आणि प्लॉट',

    appName: 'अंगोविस AI',
    sihTagline: 'SIH26131 प्लॅटफॉर्म',
    tagline: 'अचूक कृषी साधने आणि व्यावहारिक AI सल्ल्याने आपल्या शेतीला सक्षम बनवा.',
    back: 'मागे',
    share: 'शेअर करा',
    close: 'बंद करा',
    confirm: 'पुष्टी करा',
    cancel: 'रद्द करा',
    save: 'जतन करा',
    edit: 'संपादित करा',
    delete: 'हटवा',
    viewAll: 'सर्व पहा',
    viewDetails: 'तपशील पहा',
    takeAction: 'कृती करा',
    detailsUnavailable: 'तपशील उपलब्ध नाही',
    loadOlderScans: 'जुने स्कॅन लोड करा',
    searchPlaceholder: 'पिके, स्थिती किंवा तारीख शोधा...',
    filter: 'फिल्टर',
    all: 'सर्व',
    today: 'आज',
    yesterday: 'काल',
    minsAgo: 'मिनिटांपूर्वी',

    chooseLanguageTitle: 'तुमची भाषा निवडा',
    chooseLanguageSubtitle: 'अंगोविस AI इंटरफेससाठी तुमची पसंतीची भाषा निवडा.',
    continueBtn: 'पुढे चालू ठेवा',
    languageChangedSuccess: 'भाषा यशस्वीरीत्या बदलली!',
    langEnglish: 'इंग्रजी (English)',
    langTelugu: 'तेलगू (Telugu)',
    langHindi: 'हिंदी (Hindi)',
    langMarathi: 'मराठी (Marathi)',

    welcomeHeader: 'अंगोविस AI',
    welcomeSubtitle: 'कृषी AI मार्गदर्शन आणि अचूक साधनांसह आपल्या शेताचे उत्पादन वाढवा.',
    landingWelcomeTo: 'स्वागत आहे',
    landingCompanionText: 'पीक आरोग्य, कीड नियंत्रण आणि उत्तम शेतीसाठी तुमचा स्मार्ट साथीदार.',
    landingAnalyzeCrop: 'पीक विश्लेषण करा',
    landingHistory: 'इतिहास',
    landingTrustedByFarmers: 'शेतकऱ्यांचा विश्वास',
    landingFarmersCount: '२.५K+ शेतकरी',
    landingMoveCursorHint: 'शेतावर तुमचा कर्सर फिरवा',
    landingFarmerSignIn: 'शेतकरी लॉगिन',
    mobileOrEmailLabel: 'मोबाईल नंबर किंवा ईमेल',
    mobileOrEmailPlaceholder: 'मोबाईल नंबर किंवा ईमेल प्रविष्ट करा',
    loginBtn: 'पुढे चालू ठेवा',
    newToAgriVision: 'अंगोविसवर नवीन आहात?',
    createAccount: 'खाते तयार करा',
    fullNameLabel: 'पूर्ण नाव',
    fullNamePlaceholder: 'उदा. रमेश पटेल',
    emailLabel: 'ईमेल पत्ता',
    emailPlaceholder: 'farmer@AgnoVis.ai',
    phoneLabel: 'मोबाईल नंबर',
    phonePlaceholder: '१० अंकी मोबाईल नंबर',
    registerTab: 'नवीन शेतकरी नोंदणी',
    loginTab: 'खात्यात लॉगिन करा',
    registerBtn: 'नोंदणी करा आणि पुढे जा',
    alreadyHaveAccount: 'आधीच खाते आहे का?',
    loginLink: 'येथे लॉगिन करा',
    registerLink: 'आता नोंदणी करा',
    userNotFound: 'या तपशिलांसह कोणताही शेतकरी आढळला नाही. कृपया आधी नोंदणी करा.',
    accountNotFound: 'खाते आढळले नाही. कृपया प्रथम नोंदणी करा.',
    invalidLoginDetails: 'अवैध लॉगिन तपशील. कृपया पुन्हा प्रयत्न करा.',
    invalidIdentifierFormat: 'कृपया वैध मोबाईल नंबर किंवा ईमेल प्रविष्ट करा.',
    enterValidPassword: 'कृपया आपला पासवर्ड प्रविष्ट करा (किमान ४ अक्षरे).',
    passwordLabel: 'पासवर्ड',
    passwordPlaceholder: 'पासवर्ड प्रविष्ट करा',
    preferredLanguageLabel: 'पसंतीची भाषा',
    registerNowLink: 'आता नोंदणी करा',
    enterValidName: 'कृपया आपले पूर्ण नाव प्रविष्ट करा (किमान २ अक्षरे).',
    enterValidEmail: 'कृपया वैध ईमेल पत्ता प्रविष्ट करा.',
    enterValidPhone: 'कृपया वैध १० अंकी मोबाईल नंबर प्रविष्ट करा.',
    registrationSuccess: 'शेतकरी खाते यशस्वीरीत्या नोंदवले गेले!',
    loginSuccess: 'लॉगिन यशस्वी! पुन्हा स्वागत आहे.',
    accountDetails: 'खात्याचा तपशील',
    registeredOn: 'नोंदणी तारीख',
    noAnalysesYet: 'अद्याप कोणतेही विश्लेषण नाही',
    noAnalysesYetSub: 'आपले पहिले विश्लेषण सुरू करण्यासाठी पिकाचा फोटो अपलोड करा किंवा काढा.',
    startScanNow: 'पहिला स्कॅन सुरू करा',
    analyzeMyCropBtn: 'माझ्या पिकाचे विश्लेषण करा',
    memberVerified: 'सत्यापित शेतकरी',
    sessionRestored: 'स्वागत आहे! तुमचे सत्र पुनर्संचयित केले गेले.',
    memberUserId: 'शेतकरी ID',

    navHome: 'होम',
    navHistory: 'इतिहास',
    navProfile: 'प्रोफाइल',
    navFields: 'शेत',
    navChat: 'AI चॅट',
    navAlerts: 'सूचना',
    weatherForecast: 'हवामान अंदाज',

    greetingPrefix: 'शुभ सकाळ',
    greetingReadyText: 'आज तुमच्या शेताची पाहणी करण्यास तयार आहात का?',
    analyzeMyCrop: 'माझ्या पिकाचे विश्लेषण करा',
    captureImage: 'फोटो काढा',
    captureImageSub: 'थेट स्कॅनसाठी कॅमेरा वापरा',
    uploadImage: 'फोटो अपलोड करा',
    uploadImageSub: 'गॅलरीमधून निवडा',
    recentAnalyses: 'अलीकडील विश्लेषणे',
    aiInsightsTips: 'AI सूचना आणि सल्ले',
    wateringWindowTipTitle: 'पाणी देण्याची योग्य वेळ',
    wateringWindowTipDesc: 'शेत B मधील मातीतील आर्द्रता सेन्सरनुसार, आज दुपारी 4 ते 6 दरम्यान पाणी देणे सर्वोत्तम ठरेल.',
    pestAlertTipTitle: 'कीड इशारा: मावा (ॲफिड्स)',
    pestAlertTipDesc: 'प्रादेशिक आकडेवारीनुसार या आठवड्यात मावा प्रादुर्भाव वाढण्याची शक्यता आहे. ग्रीनहाऊस 1 ची तपासणी करा.',

    // Tips for a Better Scan
    scanTipsTitle: 'उत्कृष्ट स्कॅनसाठी उपयुक्त टिप्स',
    scanTipsSubtitle: 'स्पष्ट आणि योग्य प्रकाश असलेली छायाचित्रे AgnoVis AI ला अधिक अचूक विश्लेषण देण्यास मदत करतात.',
    scanTip1: 'पानाचे स्पष्ट छायाचित्र काढा',
    scanTip2: 'बाधित भाग स्पष्टपणे दिसेल याची खात्री करा',
    scanTip3: 'चांगल्या प्रकाशाचा वापर करा',
    scanTip4: 'अस्पष्ट किंवा खूप लांबून घेतलेले फोटो टाळा',
    startAnalysisCta: 'विश्लेषण सुरू करा →',

    // What AgnoVis AI Can Detect
    whatCanDetectTitle: 'AgnoVis AI काय शोधू शकते',
    supportedCropsSubtitle: 'समर्थित पिके',
    diseaseDetectionTitle: 'रोग निदान',
    diseaseDetectionDesc: 'पिकांचे रोग आणि निरोगी स्थितीचे AI-आधारित अचूक निदान.',
    pestDetectionTitle: 'कीटक ओळख',
    pestDetectionDesc: 'पीकनिहाय फिल्टरिंगसह कीटकांचा अचूक शोध.',
    managementRecommendationsTitle: 'व्यवस्थापन शिफारसी',
    managementRecommendationsDesc: 'विश्लेषणावर आधारित पुढील व्यावहारिक उपाययोजनांचे मार्गदर्शन मिळवा.',

    captureCropImageTitle: 'पिकाचा फोटो काढा',
    captureCropImageSubtitle: 'AI विश्लेषणासाठी पिकाचा किंवा बाधित पानाचा स्पष्ट फोटो घ्या.',
    openCamera: 'कॅमेरा उघडा',
    openCameraSub: 'आता नवीन फोटो घ्या',
    uploadFromGallery: 'गॅलरीमधून अपलोड करा',
    uploadFromGallerySub: 'विद्यमान फोटो निवडा',
    photoGuidelinesTitle: 'फोटो मार्गदर्शक तत्त्वे',
    guideline1: 'चांगला, नैसर्गिक प्रकाश असल्याची खात्री करा. गडद सावल्या टाळा.',
    guideline2: 'विषयावर योग्य फोकस आणि मध्यभागी ठेवा.',
    guideline3: 'संपूर्ण बाधित भाग स्पष्टपणे फोटोमध्ये घ्या.',
    analyzeImageBtn: 'फोटोचे विश्लेषण करा',
    selectImageHint: 'विश्लेषण सक्षम करण्यासाठी पीक निवडा आणि फोटो प्रदान करा.',
    changeImage: 'फोटो बदला',
    testWithSample: 'नमुना पिके तपासा',
    noImageSelectedYet: 'अद्याप कोणतीही प्रतिमा निवडलेली नाही',
    noImageSelectedSub: 'पुढे जाण्यासाठी पानाचा फोटो अपलोड करा किंवा कॅमेऱ्याने काढा.',
    pleaseSelectCrop: 'कृपया प्रथम एक पीक निवडा.',
    pleaseSelectCropFirst: 'कृपया प्रथम एक पीक निवडा.',
    pleaseUploadOrCapture: 'कृपया एक प्रतिमा अपलोड करा किंवा फोटो काढा.',
    pleaseSelectCropAndImage: 'कृपया एक पीक निवडा आणि प्रतिमा प्रदान करा.',
    selectCropLabel: 'पीक निवडा',
    selectedCropLabel: 'निवडलेले पीक',
    noCropSelectedYet: 'अद्याप कोणतेही पीक निवडलेले नाही',
    readyForAnalysis: 'AI विश्लेषणासाठी सज्ज',
    cameraSource: 'कॅमेरा फोटो',
    uploadSource: 'अपलोड केलेला फोटो',
    removeImage: 'प्रतिमा काढा',
    takePhoto: 'फोटो घ्या',
    retakePhoto: 'पुन्हा फोटो घ्या',
    switchCamera: 'कॅमेरा बदला',
    closeCamera: 'कॅमेरा बंद करा',
    cameraPermissionDenied: 'कॅमेरा परवानगी नाकारली गेली. कृपया कॅमेरा प्रवेश सक्षम करा.',
    cameraUnavailable: 'कॅमेरा उपलब्ध नाही किंवा समर्थित नाही.',

    waterAdvisorTitle: 'स्मार्ट पाणी सल्लागार',
    waterAdvisorSubtitle: 'तुमच्या पिकासाठी हवामानावर आधारित सिंचन सूचना',
    irrigationDecision: 'सिंचनाचा निर्णय',
    waterAdvisorWhy: 'ही सूचना का?',
    waterNeedLabel: 'पाण्याची गरज',
    waterAdvisorNextCheck: 'पुढील तपासणी',
    weatherSource: 'हवामान स्रोत',
    weatherDataUnavailable: 'तुमच्या स्थानासाठी सध्या हवामानाची माहिती उपलब्ध नाही.',
    weatherSourceUnavailable: 'हवामानाची माहिती उपलब्ध नाही',
    waterAdvisorDisclaimerTitle: 'महत्त्वाचे',
    waterAdvisorDisclaimer: 'या सूचनेचा वापर फक्त मार्गदर्शनासाठी करा. सिंचनाची गरज हवामान, मातीची स्थिती, पिकाची अवस्था आणि स्थानिक परिस्थितींवर अवलंबून असते.',
    waterAdvisorNote: 'केवळ या सूचनेवर अवलंबून राहू नका. सिंचन करण्यापूर्वी माती आणि पिकाची स्थिती तपासा.',
    waterAdvisorUseLocation: 'माझे स्थान वापरा',
    waterAdvisorLocationEnabled: 'स्थान सक्षम आहे',
    waterAdvisorCurrentCrop: 'सध्याचे पीक',
    waterAdvisorNoCrop: 'कोणतेही पीक निवडलेले नाही',
    waterAdvisorCheckingForecast: 'सिंचनाची सूचना देण्यापूर्वी ताज्या हवामान अंदाजाची तपासणी केली जात आहे.',
    weatherSourceLive: 'थेट हवामान माहिती',
    weatherSourceFallback: 'पर्यायी हवामान माहिती',

    analyzingImageTitle: 'तुमच्या फोटोचे विश्लेषण करत आहे...',
    analyzingImageSubtitle: 'आमचे AI पिकाच्या स्थितीची सखोल तपासणी करत आहे.',
    stepUpload: 'अपलोड',
    stepUploadSub: 'प्रक्रियेसाठी फोटो तयार करत आहे.',
    stepIdentify: 'ओळख',
    stepIdentifySub: 'पिकाची जात आणि प्रकार ओळखत आहे.',
    stepAnalyze: 'विश्लेषण',
    stepAnalyzeSub: 'रोग किंवा कीड लक्षणांची तपासणी करत आहे.',
    stepResult: 'निकाल',
    stepResultSub: 'वैयक्तिकृत शिफारसी तयार करत आहे.',

    multipleCropTitle: 'एकापेक्षा जास्त संभाव्य पिके आढळली.',
    multipleCropSubtitle: 'विश्लेषण सुरू ठेवण्यासाठी कृपया खालील पर्यायांमधून योग्य पीक निवडा.',
    multipleCropQuestion: 'तुम्ही कोणत्या पिकाचे विश्लेषण करत आहात?',
    analyzedImageLabel: 'विश्लेषित फोटो',
    selectCropType: 'पीक प्रकार निवडा:',
    continueAnalysisBtn: 'विश्लेषण पुढे चालू ठेवा',

    criticalActionRequired: 'त्वरीत कारवाई आवश्यक',
    optimalHealth: 'उत्तम आरोग्य',
    needsAttention: 'लक्ष देणे आवश्यक',
    analysisSummaryTitle: 'विश्लेषण सारांश',
    scannedJustNow: '२ मिनिटांपूर्वी स्कॅन केले',
    diseaseDetectedTitle: 'आढळलेला रोग',
    confidenceScore: 'आत्मविश्वास स्कोअर',
    pestActivityTitle: 'कीड क्रियाकलाप',
    noneDetected: 'काहीही आढळले नाही',
    currentlySafe: 'सध्या सुरक्षित',
    recommendedActionTitle: 'शिफारस केलेली कृती',
    noAnalysisResultAvailable: 'अद्याप कोणतेही विश्लेषण निकाल उपलब्ध नाही.',
    valueNone: 'काही नाही',
    statusPending: 'प्रलंबित',
    logTreatmentPlan: 'उपचार योजना जतन करा',
    treatmentPlanSaved: 'उपचार योजना यशस्वीरीत्या जतन केली गेली!',
    aiDisclaimer: 'हा केवळ AI आधारित विश्लेषणाचा परिणाम आहे आणि हे निश्चित निदान नाही. कोणतीही कृती करण्यापूर्वी पात्र कृषी तज्ज्ञांचा सल्ला घेऊन निकालाची खात्री करा.',

    askAgronomistTitle: 'कृषी सल्लागाराशी चर्चा करा',
    askAgronomistSub: 'या निदानाबाबत आणि पीक संरक्षणावर संवाद सुरू ठेवा',
    sendBtn: 'पाठवा',
    thinkingText: 'कृषी सल्लागार उत्तर देत आहेत...',
    quickPromptWater: 'पाणी सल्ला',
    quickPromptSpread: 'प्रसार रोखा',
    checkThisNewImage: 'या नवीन चित्राची तपासणी करा.',
    chatSavedNote: 'हा संवाद आपोआप या विश्लेषण नोंदीसोबत जतन केला जातो.',
    reportDownloaded: 'निदान अहवाल यशस्वीरीत्या डाउनलोड झाला.',

    // Weather
    weatherTitle: 'शेती हवामान बुद्धिमत्ता',
    weatherCurrentLocation: 'सध्याचे स्थान',
    weatherUseMyLocation: 'माझे स्थान वापरा',
    weatherChangeLocation: 'स्थान बदला',
    weatherSearchLocation: 'स्थान शोधा',
    weatherSearchPlaceholder: 'गाव, गावठाण, शहर, जिल्हा शोधा...',
    weatherSearching: 'शोधत आहे...',
    weatherSearchResults: 'शोध परिणाम',
    weatherNoResults: 'कोणतेही स्थान सापडले नाही. वेगळा शब्द प्रयत्न करा.',
    weatherLastUpdated: 'अपडेट:',
    weatherCurrentConditions: 'सध्याची परिस्थिती',
    weatherFeelsLike: 'जाणवते',
    weatherHumidity: 'आर्द्रता',
    weatherWind: 'वारा',
    weatherRainfall: 'पाऊस',
    weatherRainProbability: 'पावसाची शक्यता',
    weatherRisk: 'हवामान धोका',
    weatherRiskLow: 'कमी',
    weatherRiskModerate: 'मध्यम',
    weatherRiskHigh: 'जास्त',
    weatherFarmAdvisory: 'शेती सल्ला',
    weather7DayForecast: '७-दिवसांचा अंदाज',
    weatherFieldWorkOutlook: 'शेती कामाचे दृष्टिकोण',
    weatherFieldWorkFavorable: 'अनुकूल',
    weatherFieldWorkCaution: 'सावधगिरी',
    weatherFieldWorkAvoid: 'टाळा',
    weatherFieldWorkFavorableText: 'हवामान सामान्य शेती क्रियाकलापांसाठी अनुकूल आहे.',
    weatherFieldWorkCautionText: 'हवामान काही शेती क्रियाकलापांवर परिणाम करू शकते. फवारणीपूर्वी पाऊस आणि वारा तपासा.',
    weatherFieldWorkAvoidText: 'हवामान परिस्थिती फवारणी किंवा इतर संवेदनशील शेती क्रियाकलापांसाठी अनुकूल नाही.',
    weatherCropContext: 'हवामान + पीक संदर्भ',
    weatherLoading: 'हवामान डेटा आणत आहे...',
    weatherUnavailable: 'हवामान डेटा तात्पुरता उपलब्ध नाही',
    weatherUnavailableText: 'थेट हवामान डेटा आता मिळवता येत नाही. कृपया नंतर पुन्हा प्रयत्न करा.',
    weatherLocationPermissionDenied: 'स्थान प्रवेश परवानगी नाकारली. आपल्या शेती स्थानासाठी शोधा.',
    weatherLocationUnavailable: 'स्थान उपलब्ध नाही. आपल्या शेती स्थानासाठी शोधा.',
    weatherRetry: 'पुन्हा प्रयत्न करा',
    weatherToday: 'आज',
    weatherTomorrow: 'उद्या',
    weatherSpraying: 'फवारणी',
    weatherIrrigation: 'सिंचन',
    weatherFieldWork: 'शेती काम',
    weatherConditionClearSky: 'स्वच्छ आकाश',
    weatherConditionMainlyClear: 'मुख्यतः स्वच्छ',
    weatherConditionLightDrizzle: 'हलकी रिमझिम',
    weatherConditionModerateDrizzle: 'मध्यम रिमझिम',
    weatherConditionDenseDrizzle: 'दाट रिमझिम',
    weatherConditionSlightRain: 'हलका पाऊस',
    weatherConditionModerateRain: 'मध्यम पाऊस',
    weatherConditionSlightSnow: 'हलकी बर्फ',
    weatherConditionModerateSnow: 'मध्यम बर्फ',
    weatherConditionHeavySnow: 'जोरदार बर्फ',
    weatherConditionRainShowers: 'पावसाच्या सरी',
    weatherConditionViolentShowers: 'तीव्र सरी',

    historyDetailsTitle: 'विश्लेषण इतिहास तपशील',
    finalRecommendationTitle: 'अंतिम शिफारस',
    finalRecommendationSub: 'मागील डेटावर आधारित AI जनित स्थानिक अंतर्दृष्टी.',
    scanMetricsTitle: 'स्कॅन मेट्रिक्स',
    cropTypeLabel: 'पीक प्रकार',
    fieldAreaLabel: 'क्षेत्रफळ',
    envContextTitle: 'पर्यावरणीय संदर्भ',
    envScanTimeSub: '(स्कॅनच्या वेळी)',
    envTemperature: 'तापमान',
    envHumidity: 'आर्द्रता',
    envWeather: 'हवामान',
    weatherPartlyCloudy: 'अंशतः ढगाळ',
    weatherSunny: 'सूर्यप्रकाशित',
    weatherOvercast: 'ढगाळ',
    downloadReportPdf: 'अहवाल डाउनलोड करा (PDF)',
    mapView: 'नकाशा दृश्य',

    changeLanguageSetting: 'भाषा बदला',
    currentLanguageLabel: 'सध्या: मराठी',
    notificationsSetting: 'सूचना',
    notificationsSub: 'अलर्ट आणि अपडेट्स व्यवस्थापित करा',
    helpCenterSetting: 'मदत केंद्र',
    helpCenterSub: 'वारंवार विचारले जाणारे प्रश्न आणि मदत',
    helpCenterDialogTitle: 'मदत केंद्र',
    helpCenterDialogHeading: 'अंगोविस AI सह मदत हवी आहे का?',
    helpCenterDialogContactText: 'मदत, प्रश्न, तांत्रिक समस्या किंवा अभिप्रायासाठी, आमच्याशी येथे संपर्क साधा:',
    helpCenterSupportEmail: 'agnovissupport@gmail.com',
    helpCenterSendEmailBtn: 'ईमेल पाठवा',
    helpCenterCopyEmailBtn: 'ईमेल पत्ता कॉपी करा',
    helpCenterEmailCopied: 'ईमेल पत्ता क्लिपबोर्डवर कॉपी केला',
    privacyPolicySetting: 'गोपनीयता धोरण',
    privacyPolicySub: 'अटी आणि डेटा वापर',
    logoutBtn: 'लॉगआउट',
    editProfile: 'प्रोफाइल संपादित करा',

    cropApple: 'सफरचंद',
    cropCherry: 'चेरी',
    cropCorn: 'मका',
    cropGrape: 'द्राक्ष',
    cropPeach: 'पीच',
    cropPepper: 'मिरची',
    cropPotato: 'बटाटा',
    cropSquash: 'स्क्वॅश',
    cropStrawberry: 'स्ट्रॉबेरी',
    cropTomato: 'टोमॅटो',
    cropWheat: 'गहू',
    cropCotton: 'कापूस',
    cropRice: 'भात / तांदूळ',

    statusHealthy: 'निरोगी',
    statusNeedsAttention: 'लक्ष देणे आवश्यक',
    diseaseEarlyBlight: 'अर्ली ब्लाइट (करपा)',
    diseaseLateBlight: 'लेट ब्लाइट (तांबेरा)',
    diseaseLeafCurl: 'पर्णकुंचन (लीफ कर्ल व्हायरस)',
    diseaseNone: 'कोणताही रोग नाही (निरोगी पीक)',
    pestNone: 'कोणतीही कीड आढळली नाही',
    pestAphids: 'मावा (ॲफिड्स)',
    pestWhitefly: 'पांढरी माशी',

    actionPruneLeavesTitle: 'प्रभावित पाने काढा',
    actionPruneLeavesDesc: 'रोगट पाने काळजीपूर्वक छाटून काढा. बुरशीचा प्रसार रोखण्यासाठी ही पाने कंपोस्टमध्ये टाकू नका, तर जाळून किंवा नष्ट करा.',
    actionFungicideTitle: 'बुरशीनाशक फवारणी',
    actionFungicideDesc: 'कॉपर आधारित बुरशीनाशक किंवा क्लोरोथॅलोनिल फवारा. स्थानिक पावसानुसार दर ७-१० दिवसांनी पुनरावृत्ती करा.',
    actionAirflowTitle: 'हवा खेळती ठेवा',
    actionAirflowDesc: 'झाडांमध्ये योग्य अंतर ठेवा आणि पाने कोरडी राहण्यासाठी वरून पाणी देणे टाळा.',
    actionMaintainProtocolTitle: 'सध्याची देखभाल सुरू ठेवा',
    actionMaintainProtocolDesc: 'पिकात कोणतीही अन्नद्रव्यांची कमतरता किंवा किडीचा ताण नसून उत्तम आरोग्य दिसून येत आहे. नियमित निरीक्षण सुरू ठेवा.',

    historyNoRecordText: 'जतन केलेला विश्लेषण रेकॉर्ड पुनर्प्राप्त करू शकलो नाही. कृपया इतिहासावर परत जा.',
    scanNoRecordText: 'सध्या कोणताही डायग्नोस्टिक डेटा सक्रिय नाही. कृपया पीक स्कॅन करा.',
    cropSpecimen: 'पिकाचा नमुना',
    noImageAvailable: 'कोणतीही प्रतिमा उपलब्ध नाही',
    agriculturalWarning: 'कृषी चेतावणी',
    riskAssessmentTitle: 'धोका मूल्यांकन',
    riskLabel: 'धोका',
    agronomistFollowupTitle: 'कृषीतज्ज्ञ फॉलो-अप',
    specialistReferralAdvised: '⚠️ तज्ज्ञ संदर्भाचा सल्ला: ',
    criticalDiseaseSeverity: 'गंभीर रोगाच्या तीव्रतेमुळे कृषीतज्ज्ञांच्या पुनरावलोकनाची आवश्यकता आहे.',
    recommendedCheckIn: '📅 शिफारस केलेले चेक-इन: ',
    inSevenDays: '7 दिवसांत',
    standardMonitoringProtocol: 'मानक निरीक्षण प्रोटोकॉल. नवीन डाग विकसित झाल्यास पुन्हा स्कॅन करा.',
    statusActive: 'सक्रिय',
    loadingConversation: 'संभाषण इतिहास लोड करत आहे...',
    followUpSpecimen: 'फॉलो-अप पानाचा नमुना',
    followUpSpecimenPreview: 'फॉलो-अप पानाचा नमुना पूर्वावलोकन',
    defaultFarmerName: 'शेतकरी',
    recentTimestamp: 'अलीकडील',
    statusProcessing: 'प्रक्रिया होत आहे...',
  }
};