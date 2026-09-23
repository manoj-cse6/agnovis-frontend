import React from 'react';
import { useApp } from '../../context/AppContext';
import { TopAppBar } from '../TopAppBar';
import { BottomNavBar } from '../BottomNavBar';
import { AVAILABLE_CROPS, getCropDisplayName } from '../../utils/cropTranslations';
import { AnalysisResult } from '../../types';
import { formatAnalysisDateTime } from '../../utils/dateUtils';

export const DashboardScreen: React.FC = () => {
  const {
    t,
    user,
    recentAnalyses,
    navigateTo,
    setActiveHistoryDetail,
    selectedCrop,
    setSelectedCrop,
    setImageSource,
    selectedLanguage,
    showToast
  } = useApp();

  const handleOpenDetail = (item: AnalysisResult) => {
    setActiveHistoryDetail(item);
    navigateTo('history-detail');
  };

  const handleCropSelect = (cropKey: typeof AVAILABLE_CROPS[number]) => {
    // Only update selectedCrop state, no navigation, no analysis trigger
    setSelectedCrop(cropKey);
  };

  const firstName = user?.name ? user.name.split(' ')[0] : t('defaultFarmerName');

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex flex-col pb-24 md:pb-10 pt-16">
      <TopAppBar showNotifications showProfileAvatar />

      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 md:py-8 flex-1">
        {/* Greeting Section */}
        <section className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002d1c] mb-1.5 tracking-tight">
              {t('greetingPrefix')}, {firstName}.
            </h1>
            <p className="text-sm md:text-base text-[#414944]">
              {t('greetingReadyText')}
            </p>
          </div>
          {user && (
            <div className="self-start sm:self-center inline-flex items-center gap-2 bg-[#f0eded] border border-[#c1c8c2]/50 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#002d1c]">
              <span className="w-2 h-2 rounded-full bg-[#3e6752]"></span>
              <span>{t('memberVerified')}</span>
            </div>
          )}
        </section>

        {/* Dashboard Flow */}
        <div className="flex flex-col gap-5 md:gap-6">
          {/* Analyze My Crop Card */}
          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,45,28,0.05)] border border-[#c1c8c2]/30">
            <div className="flex items-center gap-2 mb-5 pb-3 border-b border-[#f0eded]">
              <span className="material-symbols-outlined text-[#002d1c] filled text-[22px]">
                troubleshoot
              </span>
              <h2 className="text-lg md:text-xl font-bold text-[#002d1c]">
                {t('analyzeMyCrop')}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Capture Image Button */}
              <button
                type="button"
                id="dashboard-capture-camera-btn"
                onClick={() => {
                  if (!selectedCrop) {
                    showToast(t('pleaseSelectCropFirst'));
                    navigateTo('capture');
                  } else {
                    setImageSource('camera');
                    navigateTo('capture');
                  }
                }}
                className="flex flex-col items-center justify-center p-6 h-40 bg-[#002d1c] text-white rounded-xl hover:bg-[#1a4331] transition-all duration-200 group active:scale-[0.98] cursor-pointer shadow-sm text-center"
              >
                <span className="material-symbols-outlined text-4xl mb-2.5 group-hover:scale-110 transition-transform filled text-[#c0edd3]">
                  photo_camera
                </span>
                <span className="text-sm md:text-base font-bold text-white">
                  {t('captureImage')}
                </span>
                <span className="text-xs text-[#85b098] mt-1">
                  {t('captureImageSub')}
                </span>
              </button>

              {/* Upload Image Button */}
              <button
                type="button"
                id="dashboard-upload-gallery-btn"
                onClick={() => {
                  if (!selectedCrop) {
                    showToast(t('pleaseSelectCropFirst'));
                    navigateTo('capture');
                  } else {
                    setImageSource('upload');
                    navigateTo('capture');
                  }
                }}
                className="flex flex-col items-center justify-center p-6 h-40 border-2 border-[#c1c8c2] text-[#002d1c] rounded-xl hover:bg-[#f6f3f2] hover:border-[#002d1c]/40 transition-all duration-200 group active:scale-[0.98] cursor-pointer bg-white text-center"
              >
                <span className="material-symbols-outlined text-4xl mb-2.5 text-[#002d1c] group-hover:scale-110 transition-transform">
                  image
                </span>
                <span className="text-sm md:text-base font-bold text-[#002d1c]">
                  {t('uploadImage')}
                </span>
                <span className="text-xs text-[#414944] mt-1">
                  {t('uploadImageSub')}
                </span>
              </button>
            </div>

            {/* Supported Crops Section */}
            <div className="mt-5 pt-4 border-t border-[#f0eded]">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#5f5e59] mb-2.5 flex items-center justify-between">
                <span>{t('selectCropLabel')}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {AVAILABLE_CROPS.map((cropId) => {
                  const isSelected = selectedCrop === cropId;
                  const cropName = getCropDisplayName(cropId, selectedLanguage);

                  return (
                    <button
                      key={cropId}
                      id={`dashboard-crop-${cropId}`}
                      type="button"
                      onClick={() => handleCropSelect(cropId)}
                      className={`text-xs font-medium py-1.5 px-3 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                        isSelected
                          ? 'bg-[#002d1c] text-white border-[#002d1c] shadow-xs'
                          : 'bg-[#f0eded] hover:bg-[#1a4331] hover:text-white text-[#1b1c1c] border-[#c1c8c2]/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        eco
                      </span>
                      <span>{cropName}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Weather Card */}
          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,45,28,0.05)] border border-[#c1c8c2]/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#002d1c] filled text-[22px]">
                  wb_sunny
                </span>
                <h2 className="text-lg md:text-xl font-bold text-[#002d1c]">
                  {t('weather')}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => navigateTo('weather')}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#002d1c] text-white text-xs sm:text-sm font-bold rounded-full hover:bg-[#1a4331] transition-all cursor-pointer active:scale-95"
              >
                <span>{t('viewWeather')}</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
            <p className="text-xs sm:text-sm text-[#414944] mt-3 leading-relaxed">
              {t('weatherCardSubtitle')}
            </p>
          </div>

          {/* Section 1 & 2: Tips for a Better Scan & What AgnoVis AI Can Detect */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            {/* SECTION 1 — SCAN TIPS */}
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,45,28,0.05)] border border-[#c1c8c2]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#f0eded]">
                  <span className="material-symbols-outlined text-[#002d1c] filled text-[22px]">
                    photo_camera
                  </span>
                  <h2 className="text-lg md:text-xl font-bold text-[#002d1c]">
                    {t('scanTipsTitle')}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-[#414944] mb-4 leading-relaxed">
                  {t('scanTipsSubtitle')}
                </p>

                <ul className="space-y-2.5 mb-5">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1b1c1c]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#002d1c] mt-2 shrink-0"></span>
                    <span>{t('scanTip1')}</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1b1c1c]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#002d1c] mt-2 shrink-0"></span>
                    <span>{t('scanTip2')}</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1b1c1c]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#002d1c] mt-2 shrink-0"></span>
                    <span>{t('scanTip3')}</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1b1c1c]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#002d1c] mt-2 shrink-0"></span>
                    <span>{t('scanTip4')}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 border-t border-[#f0eded] mt-auto">
                <button
                  type="button"
                  id="dashboard-start-analysis-cta"
                  onClick={() => navigateTo('capture')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#002d1c] hover:text-[#1a4331] hover:underline underline-offset-4 cursor-pointer group transition-colors"
                >
                  <span>{t('startAnalysisCta')}</span>
                </button>
              </div>
            </div>

            {/* SECTION 2 — WHAT AgnoVis AI CAN DETECT */}
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,45,28,0.05)] border border-[#c1c8c2]/30 flex flex-col">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#f0eded]">
                <span className="material-symbols-outlined text-[#002d1c] text-[22px]">
                  biotech
                </span>
                <h2 className="text-lg md:text-xl font-bold text-[#002d1c]">
                  {t('whatCanDetectTitle')}
                </h2>
              </div>

              {/* Supported Crops */}
              <div className="mb-4 pb-3.5 border-b border-[#f0eded]">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#002d1c] uppercase tracking-wider mb-2">
                  <span>🌱</span>
                  <span>{t('supportedCropsSubtitle')}</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs sm:text-sm text-[#414944]">
                  {AVAILABLE_CROPS.map((cropId, index) => {
                    const name = getCropDisplayName(cropId, selectedLanguage);
                    return (
                      <React.Fragment key={cropId}>
                        <span className="font-medium text-[#1b1c1c]">{name}</span>
                        {index < AVAILABLE_CROPS.length - 1 && (
                          <span className="text-[#c1c8c2] select-none">•</span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Disease Detection */}
              <div className="flex items-start gap-2.5 mb-3.5">
                <span className="text-base select-none mt-0.5">🔬</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#002d1c]">
                    {t('diseaseDetectionTitle')}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#414944] leading-relaxed mt-0.5">
                    {t('diseaseDetectionDesc')}
                  </p>
                </div>
              </div>

              {/* Pest Detection */}
              <div className="flex items-start gap-2.5 mb-3.5">
                <span className="text-base select-none mt-0.5">🐛</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#002d1c]">
                    {t('pestDetectionTitle')}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#414944] leading-relaxed mt-0.5">
                    {t('pestDetectionDesc')}
                  </p>
                </div>
              </div>

              {/* Management Recommendations */}
              <div className="flex items-start gap-2.5">
                <span className="text-base select-none mt-0.5">💡</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#002d1c]">
                    {t('managementRecommendationsTitle')}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#414944] leading-relaxed mt-0.5">
                    {t('managementRecommendationsDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Analyses Preview (User-Specific Only) */}
          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,45,28,0.05)] border border-[#c1c8c2]/30">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-[#f0eded]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#002d1c] text-[22px]">
                  history
                </span>
                <h2 className="text-lg md:text-xl font-bold text-[#002d1c]">
                  {t('recentAnalyses')}
                </h2>
              </div>
              {recentAnalyses.length > 0 && (
                <button
                  type="button"
                  onClick={() => navigateTo('history')}
                  className="text-xs md:text-sm font-semibold text-[#002d1c] hover:underline underline-offset-4 cursor-pointer"
                >
                  {t('viewAll')}
                </button>
              )}
            </div>

            {recentAnalyses.length === 0 ? (
              /* Empty State for New Farmer / No Analyses Yet */
              <div className="flex flex-col items-center justify-center text-center py-8 px-4 bg-[#fcf9f8] rounded-xl border border-dashed border-[#c1c8c2]/70">
                <div className="w-14 h-14 rounded-full bg-[#e8f5e9] flex items-center justify-center text-[#3e6752] mb-3">
                  <span className="material-symbols-outlined text-3xl">psychology_alt</span>
                </div>
                <h3 className="text-base font-bold text-[#002d1c] mb-1">
                  {t('noAnalysesYet')}
                </h3>
                <p className="text-xs sm:text-sm text-[#414944] max-w-md mb-4 leading-relaxed">
                  {t('noAnalysesYetSub')}
                </p>
                <button
                  type="button"
                  onClick={() => navigateTo('capture')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#002d1c] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#1a4331] transition-all shadow-sm cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                  <span>{t('analyzeMyCropBtn')}</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col divide-y divide-[#f0eded]">
                {recentAnalyses.map((item) => {
                  const isHealthy = item.healthStatus === 'healthy';
                  const isProcessing = item.healthStatus === 'processing';
                  const cropDisplayName =
                    getCropDisplayName(item.cropKey || item.selectedCrop, selectedLanguage) ||
                    item.cropName ||
                    t('cropSpecimen');
                  const formattedDate = formatAnalysisDateTime(
                    item.createdAt || item.scanDate,
                    item.timestampText || t('recentTimestamp')
                  );

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleOpenDetail(item)}
                      className="flex items-center justify-between py-3.5 px-2 rounded-xl hover:bg-[#f6f3f2] transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-[#f0eded] border border-[#c1c8c2]/40">
                          <img
                            src={item.imageUrl}
                            alt={cropDisplayName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[#1b1c1c] group-hover:text-[#002d1c] transition-colors">
                            {cropDisplayName}
                          </h3>
                          <p className="text-xs text-[#5f5e59] mt-0.5">
                            {formattedDate}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        {isHealthy ? (
                          <span className="px-3 py-1 bg-[#c0edd3] text-[#002114] rounded-full text-xs font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px] filled text-[#002d1c]">
                              check_circle
                            </span>
                            {t('statusHealthy')}
                          </span>
                        ) : isProcessing ? (
                          <span className="px-3 py-1 bg-[#e5e2db] text-[#1c1c18] rounded-full text-xs font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px] animate-spin">
                              sync
                            </span>
                            {t('statusProcessing')}
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-[#ffdad6] text-[#93000a] rounded-full text-xs font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px] filled text-[#ba1a1a]">
                              warning
                            </span>
                            {t('needsAttention')}
                          </span>
                        )}
                        <span className="material-symbols-outlined text-[#717973] group-hover:text-[#002d1c] transition-colors text-[20px]">
                          chevron_right
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
};
