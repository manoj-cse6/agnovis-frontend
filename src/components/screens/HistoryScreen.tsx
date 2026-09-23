import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useApp } from '../../context/AppContext';
import { TopAppBar } from '../TopAppBar';
import { BottomNavBar } from '../BottomNavBar';
import { AnalysisResult } from '../../types';
import { getCropDisplayName } from '../../utils/cropTranslations';
import { formatAnalysisDateTime } from '../../utils/dateUtils';

export const HistoryScreen: React.FC = () => {
  const {
    t,
    userAnalyses,
    navigateTo,
    setActiveHistoryDetail,
    goBack,
    showToast,
    selectedLanguage,
    refreshUserAnalyses,
    currentScreen
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'healthy' | 'issues' | 'processing'>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Refresh history when screen is opened
  const loadHistory = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      await refreshUserAnalyses();
      setHasLoaded(true);
    } catch (err: any) {
      console.error('Failed to load history:', err);
      setError(t('historyLoadError') || 'Failed to load history. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [refreshUserAnalyses, t]);

  useEffect(() => {
    if (currentScreen === 'history' && !hasLoaded) {
      loadHistory();
    }
  }, [currentScreen, hasLoaded, loadHistory]);

  // Also refresh when navigating to history screen
  useEffect(() => {
    if (currentScreen === 'history') {
      loadHistory();
    }
  }, [currentScreen]);

  const filteredHistory = useMemo(() => {
    return userAnalyses.filter((item) => {
      // Filter status
      if (activeFilter === 'healthy' && item.healthStatus !== 'healthy') return false;
      if (
        activeFilter === 'issues' &&
        item.healthStatus !== 'critical' &&
        item.healthStatus !== 'needs_attention'
      )
        return false;
      if (activeFilter === 'processing' && item.healthStatus !== 'processing') return false;

      // Filter search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const localizedName = getCropDisplayName(item.cropKey || item.selectedCrop, selectedLanguage);
        const matchName =
          item.cropName?.toLowerCase().includes(query) ||
          localizedName.toLowerCase().includes(query) ||
          false;
        const matchDisease =
          item.diseaseName?.toLowerCase().includes(query) ||
          item.diseaseDetected?.toLowerCase().includes(query) ||
          false;
        const matchSummary =
          item.summaryText?.toLowerCase().includes(query) ||
          item.analysisSummary?.toLowerCase().includes(query) ||
          false;
        return matchName || matchDisease || matchSummary;
      }
      return true;
    });
  }, [userAnalyses, activeFilter, searchQuery, selectedLanguage]);

  const handleOpenItem = (item: AnalysisResult) => {
    setActiveHistoryDetail(item);
    navigateTo('history-detail');
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex flex-col pt-14 md:pt-16 pb-24 md:pb-12">
      <TopAppBar
        title={t('navHistory')}
        showBack
        onBack={goBack}
        showProfileAvatar
      />

      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 flex-1 space-y-5">
        {/* Page Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#002d1c] tracking-tight">
              {t('historyDetailsTitle')}
            </h1>
            <p className="text-xs sm:text-sm text-[#414944] mt-0.5">
              Review and track all past field diagnostics and crop health records.
            </p>
          </div>
        </div>

        {/* Search Bar & Filter */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#717973] text-[20px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full h-12 bg-white rounded-xl pl-11 pr-4 text-sm text-[#1b1c1c] border border-[#c1c8c2]/60 focus:border-[#002d1c] focus:ring-1 focus:ring-[#002d1c] outline-none transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#717973] hover:text-[#1b1c1c] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full font-bold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#002d1c] text-white shadow-xs'
                : 'bg-white text-[#414944] border border-[#c1c8c2]/50 hover:bg-[#f6f3f2]'
            }`}
          >
            {t('all')}
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('healthy')}
            className={`px-4 py-2 rounded-full font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'healthy'
                ? 'bg-[#1a4331] text-[#c0edd3] shadow-xs'
                : 'bg-white text-[#414944] border border-[#c1c8c2]/50 hover:bg-[#f6f3f2]'
            }`}
          >
            <span className="material-symbols-outlined text-[14px] filled">check_circle</span>
            {t('statusHealthy')}
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('issues')}
            className={`px-4 py-2 rounded-full font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'issues'
                ? 'bg-[#93000a] text-white shadow-xs'
                : 'bg-white text-[#414944] border border-[#c1c8c2]/50 hover:bg-[#f6f3f2]'
            }`}
          >
            <span className="material-symbols-outlined text-[14px] filled">warning</span>
            {t('needsAttention')}
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('processing')}
            className={`px-4 py-2 rounded-full font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'processing'
                ? 'bg-[#414944] text-white shadow-xs'
                : 'bg-white text-[#414944] border border-[#c1c8c2]/50 hover:bg-[#f6f3f2]'
            }`}
          >
            <span className="material-symbols-outlined text-[14px]">sync</span>
            Processing
          </button>
        </div>

        {/* History List */}
        <div className="space-y-4">
          {isLoading ? (
            /* Loading state */
            <div className="bg-white rounded-2xl p-10 text-center border border-[#c1c8c2]/30 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#f0eded] flex items-center justify-center text-[#002d1c] mb-3">
                <span className="material-symbols-outlined text-4xl animate-spin">sync</span>
              </div>
              <h3 className="text-base font-bold text-[#002d1c] mb-1">
                {t('loadingHistory') || 'Loading history...'}
              </h3>
              <p className="text-xs sm:text-sm text-[#414944] max-w-sm leading-relaxed">
                {t('loadingHistorySub') || 'Fetching your past crop analyses.'}
              </p>
            </div>
          ) : error ? (
            /* Error state */
            <div className="bg-white rounded-2xl p-10 text-center border border-[#c1c8c2]/30 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#ffdad6] flex items-center justify-center text-[#ba1a1a] mb-3">
                <span className="material-symbols-outlined text-4xl">error</span>
              </div>
              <h3 className="text-base font-bold text-[#002d1c] mb-1">
                {t('historyLoadError') || 'Failed to load history'}
              </h3>
              <p className="text-xs sm:text-sm text-[#414944] max-w-sm mb-5 leading-relaxed">
                {error}
              </p>
              <button
                type="button"
                onClick={loadHistory}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#002d1c] text-white text-xs sm:text-sm font-bold rounded-full hover:bg-[#1a4331] transition-all shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">refresh</span>
                <span>{t('tryAgain') || 'Try Again'}</span>
              </button>
            </div>
          ) : userAnalyses.length === 0 ? (
            /* Empty state when farmer has no scans */
            <div className="bg-white rounded-2xl p-10 text-center border border-[#c1c8c2]/30 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#f0eded] flex items-center justify-center text-[#002d1c] mb-3">
                <span className="material-symbols-outlined text-4xl">inventory_2</span>
              </div>
              <h3 className="text-base font-bold text-[#002d1c] mb-1">
                {t('noAnalysesYet')}
              </h3>
              <p className="text-xs sm:text-sm text-[#414944] max-w-sm mb-5 leading-relaxed">
                {t('noAnalysesYetSub')}
              </p>
              <button
                type="button"
                onClick={() => navigateTo('capture')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#002d1c] text-white text-xs sm:text-sm font-bold rounded-full hover:bg-[#1a4331] transition-all shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                <span>{t('analyzeMyCropBtn')}</span>
              </button>
            </div>
          ) : filteredHistory.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-[#c1c8c2]/30">
              <span className="material-symbols-outlined text-4xl text-[#717973] mb-2">
                content_paste_off
              </span>
              <p className="text-sm font-semibold text-[#1b1c1c]">No scans match your search</p>
              <p className="text-xs text-[#5f5e59] mt-1">Try adjusting your search or filters.</p>
            </div>
          ) : (
            filteredHistory.map((item) => {
              const isHealthy = item.healthStatus === 'healthy';
              const isProcessing = item.healthStatus === 'processing';

              const cropDisplayName =
                getCropDisplayName(item.cropKey || item.selectedCrop, selectedLanguage) ||
                item.cropName ||
                'Crop Specimen';

              const formattedDate = formatAnalysisDateTime(
                item.createdAt || item.scanDate,
                item.timestampText || 'Recent'
              );

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,45,28,0.05)] border border-[#c1c8c2]/30 hover:border-[#002d1c]/40 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Left: Thumbnail & Details */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-[#f0eded] border border-[#c1c8c2]/40">
                        <img
                          src={item.imageUrl}
                          alt={cropDisplayName}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-base font-bold text-[#1b1c1c] truncate">
                            {cropDisplayName}
                          </h3>
                          {/* Badge */}
                          {isHealthy ? (
                            <span className="px-2.5 py-0.5 bg-[#c0edd3] text-[#002114] rounded-full text-[11px] font-bold inline-flex items-center gap-1">
                              <span className="material-symbols-outlined text-[12px] filled text-[#002d1c]">
                                check_circle
                              </span>
                              {t('statusHealthy')}
                            </span>
                          ) : isProcessing ? (
                            <span className="px-2.5 py-0.5 bg-[#e5e2db] text-[#1c1c18] rounded-full text-[11px] font-bold inline-flex items-center gap-1">
                              <span className="material-symbols-outlined text-[12px] animate-spin">
                                sync
                              </span>
                              Processing
                            </span>
                          ) : (
                            <span className="px-2.5 py-0.5 bg-[#ffdad6] text-[#93000a] rounded-full text-[11px] font-bold inline-flex items-center gap-1">
                              <span className="material-symbols-outlined text-[12px] filled text-[#ba1a1a]">
                                warning
                              </span>
                              {item.diseaseDetected || item.diseaseName || 'Issue detected'}
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-[#5f5e59]">
                          {formattedDate}
                        </p>

                        <p className="text-xs text-[#414944] mt-2 line-clamp-2 leading-relaxed">
                          {item.analysisSummary || item.summaryText || t(item.summaryKey as any) || item.diseaseDetected || item.diseaseName}
                        </p>
                      </div>
                    </div>

                    {/* Right: Action Button */}
                    <div className="flex sm:flex-col justify-end items-end gap-2 border-t sm:border-t-0 pt-2 sm:pt-0 border-[#f0eded]">
                      <button
                        type="button"
                        onClick={() => handleOpenItem(item)}
                        className="w-full sm:w-auto px-4 py-2.5 bg-[#002d1c] text-white hover:bg-[#1a4331] text-xs font-bold rounded-full transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
                      >
                        <span>{t('viewDetails')}</span>
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Refresh / Load Older Scans Button */}
        {userAnalyses.length > 0 && !isLoading && (
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={loadHistory}
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#c1c8c2] bg-white text-[#002d1c] text-xs sm:text-sm font-bold hover:bg-[#f6f3f2] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">refresh</span>
              <span>{t('refreshHistory') || t('loadOlderScans')}</span>
            </button>
          </div>
        )}
      </main>

      <BottomNavBar />
    </div>
  );
};
