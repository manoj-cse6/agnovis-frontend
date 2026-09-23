import { CropKey, Language } from '../types';

export const AVAILABLE_CROPS: readonly CropKey[] = [
  'rice',       // 1. Rice / Paddy  — crop-specific model
  'wheat',      // 2. Wheat          — crop-specific model
  'corn',       // 3. Maize / Corn
  'cotton',     // 4. Cotton         — crop-specific model
  'sugarcane',  // 5. Sugarcane      — crop-specific model
  'soybean',    // 6. Soybean        — crop-specific model
  'jowar',      // 7. Jowar / Sorghum— crop-specific model
  'bajra',      // 8. Bajra / Pearl Millet — crop-specific model
  'tomato',     // 9. Tomato
  'grape',      // 10. Grape
  'apple',      // 11. Apple
  'peach',      // 12. Peach
  'strawberry', // 13. Strawberry
  'pepper',     // 14. Bell Pepper
  'potato',     // 15. Potato
  'squash',     // 16. Squash
  'cherry'      // 17. Cherry
] as const;

export const CROP_DISPLAY_NAMES: Record<Language, Record<string, string>> = {
  en: {
    apple: 'Apple',
    cherry: 'Cherry',
    corn: 'Corn',
    grape: 'Grape',
    peach: 'Peach',
    pepper: 'Pepper',
    potato: 'Potato',
    squash: 'Squash',
    strawberry: 'Strawberry',
    tomato: 'Tomato',
    wheat: 'Wheat',
    cotton: 'Cotton',
    rice: 'Rice',
    sugarcane: 'Sugarcane',
    soybean: 'Soybean',
    jowar: 'Jowar / Sorghum',
    bajra: 'Bajra / Pearl Millet',
    sorghum: 'Jowar / Sorghum',
    'pearl millet': 'Bajra / Pearl Millet'
  },
  te: {
    apple: 'ఆపిల్',
    cherry: 'చెర్రీ',
    corn: 'మొక్కజొన్న',
    grape: 'ద్రాక్ష',
    peach: 'పీచ్',
    pepper: 'మిరియాలు',
    potato: 'బంగాళాదుంప',
    squash: 'స్క్వాష్',
    strawberry: 'స్ట్రాబెర్రీ',
    tomato: 'టమాటా',
    wheat: 'గోధుమ',
    cotton: 'పత్తి',
    rice: 'వరి',
    sugarcane: 'చెరకు',
    soybean: 'సోయాబీన్',
    jowar: 'జొన్నలు',
    bajra: 'సజ్జలు',
    sorghum: 'జొన్నలు',
    'pearl millet': 'సజ్జలు'
  },
  hi: {
    apple: 'सेब',
    cherry: 'चेरी',
    corn: 'मक्का',
    grape: 'अंगूर',
    peach: 'आड़ू',
    pepper: 'शिमला मिर्च',
    potato: 'आलू',
    squash: 'स्क्वैश',
    strawberry: 'स्ट्रॉबेरी',
    tomato: 'टमाटर',
    wheat: 'गेहूँ',
    cotton: 'कपास',
    rice: 'चावल',
    sugarcane: 'गन्ना',
    soybean: 'सोयाबीन',
    jowar: 'ज्वार',
    bajra: 'बाजरा',
    sorghum: 'ज्वार',
    'pearl millet': 'बाजरा'
  },
  mr: {
    apple: 'सफरचंद',
    cherry: 'चेरी',
    corn: 'मका',
    grape: 'द्राक्ष',
    peach: 'पीच',
    pepper: 'मिरची',
    potato: 'बटाटा',
    squash: 'स्क्वॅश',
    strawberry: 'स्ट्रॉबेरी',
    tomato: 'टोमॅटो',
    wheat: 'गहू',
    cotton: 'कापूस',
    rice: 'तांदूळ',
    sugarcane: 'ऊस',
    soybean: 'सोयाबीन',
    jowar: 'ज्वारी',
    bajra: 'बाजरी',
    sorghum: 'ज्वारी',
    'pearl millet': 'बाजरी'
  }
};

/**
 * Returns the localized display name for a given crop key and language.
 * The cropKey must be an internal English ID (e.g. 'tomato', 'cherry').
 */
export function getCropDisplayName(crop: string | null | undefined, lang: Language): string {
  if (!crop) return '';
  const key = crop.toLowerCase().trim();
  const langMap = CROP_DISPLAY_NAMES[lang] || CROP_DISPLAY_NAMES.en;
  
  if (langMap[key]) {
    return langMap[key];
  }

  // Check if string contains any standard crop identifier (e.g. 'Heirloom Tomatoes - Greenhouse' -> 'tomato')
  for (const cropId of AVAILABLE_CROPS) {
    if (key.includes(cropId)) {
      return langMap[cropId];
    }
  }

  // Fallback to English lookup
  if (CROP_DISPLAY_NAMES.en[key]) {
    return CROP_DISPLAY_NAMES.en[key];
  }

  // Fallback title-case
  return crop.charAt(0).toUpperCase() + crop.slice(1);
}

/**
 * Icons associated with each crop for clean visual presentation.
 */
export const CROP_ICONS: Record<CropKey | string, string> = {
  apple: 'nutrition',
  cherry: 'eco',
  corn: 'grass',
  grape: 'spa',
  peach: 'local_florist',
  pepper: 'energy_savings_leaf',
  potato: 'yard',
  squash: 'nature',
  strawberry: 'favorite',
  tomato: 'psychology_alt',
  wheat: 'grass',
  cotton: 'cloud',
  rice: 'grain',
  sugarcane: 'agriculture',
  soybean: 'eco',
  jowar: 'yard',
  bajra: 'nature'
};
