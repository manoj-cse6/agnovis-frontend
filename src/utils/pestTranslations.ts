import { Language } from '../types';

export interface PestTranslation {
  en: string;
  te: string;
  hi: string;
  mr: string;
}

export const PEST_TRANSLATIONS: Record<string, PestTranslation> = {
  "rice leaf roller": {
    "en": "Rice Leaf Folder / Roller",
    "te": "వరి �?�.ు �sు�Y్�Yు పురు�-ు",
    "hi": "धान �.ा पत्ता लप�?�Y�. �.�?�Y",
    "mr": "भातावर�?ल पान�? �-ु�,डाळणार�? �.ळ�?"
  },
  "rice leaf caterpillar": {
    "en": "Rice Leaf Caterpillar",
    "te": "వరి �?�.ు �-�S�,�-ళి పురు�-ు",
    "hi": "धान �.�? पत्त�? �?ल्ल�?",
    "mr": "भातावर�?ल पाना�,वर�?ल सुरव�,�Y"
  },
  "paddy stem maggot": {
    "en": "Paddy Stem Maggot",
    "te": "వరి �.ా�,డ�, పురు�-ు (మ్యా�-�Y్)",
    "hi": "धान �.ा तना म�^�-�Y �.�?�Y",
    "mr": "भातात�?ल �-�<ड �.िडा �.ळ�?"
  },
  "asiatic rice borer": {
    "en": "Asiatic Rice Borer",
    "te": "�?సియా వరి �.ా�,డ�, త�Sలు�sు పురు�-ు",
    "hi": "एशिया�^ धान तना �>�?द�.",
    "mr": "�?शिया�^ भात �-�<ड�.िडा"
  },
  "yellow rice borer": {
    "en": "Yellow Rice Stem Borer",
    "te": "వరి పసుపు �.ా�,డ�, త�Sలు�sు పురు�-ు",
    "hi": "प�?ला तना �>�?द�. �.�?�Y",
    "mr": "पिवळा �-�<ड�.िडा"
  },
  "rice gall midge": {
    "en": "Rice Gall Midge",
    "te": "వరి �?ల్లి�.�<డు / పిల�. పురు�-ు",
    "hi": "धान �.ा �-�?ल मि�o �.�?�Y",
    "mr": "भातावर�?ल �-ाठ�? �.रणारा �.िडा (�-�?ल मि�o)"
  },
  "Rice Stemfly": {
    "en": "Rice Stemfly",
    "te": "వరి �.ా�,డపు �^�-",
    "hi": "धान �.�? तना म�.्�-�?",
    "mr": "भातावर�?ल �-�<ड माश�?"
  },
  "brown plant hopper": {
    "en": "Brown Plant Hopper (BPH)",
    "te": "వరి సుడి ద�<మ (బిపిహ�?�s్)",
    "hi": "भ�,रा फुद�.ा (ब�?प�?ए�s)",
    "mr": "तप�.िर�? तुडतुड�? (ब�?प�?ए�s)"
  },
  "white backed plant hopper": {
    "en": "White-Backed Plant Hopper",
    "te": "త�?ల్ల వ�?పు ద�<మ",
    "hi": "सफ�?द प�?ठ वाला फुद�.ा",
    "mr": "पा�,ढऱ्या पाठ�?�s�? तुडतुड�?"
  },
  "small brown plant hopper": {
    "en": "Small Brown Plant Hopper",
    "te": "�sిన్న �-�<ధుమ ద�<మ",
    "hi": "�>�<�Yा भ�,रा फुद�.ा",
    "mr": "लहान तप�.िर�? तुडतुड�?"
  },
  "rice water weevil": {
    "en": "Rice Water Weevil",
    "te": "వరి న�?�Yి ము�.్�.ు పురు�-ు",
    "hi": "धान �.ा �oल �~ुन �.�?�Y",
    "mr": "भातात�?ल पाण स�<�,ड्या �.�?�Y�."
  },
  "rice leafhopper": {
    "en": "Green Leafhopper",
    "te": "వరి ప�s్�s ద�<మ",
    "hi": "हरा फुद�.ा (ल�?फह�?पर)",
    "mr": "हिरव�? तुडतुड�?"
  },
  "grain spreader thrips": {
    "en": "Rice Thrips",
    "te": "వరి తామర పురు�-ులు",
    "hi": "धान �.ा थ्रिप्स �.�?�Y",
    "mr": "भातावर�?ल फुल�.िड�? (थ्रिप्स)"
  },
  "rice shell pest": {
    "en": "Rice Hispa / Case Worm",
    "te": "వరి ముళ్ల పురు�-ు (హిస్పా)",
    "hi": "धान �.ा हिस्पा �.�?�Y",
    "mr": "भातावर�?ल हिस्पा �.�?�Y�."
  },
  "grub": {
    "en": "White Grub",
    "te": "వ�?రు పురు�-ు (త�?ల్ల �-్రబ్)",
    "hi": "सफ�?द ल�Y (व्हा�?�Y �-्रब)",
    "mr": "हुमण�? �.ळ�? (व्हा�?�Y �-्रब)"
  },
  "mole cricket": {
    "en": "Mole Cricket",
    "te": "భ�,మి �.�?�sురాయి",
    "hi": "झुरमु�Y / म�<ल झ�?�,�-ुर",
    "mr": "ना�.त�<डा / म�<ल �.्रि�.�?�Y"
  },
  "wireworm": {
    "en": "Wireworm",
    "te": "వ�^ర్�?Oవార్మ్ పురు�-ు",
    "hi": "तार �.�?�Y (वायरवर्म)",
    "mr": "वायरवर्म �.�?ड"
  },
  "white margined moth": {
    "en": "White-Margined Moth",
    "te": "త�?ల్ల �.�,�sు �sిమ్మ�Y",
    "hi": "सफ�?द �.िनार�? वाला पत�,�-ा",
    "mr": "पा�,ढऱ्या �.डा�,�sा पत�,�-"
  },
  "black cutworm": {
    "en": "Black Cutworm",
    "te": "నల్ల లద్ద�? పురు�-ు",
    "hi": "�.ाला �.�Yवर्म �.�?�Y",
    "mr": "�.ाळ�? �.�Yवर्म �.ळ�?"
  },
  "large cutworm": {
    "en": "Large Cutworm",
    "te": "ప�?ద్ద లద్ద�? పురు�-ు",
    "hi": "बड़ा �.�Yवर्म",
    "mr": "म�<ठ�? �.�Yवर्म �.ळ�?"
  },
  "yellow cutworm": {
    "en": "Yellow Cutworm",
    "te": "పసుపు లద్ద�? పురు�-ు",
    "hi": "प�?ला �.�Yवर्म",
    "mr": "पिवळ�? �.�Yवर्म �.ळ�?"
  },
  "red spider": {
    "en": "Red Spider Mite",
    "te": "�Zర్ర నల్లి",
    "hi": "लाल म�.ड़�? �.�?�Y",
    "mr": "लाल �.�<ळ�? �.�?�Y�."
  },
  "corn borer": {
    "en": "Corn Stem Borer",
    "te": "మ�S�.్�.�o�Sన్న �.ా�,డ�, త�Sలు�sు పురు�-ు",
    "hi": "म�.्�.ा तना �>�?द�.",
    "mr": "म�.ा �-�<ड�.िडा"
  },
  "army worm": {
    "en": "Fall Armyworm",
    "te": "�.త్త�?ర పురు�-ు (�?ర్మ�?వార్మ్)",
    "hi": "स�^नि�. �.�?�Y (फ�?ल �?र्म�?वर्म)",
    "mr": "लष्�.र�? �.ळ�? (�?र्म�?वर्म)"
  },
  "aphids": {
    "en": "Aphids / Plant Lice",
    "te": "ప�?ను బ�,�. పురు�-ులు",
    "hi": "माह�, / �s�?पा �.�?�Y",
    "mr": "मावा �.�?ड"
  },
  "Potosiabre vitarsis": {
    "en": "Flower Chafer Beetle",
    "te": "ప�,త వ�,డ్ర పురు�-ు",
    "hi": "फ�,ल ब�?�Yल �.�?�Y",
    "mr": "फुला�,वर�?ल भु�,�-ा"
  },
  "peach borer": {
    "en": "Peach Tree Borer",
    "te": "ప�?�s్ �.ా�,డ�, త�Sలు�sు పురు�-ు",
    "hi": "�?ड़�, तना �>�?द�.",
    "mr": "प�?�s �-�<ड�.िडा"
  },
  "english grain aphid": {
    "en": "Grain Aphid",
    "te": "ధాన్యపు ప�?ను బ�,�.",
    "hi": "�.ना�o �.ा माह�,",
    "mr": "धान्यावर�?ल मावा"
  },
  "green bug": {
    "en": "Green Bug / Green Stink Bug",
    "te": "ప�s్�s నల్లి పురు�-ు",
    "hi": "हरा ब�- �.�?�Y",
    "mr": "हिरवा ढ�?�.�,ण �.�?�Y�."
  },
  "bird cherry-oataphid": {
    "en": "Oat-Cherry Aphid",
    "te": "ధాన్యపు నల్ల ప�?ను",
    "hi": "�s�?र�?-�"�Y माह�,",
    "mr": "�"�Y-�s�?र�? मावा"
  },
  "wheat blossom midge": {
    "en": "Wheat Blossom Midge",
    "te": "�-�<ధుమ ప�,త �^�-",
    "hi": "�-�?ह�,ँ फ�,ल मि�o",
    "mr": "�-व्हावर�?ल फ�,ल माश�?"
  },
  "penthaleus major": {
    "en": "Winter Earth Mite",
    "te": "శ�?తా�.ాలపు న�?ల నల్లి",
    "hi": "वि�,�Yर �.र्थ मा�?�Y",
    "mr": "हिवाळ�? मात�?त�?ल �.�<ळ�?"
  },
  "longlegged spider mite": {
    "en": "Long-Legged Spider Mite",
    "te": "ప�Sడవు �.ాళ్ల �Zర్ర నల్లి",
    "hi": "ल�,ब�? �Yा�,�-�<�, वाल�? म�.ड़�?",
    "mr": "ला�,ब पाया�,�s�? �.�<ळ�? �.�?ड"
  },
  "wheat phloeothrips": {
    "en": "Wheat Thrips",
    "te": "�-�<ధుమ తామర పురు�-ు",
    "hi": "�-�?ह�,ँ थ्रिप्स �.�?�Y",
    "mr": "�-व्हावर�?ल फुल�.िड�?"
  },
  "wheat sawfly": {
    "en": "Wheat Stem Sawfly",
    "te": "�-�<ధుమ సాఫ్ల�^ పురు�-ు",
    "hi": "�-�?ह�,ँ स�?फ्ला�^ �.�?�Y",
    "mr": "�-व्हावर�?ल स�?फ्लाय �.�?ड"
  },
  "cerodonta denticornis": {
    "en": "Cereal Leaf Miner",
    "te": "�?�.ు త�Sలి�s�? పురు�-ు",
    "hi": "�.ना�o ल�?फ मा�?नर",
    "mr": "पान�? प�<�-रणार�? �.ळ�?"
  },
  "beet fly": {
    "en": "Beet Fly",
    "te": "దు�,ప �^�-",
    "hi": "�sु�.�,दर म�.्�-�?",
    "mr": "ब�?�Y माश�?"
  },
  "flea beetle": {
    "en": "Flea Beetle",
    "te": "�sి�Yి�.�? పురు�-ు (ఫ్ల�? బ�?�Yిల్)",
    "hi": "फ्ल�? ब�?�Yल �.�?�Y",
    "mr": "�?ड्या मारणारा भु�,�-ा (फ्ल�? ब�?�Yल)"
  },
  "cabbage army worm": {
    "en": "Cabbage Armyworm",
    "te": "�.్యాబ�?�o�? లద్ద�? పురు�-ు",
    "hi": "पत्ता�-�<भ�? �?र्म�?वर्म",
    "mr": "�.�<ब�?वर�?ल लष्�.र�? �.ळ�?"
  },
  "beet army worm": {
    "en": "Beet Armyworm",
    "te": "లద్ద�? పురు�-ు (�?ర్మ�?వార్మ్)",
    "hi": "ब�?�Y �?र्म�?वर्म",
    "mr": "लष्�.र�? सुरव�,�Y"
  },
  "Beet spot flies": {
    "en": "Beet Spot Fly",
    "te": "�?�.ుమ�s్�s �^�-",
    "hi": "स्प�?�Y म�.्�-�?",
    "mr": "ठिप�.�? माश�?"
  },
  "meadow moth": {
    "en": "Meadow Moth",
    "te": "�-డ్డి �sిమ్మ�Y",
    "hi": "�~ास �.ा पत�,�-ा",
    "mr": "�-वत पत�,�-"
  },
  "beet weevil": {
    "en": "Beet Weevil",
    "te": "ము�.్�.ు పురు�-ు (వ�?విల్)",
    "hi": "�sु�.�,दर �~ुन",
    "mr": "स�<�,ड्या भु�,�-ा"
  },
  "sericaorient alismots chulsky": {
    "en": "Scarab Beetle",
    "te": "స్�.ారాబ్ బ�?�Yిల్",
    "hi": "स्�.ार�^ब ब�?�Yल",
    "mr": "स्�.ार�.ब भु�,�-ा"
  },
  "alfalfa weevil": {
    "en": "Alfalfa Weevil",
    "te": "మ�?త ప�,�Y ము�.్�.ు పురు�-ు",
    "hi": "�.ल्फाल्फा �~ुन",
    "mr": "�.ल्फाल्फा स�<�,ड्या भु�,�-ा"
  },
  "flax budworm": {
    "en": "Budworm / Bollworm",
    "te": "మ�S�-్�- పురు�-ు",
    "hi": "�.ल�? �>�?द�. �?ल्ल�?",
    "mr": "�.ळ�? प�<�-रणार�? �.ळ�?"
  },
  "alfalfa plant bug": {
    "en": "Plant Bug",
    "te": "మ�S�.్�.ల నల్లి",
    "hi": "प्ला�,�Y ब�-",
    "mr": "झाडा�,वर�?ल ढ�?�.�,ण"
  },
  "tarnished plant bug": {
    "en": "Tarnished Plant Bug",
    "te": "�sు�.్�.ల నల్లి పురు�-ు",
    "hi": "�Yार्निश्ड प्ला�,�Y ब�-",
    "mr": "�Yार्निश्ड वनस्पत�? ढ�?�.�,ण"
  },
  "Locustoidea": {
    "en": "Locust / Grasshopper",
    "te": "మిడత (మిడుతలు)",
    "hi": "�Yिड्ड�? / �Yिड्डा",
    "mr": "�Y�<ळधाड / ना�.त�<डा"
  },
  "lytta polita": {
    "en": "Blister Beetle",
    "te": "బ�Sబ్బల పురు�-ు",
    "hi": "ब्लिस्�Yर ब�?�Yल",
    "mr": "ब्लिस्�Yर भु�,�-ा"
  },
  "legume blister beetle": {
    "en": "Legume Blister Beetle",
    "te": "పప్పుధాన్యాల బ�Sబ్బల పురు�-ు",
    "hi": "दलहन ब्लिस्�Yर ब�?�Yल",
    "mr": "�.डधान्या�,वर�?ल ब्लिस्�Yर भु�,�-ा"
  },
  "blister beetle": {
    "en": "Blister Beetle",
    "te": "బ�Sబ్బల పురు�-ు",
    "hi": "फफ�<ला ब�?�Yल",
    "mr": "फ�<ड �?णणारा भु�,�-ा"
  },
  "therioaphis maculata Buckton": {
    "en": "Spotted Alfalfa Aphid",
    "te": "�sు�.్�.ల ప�?ను బ�,�.",
    "hi": "�sित्त�?दार माह�,",
    "mr": "ठिप�.�?दार मावा"
  },
  "odontothrips loti": {
    "en": "Legume Thrips",
    "te": "పప్పు�oాతి తామర పురు�-ు",
    "hi": "दलहन�? थ्रिप्स",
    "mr": "�.डधान्या�,वर�?ल फुल�.िड�?"
  },
  "Thrips": {
    "en": "Thrips",
    "te": "తామర పురు�-ులు",
    "hi": "थ्रिप्स �.�?�Y",
    "mr": "फुल�.िड�? (थ्रिप्स)"
  },
  "alfalfa seed chalcid": {
    "en": "Seed Chalcid Wasp",
    "te": "విత్తన �.�,దిర�?�-",
    "hi": "ब�?�o �sाल्सिड �.�?�Y",
    "mr": "बियाण्यात�?ल �sाल्सिड माश�?"
  },
  "Pieris canidia": {
    "en": "Cabbage White Butterfly Caterpillar",
    "te": "�.్యాబ�?�o�? త�?ల్ల స�?తా�.�<�.�sిలు�. పురు�-ు",
    "hi": "पत्ता�-�<भ�? सफ�?द तितल�? �?ल्ल�?",
    "mr": "�.�<ब�?वर�?ल पा�,ढर�? फुलपा�-र�, �.ळ�?"
  },
  "Apolygus lucorum": {
    "en": "Green Plant Bug",
    "te": "ప�s్�s నల్లి పురు�-ు",
    "hi": "हरा प्ला�,�Y ब�-",
    "mr": "हिरवा वनस्पत�? ढ�?�.�,ण"
  },
  "Limacodidae": {
    "en": "Slug Caterpillar / Cup Moth",
    "te": "స్ల�-్ �-�S�,�-ళి పురు�-ు",
    "hi": "स्ल�- �?ल्ल�? �.�?�Y",
    "mr": "स्ल�- सुरव�,�Y"
  },
  "Viteus vitifoliae": {
    "en": "Grape Phylloxera",
    "te": "ద్రా�.్ష ఫ�^లా�.్స�?రా పురు�-ు",
    "hi": "�.�,�-�,र फा�?ल�<�.्स�?रा �.�?�Y",
    "mr": "द्रा�.्षावर�?ल फायल�<�.्स�?रा �.�?ड"
  },
  "Colomerus vitis": {
    "en": "Grape Leaf Blister Mite",
    "te": "ద్రా�.్ష బ�Sబ్బల నల్లి",
    "hi": "�.�,�-�,र पत्त�? मा�?�Y",
    "mr": "द्रा�.्ष पाना�,वर�?ल �.�<ळ�? �.�?ड"
  },
  "Brevipoalpus lewisi McGregor": {
    "en": "Citrus Flat Mite",
    "te": "బల్లపరుపు నల్లి పురు�-ు",
    "hi": "सपा�Y लाल म�.ड़�?",
    "mr": "सपा�Y �.�<ळ�? �.�?ड"
  },
  "oides decempunctata": {
    "en": "Grape Leaf Beetle",
    "te": "ద్రా�.్ష �?�.ు బ�?�Yిల్",
    "hi": "�.�,�-�,र पत्त�? ब�?�Yल",
    "mr": "द्रा�.्षा�sा पान�? �-ाणारा भु�,�-ा"
  },
  "Polyphagotars onemus latus": {
    "en": "Broad Mite / Yellow Tea Mite",
    "te": "పసుపు / వ�?డల్పు నల్లి",
    "hi": "प�?ल�? म�.ड़�? (ब्र�?ड मा�?�Y)",
    "mr": "पिवळा �.�<ळ�? (ब्र�?ड मा�^�Y)"
  },
  "Pseudococcus comstocki Kuwana": {
    "en": "Comstock Mealybug",
    "te": "పి�,డి పురు�-ు (మ�?ల�?బ�-్)",
    "hi": "मिल�?ब�- �.�?�Y",
    "mr": "पा�,ढरा पिठ्या ढ�?�.�,ण (मिल�?ब�-)"
  },
  "parathrene regalis": {
    "en": "Clearwing Borer Moth",
    "te": "�.ా�,డ�, త�Sలు�sు �sిమ్మ�Y",
    "hi": "तना �>�?द�. पत�,�-ा",
    "mr": "�-�<ड प�<�-रणारा पत�,�-"
  },
  "Ampelophaga": {
    "en": "Sphinx Moth / Hornworm",
    "te": "�.�Sమ్ము �-�S�,�-ళి పురు�-ు",
    "hi": "ह�?र्नवर्म �?ल्ल�?",
    "mr": "शि�,�- �.सल�?ला सुरव�,�Y"
  },
  "Lycorma delicatula": {
    "en": "Spotted Lanternfly",
    "te": "�sు�.్�.ల లా�,తరు పురు�-ు",
    "hi": "�sित्त�?दार लाल�Y�?न �.�?�Y",
    "mr": "ठिप�.�?दार �.�,द�?ल �.�?�Y�."
  },
  "Xylotrechus": {
    "en": "Longhorn Stem Borer",
    "te": "�.�Sమ్ము �.ా�,డ�, త�Sలు�sు పురు�-ు",
    "hi": "तना �>�?द�. ब�?�Yल",
    "mr": "�-�<ड प�<�-रणाऱ्या भु�,�-्या�s�? �.ळ�?"
  },
  "Cicadella viridis": {
    "en": "Green Leafhopper",
    "te": "ప�s్�s ద�<మ",
    "hi": "हरा फुद�.ा �.�?�Y",
    "mr": "हिरव�? तुडतुड�?"
  },
  "Miridae": {
    "en": "Mirid Bug / Capsid Bug",
    "te": "మిరిడ్ నల్లి పురు�-ు",
    "hi": "मिर�?ड ब�-",
    "mr": "मिर�?ड ढ�?�.�,ण"
  },
  "Trialeurodes vaporariorum": {
    "en": "Greenhouse Whitefly",
    "te": "త�?ల్ల ద�<మ (వ�^�Y్�?Oఫ్ల�^)",
    "hi": "सफ�?द म�.्�-�? (व्हा�?�Yफ्ला�^)",
    "mr": "पा�,ढर�? माश�? (व्हा�^�Yफ्लाय)"
  },
  "Erythroneura apicalis": {
    "en": "Grape Leafhopper",
    "te": "ద్రా�.్ష ప�s్�s ద�<మ",
    "hi": "�.�,�-�,र फुद�.ा",
    "mr": "द्रा�.्षावर�?ल तुडतुड�?"
  },
  "Papilio xuthus": {
    "en": "Citrus Swallowtail Caterpillar",
    "te": "నిమ్మ �?�.ు �-�S�,�-ళి పురు�-ు",
    "hi": "न�?�,ब�, तितल�? �?ल्ल�?",
    "mr": "लि�,ब�, फुलपा�-रा�s�? �.ळ�?"
  },
  "Panonchus citri McGregor": {
    "en": "Citrus Red Mite",
    "te": "నిమ్మ �Zర్ర నల్లి",
    "hi": "न�?�,ब�, लाल म�.ड़�?",
    "mr": "लि�,ब�,वर्�-�?य लाल �.�<ळ�?"
  },
  "Phyllocoptes oleiverus ashmead": {
    "en": "Citrus Rust Mite",
    "te": "నిమ్మ తుప్పు నల్లి",
    "hi": "न�?�,ब�, रतु�? मा�?�Y",
    "mr": "लि�,ब�,वर्�-�?य ता�,ब�?रा �.�<ळ�?"
  },
  "Icerya purchasi Maskell": {
    "en": "Cottony Cushion Scale",
    "te": "ద�,ది ప�Sలుసు పురు�-ు",
    "hi": "रु�^दार स्�.�?ल �.�?�Y",
    "mr": "�.ापसासार�-ा �-वल�? �.�?�Y�."
  },
  "Unaspis yanonensis": {
    "en": "Arrowhead Scale",
    "te": "బాణ�, �?�.ారపు ప�Sలుసు పురు�-ు",
    "hi": "स्�.�?ल �.�?�Y",
    "mr": "�-वल�? �.�?�Y�."
  },
  "Ceroplastes rubens": {
    "en": "Red Wax Scale",
    "te": "�Zర్ర మ�^నపు ప�Sలుసు పురు�-ు",
    "hi": "लाल म�<म�? स्�.�?ल �.�?�Y",
    "mr": "लाल म�?ण�s�Y �-वल�? �.�?ड"
  },
  "Chrysomphalus aonidum": {
    "en": "Florida Red Scale",
    "te": "�Zర్ర �-ు�,డ్రని ప�Sలుసు పురు�-ు",
    "hi": "�-�<ल लाल स्�.�?ल",
    "mr": "लाल �-�<ल �-वल�? �.�?ड"
  },
  "Parlatoria zizyphus Lucus": {
    "en": "Black Scale",
    "te": "నల్ల ప�Sలుసు పురు�-ు",
    "hi": "�.ाला स्�.�?ल �.�?�Y",
    "mr": "�.ाळ�? �-वल�? �.�?ड"
  },
  "Nipaecoccus vastalor": {
    "en": "Citrus Mealybug",
    "te": "పి�,డి పురు�-ు (మ�?ల�?బ�-్)",
    "hi": "न�?�,ब�, मिल�?ब�-",
    "mr": "पिठ्या ढ�?�.�,ण (मिल�?ब�-)"
  },
  "Aleurocanthus spiniferus": {
    "en": "Orange Spiny Whitefly",
    "te": "ముళ్ల నల్ల ద�<మ",
    "hi": "�.ा�,�Y�?दार सफ�?द म�.्�-�?",
    "mr": "�.ा�Y�?र�? पा�,ढर�? माश�?"
  },
  "Tetradacus c Bactrocera minax": {
    "en": "Chinese Citrus Fruit Fly",
    "te": "�.ాయ �^�- పురు�-ు",
    "hi": "फल म�.्�-�?",
    "mr": "फळमाश�?"
  },
  "Dacus dorsalis(Hendel)": {
    "en": "Oriental Fruit Fly",
    "te": "ప�,డ్ల �^�- (ఫ్ర�,�Y్ ఫ్ల�^)",
    "hi": "फल म�.्�-�? (�"रिए�,�Yल फ्र�,�Y फ्ला�^)",
    "mr": "फळमाश�? �.�?ड"
  },
  "Bactrocera tsuneonis": {
    "en": "Japanese Orange Fly",
    "te": "ప�,డ్ల రస�, �^�-",
    "hi": "स�,तरा म�.्�-�?",
    "mr": "स�,त्र्यावर�?ल फळमाश�?"
  },
  "Prodenia litura": {
    "en": "Tobacco Cutworm / Spodoptera",
    "te": "ప�S�-ా�.ు లద్ద�? పురు�-ు (స్ప�<డ�<ప్�Y�?రా)",
    "hi": "त�,बा�.�, �.�Yवर्म (स्प�<ड�<प्�Y�?रा)",
    "mr": "त�,बा�-�,वर�?ल लष्�.र�? �.ळ�? (स्प�<ड�<प्�Y�?रा)"
  },
  "Adristyrannus": {
    "en": "Fruit Piercing Moth",
    "te": "ప�,డ్ల రస�, ప�?ల్�s�? �sిమ్మ�Y",
    "hi": "फल �s�,ष�. पत�,�-ा",
    "mr": "फळा�,त�?ल रस श�<ष�. पत�,�-"
  },
  "Phyllocnistis citrella Stainton": {
    "en": "Citrus Leafminer",
    "te": "�?�.ు త�Sలి�s�? పురు�-ు (ల�?ఫ్�?Oమ�^నర్)",
    "hi": "सि�Y्रस ल�?फ मा�?नर",
    "mr": "पान�? प�<�-रणार�? �.ळ�? (ल�?फमायनर)"
  },
  "Toxoptera citricidus": {
    "en": "Brown Citrus Aphid",
    "te": "�-�<ధుమ ర�,�-ు ప�?ను బ�,�.",
    "hi": "भ�,रा न�?�,ब�, माह�,",
    "mr": "तप�.िर�? मावा �.�?ड"
  },
  "Toxoptera aurantii": {
    "en": "Black Citrus Aphid",
    "te": "నల్ల ప�?ను బ�,�.",
    "hi": "�.ाला माह�, �.�?�Y",
    "mr": "�.ाळा मावा"
  },
  "Aphis citricola Vander Goot": {
    "en": "Spirea Aphid",
    "te": "�?�.ు ప�s్�s ప�?ను బ�,�.",
    "hi": "हरा माह�, �.�?�Y",
    "mr": "हिरवा मावा �.�?�Y�."
  },
  "Scirtothrips dorsalis Hood": {
    "en": "Chilli / Yellow Tea Thrips",
    "te": "మిరప తామర పురు�-ు",
    "hi": "मिर्�s थ्रिप्स �.�?�Y",
    "mr": "मिर�s�?वर�?ल फुल�.िड�? (ब�<�.ड्या)"
  },
  "Dasineura sp": {
    "en": "Gall Midge Fly",
    "te": "మ�S�-్�- త�Sలి�s�? �^�-",
    "hi": "�-�?ल म�.्�-�? �.�?�Y",
    "mr": "�-ाठ �.रणार�? माश�?"
  },
  "Lawana imitata Melichar": {
    "en": "Flatid Planthopper",
    "te": "త�?ల్ల ప్లా�,�Y్�?Oహాపర్ ద�<మ",
    "hi": "सफ�?द फुद�.ा",
    "mr": "पा�,ढर�? तुडतुड�?"
  },
  "Salurnis marginella Guerr": {
    "en": "Flatid Leafhopper",
    "te": "�?�.ు ద�<మ",
    "hi": "ल�?फह�?पर �.�?�Y",
    "mr": "पानावर�?ल तुडतुड�?"
  },
  "Deporaus marginatus Pascoe": {
    "en": "Mango Leaf-Cutting Weevil",
    "te": "మామిడి �?�.ు �.త్తిరి�,�s�? ము�.్�.ు పురు�-ు",
    "hi": "�?म �.�? पत्त�? �.ा�Yन�? वाला �~ुन",
    "mr": "�?�,ब्या�s�? पान�? �.ापणारा स�<�,ड्या भु�,�-ा"
  },
  "Chlumetia transversa": {
    "en": "Mango Shoot Borer",
    "te": "మామిడి �sి�-ురు త�Sలి�s�? పురు�-ు",
    "hi": "�?म �.ा प्रर�<ह �>�?द�.",
    "mr": "�?�,ब्या�sा श�?�,डा प�<�-रणार�? �.ळ�?"
  },
  "Mango flat beak leafhopper": {
    "en": "Mango Hopper",
    "te": "మామిడి త�?న�?మ�,�sు పురు�-ు (హాప్పర్)",
    "hi": "�?म �.ा फुद�.ा (ह�?पर)",
    "mr": "�?�,ब्यावर�?ल तुडतुड�? (मावा/तुडतुडा)"
  },
  "Rhytidodera bowrinii white": {
    "en": "Mango Branch Borer",
    "te": "మామిడి �.�Sమ్మ త�Sలి�s�? పురు�-ు",
    "hi": "�?म �.�? शा�-ा �>�?द�. �.�?�Y",
    "mr": "�?�,ब्या�s�? फा�,द�? प�<�-रणारा भु�,�-ा"
  },
  "Sternochetus frigidus": {
    "en": "Mango Fruit / Pulp Weevil",
    "te": "మామిడి �.ాయ త�Sలు�sు ము�.్�.ు పురు�-ు",
    "hi": "�?म �.ा फल �~ुन (व�?विल)",
    "mr": "�?�,ब्यात�?ल �.�<य स�<�,ड्या भु�,�-ा"
  },
  "Cicadellidae": {
    "en": "Leafhopper / Jassids",
    "te": "ప�s్�s ద�<మ / �oాసిడ్స్",
    "hi": "फुद�.ा �.�?�Y / �o�^सिड",
    "mr": "तुडतुड�? (�o�.सिड्स)"
  },
  "whitefly": {
    "en": "Whitefly",
    "te": "త�?ల్ల ద�<మ",
    "hi": "सफ�?द म�.्�-�?",
    "mr": "पा�,ढर�? माश�?"
  },
  "none": {
    "en": "No Pests Detected",
    "te": "�Z�Yువ�,�Yి �.�?�Y�.ాలు �-ుర్తి�,�sబడల�?దు",
    "hi": "�.�<�^ �.�?�Y नह�?�, पाया �-या",
    "mr": "�.�<णत�?ह�? �.�?ड �?ढळल�? नाह�?"
  }
};

function normalizePestKey(label: string): string {
  if (!label) return '';
  return label
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

export function getPestDisplayName(
  pest: string | null | undefined,
  lang: Language
): string {
  if (!pest) return '';

  const clean = pest.trim();
  const key = normalizePestKey(clean);

  if (PEST_TRANSLATIONS[key]) {
    return PEST_TRANSLATIONS[key][lang] || PEST_TRANSLATIONS[key].en;
  }

  // Alias lookups
  if (key === 'none' || key.includes('no pest')) {
    return PEST_TRANSLATIONS['none'][lang] || PEST_TRANSLATIONS['none'].en;
  }
  if (key.includes('aphid')) {
    return PEST_TRANSLATIONS['aphids'][lang] || PEST_TRANSLATIONS['aphids'].en;
  }
  if (key.includes('whitefly')) {
    return PEST_TRANSLATIONS['whitefly'][lang] || PEST_TRANSLATIONS['whitefly'].en;
  }
  if (key.includes('thrip')) {
    return PEST_TRANSLATIONS['Thrips'][lang] || PEST_TRANSLATIONS['Thrips'].en;
  }
  if (key.includes('hopper')) {
    return PEST_TRANSLATIONS['Cicadellidae'][lang] || PEST_TRANSLATIONS['Cicadellidae'].en;
  }
  if (key.includes('borer')) {
    return PEST_TRANSLATIONS['corn borer'][lang] || PEST_TRANSLATIONS['corn borer'].en;
  }
  if (key.includes('mite') || key.includes('spider')) {
    return PEST_TRANSLATIONS['red spider'][lang] || PEST_TRANSLATIONS['red spider'].en;
  }

  // Title-case fallback
  return clean
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
