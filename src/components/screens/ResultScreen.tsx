import React from 'react';
import { useApp } from '../../context/AppContext';
import { AnalysisResultView } from '../AnalysisResultView';
import { AnalysisResult } from '../../types';

export const ResultScreen: React.FC = () => {
  const {
    activeAnalysis,
    goBack,
    selectedImage,
    selectedCrop,
    imageData
  } = useApp();

  const nowIso = new Date().toISOString();

  // Fallback specimen if activeAnalysis is not yet populated
  const fallbackResult: AnalysisResult = {
    id: `scan-${Date.now()}`,
    analysisId: `scan-${Date.now()}`,
    cropKey: selectedCrop || 'tomato',
    selectedCrop: selectedCrop || 'tomato',
    cropName: 'Crop Specimen',
    scientificName: '',
    status: 'processing',
    healthStatus: 'processing',
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
    imageUrl: imageData || selectedImage || '',
    imageData: imageData || selectedImage || '',
    imageSource: 'upload',
    scanDate: nowIso,
    createdAt: nowIso,
    updatedAt: nowIso
  };

  const resultToRender = activeAnalysis || fallbackResult;

  return (
    <AnalysisResultView
      result={resultToRender}
      onBack={goBack}
      isHistoryView={false}
    />
  );
};
