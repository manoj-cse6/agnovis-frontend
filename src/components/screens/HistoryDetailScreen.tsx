import React from 'react';
import { useApp } from '../../context/AppContext';
import { AnalysisResultView } from '../AnalysisResultView';

export const HistoryDetailScreen: React.FC = () => {
  const { activeHistoryDetail, goBack } = useApp();

  return (
    <AnalysisResultView
      result={activeHistoryDetail}
      onBack={goBack}
      isHistoryView={true}
    />
  );
};
