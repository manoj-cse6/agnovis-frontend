import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { TopAppBar } from '../TopAppBar';
import { BottomNavBar } from '../BottomNavBar';
import { AlertItem, DiseaseCluster } from '../../types';
import { apiGetAlerts, apiUpdateAlert, apiGetClusters } from '../../services/apiService';

export const AlertsScreen: React.FC = () => {
  const { goBack, showToast, t } = useApp();
  const [alerts, setAlerts] = useState<AlertItem[]>([]);
  const [clusters, setClusters] = useState<DiseaseCluster[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAlertsAndClusters = async () => {
    setLoading(true);
    setError(null);
    try {
      const [alertsData, clustersData] = await Promise.all([
        apiGetAlerts().catch(() => []),
        apiGetClusters().catch(() => []),
      ]);
      setAlerts(Array.isArray(alertsData) ? alertsData : []);
      setClusters(Array.isArray(clustersData) ? clustersData : []);
    } catch (err: any) {
      console.error('Failed to load alerts:', err);
      setError(err.message || 'Could not load alerts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlertsAndClusters();
  }, []);

  const handleToggleResolved = async (alert: AlertItem) => {
    try {
      const nextState = !alert.is_resolved;
      await apiUpdateAlert(alert.id, { is_resolved: nextState, is_read: true });
      setAlerts((prev) =>
        prev.map((a) => (a.id === alert.id ? { ...a, is_resolved: nextState, is_read: true } : a))
      );
      showToast(nextState ? 'Alert marked as resolved' : 'Alert reopened');
    } catch (err: any) {
      showToast(err.message || 'Could not update alert');
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex flex-col pt-14 md:pt-16 pb-24 md:pb-12">
      <TopAppBar title={t('clusterAlertTitle') || 'Crop Health & Community Alerts'} showBack onBack={goBack} showProfileAvatar />

      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 flex-1 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[#002d1c] tracking-tight">Active Alerts & Warnings</h1>
          <p className="text-xs sm:text-sm text-[#414944] mt-0.5">
            Real-time advisory on disease outbreaks, pest pressures, and community reports.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="py-12 text-center text-sm text-[#5f5e59] flex items-center justify-center gap-2">
            <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
            <span>Checking active field warnings & community clusters...</span>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center justify-between">
            <span>{error}</span>
            <button type="button" onClick={fetchAlertsAndClusters} className="underline font-bold cursor-pointer">
              Retry
            </button>
          </div>
        )}

        {/* Community Disease Clusters Section */}
        {!loading && clusters.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">📡</span>
              <h2 className="text-base font-bold text-[#002d1c]">
                {t('possibleDiseaseCluster') || 'Possible Disease Clusters (Regional Early Warning)'}
              </h2>
            </div>

            {clusters.map((c) => (
              <div
                key={c.id}
                className="bg-amber-50/80 border border-amber-300 rounded-2xl p-5 shadow-xs space-y-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-200 text-amber-900 border border-amber-300">
                      Possible Cluster
                    </span>
                    <h3 className="text-sm font-bold text-amber-950 mt-1">
                      {c.disease} on {c.crop}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-300">
                    {c.case_count} recent reports
                  </span>
                </div>

                <p className="text-xs text-amber-900 leading-relaxed">
                  Multiple recent reports detected in your area within the past 24 hours.
                  Increased monitoring of your {c.crop} crop is recommended.
                  This is an early-warning signal, NOT a confirmed outbreak.
                </p>

                <p className="text-[10px] text-amber-800/70 pt-1">
                  🔒 Farmer privacy protected — coarse regional grid aggregation. No individual coordinates or names are stored.
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && alerts.length === 0 && clusters.length === 0 && (
          <div className="bg-white rounded-2xl p-10 text-center border border-[#c1c8c2]/30 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#c0edd3] text-[#002d1c] flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-4xl">verified_user</span>
            </div>
            <h3 className="text-base font-bold text-[#002d1c] mb-1">No Active Crop Alerts</h3>
            <p className="text-xs sm:text-sm text-[#414944] max-w-sm leading-relaxed">
              Your fields and region do not exhibit high-risk pathogen spread or critical warnings at this time.
            </p>
          </div>
        )}

        {/* Standard Alert Cards */}
        {!loading && alerts.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#002d1c]">Individual Field Warnings</h2>
            {alerts.map((alert) => {
              const isHigh = alert.severity === 'high' || alert.severity === 'critical';
              return (
                <div
                  key={alert.id}
                  className={`bg-white rounded-2xl p-5 border transition-all ${
                    alert.is_resolved
                      ? 'border-[#c1c8c2]/30 opacity-60'
                      : isHigh
                      ? 'border-red-300 shadow-sm'
                      : 'border-[#c1c8c2]/50 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isHigh ? 'bg-[#ffdad6] text-[#93000a]' : 'bg-[#fff8e1] text-[#785900]'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {alert.alert_type === 'weather'
                            ? 'thunderstorm'
                            : alert.alert_type === 'pest'
                            ? 'pest_control'
                            : 'warning'}
                        </span>
                      </span>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-bold text-[#1b1c1c]">{alert.title}</h3>
                          <span
                            className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${
                              isHigh
                                ? 'bg-red-100 text-red-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {alert.severity}
                          </span>
                        </div>
                        <p className="text-xs text-[#414944] mt-1 leading-relaxed">{alert.message}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleResolved(alert)}
                      className="px-3 py-1.5 rounded-full text-xs font-bold border transition-colors cursor-pointer shrink-0"
                    >
                      {alert.is_resolved ? 'Reopen' : 'Mark Resolved'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <BottomNavBar />
    </div>
  );
};
