import React, { useState, useEffect, useCallback } from 'react';
import { useApp } from '../../context/AppContext';
import { TopAppBar } from '../TopAppBar';
import { BottomNavBar } from '../BottomNavBar';
import { WeatherForecastData, GeocodingResult } from '../../types';
import { apiGetWeatherForecast, apiSearchLocation, apiReverseGeocode } from '../../services/apiService';

type LocationState = {
  latitude: number;
  longitude: number;
  displayName: string;
};

type WeatherRisk = 'Low' | 'Moderate' | 'High';

export const WeatherScreen: React.FC = () => {
  const { goBack, navigateTo, t } = useApp();
  const [weather, setWeather] = useState<WeatherForecastData | null>(null);
  const [location, setLocation] = useState<LocationState | null>(null);
  const [locationName, setLocationName] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<GeocodingResult[]>([]);
  const [searching, setSearching] = useState(false);

  const fetchWeather = useCallback(async (lat: number, lon: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiGetWeatherForecast(lat, lon);
      setWeather(data);
      setLastUpdated(new Date().toLocaleString());
    } catch (err: any) {
      setError(err.message || 'Could not fetch weather forecast.');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleUseMyLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocationError(t('weatherLocationPermissionDenied'));
      return;
    }
    setLoading(true);
    setLocationError(null);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const name = await apiReverseGeocode(latitude, longitude) || t('weatherCurrentLocation');
        setLocation({ latitude, longitude, displayName: name });
        setLocationName(name);
        await fetchWeather(latitude, longitude);
      },
      (err) => {
        setLoading(false);
        if (err.code === 1) {
          setLocationError(t('weatherLocationPermissionDenied'));
        } else {
          setLocationError(t('weatherLocationUnavailable'));
        }
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, [fetchWeather, t]);

  const handleSelectLocation = useCallback(async (result: GeocodingResult) => {
    const name = [result.name, result.admin1, result.admin2, result.admin3].filter(Boolean).join(', ');
    setLocation({ latitude: result.latitude, longitude: result.longitude, displayName: name });
    setLocationName(name);
    setShowSearch(false);
    setSearchQuery('');
    setSearchResults([]);
    await fetchWeather(result.latitude, result.longitude);
  }, [fetchWeather]);

  const handleSearch = useCallback(async () => {
    if (!searchQuery.trim()) return;
    setSearching(true);
    try {
      const results = await apiSearchLocation(searchQuery.trim());
      setSearchResults(results);
    } catch {
      setSearchResults([]);
    } finally {
      setSearching(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    handleUseMyLocation();
  }, [handleUseMyLocation]);

  const getRiskLabel = (level: WeatherRisk): string => {
    if (level === 'Low') return t('weatherRiskLow');
    if (level === 'Moderate') return t('weatherRiskModerate');
    return t('weatherRiskHigh');
  };

  const getWeatherRisk = (): { level: WeatherRisk; reason: string } => {
    if (!weather || weather.source === 'fallback/unavailable') {
      return { level: 'Low', reason: t('weatherUnavailable') };
    }
    const today = weather.forecast?.[0];
    if (!today) return { level: 'Low', reason: 'No forecast data available.' };

    const precipProb = today.precipitation_probability_pct ?? 0;
    const rainfall = today.rainfall_mm ?? 0;
    const wind = today.windspeed_kmh ?? 0;
    const humidity = weather.current?.relative_humidity_2m ?? 0;

    if (precipProb >= 70 || rainfall >= 20 || wind >= 40) {
      const reasons: string[] = [];
      if (precipProb >= 70) reasons.push(`high rain probability (${precipProb}%)`);
      if (rainfall >= 20) reasons.push(`heavy rainfall expected (${rainfall}mm)`);
      if (wind >= 40) reasons.push(`strong winds (${wind}km/h)`);
      return { level: 'High', reason: reasons.join(' and ') + '.' };
    }
    if (precipProb >= 40 || rainfall >= 10 || wind >= 25 || (humidity >= 70 && precipProb >= 30)) {
      const reasons: string[] = [];
      if (precipProb >= 40) reasons.push(`moderate rain probability (${precipProb}%)`);
      if (rainfall >= 10) reasons.push(`moderate rainfall (${rainfall}mm)`);
      if (wind >= 25) reasons.push(`moderate winds (${wind}km/h)`);
      if (humidity >= 70 && precipProb >= 30) reasons.push(`high humidity (${humidity}%) with rain risk`);
      return { level: 'Moderate', reason: reasons.join(' and ') + '.' };
    }
    return { level: 'Low', reason: t('weatherFieldWorkFavorableText') };
  };

  const getFarmAdvisory = (): string[] => {
    if (!weather || weather.source === 'fallback/unavailable') return [];
    const today = weather.forecast?.[0];
    if (!today) return [];
    const advisory: string[] = [];
    const precipProb = today.precipitation_probability_pct ?? 0;
    const rainfall = today.rainfall_mm ?? 0;
    const wind = today.windspeed_kmh ?? 0;
    const temp = today.temperature_max_c ?? 0;
    const humidity = weather.current?.relative_humidity_2m ?? 0;
    if (precipProb >= 70) {
      advisory.push('High precipitation probability expected. Consider postponing pesticide or fungicide spraying before rainfall.');
    } else if (precipProb >= 40) {
      advisory.push('Moderate rain expected. Plan spraying activities carefully.');
    }
    if (rainfall >= 20) advisory.push('Heavy rainfall expected. Monitor field drainage and avoid waterlogging.');
    if (wind >= 40) {
      advisory.push('Strong winds expected. Avoid spraying operations due to drift risk.');
    } else if (wind >= 25) {
      advisory.push('Moderate winds. Exercise caution with spraying operations.');
    }
    if (temp >= 35) advisory.push('Hot conditions expected. Monitor irrigation needs and avoid midday watering.');
    if (humidity >= 70 && precipProb >= 30) advisory.push('High humidity with rain may increase risk of fungal disease development. Monitor crops closely.');
    if (advisory.length === 0) advisory.push(t('weatherFieldWorkFavorableText'));
    return advisory;
  };

  const getWeatherIcon = (code?: number): string => {
    if (code === undefined || code === null) return 'cloud';
    if (code === 0) return 'wb_sunny';
    if (code <= 3) return 'partly_cloudy_day';
    if (code <= 48) return 'foggy';
    if (code <= 55) return 'grain';
    if (code <= 65) return 'water_drop';
    if (code <= 77) return 'ac_unit';
    if (code <= 82) return 'thunderstorm';
    if (code <= 86) return 'weather_snowy';
    return 'cloud';
  };

  const risk = getWeatherRisk();
  const advisory = getFarmAdvisory();

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex flex-col pt-14 md:pt-16 pb-24 md:pb-12">
      <TopAppBar title={t('weatherTitle')} showBack onBack={goBack} showProfileAvatar />
      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 flex-1 space-y-5">
        {/* Location Card */}
        <div className="bg-white rounded-2xl p-4 border border-[#c1c8c2]/50 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-[#002d1c]">location_on</span>
              <div>
                <p className="text-xs text-[#5f5e59]">{t('weatherCurrentLocation')}</p>
                <p className="text-sm font-semibold text-[#002d1c]">{locationName || t('weatherLoading')}</p>
              </div>
            </div>
            <button
              onClick={() => setShowSearch(true)}
              className="text-xs font-semibold text-[#002d1c] bg-[#e8f5e9] px-3 py-1.5 rounded-lg hover:bg-[#c8e6c9] transition-colors"
            >
              {t('weatherChangeLocation')}
            </button>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={handleUseMyLocation}
              className="flex items-center gap-1.5 text-xs font-semibold text-white bg-[#002d1c] px-3 py-1.5 rounded-lg hover:bg-[#1a4331] transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">my_location</span>
              {t('weatherUseMyLocation')}
            </button>
            <span className="text-xs text-[#5f5e59]">
              {lastUpdated ? `${t('weatherLastUpdated')} ${lastUpdated}` : ''}
            </span>
          </div>
          {locationError && (
            <p className="text-xs text-amber-700 mt-2 bg-amber-50 px-3 py-2 rounded-lg">{locationError}</p>
          )}
        </div>

        {/* Search Modal */}
        {showSearch && (
          <div className="bg-white rounded-2xl p-4 border border-[#c1c8c2]/50 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#002d1c]">{t('weatherSearchLocation')}</h3>
              <button
                onClick={() => { setShowSearch(false); setSearchResults([]); setSearchQuery(''); }}
                className="text-[#5f5e59] hover:text-[#002d1c]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder={t('weatherSearchPlaceholder')}
                className="flex-1 h-10 px-3 text-sm bg-[#f6f3f2] border border-[#c1c8c2] rounded-lg outline-none focus:border-[#002d1c]"
              />
              <button
                onClick={handleSearch}
                disabled={searching || !searchQuery.trim()}
                className="h-10 px-4 bg-[#002d1c] text-white rounded-lg text-xs font-semibold hover:bg-[#1a4331] disabled:opacity-40 transition-colors"
              >
                {searching ? t('weatherSearching') : t('weatherSearchLocation')}
              </button>
            </div>
            {searchResults.length > 0 && (
              <div className="max-h-60 overflow-y-auto space-y-1">
                {searchResults.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleSelectLocation(result)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#e8f5e9] transition-colors"
                  >
                    <p className="text-sm font-medium text-[#002d1c]">{result.name}</p>
                    <p className="text-xs text-[#5f5e59]">
                      {[result.admin1, result.admin2, result.country].filter(Boolean).join(', ')}
                    </p>
                  </button>
                ))}
              </div>
            )}
            {searchResults.length === 0 && searchQuery && !searching && (
              <p className="text-xs text-[#5f5e59]">{t('weatherNoResults')}</p>
            )}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="bg-white rounded-2xl p-8 border border-[#c1c8c2]/50 shadow-xs text-center">
            <div className="flex justify-center mb-3">
              <div className="w-8 h-8 border-4 border-[#002d1c] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-sm text-[#5f5e59]">{t('weatherLoading')}</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-white rounded-2xl p-5 border border-[#c1c8c2]/50 shadow-xs">
            <div className="flex items-center gap-2 text-amber-700">
              <span className="material-symbols-outlined">warning</span>
              <p className="text-sm font-semibold">{error}</p>
            </div>
          </div>
        )}

        {/* Fallback State */}
        {weather && weather.source === 'fallback/unavailable' && !loading && (
          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 shadow-xs">
            <div className="flex items-center gap-2 text-amber-800">
              <span className="material-symbols-outlined">cloud_off</span>
              <div>
                <p className="text-sm font-semibold">{t('weatherUnavailable')}</p>
                <p className="text-xs text-amber-700 mt-1">{t('weatherUnavailableText')}</p>
              </div>
            </div>
          </div>
        )}

        {/* Weather Content */}
        {weather && weather.source !== 'fallback/unavailable' && !loading && (
          <div className="space-y-5">
            {/* Current Conditions */}
            <div className="bg-gradient-to-br from-[#002d1c] to-[#1a4331] rounded-2xl p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs opacity-80">{t('weatherCurrentConditions')}</p>
                  <p className="text-3xl font-bold mt-1">{weather.current?.temperature_2m ?? '--'}&deg;C</p>
                  <p className="text-sm opacity-90 mt-1">{weather.current?.condition || 'Unknown'}</p>
                </div>
                <span className="material-symbols-outlined text-[48px] opacity-90">
                  {getWeatherIcon(weather.current?.weather_code)}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-white/20">
                <div>
                  <p className="text-xs opacity-70">{t('weatherFeelsLike')}</p>
                  <p className="text-sm font-semibold">{weather.current?.apparent_temperature ?? '--'}&deg;C</p>
                </div>
                <div>
                  <p className="text-xs opacity-70">{t('weatherHumidity')}</p>
                  <p className="text-sm font-semibold">{weather.current?.relative_humidity_2m ?? '--'}%</p>
                </div>
                <div>
                  <p className="text-xs opacity-70">{t('weatherWind')}</p>
                  <p className="text-sm font-semibold">{weather.current?.wind_speed_10m ?? '--'} km/h</p>
                </div>
                <div>
                  <p className="text-xs opacity-70">{t('weatherRainfall')}</p>
                  <p className="text-sm font-semibold">{weather.current?.precipitation ?? 0} mm</p>
                </div>
              </div>
            </div>

            {/* Weather Risk Card */}
            <div className="bg-white rounded-2xl p-5 border border-[#c1c8c2]/50 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#002d1c]">shield</span>
                  <h3 className="text-sm font-bold text-[#002d1c]">{t('weatherRisk')}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  risk.level === 'Low' ? 'bg-[#c0edd3] text-[#002114]' :
                  risk.level === 'Moderate' ? 'bg-amber-100 text-amber-900' :
                  'bg-[#ffdad6] text-[#93000a]'
                }`}>
                  {getRiskLabel(risk.level)}
                </span>
              </div>
              <p className="text-xs text-[#5f5e59] mt-2">{risk.reason}</p>
            </div>

            {/* Farm Advisory */}
            {advisory.length > 0 && (
              <div className="bg-white rounded-2xl p-5 border border-[#c1c8c2]/50 shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-[20px] text-[#002d1c]">eco</span>
                  <h3 className="text-sm font-bold text-[#002d1c]">{t('weatherFarmAdvisory')}</h3>
                </div>
                <ul className="space-y-2">
                  {advisory.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#414944]">
                      <span className="text-[#002d1c] font-bold">&rsaquo;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 7-Day Forecast */}
            <div className="bg-white rounded-2xl p-5 border border-[#c1c8c2]/50 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[20px] text-[#002d1c]">calendar_month</span>
                <h3 className="text-sm font-bold text-[#002d1c]">{t('weather7DayForecast')}</h3>
              </div>
              <div className="space-y-3">
                {weather.forecast?.map((day, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-[#f0eded] last:border-0">
                    <div className="flex items-center gap-3 w-24">
                      <span className="material-symbols-outlined text-[20px] text-[#5f5e59]">
                        {getWeatherIcon(day.weather_code)}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-[#002d1c]">
                          {new Date(day.date || '').toLocaleDateString('en', { weekday: 'short' })}
                        </p>
                        <p className="text-[10px] text-[#5f5e59]">
                          {new Date(day.date || '').toLocaleDateString('en', { month: 'short', day: 'numeric' })}
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 text-center">
                      <p className="text-xs text-[#414944]">{day.condition}</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="text-right">
                        <p className="font-semibold text-[#002d1c]">{day.temperature_max_c ?? '--'}&deg;</p>
                        <p className="text-[#5f5e59]">{day.temperature_min_c ?? '--'}&deg;</p>
                      </div>
                      <div className="text-right w-16">
                        <p className="text-blue-600 font-semibold">{day.precipitation_probability_pct ?? 0}%</p>
                        <p className="text-[#5f5e59]">{day.rainfall_mm ?? 0}mm</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rain Probability */}
            <div className="bg-white rounded-2xl p-5 border border-[#c1c8c2]/50 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[20px] text-[#002d1c]">water_drop</span>
                <h3 className="text-sm font-bold text-[#002d1c]">{t('weatherRainProbability')}</h3>
              </div>
              <div className="space-y-2">
                {weather.forecast?.slice(0, 7).map((day, i) => {
                  const prob = day.precipitation_probability_pct ?? 0;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs text-[#5f5e59] w-10">
                        {new Date(day.date || '').toLocaleDateString('en', { weekday: 'short' })}
                      </span>
                      <div className="flex-1 h-4 bg-[#f0eded] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            prob >= 70 ? 'bg-blue-600' : prob >= 40 ? 'bg-blue-400' : 'bg-blue-200'
                          }`}
                          style={{ width: `${prob}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-semibold text-[#002d1c] w-10 text-right">{prob}%</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technical Details */}
            <div className="bg-white rounded-2xl p-4 border border-[#c1c8c2]/50 shadow-xs">
              <p className="text-[10px] text-[#5f5e59]">
                Data source: Open-Meteo | Coordinates: {location?.latitude.toFixed(4)}, {location?.longitude.toFixed(4)}
                {weather.timezone ? ` | Timezone: ${weather.timezone}` : ''}
              </p>
            </div>
          </div>
        )}
      </main>
      <BottomNavBar />
    </div>
  );
};

