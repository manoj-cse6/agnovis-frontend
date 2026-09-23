import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { TopAppBar } from '../TopAppBar';
import { BottomNavBar } from '../BottomNavBar';
import { ReferralItem } from '../../types';
import { apiGetReferrals } from '../../services/apiService';

export const ReferralsScreen: React.FC = () => {
  const { goBack } = useApp();
  const [referrals, setReferrals] = useState<ReferralItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReferrals = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiGetReferrals();
      setReferrals(Array.isArray(data) ? data : []);
    } catch (err: any) {
      console.error('Failed to load referrals:', err);
      setError(err.message || 'Could not load expert referrals.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReferrals();
  }, []);

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex flex-col pt-14 md:pt-16 pb-24 md:pb-12">
      <TopAppBar title="Expert Referrals" showBack onBack={goBack} showProfileAvatar />

      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 flex-1 space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-[#002d1c] tracking-tight">Specialist Review Referrals</h1>
          <p className="text-xs sm:text-sm text-[#414944] mt-0.5">
            Pathogen samples flagged for professional agronomist review or quarantine assessment.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-12 text-center text-sm text-[#5f5e59] flex items-center justify-center gap-2">
            <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
            <span>Checking expert referral tickets...</span>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center justify-between">
            <span>{error}</span>
            <button type="button" onClick={fetchReferrals} className="underline font-bold cursor-pointer">
              Retry
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && referrals.length === 0 && (
          <div className="bg-white rounded-2xl p-10 text-center border border-[#c1c8c2]/30 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#e8f5e9] text-[#002d1c] flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-4xl">verified</span>
            </div>
            <h3 className="text-base font-bold text-[#002d1c] mb-1">No Active Expert Referrals</h3>
            <p className="text-xs sm:text-sm text-[#414944] max-w-sm leading-relaxed">
              When severe or ambiguous crop diseases are detected, cases are escalated to certified agricultural specialists here.
            </p>
          </div>
        )}

        {/* List */}
        {!loading && referrals.length > 0 && (
          <div className="space-y-3">
            {referrals.map((ref) => (
              <div
                key={ref.id}
                className="bg-white rounded-2xl p-5 border border-[#c1c8c2]/50 shadow-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#002d1c] uppercase tracking-wider">
                    Ticket #{ref.id}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase ${
                      ref.status === 'resolved'
                        ? 'bg-emerald-100 text-emerald-800'
                        : ref.status === 'reviewed'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {ref.status}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#1b1c1c]">{ref.reason}</p>
                {ref.expert_notes && (
                  <div className="p-3 bg-[#fcf9f8] rounded-xl border border-[#c1c8c2]/30 text-xs text-[#414944]">
                    <strong>Agronomist Note:</strong> {ref.expert_notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      <BottomNavBar />
    </div>
  );
};
