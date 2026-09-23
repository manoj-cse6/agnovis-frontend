import React, { useState, useEffect, useCallback } from 'react';
import { useApp } from '../../context/AppContext';
import { TopAppBar } from '../TopAppBar';
import { BottomNavBar } from '../BottomNavBar';
import { WaterAdvisorResult } from '../../types';
import { apiGetWaterAdvice } from '../../services/apiService';
import { useLocation } from '../../hooks/useLocation';

export const WaterAdvisorScreen: React.FC = () => {
  const { goBack, t, lastAnalysis } = useApp();
  const { latitude, longitude } = useLocation();

  const [crop] = useState<string>(lastAnalysis?.cropName || '');
  const [disease] = useState<string>(
    lastAnalysis?.diseaseDetected || ''
  );

  const [advice, setAdvice] = useState<WaterAdvisorResult | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Prevent translation keys from appearing directly in the UI.
  const safeT = useCallback(
    (key: string, fallback: string) => {
      const translated = t(key);
      return translated && translated !== key ? translated : fallback;
    },
    [t]
  );

  const loadWaterAdvice = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiGetWaterAdvice(
        crop,
        disease,
        latitude,
        longitude
      );

      setAdvice(data);
    } catch (err: any) {
      const message =
        err?.message ||
        safeT(
          'waterAdvisorError',
          'Unable to load water advice.'
        );

      setError(message);
    } finally {
      setLoading(false);
    }
  }, [crop, disease, latitude, longitude, safeT]);

  useEffect(() => {
    loadWaterAdvice();
  }, [loadWaterAdvice]);

  const getDecisionStyle = (decision: string) => {
    const value = decision.toLowerCase();

    if (
      value.includes('do not irrigate') ||
      value.includes('do not') ||
      value.includes('avoid')
    ) {
      return {
        container: 'border-emerald-200 bg-emerald-50',
        icon: 'bg-emerald-100 text-emerald-700',
        title: 'text-emerald-800',
        badge:
          'bg-emerald-100 text-emerald-700 border-emerald-200',
        iconSymbol: '🌧️',
      };
    }

    if (
      value.includes('recommended') ||
      value.includes('high')
    ) {
      return {
        container: 'border-amber-200 bg-amber-50',
        icon: 'bg-amber-100 text-amber-700',
        title: 'text-amber-800',
        badge:
          'bg-amber-100 text-amber-700 border-amber-200',
        iconSymbol: '☀️',
      };
    }

    return {
      container: 'border-blue-200 bg-blue-50',
      icon: 'bg-blue-100 text-blue-700',
      title: 'text-blue-800',
      badge:
        'bg-blue-100 text-blue-700 border-blue-200',
      iconSymbol: '💧',
    };
  };

  const formatWeatherSource = (source?: string) => {
    if (!source) {
      return safeT(
        'weatherSourceUnavailable',
        'Weather source unavailable'
      );
    }

    const value = source.toLowerCase();

    if (value === 'live') {
      return safeT(
        'weatherSourceLive',
        'Live weather data'
      );
    }

    if (value.includes('fallback')) {
      return safeT(
        'weatherSourceFallback',
        'Fallback data'
      );
    }

    if (value === 'unavailable') {
      return safeT(
        'weatherSourceUnavailable',
        'Weather source unavailable'
      );
    }

    return source
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col pb-24">

      {/* Top Bar */}
      <TopAppBar
        title={safeT(
          'waterAdvisorTitle',
          'Smart Water Advisor'
        )}
        onBack={goBack}
      />

      <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-5 space-y-5">

        {/* Page Introduction */}
        <section>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
            {safeT(
              'waterAdvisorTitle',
              'Smart Water Advisor'
            )}
          </h1>

          <p className="mt-1 text-sm text-slate-500 leading-relaxed">
            {safeT(
              'waterAdvisorSubtitle',
              'Get irrigation guidance based on your crop, disease condition, and current weather forecast.'
            )}
          </p>

          {/* Important Guidance Note */}
          <div className="mt-3 flex items-start gap-2">
            <span className="text-sm shrink-0">⚠️</span>

            <p className="text-xs text-slate-400 leading-relaxed">
              {safeT(
                'waterAdvisorNote',
                'Do not rely on this recommendation alone. Check your soil and crop condition before irrigating.'
              )}
            </p>
          </div>
        </section>

       

        {/* Loading */}
        {loading && (
          <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col items-center justify-center text-center">

              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-2xl animate-pulse">
                💧
              </div>

              <p className="mt-4 text-sm font-semibold text-slate-700">
                {safeT(
                  'waterAdvisorLoading',
                  'Analyzing weather and crop conditions...'
                )}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {safeT(
                  'waterAdvisorCheckingForecast',
                  'Checking the latest forecast before giving irrigation guidance.'
                )}
              </p>

            </div>
          </section>
        )}

        {/* Error */}
        {error && !loading && (
          <section className="bg-red-50 border border-red-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-3">

              <div className="w-9 h-9 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                ⚠️
              </div>

              <div className="flex-1">

                <h3 className="text-sm font-semibold text-red-800">
                  {safeT(
                    'waterAdvisorErrorTitle',
                    'Unable to load water advice'
                  )}
                </h3>

                <p className="mt-1 text-sm text-red-700 leading-relaxed">
                  {error}
                </p>

                <button
                  onClick={loadWaterAdvice}
                  className="mt-4 px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  {safeT(
                    'locationRetry',
                    'Try Again'
                  )}
                </button>

              </div>
            </div>
          </section>
        )}

        {/* Main Advice */}
        {advice && !loading && (
          <div className="space-y-4">

            {/* Main Decision */}
            {(() => {
              const style = getDecisionStyle(
                advice.decision
              );

              return (
                <section
                  className={`border rounded-2xl p-5 sm:p-6 shadow-sm ${style.container}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                    <div className="flex items-start gap-3">

                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${style.icon}`}
                      >
                        {style.iconSymbol}
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                          {safeT(
                            'irrigationDecision',
                            'Irrigation Decision'
                          )}
                        </p>

                        <h2
                          className={`mt-1 text-xl sm:text-2xl font-bold ${style.title}`}
                        >
                          {advice.decision}
                        </h2>
                      </div>

                    </div>

                    {/* Water Need */}
                    <div
                      className={`self-start px-3 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap ${style.badge}`}
                    >
                      {advice.water_need}

                      <span className="font-medium ml-1">
                        {safeT(
                          'waterNeedLabel',
                          'Water Need'
                        )}
                      </span>
                    </div>

                  </div>

                  {/* Reason */}
                  <div className="mt-5 pt-4 border-t border-slate-200">

                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      {safeT(
                        'waterAdvisorWhy',
                        'Why this recommendation?'
                      )}
                    </p>

                    <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">
                      {advice.reason}
                    </p>

                  </div>

                  {/* Disease Consideration */}
                  {advice.disease_consideration && (
                    <div className="mt-4 flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">

                      <div className="text-lg shrink-0">
                        ⚠️
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-amber-800">
                          {safeT(
                            'diseaseConsideration',
                            'Disease Consideration'
                          )}
                        </p>

                        <p className="mt-1 text-sm text-amber-700 leading-relaxed">
                          {advice.disease_consideration}
                        </p>
                      </div>

                    </div>
                  )}

                </section>
              );
            })()}

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Next Check */}
              <section className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">

                <div className="flex items-center gap-2">

                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                    🔄
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {safeT(
                        'waterAdvisorNextCheck',
                        'Next Check'
                      )}
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-slate-800">
                      {advice.next_check}
                    </p>
                  </div>

                </div>

              </section>

              {/* Weather Source */}
              <section className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">

                <div className="flex items-center gap-2">

                  <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                    🌦️
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {safeT(
                        'weatherSource',
                        'Weather Source'
                      )}
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-slate-800">
                      {formatWeatherSource(
                        advice.weather_source
                      )}
                    </p>
                  </div>

                </div>

              </section>

            </div>

            {/* Explanation */}
            <section className="bg-slate-50 border border-slate-200 rounded-2xl p-4">

              <div className="flex items-start gap-3">

                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                  ℹ️
                </div>

                <div>

                  <p className="text-sm font-semibold text-slate-800">
                    {safeT(
                      'waterAdvisorDisclaimerTitle',
                      'How this advice works'
                    )}
                  </p>

                  <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {safeT(
                      'waterAdvisorDisclaimer',
                      'This guidance uses weather forecast information and crop disease conditions. It does not estimate exact soil moisture or exact water quantities. Always check the soil and field conditions before irrigation.'
                    )}
                  </p>

                </div>

              </div>

            </section>

          </div>
        )}

      </main>

      <BottomNavBar activeScreen="water-advisor" />
    </div>
  );
};