import { Language } from '../types';

export const RECOMMENDATION_TITLES: Record<string, Record<Language, string>> = {
  'chemical control': {
    en: 'Chemical Control',
    te: 'రసాయన నియ�,త్రణ',
    hi: 'रासायनि�. निय�,त्रण',
    mr: 'रासायनि�. निय�,त्रण'
  },
  'organic control': {
    en: 'Organic Control',
    te: 'స�?�,ద్ర�?య నియ�,త్రణ',
    hi: '�o�^वि�. / प्रा�.�fति�. निय�,त्रण',
    mr: 'स�?�,द्रिय / �o�^वि�. निय�,त्रण'
  },
  'preventative measures': {
    en: 'Preventative Measures',
    te: 'నివారణ �sర్యలు',
    hi: 'निवार�. �?पाय',
    mr: 'प्रतिब�,धात्म�. �?पाय'
  },
  'preventive measures': {
    en: 'Preventative Measures',
    te: 'నివారణ �sర్యలు',
    hi: 'निवार�. �?पाय',
    mr: 'प्रतिब�,धात्म�. �?पाय'
  },
  'biological control': {
    en: 'Biological Control',
    te: '�o�?వస�,బ�,ధ నియ�,త్రణ',
    hi: '�o�^वि�. निय�,त्रण',
    mr: '�o�^वि�. निय�,त्रण'
  },
  'severity level': {
    en: 'Severity Level',
    te: 'త�?వ్రత స్థాయి',
    hi: '�-�,भ�?रता �.ा स्तर',
    mr: 'त�?व्रत�?�s�? पातळ�?'
  },
  'monitoring': {
    en: 'Monitoring & Scouting',
    te: 'పర్యవ�?�.్షణ & ప�,�Y తని�-�?',
    hi: 'नि�-रान�? �"र निर�?�.्षण',
    mr: 'पाहण�? �?णि द�?�-र�?�-'
  },
  'treatment': {
    en: 'Agronomic Treatment',
    te: 'వ్యవసాయ �sి�.ిత్స',
    hi: '�.�fषि �?प�sार',
    mr: '�.�fष�? �?प�sार'
  },
  'recommended action': {
    en: 'Recommended Action',
    te: 'సిఫార్సు �s�?యబడిన �sర్య',
    hi: '�.नुश�,सित �.दम',
    mr: 'शिफारस �.�?ल�?ल�? �.�fत�?'
  }
};

/**
 * Common phrase dictionary for farmer-facing recommendations and advice.
 */
export const RECOMMENDATION_PHRASES: Record<string, Record<Language, string>> = {
  'no chemical treatment required.': {
    en: 'No chemical treatment required.',
    te: '�Z�Yువ�,�Yి రసాయన �sి�.ిత్స �.వసర�, ల�?దు.',
    hi: '�.िस�? रासायनि�. �?प�sार �.�? �?वश्य�.ता नह�?�, ह�^।',
    mr: '�.�<णत्याह�? रासायनि�. �?प�sारा�,�s�? �-र�o नाह�?.'
  },
  'no chemical treatment required': {
    en: 'No chemical treatment required.',
    te: '�Z�Yువ�,�Yి రసాయన �sి�.ిత్స �.వసర�, ల�?దు.',
    hi: '�.िस�? रासायनि�. �?प�sार �.�? �?वश्य�.ता नह�?�, ह�^।',
    mr: '�.�<णत्याह�? रासायनि�. �?प�sारा�,�s�? �-र�o नाह�?.'
  },
  'continue regular scouting.': {
    en: 'Continue regular field scouting.',
    te: '�.్రమ�, తప్ప�.ు�,డా ప�Sలాన్ని పరిశ�?లి�,�s�,డి.',
    hi: 'नियमित र�,प स�? �-�?त �.ा निर�?�.्षण �oार�? र�-�?�,।',
    mr: 'नियमितपण�? श�?ता�s�? पाहण�? सुर�, ठ�?वा.'
  },
  'plant appears healthy. continue monitoring.': {
    en: 'Plant appears healthy. Continue monitoring.',
    te: 'ప�,�Y �?ర�<�-్య�,�-ా �.నిపిస్త�<�,ది. పర్యవ�?�.్షణ �.�Sనసా�-ి�,�s�,డి.',
    hi: 'प�Oधा स्वस्थ दि�-ा�^ द�? रहा ह�^। नि�-रान�? �oार�? र�-�?�,।',
    mr: 'प�?�. निर�<�-�? दिसत �?ह�?. द�?�-र�?�- सुर�, ठ�?वा.'
  },
  'foliage appears healthy with no major disease detected.': {
    en: 'Foliage appears healthy with no major disease detected.',
    te: '�?�.ులు �?ర�<�-్య�,�-ా �?న్నాయి, �Z�Yువ�,�Yి ప్రధాన త�?�-ులు �.నిపి�,�sల�?దు.',
    hi: 'पत्तिया�, स्वस्थ दि�-ा�^ द�? रह�? ह�^�,, �.�<�^ बड़ा र�<�- नह�?�, मिला।',
    mr: 'पान�? निर�<�-�? दिसत �.स�,न �.�<णताह�? मु�-्य र�<�- �?ढळला नाह�?.'
  },
  'follow balanced agronomic practices.': {
    en: 'Follow balanced agronomic practices.',
    te: 'సమతుల్య వ్యవసాయ పద్ధతులను పా�Yి�,�s�,డి.',
    hi: 'स�,तुलित �.�fषि पद्धतिय�<�, �.ा पालन �.र�?�,।',
    mr: 'स�,तुलित �.�fष�? पद्धत�?�,�sा �.वल�,ब �.रा.'
  },
  'maintain regular ipm scouting and beneficial insect habitats.': {
    en: 'Maintain regular IPM scouting and beneficial insect habitats.',
    te: 'సమ�-్ర సస్యర�.్షణ (IPM) మరియు మిత్రపురు�-ుల �?వాసాలను �.ాపాడ�,డి.',
    hi: 'नियमित ए�.�?�.�fत �.�?�Y प्रब�,धन (IPM) �"र मित्र �.�?�Y�<�, �.ा स�,र�.्षण �.र�?�,।',
    mr: 'नियमित ए�.ात्मि�. �.�?ड निय�,त्रण (IPM) �?णि मित्र �.�?�Y�.ा�,�s�? स�,वर्धन �.रा.'
  },
  'maintain routine crop monitoring and rhizobium nodulation checks.': {
    en: 'Maintain routine crop monitoring and Rhizobium nodulation checks.',
    te: 'ప�,�Yను నిర�,తర�, పర్యవ�?�.్షిస్త�, ర�^�o�<బియ�, వ�?రుబుడిప�?ల ప�?రు�-ుదలను �-మని�,�s�,డి.',
    hi: 'नियमित फसल नि�-रान�? र�-�?�, �"र रा�?�o�<बियम �-्र�,थिय�<�, �.�? �oा�,�s �.र�?�,।',
    mr: 'नियमित प�?�. पाहण�? �.रा �?णि रायझ�<बियम �-ाठ�?�,�s�? तपासण�? �.रा.'
  },
  'maintain standard organic soil nutrition and moisture checks.': {
    en: 'Maintain standard organic soil nutrition and moisture checks.',
    te: 'న�?లల�< త�-ిన�,త త�?మ మరియు స�?�,ద్ర�?య ప�<ష�.ాలను నిర్వహి�,�s�,డి.',
    hi: 'मि�Y्�Y�? म�?�, �?�sित नम�? �"र �o�^वि�. प�<षण �.�? नियमित �oा�,�s �.र�?�,।',
    mr: 'मात�?मध्य�? य�<�-्य �"लावा �?णि स�?�,द्रिय प�<षणा�s�? नियमित तपासण�? �.रा.'
  },
  'continue routine organic crop care and scouting.': {
    en: 'Continue routine organic crop care and scouting.',
    te: 'స�?�,ద్ర�?య ప�,�Y ర�.్షణ పద్ధతులను మరియు తని�-�?ని �.�Sనసా�-ి�,�s�,డి.',
    hi: 'नियमित �o�^वि�. फसल द�?�-भाल �"र निर�?�.्षण �oार�? र�-�?�,।',
    mr: 'नियमित स�?�,द्रिय प�?�. स�,वर्धन �?णि पाहण�? सुर�, ठ�?वा.'
  },
  'maintain balanced moisture and weed control.': {
    en: 'Maintain balanced moisture and weed control.',
    te: 'సమతుల్య న�?�Yి యా�oమాన్య�, మరియు �.లుపు నివారణను పా�Yి�,�s�,డి.',
    hi: 'स�,तुलित नम�? बनाए र�-�?�, �"र �-रपतवार निय�,त्रण �.र�?�,।',
    mr: 'स�,तुलित �"लावा ठ�?वा �?णि तण निय�,त्रण �.रा.'
  },
  'balanced npk application with zinc and boron micronutrients.': {
    en: 'Balanced NPK application with zinc and boron micronutrients.',
    te: '�oి�,�.్, బ�<రాన్ స�,�.్ష్మప�<ష�.ాలత�< పా�Yు సమతుల్య NPK �Zరువులను వాడ�,డి.',
    hi: '�oि�,�. �"र ब�<र�?न स�,�.्ष्म प�<ष�. तत्व�<�, �.�? साथ स�,तुलित एनप�?�.�? �.ा �?पय�<�- �.र�?�,।',
    mr: 'झि�,�. �?णि ब�<र�?न स�,�.्ष्म �.न्नद्रव्या�,सह स�,तुलित एनप�?�.�? �-ता�,�sा वापर �.रा.'
  },
  'ensure proper drainage and balanced sulfur/phosphorus fertility.': {
    en: 'Ensure proper drainage and balanced sulfur/phosphorus fertility.',
    te: 'ప�Sల�,ల�< న�?రు నిల్వ �?�,డ�.ు�,డా �s�,సి, త�-ిన�,త భాస్వర�, మరియు �-�,ధ�.�, �.�,ది�,�s�,డి.',
    hi: '�?�sित �oल नि�.ास�? सुनिश्�sित �.र�?�, �"र सल्फर/फास्फ�<रस �.ा स�,तुलित �?पय�<�- �.र�?�,।',
    mr: 'य�<�-्य नि�sरा ठ�?वा �?णि सल्फर/फ�?स्फरस �-ता�,�sा स�,तुलित वापर �.रा.'
  },
  'provide timely crown-root and flowering stage irrigations.': {
    en: 'Provide timely crown-root and flowering stage irrigations.',
    te: 'మ�Sల�. దశ మరియు ప�,త దశలల�< సమయాని�.ి న�?�Yిపారుదల �.�,ది�,�s�,డి.',
    hi: 'मु�.ु�Y �oड़ �"र फ�,ल �?न�? �.�? �.वस्था म�?�, समय पर सि�,�sा�^ �.र�?�,।',
    mr: 'मु�.ु�Y मुळ�? �?णि फुल�<ऱ्या�s्या �.वस्थ�?त व�?ळ�?वर पाण�? द्या.'
  }
};

/**
 * Localizes a recommendation title and body text into the chosen language.
 */
export function localizeRecommendation(
  title: string | undefined,
  descText: string | undefined,
  lang: Language
): { title: string; descText: string } {
  const normTitle = (title || '').trim().toLowerCase();
  const normDesc = (descText || '').trim().toLowerCase();

  let localizedTitle = title || '';
  if (RECOMMENDATION_TITLES[normTitle]) {
    localizedTitle = RECOMMENDATION_TITLES[normTitle][lang] || RECOMMENDATION_TITLES[normTitle].en;
  }

  let localizedDesc = descText || '';
  if (RECOMMENDATION_PHRASES[normDesc]) {
    localizedDesc = RECOMMENDATION_PHRASES[normDesc][lang] || RECOMMENDATION_PHRASES[normDesc].en;
  }

  return {
    title: localizedTitle,
    descText: localizedDesc
  };
}
