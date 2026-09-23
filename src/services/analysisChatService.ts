import { AnalysisChatMessage, AnalysisResult, Language } from '../types';
import { getCropDisplayName } from '../utils/cropTranslations';
import { apiSendChat } from './apiService';

const CHATS_STORAGE_KEY = 'agrivision_analysis_chats_db';

/**
 * Retrieves all chat messages for a specific analysisId, sorted oldest to newest.
 */
export async function getAnalysisChatMessages(analysisId: string): Promise<AnalysisChatMessage[]> {
  try {
    const raw = localStorage.getItem(CHATS_STORAGE_KEY);
    const allMessages: AnalysisChatMessage[] = raw ? JSON.parse(raw) : [];
    return allMessages
      .filter((m) => m.analysisId === analysisId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  } catch (e) {
    console.error('Failed to load chat messages for analysis:', e);
    return [];
  }
}

/**
 * Saves a single message to persistent storage.
 */
export async function saveAnalysisChatMessage(
  analysisId: string,
  userId: string,
  role: 'user' | 'assistant',
  message: string,
  imageUrl?: string,
  imageSource?: 'camera' | 'upload'
): Promise<AnalysisChatMessage> {
  try {
    const raw = localStorage.getItem(CHATS_STORAGE_KEY);
    const allMessages: AnalysisChatMessage[] = raw ? JSON.parse(raw) : [];

    const newMsg: AnalysisChatMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      analysisId,
      userId,
      role,
      message: message.trim(),
      ...(imageUrl ? { imageUrl } : {}),
      ...(imageSource ? { imageSource } : {}),
      createdAt: new Date().toISOString()
    };

    allMessages.push(newMsg);
    localStorage.setItem(CHATS_STORAGE_KEY, JSON.stringify(allMessages));
    return newMsg;
  } catch (e) {
    console.error('Failed to save chat message:', e);
    throw e;
  }
}

/**
 * Generates an initial welcoming agronomist greeting for a fresh analysis.
 */
export function getInitialGreetingText(analysis: AnalysisResult, lang: Language): string {
  const cropName = getCropDisplayName(analysis.cropKey, lang) || analysis.cropName;
  const disease = analysis.diseaseName || analysis.diseaseDetected;
  const isHealthy = analysis.status === 'healthy' || analysis.healthStatus === 'healthy';

  if (lang === 'te') {
    if (isHealthy) {
      return `నమస్కారం! మీ ${cropName} పంట నమూనా ఆరోగ్యంగా ఉంది. తెగుళ్ల నివారణ లేదా ఎరువుల యాజమాన్యం గురించి ఏదైనా ప్రశ్న అడగండి.`;
    }
    return `నమస్కారం! మీ ${cropName} పంట విశ్లేషణను పరిశీలించాను (${disease ? disease : 'పరిశీలన కొనసాగుతోంది'}). చికిత్స, స్ప్రే మోతాదు లేదా సేంద్రీయ పద్ధతుల గురించి మీరు నన్ను అడగవచ్చు.`;
  }

  if (lang === 'hi') {
    if (isHealthy) {
      return `नमस्ते! आपका ${cropName} का नमूना पूरी तरह स्वस्थ है। फसल सुरक्षा या पोषण प्रबंधन के बारे में कोई भी प्रश्न पूछें।`;
    }
    return `नमस्ते! मैंने आपके ${cropName} के विश्लेषण की समीक्षा की है (${disease ? disease : 'जांच की गई'})। उपचार, दवा छिड़काव या जैविक उपायों के बारे में मुझसे पूछें।`;
  }

  if (lang === 'mr') {
    if (isHealthy) {
      return `नमस्कार! तुमचा ${cropName} पिकाचा नमुना निरोगी आहे. कीड नियंत्रण किंवा खत व्यवस्थापनाबद्दल काहीही विचारा.`;
    }
    return `नमस्कार! मी तुमच्या ${cropName} पिकाच्या विश्लेषणाचा अभ्यास केला आहे (${disease ? disease : 'तपासणी केली'})। उपाययोजना, फवारणी किंवा सेंद्रिय उपचारांबद्दल मला विचारा.`;
  }

  // English fallback
  if (isHealthy) {
    return `Hello! I have reviewed your ${cropName} scan. The foliage appears healthy. Feel free to ask about preventive maintenance, fertilizer timing, or optimal watering schedules.`;
  }
  return `Hello! I have reviewed your ${cropName} diagnostic report${disease ? ` regarding ${disease}` : ''}. Ask me any questions regarding treatment protocols, spray dosages, organic alternatives, or prevention of spread.`;
}

/**
 * Generates agronomic advisory answers based on the analysis context and user query.
 * Calls real FastAPI backend: POST /chat (powered by Gemini).
 */
export async function sendAgronomistQuery(
  analysisId: string,
  userId: string,
  userQuery: string,
  analysis: AnalysisResult,
  lang: Language,
  followUpImage?: string,
  imageSource?: 'camera' | 'upload',
  _conversationHistory?: AnalysisChatMessage[]
): Promise<AnalysisChatMessage> {
  // 1. Save user query locally for instant conversation history
  await saveAnalysisChatMessage(analysisId, userId, 'user', userQuery, followUpImage, imageSource);

  let replyText = '';

  try {
    const chatRes = await apiSendChat(userQuery, {
      crop: analysis.cropName || analysis.cropKey,
      disease: analysis.diseaseName || analysis.diseaseDetected,
      analysis_id: analysis.analysisId || analysis.id,
      language: lang
    });

    replyText = chatRes.response || chatRes.reply || 'Consult local agricultural extension officers for in-field validation.';
  } catch (apiErr) {
    console.warn('Backend POST /chat failed, using contextual fallback advisory:', apiErr);
    const cropName = getCropDisplayName(analysis.cropKey, lang) || analysis.cropName;
    const disease = analysis.diseaseName || analysis.diseaseDetected || 'observed condition';
    replyText = `Regarding your ${cropName} (${disease}): Follow balanced sanitation practices, isolate infected foliage, and ensure proper soil drainage.`;
  }

  const assistantMsg = await saveAnalysisChatMessage(analysisId, userId, 'assistant', replyText);
  return assistantMsg;
}
