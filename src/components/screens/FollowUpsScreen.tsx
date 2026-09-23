import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { TopAppBar } from '../TopAppBar';
import { BottomNavBar } from '../BottomNavBar';
import { FollowUpItem } from '../../types';
import { apiGetFollowUps, apiUpdateFollowUp } from '../../services/apiService';

export const FollowUpsScreen: React.FC = () => {
  const { goBack, showToast } = useApp();
  const [followUps, setFollowUps] = useState<FollowUpItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFollowUps = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiGetFollowUps();
      setFollowUps(Array.isArray(data) ? data : []);
    } catch (err: any) {
      console.error('Failed to load follow-ups:', err);
      setError(err.message || 'Could not load follow-ups.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFollowUps();
  }, []);

  const handleToggleComplete = async (item: FollowUpItem) => {
    try {
      const nextStatus = item.status === 'completed' ? 'pending' : 'completed';
      await apiUpdateFollowUp(item.id, { status: nextStatus });
      setFollowUps((prev) =>
        prev.map((f) => (f.id === item.id ? { ...f, status: nextStatus } : f))
      );
      showToast(nextStatus === 'completed' ? 'Follow-up marked completed' : 'Follow-up reopened');
    } catch (err: any) {
      showToast(err.message || 'Failed to update follow-up');
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex flex-col pt-14 md:pt-16 pb-24 md:pb-12">
      <TopAppBar title="Treatment Follow-ups" showBack onBack={goBack} showProfileAvatar />

      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 flex-1 space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-[#002d1c] tracking-tight">Scheduled Follow-ups</h1>
          <p className="text-xs sm:text-sm text-[#414944] mt-0.5">
            Track recommended recovery re-checks, fungicide application dates, and foliage monitoring.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="py-12 text-center text-sm text-[#5f5e59] flex items-center justify-center gap-2">
            <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
            <span>Loading follow-up schedules...</span>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center justify-between">
            <span>{error}</span>
            <button type="button" onClick={fetchFollowUps} className="underline font-bold cursor-pointer">
              Retry
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && followUps.length === 0 && (
          <div className="bg-white rounded-2xl p-10 text-center border border-[#c1c8c2]/30 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#f0eded] text-[#002d1c] flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-4xl">event_available</span>
            </div>
            <h3 className="text-base font-bold text-[#002d1c] mb-1">No Pending Follow-ups</h3>
            <p className="text-xs sm:text-sm text-[#414944] max-w-sm leading-relaxed">
              When an AI diagnosis recommends re-scanning in 7 or 14 days, it will be automatically tracked here.
            </p>
          </div>
        )}

        {/* FollowUp Cards */}
        {!loading && followUps.length > 0 && (
          <div className="space-y-3">
            {followUps.map((item) => {
              const isCompleted = item.status === 'completed';
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl p-5 border transition-all ${
                    isCompleted ? 'border-[#c1c8c2]/30 opacity-60' : 'border-[#c1c8c2]/50 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-[#002d1c]">calendar_month</span>
                        <span className="text-sm font-bold text-[#1b1c1c]">
                          Target Date: {item.scheduled_date}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            isCompleted ? 'bg-gray-100 text-gray-700' : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      {item.notes && (
                        <p className="text-xs text-[#414944] mt-1.5 leading-relaxed">{item.notes}</p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleComplete(item)}
                      className="px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer"
                    >
                      {isCompleted ? 'Reopen' : 'Mark Completed'}
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
