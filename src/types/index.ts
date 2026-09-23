export type Language = 'en' | 'te' | 'hi' | 'mr';

export type Screen =
  | 'language-select'
  | 'welcome'
  | 'dashboard'
  | 'capture'
  | 'processing'
  | 'multiple-crop'
  | 'result'
  | 'history'
  | 'history-detail'
  | 'profile'
  | 'fields'
  | 'alerts'
  | 'follow-ups'
  | 'referrals'
  | 'weather'
  | 'chat'
  | 'water-advisor';

export type CropKey =
  | 'rice'
  | 'sugarcane'
  | 'cotton'
  | 'soybean'
  | 'wheat'
  | 'jowar'
  | 'bajra'
  | 'apple'
  | 'cherry'
  | 'corn'
  | 'grape'
  | 'peach'
  | 'pepper'
  | 'potato'
  | 'squash'
  | 'strawberry'
  | 'tomato';

export type HealthStatus = 'healthy' | 'needs_attention' | 'critical' | 'processing';

// Location permission state for the useLocation hook
export type LocationPermissionStatus = 'unknown' | 'granted' | 'denied' | 'unavailable';

export interface LocationState {
  latitude: number | null;
  longitude: number | null;
  permissionStatus: LocationPermissionStatus;
  loading: boolean;
  error: string | null;
}

export interface EnvironmentalContext {
  temperature: string;
  humidity: string;
  weatherKey: string;
  weatherText?: string;
}

export interface RecommendedActionItem {
  id: number;
  titleKey?: string;
  titleText?: string;
  title?: string;
  descKey?: string;
  descText?: string;
  description?: string;
  iconName?: string;
  icon?: string;
}

export interface AnalysisResult {
  id: string;
  analysisId?: string;
  userId?: string;
  selectedCrop?: CropKey;
  cropKey: CropKey;
  cropName: string;
  scientificName?: string;
  fieldLocationKey?: string;
  fieldLocationText?: string;
  status?: HealthStatus;
  healthStatus?: HealthStatus;
  analysisSummary?: string;
  diseaseName?: string;
  diseaseDetected?: string;
  diseaseConfidence?: number | string | null;
  pestName?: string;
  pestConfidence?: number | string | null;
  recommendedAction?: string | RecommendedActionItem[];
  finalRecommendation?: string;
  riskLevel?: 'Low' | 'Medium' | 'High' | 'Critical' | string;
  riskReasons?: string[];
  warning?: string | null;
  expertReferral?: {
    required?: boolean;
    referralId?: number | string;
    status?: string;
    reason?: string;
    assignedAgronomist?: string;
  } | null;
  followUpSuggested?: {
    required?: boolean;
    recommendedDate?: string;
    reason?: string;
  } | null;
  diseaseKey?: string;
  confidence?: number;
  pestKey?: string;
  pestDetected?: string;
  pestStatusKey?: string;
  pestStatusText?: string;
  summaryKey?: string;
  summaryText?: string;
  recommendedActions?: RecommendedActionItem[];
  environmental?: EnvironmentalContext;
  scanDate: string;
  createdAt?: string;
  updatedAt?: string;
  timestampKey?: string;
  timestampText?: string;
  imageUrl: string;
  imageData?: string;
  imageSource?: 'camera' | 'upload';
  areaAcre?: string;
  isMultipleCropCandidate?: boolean;
  detectedCrops?: CropKey[];
}

export interface StoredAnalysisRecord {
  id: string;
  analysisId: string;
  userId: string;
  selectedCrop: CropKey;
  cropKey: CropKey;
  cropName: string;
  imageUrl: string;
  imageData?: string;
  imageSource?: 'camera' | 'upload';
  analysisSummary: string;
  diseaseDetected: string;
  diseaseConfidence: number | null;
  pestDetected: string;
  pestConfidence: number | null;
  recommendedActions: RecommendedActionItem[];
  finalRecommendation: string;
  riskLevel?: string;
  warning?: string | null;
  status: HealthStatus;
  healthStatus: HealthStatus;
  analysisResult: AnalysisResult;
  createdAt: string;
  updatedAt: string;
  scanDate: string;
}

export interface AnalysisChatMessage {
  id: string;
  analysisId?: string;
  userId: string;
  role: 'user' | 'assistant';
  message: string;
  imageUrl?: string;
  imageSource?: 'camera' | 'upload';
  createdAt: string;
}

export interface User {
  userId: string;
  name: string;
  email: string;
  phone: string;
  mobile?: string;
  password?: string;
  selectedLanguage: Language;
  language?: Language;
  avatarUrl?: string;
  createdAt: string;
}

export interface FieldItem {
  id: number;
  name: string;
  crop: string;
  area_acres?: number;
  latitude?: number;
  longitude?: number;
  created_at?: string;
}

export interface AlertItem {
  id: number;
  title: string;
  message: string;
  alert_type: 'disease' | 'pest' | 'weather' | 'spread' | 'general' | 'cluster' | string;
  severity: 'low' | 'medium' | 'high' | 'critical' | string;
  is_read: boolean;
  is_resolved: boolean;
  created_at?: string;
  field_id?: number | null;
}

export interface FollowUpItem {
  id: number;
  analysis_id?: number | string;
  scheduled_date: string;
  notes?: string;
  status: 'pending' | 'completed' | 'cancelled' | string;
  created_at?: string;
}

export interface ReferralItem {
  id: number;
  analysis_id?: number | string;
  reason: string;
  status: 'pending' | 'reviewed' | 'resolved' | string;
  expert_notes?: string;
  created_at?: string;
}

export interface WeatherForecastData {
  latitude?: number;
  longitude?: number;
  source?: string;
  note?: string;
  timezone?: string;
  current?: {
    temperature_2m?: number;
    relative_humidity_2m?: number;
    apparent_temperature?: number;
    precipitation?: number;
    weather_code?: number;
    wind_speed_10m?: number;
    condition?: string;
  };
  forecast?: Array<{
    date?: string;
    temperature_max_c?: number;
    temperature_min_c?: number;
    rainfall_mm?: number;
    precipitation_probability_pct?: number;
    windspeed_kmh?: number;
    weather_code?: number;
    condition?: string;
  }>;
  risk_assessment?: {
    risk_level?: string;
    reasons?: string[];
    recommendations?: string[];
  };
}

export interface GeocodingResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
  admin1?: string;
  admin2?: string;
  admin3?: string;
}

export interface UserAnalysis {
  analysisId: string;
  userId: string;
  image: string;
  crop: string;
  disease: string;
  disease_confidence: number;
  pest_detected: string;
  pest_confidence?: number;
  recommended_action: string;
  language: Language;
  createdAt: string;
}

export interface UserProfile {
  name: string;
  phone: string;
  email: string;
  location: string;
  avatarUrl: string;
}

export interface InsightTip {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
}

// Water Advisor result from the /water-advisor API endpoint
export interface WaterAdvisorResult {
  decision: string;
  water_need: 'Low' | 'Moderate' | 'High' | string;
  reason: string;
  disease_consideration?: string | null;
  next_check: string;
  weather_source: string;
  disclaimer: string;
}

// Disease cluster from the /clusters API endpoint
export interface DiseaseCluster {
  id: number;
  crop: string;
  disease: string;
  lat_grid?: number | null;
  lon_grid?: number | null;
  case_count: number;
  first_detected: string;
  last_detected: string;
  status: 'active' | 'monitoring' | 'resolved' | string;
  created_at: string;
}