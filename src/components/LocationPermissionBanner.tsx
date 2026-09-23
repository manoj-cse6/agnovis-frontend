import React from 'react';
import { useApp } from '../context/AppContext';
import { useLocation } from '../hooks/useLocation';

export const LocationPermissionBanner: React.FC = () => {
  const { t } = useApp();
  const { permissionStatus, bannerDismissed, requestLocation, dismissBanner } = useLocation();

  // If location is already granted or user explicitly dismissed the banner, hide it
  if (permissionStatus === 'granted' || bannerDismissed) {
    return null;
  }

  return (
    <div className="bg-emerald-900/90 border-b border-emerald-500/30 text-white px-4 py-3 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-sm relative z-40 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <span className="text-xl">📍</span>
        <div>
          <p className="font-semibold text-emerald-200">
            {t('locationPermissionTitle') || 'Enable Location Services'}
          </p>
          <p className="text-xs text-emerald-100/80">
            {t('locationPermissionDesc') || 'Get accurate weather forecasts, irrigation advice, and local crop disease alerts for your farm.'}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={requestLocation}
          className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold text-xs rounded-lg transition-colors shadow-sm"
        >
          {t('locationPermissionAllow') || 'Allow Location'}
        </button>
        <button
          onClick={dismissBanner}
          className="px-3 py-1.5 bg-emerald-950/60 hover:bg-emerald-900 text-emerald-200 text-xs rounded-lg border border-emerald-700/50 transition-colors"
        >
          {t('locationPermissionDeny') || 'Not Now'}
        </button>
      </div>
    </div>
  );
};
