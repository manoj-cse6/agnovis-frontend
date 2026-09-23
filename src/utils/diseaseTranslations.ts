import { Language } from '../types';

export interface DiseaseTranslation {
  en: string;
  te: string;
  hi: string;
  mr: string;
}

/**
 * Farmer-friendly localized disease names for all 60 classes
 * across the 8 backend AI models (Original 28-class, Rice, Sugarcane,
 * Cotton, Soybean, Wheat, Jowar, Bajra).
 */
export const DISEASE_TRANSLATIONS: Record<string, DiseaseTranslation> = {
  // --- General / Healthy States ---
  'healthy': {
    en: 'Healthy Foliage',
    te: '�?ర�<�-్య�.రమ�^న ప�,�Y',
    hi: 'स्वस्थ फसल',
    mr: 'निर�<�-�? प�?�.'
  },
  'none': {
    en: 'No Disease Detected',
    te: '�Z�Yువ�,�Yి త�?�-ులు �-ుర్తి�,�sబడల�?దు',
    hi: '�.�<�^ र�<�- नह�?�, पाया �-या',
    mr: '�.�<णताह�? र�<�- �?ढळला नाह�?'
  },

  // --- Original 28-Class Model ---
  'apple___apple_scab': {
    en: 'Apple Scab',
    te: '�?పిల్ స్�.ాబ్ త�?�-ులు',
    hi: 'स�?ब �.ा स्�.�^ब र�<�-',
    mr: 'सफर�s�,द �-वल�? र�<�- (स्�.�.ब)'
  },
  'apple___healthy': {
    en: 'Healthy Apple',
    te: '�?ర�<�-్య�.రమ�^న �?పిల్',
    hi: 'स्वस्थ स�?ब',
    mr: 'निर�<�-�? सफर�s�,द'
  },
  'cherry_(including_sour)___powdery_mildew': {
    en: 'Cherry Powdery Mildew',
    te: '�s�?ర్ర�? బ�,డిద త�?�-ులు',
    hi: '�s�?र�? �s�,र्णिल �?सिता (पा�?डर�? मिल्ड्य�,)',
    mr: '�s�?र�? भुर�? र�<�-'
  },
  'cherry_(including_sour)___healthy': {
    en: 'Healthy Cherry',
    te: '�?ర�<�-్య�.రమ�^న �s�?ర్ర�?',
    hi: 'स्वस्थ �s�?र�?',
    mr: 'निर�<�-�? �s�?र�?'
  },
  'corn_(maize)___common_rust_': {
    en: 'Corn Common Rust',
    te: 'మ�S�.్�.�o�Sన్న తుప్పు త�?�-ులు',
    hi: 'म�.्�.ा सामान्य रतु�? र�<�-',
    mr: 'म�.ा ता�,ब�?रा र�<�-'
  },
  'corn_(maize)___healthy': {
    en: 'Healthy Corn',
    te: '�?ర�<�-్య�.రమ�^న మ�S�.్�.�o�Sన్న',
    hi: 'स्वस्थ म�.्�.ा',
    mr: 'निर�<�-�? म�.ा'
  },
  'grape___black_rot': {
    en: 'Grape Black Rot',
    te: 'ద్రా�.్ష నల్ల �.ుళ్లు త�?�-ులు',
    hi: '�.�,�-�,र �.ाला सड़न र�<�-',
    mr: 'द्रा�.्ष �.ाळा �.ु�oवा र�<�-'
  },
  'grape___healthy': {
    en: 'Healthy Grape',
    te: '�?ర�<�-్య�.రమ�^న ద్రా�.్ష',
    hi: 'स्वस्थ �.�,�-�,र',
    mr: 'निर�<�-�? द्रा�.्ष�?'
  },
  'peach___bacterial_spot': {
    en: 'Peach Bacterial Spot',
    te: 'ప�?�s్ బా�.్�Y�?రియల్ మ�s్�s త�?�-ులు',
    hi: '�?ड़�, �o�?वाणु धब्बा र�<�-',
    mr: 'प�?�s �oिवाण�, ठिप�.�? र�<�-'
  },
  'peach___healthy': {
    en: 'Healthy Peach',
    te: '�?ర�<�-్య�.రమ�^న ప�?�s్',
    hi: 'स्वस्थ �?ड़�,',
    mr: 'निर�<�-�? प�?�s'
  },
  'pepper,_bell___bacterial_spot': {
    en: 'Bell Pepper Bacterial Spot',
    te: 'మిరప బా�.్�Y�?రియల్ మ�s్�s త�?�-ులు',
    hi: 'शिमला मिर्�s �o�?वाणु धब्बा र�<�-',
    mr: 'मिर�s�? �oिवाण�, ठिप�.�? र�<�-'
  },
  'pepper,_bell___healthy': {
    en: 'Healthy Bell Pepper',
    te: '�?ర�<�-్య�.రమ�^న మిరప',
    hi: 'स्वस्थ शिमला मिर्�s',
    mr: 'निर�<�-�? मिर�s�?'
  },
  'potato___early_blight': {
    en: 'Potato Early Blight',
    te: 'బ�,�-ాళాదు�,ప ము�,దస్తు �?�.ుమాడు త�?�-ులు',
    hi: '�?ल�, �.�-�?त�? झुलसा',
    mr: 'ब�Yा�Yा लव�.र य�?णारा �.रपा'
  },
  'potato___late_blight': {
    en: 'Potato Late Blight',
    te: 'బ�,�-ాళాదు�,ప �?లస్యపు �?�.ుమాడు త�?�-ులు',
    hi: '�?ल�, प�>�?त�? झुलसा',
    mr: 'ब�Yा�Yा �?शिरा य�?णारा �.रपा'
  },
  'potato___healthy': {
    en: 'Healthy Potato',
    te: '�?ర�<�-్య�.రమ�^న బ�,�-ాళాదు�,ప',
    hi: 'स्वस्थ �?ल�,',
    mr: 'निर�<�-�? ब�Yा�Yा'
  },
  'squash___powdery_mildew': {
    en: 'Squash Powdery Mildew',
    te: 'స్�.్వాష్ బ�,డిద త�?�-ులు',
    hi: 'स्�.्व�^श �s�,र्णिल �?सिता',
    mr: 'स्�.्व�.श भुर�? र�<�-'
  },
  'strawberry___leaf_scorch': {
    en: 'Strawberry Leaf Scorch',
    te: 'స్�Y్రాబ�?ర్ర�? �?�.ు మాడ�Y�, త�?�-ులు',
    hi: 'स्�Y्र�?ब�?र�? पत्त�? झुलसन',
    mr: 'स्�Y्र�?ब�?र�? पान�? �.रपण�?'
  },
  'strawberry___healthy': {
    en: 'Healthy Strawberry',
    te: '�?ర�<�-్య�.రమ�^న స్�Y్రాబ�?ర్ర�?',
    hi: 'स्वस्थ स्�Y्र�?ब�?र�?',
    mr: 'निर�<�-�? स्�Y्र�?ब�?र�?'
  },
  'tomato___bacterial_spot': {
    en: 'Tomato Bacterial Spot',
    te: '�Yమా�Yా బా�.్�Y�?రియల్ మ�s్�s త�?�-ులు',
    hi: '�Yमा�Yर �o�?वाणु धब्बा र�<�-',
    mr: '�Y�<म�.�Y�< �oिवाण�, ठिप�.�? र�<�-'
  },
  'tomato___early_blight': {
    en: 'Tomato Early Blight',
    te: '�Yమా�Yా ము�,దస్తు �?�.ుమాడు త�?�-ులు',
    hi: '�Yमा�Yर �.�-�?त�? झुलसा (�.र्ल�? ब्ला�?�Y)',
    mr: '�Y�<म�.�Y�< लव�.र य�?णारा �.रपा'
  },
  'tomato___late_blight': {
    en: 'Tomato Late Blight',
    te: '�Yమా�Yా �?లస్యపు �?�.ుమాడు త�?�-ులు',
    hi: '�Yमा�Yर प�>�?त�? झुलसा (ल�?�Y ब्ला�?�Y)',
    mr: '�Y�<म�.�Y�< �?शिरा य�?णारा �.रपा'
  },
  'tomato___leaf_mold': {
    en: 'Tomato Leaf Mold',
    te: '�Yమా�Yా �?�.ు బ�,�oు త�?�-ులు',
    hi: '�Yमा�Yर पत्त�? फफ�,�,द र�<�-',
    mr: '�Y�<म�.�Y�< पाना�,वर�?ल बुरश�?'
  },
  'tomato___septoria_leaf_spot': {
    en: 'Septoria Leaf Spot',
    te: 'స�?ప్�Y�<రియా �?�.ుమ�s్�s త�?�-ులు',
    hi: 'स�?प्�Y�<रिया पत्त�? धब्बा',
    mr: '�Y�<म�.�Y�< स�?प्�Y�<रिया ठिप�.�?'
  },
  'tomato___spider_mites two-spotted_spider_mite': {
    en: 'Two-Spotted Spider Mites',
    te: '�Zర్ర నల్లి త�?�-ులు',
    hi: 'द�<-धब्ब�?दार लाल म�.ड़�?',
    mr: '�Y�<म�.�Y�< लाल �.�<ळ�? �.�?ड'
  },
  'tomato___target_spot': {
    en: 'Tomato Target Spot',
    te: '�Yమా�Yా �Yార్�-�?�Y్ స్పా�Y్ మ�s్�s త�?�-ులు',
    hi: '�Yमा�Yर �Yार�-�?�Y स्प�?�Y र�<�-',
    mr: '�Y�<म�.�Y�< �Yार्�-�?�Y स्प�?�Y'
  },
  'tomato___tomato_yellow_leaf_curl_virus': {
    en: 'Tomato Yellow Leaf Curl Virus',
    te: '�Yమా�Yా పసుపు �?�.ు ముడత వ�^రస్',
    hi: '�Yमा�Yर प�?ला पत्त�? मर�<ड़ विषाणु',
    mr: '�Y�<म�.�Y�< पिवळा पर्ण�-ु�s्�> विषाण�,'
  },
  'tomato___tomato_mosaic_virus': {
    en: 'Tomato Mosaic Virus',
    te: '�Yమా�Yా మ�S�oాయి�.్ వ�^రస్',
    hi: '�Yमा�Yर म�<�o़�?�. विषाणु',
    mr: '�Y�<म�.�Y�< म�<झ�.�. विषाण�,'
  },
  'tomato___healthy': {
    en: 'Healthy Tomato',
    te: '�?ర�<�-్య�.రమ�^న �Yమా�Yా',
    hi: 'स्वस्थ �Yमा�Yर',
    mr: 'निर�<�-�? �Y�<म�.�Y�<'
  },

  // --- Rice Model Classes ---
  'bacterialblight': {
    en: 'Rice Bacterial Blight',
    te: 'వరి బా�.్�Y�?రియల్ �Z�,డు త�?�-ులు',
    hi: '�sावल �o�?वाणु झुलसा',
    mr: 'भात �oिवाण�, �.रपा'
  },
  'blast': {
    en: 'Blast Disease',
    te: '�.�-్�-ి త�?�-ులు (బ్లాస్�Y్)',
    hi: 'झ�<�,�.ा / ब्लास्�Y र�<�-',
    mr: 'भात �.रपा / ब्लास्�Y'
  },
  'brownspot': {
    en: 'Brown Spot',
    te: 'వరి �-�<ధుమ ర�,�-ు మ�s్�s త�?�-ులు',
    hi: 'भ�,रा धब्बा र�<�-',
    mr: 'तप�.िर�? ठिप�.�? र�<�-'
  },
  'tungro': {
    en: 'Rice Tungro Virus',
    te: 'వరి �Yు�,�-్ర�< వ�^రస్ త�?�-ులు',
    hi: '�sावल �Yु�,�-्र�< विषाणु र�<�-',
    mr: 'भात �Yु�,�-्र�< विषाण�, र�<�-'
  },

  // --- Sugarcane Model Classes ---
  'sugarcane___healthy': {
    en: 'Healthy Sugarcane',
    te: '�?ర�<�-్య�.రమ�^న �s�?ర�.ు',
    hi: 'स्वस्थ �-न्ना',
    mr: 'निर�<�-�? �Sस'
  },
  'sugarcane___mosaic': {
    en: 'Sugarcane Mosaic',
    te: '�s�?ర�.ు మ�S�oాయి�.్ త�?�-ులు',
    hi: '�-न्ना म�<�o़�?�. र�<�-',
    mr: '�Sस म�<झ�.�. र�<�-'
  },
  'sugarcane___redrot': {
    en: 'Sugarcane Red Rot',
    te: '�s�?ర�.ు �Zర్ర �.ుళ్లు త�?�-ులు (ర�?డ్ రా�Y్)',
    hi: '�-न्न�? �.ा लाल सड़न र�<�- (र�?ड र�?�Y)',
    mr: '�Sसावर�?ल लाल �.ु�oवा र�<�-'
  },
  'sugarcane___rust': {
    en: 'Sugarcane Rust',
    te: '�s�?ర�.ు తుప్పు త�?�-ులు',
    hi: '�-न्न�? �.ा रतु�? र�<�-',
    mr: '�Sसावर�?ल ता�,ब�?रा'
  },
  'sugarcane___yellow': {
    en: 'Yellow Leaf Disease',
    te: '�s�?ర�.ు పసుపు �?�.ు త�?�-ులు',
    hi: '�-न्न�? �.ा प�?ल�? पत्त�? र�<�-',
    mr: '�Sसा�s�? पिवळ�? पान र�<�-'
  },

  // --- Cotton Model Classes ---
  'alternaria_leaf': {
    en: 'Alternaria Leaf Spot',
    te: 'పత్తి �?ల్�Yర్న�?రియా �?�.ుమ�s్�s',
    hi: '�.पास �.ल्�Yरन�?रिया पत्त�? धब्बा',
    mr: '�.ाप�,स �.ल्�Yरन�?रिया �.रपा'
  },
  'bacterial_blight': {
    en: 'Bacterial Blight',
    te: 'పత్తి బా�.్�Y�?రియల్ �Z�,డు త�?�-ులు',
    hi: '�.पास �o�?वाणु झुलसा',
    mr: '�.ाप�,स �oिवाण�, �.रपा'
  },
  'fusarium_wilt': {
    en: 'Fusarium Wilt',
    te: 'ఫ్యుస�?రియ�, వడలు త�?�-ులు',
    hi: '�?�.ठा र�<�- (फ्य�,�o�?रियम विल्�Y)',
    mr: 'मर र�<�- (फ्यु�oारियम विल्�Y)'
  },
  'healthy_leaf': {
    en: 'Healthy Cotton Leaf',
    te: '�?ర�<�-్య�.రమ�^న పత్తి �?�.ు',
    hi: 'स्वस्थ �.पास पत्त�?',
    mr: 'निर�<�-�? �.ापसा�s�? पान'
  },
  'verticillium_wilt': {
    en: 'Verticillium Wilt',
    te: 'వర్�Yిసిలియ�, వడలు త�?�-ులు',
    hi: 'वर्�Yिसिलियम विल्�Y',
    mr: 'व्हर्�Yिसिलियम मर र�<�-'
  },

  // --- Soybean Model Classes ---
  'soybean___bacterial_leaf_blight': {
    en: 'Soybean Bacterial Leaf Blight',
    te: 'స�<యాబ�?న్ బా�.్�Y�?రియల్ �?�.ు �Z�,డ్రి�.',
    hi: 'स�<याब�?न �o�?वाणु पत्त�? झुलसा',
    mr: 'स�<याब�?न �oिवाण�, पाना�,�sा �.रपा'
  },
  'soybean___healthy': {
    en: 'Healthy Soybean',
    te: '�?ర�<�-్య�.రమ�^న స�<యాబ�?న్',
    hi: 'स्वस्थ स�<याब�?न',
    mr: 'निर�<�-�? स�<याब�?न'
  },
  'soybean___septoria_brown_spot': {
    en: 'Septoria Brown Spot',
    te: 'స�<యాబ�?న్ స�?ప్�Y�<రియా �-�<ధుమ మ�s్�s',
    hi: 'स�<याब�?न स�?प्�Y�<रिया भ�,रा धब्बा',
    mr: 'स�<याब�?न स�?प्�Y�<रिया तप�.िर�? ठिप�.�?'
  },
  'soybean___vein_necrosis': {
    en: 'Soybean Vein Necrosis',
    te: 'స�<యాబ�?న్ �^న�? �.ుళ్లు త�?�-ులు',
    hi: 'स�<याब�?न शिरा परि�-लन र�<�-',
    mr: 'स�<याब�?न श�?र सु�.ण�?'
  },

  // --- Wheat Model Classes ---
  'wheat brown rust': {
    en: 'Wheat Brown Rust',
    te: '�-�<ధుమ ర�,�-ు తుప్పు త�?�-ులు',
    hi: '�-�?ह�,ँ भ�,रा रतु�? र�<�-',
    mr: '�-ह�, तप�.िर�? ता�,ब�?रा'
  },
  'wheat healthy': {
    en: 'Healthy Wheat',
    te: '�?ర�<�-్య�.రమ�^న �-�<ధుమ',
    hi: 'स्वस्थ �-�?ह�,ँ',
    mr: 'निर�<�-�? �-ह�,'
  },
  'wheat loose smut': {
    en: 'Wheat Loose Smut',
    te: '�-�<ధుమ �.ా�Yు�. త�?�-ులు (ల�,�o్ స్మ�Y్)',
    hi: '�-�?ह�,ँ �.ा �.�,डु�? र�<�- (ल�,�o स्म�Y)',
    mr: '�-ह�, �.ा�oळ�? र�<�- (स्म�Y)'
  },
  'wheat yellow rust': {
    en: 'Wheat Yellow Rust',
    te: '�-�<ధుమ పసుపు తుప్పు త�?�-ులు',
    hi: '�-�?ह�,ँ प�?ला रतु�? र�<�-',
    mr: '�-ह�, पिवळा ता�,ब�?रा'
  },

  // --- Jowar / Sorghum Model Classes ---
  'anthracnose and red rot': {
    en: 'Anthracnose & Red Rot',
    te: '�o�Sన్న �Zర్ర �.ుళ్లు త�?�-ులు',
    hi: '�o्वार ए�,थ्र�?�.्न�<�o �"र लाल सड़न',
    mr: '�o्वार�? �.ँथ्र�.�.न�<�o �?णि लाल �.ु�oवा'
  },
  'cereal grain molds': {
    en: 'Cereal Grain Mold',
    te: '�o�Sన్న �.�,�.ి బ�,�oు త�?�-ులు',
    hi: '�o्वार �.ना�o फफ�,�,द र�<�-',
    mr: '�o्वार�? धान्यावर�?ल बुरश�?'
  },
  'covered kernel smut': {
    en: 'Covered Kernel Smut',
    te: '�-ి�,�o �.ా�Yు�. త�?�-ులు',
    hi: '�o्वार �?व�fत्त �.�,डु�? र�<�-',
    mr: '�o्वार�? ब�,द �.ा�oळ�? र�<�-'
  },
  'head smut': {
    en: 'Head Smut',
    te: '�.�,�.ి �.ా�Yు�. త�?�-ులు',
    hi: '�o्वार ह�?ड स्म�Y र�<�-',
    mr: '�o्वार�? �.ण�?स �.ा�oळ�?'
  },
  'rust': {
    en: 'Rust Disease',
    te: 'తుప్పు త�?�-ులు',
    hi: 'रतु�? / �-�?र�,�^ र�<�-',
    mr: 'ता�,ब�?रा र�<�-'
  },
  'loose smut': {
    en: 'Loose Smut',
    te: '�.ా�Yు�. త�?�-ులు',
    hi: '�.�,डु�? र�<�-',
    mr: '�.ा�oळ�? र�<�-'
  },

  // --- Bajra / Pearl Millet Model Classes ---
  'downy mildew': {
    en: 'Downy Mildew',
    te: 'స�o్�o డ�Oన�? మిల్డ�< త�?�-ులు',
    hi: 'बा�oरा डा�?न�? मिल्ड्य�, (म�fदुर�<मिल)',
    mr: 'बा�oर�? �.�?वडा / डा�Sन�? मिल्ड्य�,'
  },
  'exserohilum leaf blight': {
    en: 'Exserohilum Leaf Blight',
    te: 'స�o్�o �?�.ు �Z�,డ్రి�. త�?�-ులు',
    hi: 'बा�oरा पत्त�? झुलसा र�<�-',
    mr: 'बा�oर�? पाना�,�sा �.रपा'
  },
  'smut': {
    en: 'Bajra Smut',
    te: 'స�o్�o �.ా�Yు�. త�?�-ులు',
    hi: 'बा�oरा �.�,डु�? र�<�-',
    mr: 'बा�oर�? �.ा�oळ�? र�<�-'
  }
};

/**
 * Normalizes any raw model disease label into a standardized key.
 */
function normalizeDiseaseKey(label: string): string {
  if (!label) return '';
  return label
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

/**
 * Returns the localized farmer-facing disease display name.
 * Falls back to natural title-case English if an unknown label is encountered.
 */
export function getDiseaseDisplayName(
  disease: string | null | undefined,
  lang: Language
): string {
  if (!disease) return '';

  const clean = disease.trim();
  const key = normalizeDiseaseKey(clean);

  // Exact match
  if (DISEASE_TRANSLATIONS[key]) {
    return DISEASE_TRANSLATIONS[key][lang] || DISEASE_TRANSLATIONS[key].en;
  }

  // Underscore-separated key match (e.g. Tomato___Early_blight)
  const underscoreKey = key.replace(/ /g, '_');
  if (DISEASE_TRANSLATIONS[underscoreKey]) {
    return DISEASE_TRANSLATIONS[underscoreKey][lang] || DISEASE_TRANSLATIONS[underscoreKey].en;
  }

  // Strip prefix like "Tomato___"
  const parts = clean.split('___');
  if (parts.length > 1) {
    const diseasePartKey = normalizeDiseaseKey(parts[1].replace(/_/g, ' '));
    if (DISEASE_TRANSLATIONS[diseasePartKey]) {
      return DISEASE_TRANSLATIONS[diseasePartKey][lang] || DISEASE_TRANSLATIONS[diseasePartKey].en;
    }
  }

  // Healthy condition checks
  if (key.includes('healthy')) {
    return DISEASE_TRANSLATIONS['healthy'][lang] || DISEASE_TRANSLATIONS['healthy'].en;
  }
  if (key === 'none') {
    return DISEASE_TRANSLATIONS['none'][lang] || DISEASE_TRANSLATIONS['none'].en;
  }

  // Fallback: clean up underscores and return readable label
  return clean
    .replace(/___/g, ': ')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
