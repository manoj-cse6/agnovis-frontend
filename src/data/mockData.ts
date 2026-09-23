import { AnalysisResult, CropKey, Language } from '../types';

export const SAMPLE_CROPS: Array<{
  id: string;
  nameKey: string;
  cropKey: CropKey;
  image: string;
  isMultipleCrop?: boolean;
  label: string;
}> = [
  {
    id: 'sample-apple',
    nameKey: 'cropApple',
    cropKey: 'apple',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&auto=format&fit=crop&q=80',
    label: 'Apple'
  },
  {
    id: 'sample-cherry',
    nameKey: 'cropCherry',
    cropKey: 'cherry',
    image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=800&auto=format&fit=crop&q=80',
    label: 'Cherry'
  },
  {
    id: 'sample-corn',
    nameKey: 'cropCorn',
    cropKey: 'corn',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&auto=format&fit=crop&q=80',
    label: 'Corn'
  },
  {
    id: 'sample-grape',
    nameKey: 'cropGrape',
    cropKey: 'grape',
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=800&auto=format&fit=crop&q=80',
    label: 'Grape'
  },
  {
    id: 'sample-peach',
    nameKey: 'cropPeach',
    cropKey: 'peach',
    image: 'https://images.unsplash.com/photo-1595781572981-d63151b232ed?w=800&auto=format&fit=crop&q=80',
    label: 'Peach'
  },
  {
    id: 'sample-pepper',
    nameKey: 'cropPepper',
    cropKey: 'pepper',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=800&auto=format&fit=crop&q=80',
    label: 'Pepper'
  },
  {
    id: 'sample-potato',
    nameKey: 'cropPotato',
    cropKey: 'potato',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=80',
    label: 'Potato'
  },
  {
    id: 'sample-squash',
    nameKey: 'cropSquash',
    cropKey: 'squash',
    image: 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=800&auto=format&fit=crop&q=80',
    label: 'Squash'
  },
  {
    id: 'sample-strawberry',
    nameKey: 'cropStrawberry',
    cropKey: 'strawberry',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&auto=format&fit=crop&q=80',
    label: 'Strawberry'
  },
  {
    id: 'sample-tomato',
    nameKey: 'cropTomato',
    cropKey: 'tomato',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?w=800&auto=format&fit=crop&q=80',
    label: 'Tomato'
  }
];

export const INITIAL_HISTORY: AnalysisResult[] = [
  {
    id: 'hist-1',
    cropKey: 'corn',
    cropName: 'Sweet Corn Field A',
    scientificName: 'Zea mays',
    fieldLocationKey: 'Field A - Corn',
    status: 'healthy',
    diseaseKey: 'diseaseNone',
    diseaseName: 'None (Healthy)',
    diseaseConfidence: 98.0,
    pestKey: 'pestNone',
    pestName: 'None Detected',
    pestConfidence: 0,
    pestStatusKey: 'currentlySafe',
    summaryKey: 'No signs of pest damage or nutrient deficiency detected. Biomass index is optimal.',
    recommendedActions: [
      {
        id: 1,
        titleKey: 'actionMaintainProtocolTitle',
        descKey: 'actionMaintainProtocolDesc',
        iconName: 'check_circle'
      }
    ],
    environmental: {
      temperature: '24°C',
      humidity: '62%',
      weatherKey: 'weatherPartlyCloudy'
    },
    scanDate: 'Oct 24, 2023 - 09:15 AM',
    timestampKey: 'today',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBi5TW5aBfuUrnuoKqmHzmEzB7Py0zGlyPIt0E-Jq8lj2d3sZ21kRSMiGI0YDABeODl1D6aSPVoofCKqe2HCkLDv4Kiwe4lNtoUcXQpZfxqKNk2EGM5hkAhpEUBrh9I3riYKhTet6xxETlqX39-rliNG2hcDw0r6s82977iwdOiMU6vYgxWyYp39LItPYr9iQn6zFDCx_D-wkkEZpvvHN0GvZVkgTDzMsRrDzeUYy2vaEaoGUpKMR1Xg',
    areaAcre: '4.2'
  },
  {
    id: 'hist-2',
    cropKey: 'tomato',
    cropName: 'Heirloom Tomatoes - Greenhouse 2',
    scientificName: 'Solanum lycopersicum',
    fieldLocationKey: 'Greenhouse 2 - Tomato',
    status: 'critical',
    diseaseKey: 'diseaseEarlyBlight',
    diseaseName: 'Early Blight',
    diseaseConfidence: 98.7,
    pestKey: 'pestNone',
    pestName: 'None Detected',
    pestConfidence: 0,
    pestStatusKey: 'currentlySafe',
    summaryKey: 'Our AI has detected significant signs of Early Blight. Immediate intervention is recommended to prevent spread to adjacent crops.',
    recommendedActions: [
      {
        id: 1,
        titleKey: 'actionPruneLeavesTitle',
        descKey: 'actionPruneLeavesDesc',
        iconName: 'content_cut'
      },
      {
        id: 2,
        titleKey: 'actionFungicideTitle',
        descKey: 'actionFungicideDesc',
        iconName: 'water_drop'
      },
      {
        id: 3,
        titleKey: 'actionAirflowTitle',
        descKey: 'actionAirflowDesc',
        iconName: 'air'
      }
    ],
    environmental: {
      temperature: '26°C',
      humidity: '74%',
      weatherKey: 'weatherSunny'
    },
    scanDate: 'Oct 23, 2023 - 14:20 PM',
    timestampKey: 'yesterday',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_y8zBrJ6Xd4Kp7VRXn8Oq9pF0mCSOalqhB5qdK1UMkAeYiL6Il8w57OMxVMCbH-G208e04o3mgnTf3NwP_XCmSaLkGYFFHW6-hWOgBef1HCv3T1TCXDhC7xevk-StqIJ8tY4fKcOxYTY7zgx1m5Bpb0Qek4gZsKTLIxtnCp43ez9ST9P3jviklNZ7ULJ5buW6KILeCY92Oo13mj-46IuDWOZ1TJPP_5l7L8DH9xKHQsCPNUtmwN4fkg',
    areaAcre: '1.5'
  },
  {
    id: 'hist-3',
    cropKey: 'potato',
    cropName: 'Potato Sector 4',
    scientificName: 'Solanum tuberosum',
    fieldLocationKey: 'Potato Sector 4 - Southern Edge',
    status: 'needs_attention',
    diseaseKey: 'diseaseLateBlight',
    diseaseName: 'Late Blight',
    diseaseConfidence: 94.0,
    pestKey: 'pestAphids',
    pestName: 'Aphids',
    pestConfidence: 68.0,
    pestStatusKey: 'needsAttention',
    summaryKey: 'Infection in initial stage. Copper-based fungicide spray recommended immediately along with insecticidal soap.',
    recommendedActions: [
      {
        id: 1,
        titleKey: 'actionFungicideTitle',
        descKey: 'actionFungicideDesc',
        iconName: 'water_drop'
      },
      {
        id: 2,
        titleKey: 'actionAirflowTitle',
        descKey: 'actionAirflowDesc',
        iconName: 'air'
      }
    ],
    environmental: {
      temperature: '22°C',
      humidity: '68%',
      weatherKey: 'weatherOvercast'
    },
    scanDate: 'Oct 20, 2023 - 16:20 PM',
    timestampKey: 'Oct 20, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdWax67yDTLEyzIOQS_m-4XDEJ3keGagiJzLN6k7GO_v3ELhJg6yj1nDovjByAmM_tchFY7YYXvPQLP5yrDMdEhB_Dqb_9HenGKpWgxVMsdwZ_GOG8f6wJ8yqey2G3S2wxAKNNqb2wHe7cWavhYdwkGbmG2WPxYdYgWyVzFkmNgP6bVrPvGzJYg7Ib9YBHT0cnG_jhpcBL4jHeDyFuZAr-S4jsJqgbzT0AO9mbRJP0VNecZnZymLcw4w',
    areaAcre: '3.0'
  },
  {
    id: 'hist-4',
    cropKey: 'wheat',
    cropName: 'Winter Wheat Block 4',
    scientificName: 'Triticum aestivum',
    fieldLocationKey: 'Winter Wheat Block 4',
    status: 'processing',
    diseaseKey: 'diseaseNone',
    diseaseName: 'Analyzing multi-spectral imagery...',
    diseaseConfidence: 0,
    pestKey: 'pestNone',
    pestName: 'Processing',
    pestStatusKey: 'currentlySafe',
    summaryKey: 'Analyzing multi-spectral imagery for nitrogen deficiency and leaf rust...',
    recommendedActions: [],
    environmental: {
      temperature: '21°C',
      humidity: '55%',
      weatherKey: 'weatherPartlyCloudy'
    },
    scanDate: 'Oct 18, 2023',
    timestampKey: 'Oct 18, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD572jUtI11_0R57k2xv4szrZiXQd5wXDP0SLhcvX3RA6GbqHFdjjjupzxfkByqeVfzrmEF7tDYqFC26ZLZATQKtfhz4bqZi1FEWKizkKcgNtpfk9viqUbH_BiJILPjhcRgi8HT59SX6LjyQDTq67JimbtWWRnftFCFQheGOYRfBB1Mr9iKMjR7gsHn3XGfRYTlpFARfzkd7_3lQAhUjqg8HygNXSCIAt72SpfF0UmdsJ7OS3gwHp7VMg',
    areaAcre: '8.5'
  }
];
