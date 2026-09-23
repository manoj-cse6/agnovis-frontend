import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { TopAppBar } from '../TopAppBar';
import { BottomNavBar } from '../BottomNavBar';
import { FieldItem } from '../../types';
import { apiCreateField, apiDeleteField, apiGetFields } from '../../services/apiService';

export const FieldsScreen: React.FC = () => {
  const { t, goBack, showToast } = useApp();
  const [fields, setFields] = useState<FieldItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form state for creating a new field
  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState('');
  const [crop, setCrop] = useState('tomato');
  const [area, setArea] = useState('1.5');
  const [lat, setLat] = useState('17.3850');
  const [lon, setLon] = useState('78.4867');
  const [submitting, setSubmitting] = useState(false);

  const fetchFields = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiGetFields();
      setFields(Array.isArray(data) ? data : []);
    } catch (err: any) {
      console.error('Failed to load fields:', err);
      setError(err.message || 'Could not load your registered fields.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFields();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      showToast('Please enter a field name');
      return;
    }

    setSubmitting(true);
    try {
      const newField = await apiCreateField({
        name: name.trim(),
        crop,
        area_acres: parseFloat(area) || 1.0,
        latitude: parseFloat(lat) || 17.3850,
        longitude: parseFloat(lon) || 78.4867
      });
      setFields((prev) => [newField, ...prev]);
      setIsAdding(false);
      setName('');
      showToast('Field registered successfully');
    } catch (err: any) {
      showToast(err.message || 'Failed to create field');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await apiDeleteField(id);
      setFields((prev) => prev.filter((f) => f.id !== id));
      showToast('Field removed');
    } catch (err: any) {
      showToast(err.message || 'Failed to remove field');
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex flex-col pt-14 md:pt-16 pb-24 md:pb-12">
      <TopAppBar title="My Farmland & Plots" showBack onBack={goBack} showProfileAvatar />

      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 flex-1 space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#002d1c] tracking-tight">Registered Fields</h1>
            <p className="text-xs sm:text-sm text-[#414944] mt-0.5">
              Manage your agricultural acreage, GPS coordinates, and crop assignments.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsAdding((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#002d1c] text-white rounded-full text-xs sm:text-sm font-bold hover:bg-[#1a4331] transition-all cursor-pointer shadow-xs active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isAdding ? 'close' : 'add'}
            </span>
            <span>{isAdding ? 'Cancel' : 'Add Field'}</span>
          </button>
        </div>

        {/* Add Field Form */}
        {isAdding && (
          <form
            onSubmit={handleCreate}
            className="bg-white rounded-2xl p-5 border border-[#c1c8c2]/50 shadow-sm space-y-4 animate-in fade-in duration-200"
          >
            <h3 className="text-sm font-bold text-[#002d1c] uppercase tracking-wider">
              Register New Agricultural Plot
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-[#414944] block mb-1">Plot Name</label>
                <input
                  type="text"
                  placeholder="e.g. North Acre Tomato Block"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-10 px-3 text-xs sm:text-sm border border-[#c1c8c2] rounded-xl outline-none focus:border-[#002d1c]"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#414944] block mb-1">Primary Crop</label>
                <select
                  value={crop}
                  onChange={(e) => setCrop(e.target.value)}
                  className="w-full h-10 px-3 text-xs sm:text-sm border border-[#c1c8c2] rounded-xl outline-none focus:border-[#002d1c] bg-white capitalize"
                >
                  <option value="tomato">Tomato</option>
                  <option value="potato">Potato</option>
                  <option value="corn">Corn (Maize)</option>
                  <option value="pepper">Pepper (Capsicum)</option>
                  <option value="rice">Rice (Paddy)</option>
                  <option value="cotton">Cotton</option>
                  <option value="wheat">Wheat</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-[#414944] block mb-1">Size (Acres)</label>
                <input
                  type="number"
                  step="0.1"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full h-10 px-3 text-xs sm:text-sm border border-[#c1c8c2] rounded-xl outline-none focus:border-[#002d1c]"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-semibold text-[#414944] block mb-1">Latitude</label>
                  <input
                    type="number"
                    step="0.0001"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    className="w-full h-10 px-3 text-xs border border-[#c1c8c2] rounded-xl outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#414944] block mb-1">Longitude</label>
                  <input
                    type="number"
                    step="0.0001"
                    value={lon}
                    onChange={(e) => setLon(e.target.value)}
                    className="w-full h-10 px-3 text-xs border border-[#c1c8c2] rounded-xl outline-none"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 bg-[#002d1c] text-white rounded-full text-xs font-bold hover:bg-[#1a4331] transition-all cursor-pointer disabled:opacity-50"
            >
              {submitting ? 'Saving Plot...' : 'Save Field'}
            </button>
          </form>
        )}

        {/* Loading State */}
        {loading && (
          <div className="py-12 text-center text-sm text-[#5f5e59] flex items-center justify-center gap-2">
            <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
            <span>Loading registered fields...</span>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center justify-between">
            <span>{error}</span>
            <button
              type="button"
              onClick={fetchFields}
              className="underline font-bold cursor-pointer"
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && fields.length === 0 && (
          <div className="bg-white rounded-2xl p-10 text-center border border-[#c1c8c2]/30 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#e8f5e9] text-[#002d1c] flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-4xl">landscape</span>
            </div>
            <h3 className="text-base font-bold text-[#002d1c] mb-1">No Fields Registered Yet</h3>
            <p className="text-xs sm:text-sm text-[#414944] max-w-sm mb-4 leading-relaxed">
              Add your farmland plots to view accurate localized weather forecasts and crop risk insights.
            </p>
            <button
              type="button"
              onClick={() => setIsAdding(true)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#002d1c] text-white rounded-full text-xs font-bold hover:bg-[#1a4331] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              <span>Register First Field</span>
            </button>
          </div>
        )}

        {/* Field Cards */}
        {!loading && fields.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((f) => (
              <div
                key={f.id}
                className="bg-white rounded-2xl p-5 border border-[#c1c8c2]/40 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-[#1b1c1c]">{f.name}</h3>
                      <span className="inline-block px-2.5 py-0.5 bg-[#c0edd3] text-[#002114] rounded-full text-[11px] font-bold capitalize mt-1">
                        {f.crop}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDelete(f.id)}
                      className="text-[#ba1a1a] hover:bg-red-50 p-1.5 rounded-lg transition-colors cursor-pointer"
                      title="Delete field"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#f0eded] text-xs text-[#5f5e59] space-y-1">
                    <p>Acreage: <strong>{f.area_acres || 1} acres</strong></p>
                    {f.latitude && f.longitude && (
                      <p className="font-mono text-[11px]">
                        GPS: {f.latitude.toFixed(4)}, {f.longitude.toFixed(4)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <BottomNavBar />
    </div>
  );
};
