import { AnalysisResult, CropKey, Language, RecommendedActionItem } from '../types';
import { apiPredict } from './apiService';

export interface BackendAnalysisPayload {
  crop: CropKey; // internal English crop ID (e.g. 'tomato', 'cherry')
  image: string; // Base64 data URL
  source: 'camera' | 'upload';
  language: Language;
}

export interface PlantAnalysisResponse {
  isMultipleCrop: boolean;
  detectedCrops?: CropKey[];
  analysisId: string;
  result?: AnalysisResult;
  payload?: BackendAnalysisPayload;
}

const CROP_INFO_MAP: Record<CropKey, { name: string; scientific: string }> = {
  apple: { name: 'Apple', scientific: 'Malus domestica' },
  cherry: { name: 'Cherry', scientific: 'Prunus avium' },
  corn: { name: 'Corn', scientific: 'Zea mays' },
  cotton: { name: 'Cotton', scientific: 'Gossypium hirsutum' },
  grape: { name: 'Grape', scientific: 'Vitis vinifera' },
  peach: { name: 'Peach', scientific: 'Prunus persica' },
  pepper: { name: 'Pepper', scientific: 'Capsicum annuum' },
  potato: { name: 'Potato', scientific: 'Solanum tuberosum' },
  rice: { name: 'Rice', scientific: 'Oryza sativa' },
  squash: { name: 'Squash', scientific: 'Cucurbita pepo' },
  strawberry: { name: 'Strawberry', scientific: 'Fragaria × ananassa' },
  tomato: { name: 'Tomato', scientific: 'Solanum lycopersicum' },
  wheat: { name: 'Wheat', scientific: 'Triticum aestivum' },
  sugarcane: { name: 'Sugarcane', scientific: 'Saccharum officinarum' },
  soybean: { name: 'Soybean', scientific: 'Glycine max' },
  jowar: { name: 'Jowar', scientific: 'Sorghum bicolor' },
  bajra: { name: 'Bajra', scientific: 'Pennisetum glaucum' }
};

/**
 * Creates a default AnalysisResult pending actual response from the backend AI engine.
 * No sample or hardcoded diseases, pests, percentages, or treatments are generated.
 */
export function createDefaultAnalysisResult(
  cropKey: CropKey,
  imageUrl: string,
  analysisId: string,
  imageSource: 'camera' | 'upload' = 'upload'
): AnalysisResult {
  const cropInfo = CROP_INFO_MAP[cropKey] || {
    name: cropKey.charAt(0).toUpperCase() + cropKey.slice(1),
    scientific: ''
  };

  const nowIso = new Date().toISOString();

  return {
    id: analysisId,
    analysisId,
    cropKey,
    selectedCrop: cropKey,
    cropName: cropInfo.name,
    scientificName: cropInfo.scientific,
    status: 'processing',
    healthStatus: 'processing',
    // Dynamic fields for backend AI engine integration:
    analysisSummary: 'No analysis result available yet.',
    diseaseName: 'None',
    diseaseDetected: 'None',
    diseaseConfidence: null,
    pestName: 'None',
    pestDetected: 'None',
    pestConfidence: null,
    recommendedAction: 'No recommendation available yet.',
    finalRecommendation: 'No recommendation available yet.',
    recommendedActions: [],
    scanDate: nowIso,
    createdAt: nowIso,
    updatedAt: nowIso,
    imageUrl,
    imageData: imageUrl,
    imageSource
  };
}

/**
 * Converts a data URL (base64 string) into a standard File or Blob for upload.
 */
function dataURLtoBlob(dataurl: string): Blob {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/jpeg';
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

/**
 * Service API for AI Crop & Disease Diagnosis.
 * Sends real image to FastAPI backend POST /predict with MobileNetV3 + YOLO inference.
 */
export async function analyzePlant(
  imageDataUrl: string,
  language: Language,
  options?: {
    isMultipleCrop?: boolean;
    cropKey?: CropKey;
    source?: 'camera' | 'upload';
    imageFile?: File;
  }
): Promise<PlantAnalysisResponse> {
  const selectedKey: CropKey = options?.cropKey || 'tomato';
  const source: 'camera' | 'upload' = options?.source || 'upload';

  const payload: BackendAnalysisPayload = {
    crop: selectedKey,
    image: imageDataUrl,
    source,
    language
  };

  const uploadPayload: Blob | File =
    options?.imageFile || dataURLtoBlob(imageDataUrl);

  try {
    // Call REAL FastAPI inference endpoint: POST /predict
    const backendData = await apiPredict(uploadPayload, selectedKey);
    const analysisId = String(backendData.history_id || backendData.id || backendData.analysis_id || `analysis-${Date.now()}`);

    const cropName = backendData.crop || backendData.crop_detected || CROP_INFO_MAP[selectedKey]?.name || 'Crop Specimen';
    const diseaseName = backendData.disease || backendData.disease_detected || 'None';
    const isHealthy = diseaseName.toLowerCase() === 'healthy' || diseaseName.toLowerCase() === 'none';

    // Parse recommendations - backend returns { disease: {...}, pest: {...} } object
    let actions: RecommendedActionItem[] = [];
    if (backendData.recommendations && typeof backendData.recommendations === 'object') {
      if (Array.isArray(backendData.recommendations)) {
        actions = backendData.recommendations.map((rec: any, idx: number) => ({
          id: idx + 1,
          title: typeof rec === 'string' ? rec : rec.title || 'Recommended Action',
          descText: typeof rec === 'object' ? rec.descText : ''
        }));
      } else {
        // Handle { disease: {...}, pest: {...} } format from backend
        const recObj = backendData.recommendations as any;
        let idx = 0;
        if (recObj.disease) {
          Object.entries(recObj.disease).forEach(([key, value]) => {
            if (typeof value === 'string' && value.trim()) {
              actions.push({
                id: ++idx,
                title: key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                descText: value
              });
            }
          });
        }
        if (recObj.pest) {
          Object.entries(recObj.pest).forEach(([key, value]) => {
            if (typeof value === 'string' && value.trim()) {
              actions.push({
                id: ++idx,
                title: key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                descText: value
              });
            }
          });
        }
      }
    }

    const nowIso = new Date().toISOString();

    const result: AnalysisResult = {
      id: analysisId,
      analysisId,
      cropKey: selectedKey,
      selectedCrop: selectedKey,
      cropName,
      scientificName: CROP_INFO_MAP[selectedKey]?.scientific || '',
      status: isHealthy ? 'healthy' : 'needs_attention',
      healthStatus: isHealthy ? 'healthy' : 'needs_attention',
      analysisSummary:
        backendData.recommended_action ||
        (isHealthy ? 'Foliage appears healthy with no major disease detected.' : `Detected symptoms consistent with ${diseaseName}.`),
      diseaseName,
      diseaseDetected: diseaseName,
     diseaseConfidence:
  backendData.disease_confidence != null
    ? Number(backendData.disease_confidence) <= 1
      ? Number(backendData.disease_confidence)
      : Number(backendData.disease_confidence) / 100
    : null,
confidence:
  backendData.disease_confidence != null
    ? Number(backendData.disease_confidence) <= 1
      ? Number(backendData.disease_confidence)
      : Number(backendData.disease_confidence) / 100
    : null,
      pestName: backendData.pest_detected || backendData.pest || 'None',
      pestDetected: backendData.pest_detected || backendData.pest || 'None',
      pestConfidence: backendData.pest_confidence ?? null,
      recommendedAction: backendData.recommended_action || 'Follow balanced agronomic practices.',
      finalRecommendation: backendData.recommended_action || 'Follow balanced agronomic practices.',
      recommendedActions: actions,
      riskLevel: backendData.risk_assessment?.risk_level || backendData.risk_level || (isHealthy ? 'Low' : 'Medium'),
      riskReasons: backendData.risk_assessment?.risk_reason ? [backendData.risk_assessment.risk_reason] : (backendData.risk_reasons || []),
      warning: backendData.warning || null,
      expertReferral: backendData.expert_referral
        ? {
            required: backendData.expert_referral.recommended,
            referralId: undefined,
            status: 'pending',
            reason: backendData.expert_referral.reason
          }
        : null,
      followUpSuggested: backendData.follow_up
        ? {
            required: backendData.follow_up.recommended,
            recommendedDate: backendData.follow_up.recommended_date,
            reason: backendData.follow_up.message
          }
        : null,
      scanDate: nowIso,
      createdAt: nowIso,
      updatedAt: nowIso,
      imageUrl: imageDataUrl,
      imageData: imageDataUrl,
      imageSource: source
    };

    return {
      isMultipleCrop: false,
      analysisId,
      result,
      payload
    };
  } catch (err: any) {
    console.error('Real backend POST /predict failed:', err);
    throw err;
  }
}

/**
 * Continues analysis after farmer resolves multi-crop ambiguity.
 */
export async function continueAnalysis(
  analysisId: string,
  selectedCrop: CropKey,
  language: Language,
  imageDataUrl?: string
): Promise<AnalysisResult> {
  const image = imageDataUrl || '';
  const response = await analyzePlant(image, language, {
    cropKey: selectedCrop,
    source: 'upload'
  });
  if (!response.result) {
    throw new Error('Could not analyze selected crop.');
  }
  return response.result;
}

/**
 * Helper function to merge real backend AI responses into an AnalysisResult.
 * When the backend sends real data, this replaces the default values.
 */
export function applyBackendAnalysisResult(
  currentResult: AnalysisResult,
  backendData: {
    analysisSummary?: string;
    diseaseName?: string;
    diseaseConfidence?: number | string | null;
    pestName?: string;
    pestConfidence?: number | string | null;
    recommendedAction?: string | RecommendedActionItem[];
    status?: 'healthy' | 'critical' | 'processing';
  }
): AnalysisResult {
  return {
    ...currentResult,
    ...(backendData.analysisSummary !== undefined && { analysisSummary: backendData.analysisSummary }),
    ...(backendData.diseaseName !== undefined && { diseaseName: backendData.diseaseName }),
    ...(backendData.diseaseConfidence !== undefined && { diseaseConfidence: backendData.diseaseConfidence }),
    ...(backendData.pestName !== undefined && { pestName: backendData.pestName }),
    ...(backendData.pestConfidence !== undefined && { pestConfidence: backendData.pestConfidence }),
    ...(backendData.recommendedAction !== undefined && { recommendedAction: backendData.recommendedAction }),
    ...(backendData.status !== undefined && { status: backendData.status })
  };
}
