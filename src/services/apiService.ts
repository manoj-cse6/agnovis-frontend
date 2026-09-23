/**
 * Centralized API Service for AgriVision AI Backend
 * 
 * Endpoints mapped:
 * GET    /health
 * POST   /auth/register
 * POST   /auth/login
 * GET    /auth/me
 * POST   /predict
 * GET    /fields
 * POST   /fields
 * GET    /fields/{id}
 * PUT    /fields/{id}
 * DELETE /fields/{id}
 * GET    /history
 * GET    /history/{id}
 * GET    /follow-ups
 * POST   /follow-ups
 * GET    /follow-ups/{id}
 * PATCH  /follow-ups/{id}
 * GET    /referrals
 * GET    /referrals/{id}
 * PATCH  /referrals/{id}
 * GET    /weather/forecast
 * GET    /alerts
 * GET    /alerts/{id}
 * PATCH  /alerts/{id}
 * POST   /chat
 */

import client from '../api/client';
import {
  AlertItem,
  AnalysisResult,
  CropKey,
  FieldItem,
  FollowUpItem,
  GeocodingResult,
  Language,
  ReferralItem,
  WeatherForecastData
} from '../types';

// ==========================================
// 1. HEALTH
// ==========================================
export async function checkBackendHealth(): Promise<{ status: string }> {
  return client.get('/health');
}

// ==========================================
// 2. AUTHENTICATION
// ==========================================
export interface AuthResponse {
  access_token: string;
  token_type?: string;
  user?: {
    id?: number | string;
    userId?: string;
    name?: string;
    email?: string;
    phone?: string;
    mobile?: string;
    language?: Language;
    selectedLanguage?: Language;
  };
}

export async function apiRegister(data: {
  name: string;
  email: string;
  phone: string;
  password?: string;
  language?: Language;
}): Promise<AuthResponse> {
  return client.post('/auth/register', {
    name: data.name,
    email: data.email,
    phone: data.phone,
    password: data.password || '',
    language: data.language || 'en'
  });
}

export async function apiLogin(identifier: string, password?: string): Promise<AuthResponse> {
  return client.post('/auth/login', {
    identifier,
    password: password || ''
  });
}

export async function apiGetMe(): Promise<any> {
  return client.get('/auth/me');
}

// ==========================================
// 3. REAL CROP PREDICTION (MobileNetV3 / YOLO)
// ==========================================
export interface PredictApiResponse {
  id?: number | string;
  analysis_id?: number | string;
  history_id?: number | string;
  crop?: string;
  crop_detected?: string;
  disease?: string;
  disease_detected?: string;
  disease_confidence?: number;
  pest?: string;
  pest_detected?: string;
  pest_confidence?: number;
  recommended_action?: string;
  raw_pest_detections?: any[];
  recommendations?: Record<string, any> | string[] | Array<{ title?: string; descText?: string }>;
  warning?: string;
  warnings?: string[];
  risk_assessment?: {
    risk_level?: string;
    risk_reason?: string;
    risk_advisory?: string;
    weather?: Record<string, any>;
  };
  risk_level?: string;
  risk_reasons?: string[];
  expert_referral?: {
    recommended?: boolean;
    reason?: string;
    referral_options?: string[];
  };
  referral?: {
    required?: boolean;
    referral_id?: number | string;
    status?: string;
    reason?: string;
  };
  follow_up?: {
    recommended?: boolean;
    recommended_in_days?: number;
    recommended_date?: string;
    status?: string;
    message?: string;
  };
  created_at?: string;
  image_url?: string;
}

export async function apiPredict(
  imageBlobOrFile: Blob | File,
  crop?: CropKey | string,
  fieldId?: number | null
): Promise<PredictApiResponse> {
  const formData = new FormData();
  
  if (imageBlobOrFile instanceof File) {
    formData.append('file', imageBlobOrFile, imageBlobOrFile.name);
  } else {
    formData.append('file', imageBlobOrFile, 'crop-specimen.jpg');
  }

  if (crop) {
    formData.append('crop', crop);
  }
  if (fieldId) {
    formData.append('field_id', String(fieldId));
  }

  return client.post<PredictApiResponse>('/predict', formData);
}

// ==========================================
// 4. CROP ANALYSIS HISTORY
// ==========================================
export async function apiGetHistory(): Promise<any[]> {
  return client.get('/history');
}

export async function apiGetHistoryItem(id: number | string): Promise<any> {
  return client.get(`/history/${id}`);
}

// ==========================================
// 5. FIELDS MANAGEMENT (CRUD)
// ==========================================

function normalizeField(raw: any): FieldItem {
  return {
    id: raw.id,
    name: raw.field_name || raw.name || '',
    crop: raw.crop || 'Crop',
    area_acres: raw.area_acres ?? 0,
    latitude: raw.latitude,
    longitude: raw.longitude,
    created_at: raw.created_at,
  };
}

export async function apiGetFields(): Promise<FieldItem[]> {
  const data = await client.get<any[]>('/fields');
  return (Array.isArray(data) ? data : []).map(normalizeField);
}

export async function apiGetField(id: number | string): Promise<FieldItem> {
  const data = await client.get<any>(`/fields/${id}`);
  return normalizeField(data);
}

export async function apiCreateField(data: {
  name: string;
  crop?: string;
  area_acres?: number;
  latitude?: number;
  longitude?: number;
}): Promise<FieldItem> {
  const payload = {
    field_name: data.name,
    location_name: data.name || 'Default Field',
    latitude: data.latitude,
    longitude: data.longitude,
  };
  const res = await client.post<any>('/fields', payload);
  const normalized = normalizeField(res);
  if (data.crop) normalized.crop = data.crop;
  if (data.area_acres !== undefined) normalized.area_acres = data.area_acres;
  return normalized;
}

export async function apiUpdateField(
  id: number | string,
  data: Partial<FieldItem>
): Promise<FieldItem> {
  const payload = {
    field_name: data.name || '',
    location_name: data.name || 'Default Field',
    latitude: data.latitude,
    longitude: data.longitude,
  };
  const res = await client.put<any>(`/fields/${id}`, payload);
  return normalizeField(res);
}

export async function apiDeleteField(id: number | string): Promise<{ success: boolean }> {
  return client.delete(`/fields/${id}`);
}

// ==========================================
// 6. WEATHER FORECAST & CROP RISK
// ==========================================
export async function apiGetWeatherForecast(
  latitude: number,
  longitude: number
): Promise<WeatherForecastData> {
  return client.get<WeatherForecastData>('/weather/forecast', {
    params: { latitude, longitude }
  });
}

const GEOCODING_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';

export async function apiSearchLocation(query: string): Promise<GeocodingResult[]> {
  const url = `${GEOCODING_API_URL}?name=${encodeURIComponent(query)}&count=10&language=en&format=json`;
  const response = await fetch(url);
  if (!response.ok) return [];
  const data = await response.json();
  return data.results || [];
}

const REVERSE_GEOCODING_API_URL = 'https://nominatim.openstreetmap.org/reverse';

export async function apiReverseGeocode(
  latitude: number,
  longitude: number
): Promise<string | null> {
  try {
    const url = `${REVERSE_GEOCODING_API_URL}?lat=${latitude}&lon=${longitude}&format=json&accept-language=en`;
    const response = await fetch(url, {
      headers: { 'User-Agent': 'AgriVision-AI/1.0' }
    });
    if (!response.ok) return null;
    const data = await response.json();
    const address = data.address || {};
    const locality = address.village || address.town || address.city || address.municipality || address.county;
    const district = address.county || address.state_district;
    const state = address.state;
    const parts = [locality, district, state].filter(Boolean);
    return parts.length > 0 ? parts.join(', ') : data.display_name || null;
  } catch {
    return null;
  }
}

// ==========================================
// 7. ALERTS
// ==========================================

function normalizeAlert(raw: any): AlertItem {
  let severity: 'low' | 'medium' | 'high' | 'critical' = 'medium';
  const rawRisk = (raw.risk_level || raw.severity || '').toLowerCase();
  if (rawRisk.includes('crit') || rawRisk.includes('high')) {
    severity = rawRisk.includes('crit') ? 'critical' : 'high';
  } else if (rawRisk.includes('low')) {
    severity = 'low';
  }

  let alert_type: AlertItem['alert_type'] = 'general';
  if (raw.alert_type) {
    alert_type = raw.alert_type;
  } else if (raw.pest_detected) {
    alert_type = 'pest';
  } else if (raw.disease) {
    alert_type = 'disease';
  } else if (raw.trigger_reason && (raw.trigger_reason.includes('risk') || raw.trigger_reason.includes('weather'))) {
    alert_type = 'weather';
  }

  const title = raw.title ||
    (raw.crop ? `${raw.crop}: ${raw.disease || raw.pest_detected || raw.trigger_reason || 'Alert'}` : (raw.trigger_reason || 'Field Alert'));

  const message = raw.message || raw.trigger_detail || 'Agricultural alert detected for your field.';

  return {
    id: raw.id,
    title,
    message,
    alert_type,
    severity,
    is_read: raw.is_read !== undefined ? Boolean(raw.is_read) : (raw.status !== 'new'),
    is_resolved: raw.is_resolved !== undefined ? Boolean(raw.is_resolved) : (raw.status === 'resolved'),
    created_at: raw.created_at,
    field_id: raw.field_id ?? null,
  };
}

export async function apiGetAlerts(status?: 'all' | 'unread' | 'active'): Promise<AlertItem[]> {
  const data = await client.get<any[]>('/alerts', {
    params: status ? { status } : undefined
  });
  return (Array.isArray(data) ? data : []).map(normalizeAlert);
}

export async function apiGetAlert(id: number | string): Promise<AlertItem> {
  const data = await client.get<any>(`/alerts/${id}`);
  return normalizeAlert(data);
}

export async function apiUpdateAlert(
  id: number | string,
  update: { is_read?: boolean; is_resolved?: boolean }
): Promise<AlertItem> {
  let backendStatus = 'reviewed';
  if (update.is_resolved) {
    backendStatus = 'resolved';
  } else if (update.is_read === false) {
    backendStatus = 'new';
  }
  const res = await client.patch<any>(`/alerts/${id}`, { status: backendStatus });
  return normalizeAlert(res);
}

// ==========================================
// 8. FOLLOW-UPS
// ==========================================

function normalizeFollowUp(raw: any): FollowUpItem {
  return {
    id: raw.id,
    analysis_id: raw.analysis_id,
    scheduled_date: raw.scheduled_date || raw.recommended_date || '',
    notes: raw.notes || '',
    status: raw.status || 'pending',
    created_at: raw.created_at,
  };
}

export async function apiGetFollowUps(): Promise<FollowUpItem[]> {
  const data = await client.get<any[]>('/follow-ups');
  return (Array.isArray(data) ? data : []).map(normalizeFollowUp);
}

export async function apiGetFollowUp(id: number | string): Promise<FollowUpItem> {
  const data = await client.get<any>(`/follow-ups/${id}`);
  return normalizeFollowUp(data);
}

export async function apiCreateFollowUp(data: {
  analysis_id?: number | string;
  scheduled_date: string;
  notes?: string;
}): Promise<FollowUpItem> {
  const params: Record<string, any> = {
    analysis_id: data.analysis_id,
    recommended_date: data.scheduled_date,
  };
  if (data.notes) {
    params.notes = data.notes;
  }
  const res = await client.post<any>('/follow-ups', null, { params });
  return normalizeFollowUp(res);
}

export async function apiUpdateFollowUp(
  id: number | string,
  data: { status?: string; notes?: string; scheduled_date?: string }
): Promise<FollowUpItem> {
  const payload: Record<string, any> = {};
  if (data.status) payload.status = data.status;
  if (data.notes) payload.notes = data.notes;
  const res = await client.patch<any>(`/follow-ups/${id}`, payload);
  return normalizeFollowUp(res);
}

// ==========================================
// 9. EXPERT REFERRALS
// ==========================================
export async function apiGetReferrals(): Promise<ReferralItem[]> {
  return client.get<ReferralItem[]>('/referrals');
}

export async function apiGetReferral(id: number | string): Promise<ReferralItem> {
  return client.get<ReferralItem>(`/referrals/${id}`);
}

export async function apiUpdateReferral(
  id: number | string,
  data: { status?: string; expert_notes?: string }
): Promise<ReferralItem> {
  return client.patch<ReferralItem>(`/referrals/${id}`, data);
}

// ==========================================
// 10. GEMINI AGRICULTURAL CHAT
// ==========================================
export interface ChatApiResponse {
  response: string;
  reply?: string;
  audio_url?: string;
}

const LANGUAGE_INSTRUCTION: Record<string, string> = {
  en: 'Respond only in English.',
  te: 'Respond only in Telugu.',
  hi: 'Respond only in Hindi.',
  mr: 'Respond only in Marathi.',
};

export async function apiSendChat(
  message: string,
  context?: {
    crop?: string;
    disease?: string;
    analysis_id?: number | string;
    language?: Language;
  }
): Promise<ChatApiResponse> {
  const lang = context?.language || 'en';
  const instruction = LANGUAGE_INSTRUCTION[lang] || LANGUAGE_INSTRUCTION['en'];
  const messageWithInstruction = `${instruction}\n\nUser message: ${message}`;

  const analysis_context: Record<string, any> = {};
  if (context?.crop) analysis_context.crop = context.crop;
  if (context?.disease) analysis_context.disease = context.disease;
  if (context?.analysis_id) analysis_context.analysis_id = context.analysis_id;

  const res = await client.post<{ reply: string; model_used?: string }>('/chat', {
    message: messageWithInstruction,
    analysis_context: Object.keys(analysis_context).length > 0 ? analysis_context : undefined
  });

  return {
    response: res.reply || '',
    reply: res.reply || ''
  };
}

// ==========================================
// 11. WATER ADVISOR & COMMUNITY CLUSTERS
// ==========================================
import { WaterAdvisorResult, DiseaseCluster } from '../types';

export async function apiGetWaterAdvice(
  crop: string,
  disease: string,
  lat?: number | null,
  lon?: number | null
): Promise<WaterAdvisorResult> {
  const params: Record<string, string> = {
    crop,
    disease,
  };

  if (lat != null) {
    params.latitude = String(lat);
  }

  if (lon != null) {
    params.longitude = String(lon);
  }

  const query = new URLSearchParams(params).toString();

  return client.get<WaterAdvisorResult>(`/water-advisor?${query}`);
}

export async function apiGetClusters(): Promise<DiseaseCluster[]> {
  return client.get<DiseaseCluster[]>('/clusters');
}
