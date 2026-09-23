/**
 * useLocation.ts
 *
 * Shared location hook for Agnovis.
 *
 * PRIVACY & COMPLIANCE:
 * - Browser geolocation permission is strictly authoritative.
 * - localStorage only remembers if the UI banner was dismissed (agnovis_location_banner_dismissed),
 *   never substituting for actual browser permission state.
 * - Coordinates are stored in React component state only — never written to disk or localStorage.
 */
import { useState, useCallback, useEffect } from 'react';
import { LocationPermissionStatus } from '../types';

export interface UseLocationResult {
  latitude: number | null;
  longitude: number | null;
  permissionStatus: LocationPermissionStatus;
  loading: boolean;
  error: string | null;
  bannerDismissed: boolean;
  requestLocation: () => void;
  dismissBanner: () => void;
}

const BANNER_DISMISSED_KEY = 'agnovis_location_banner_dismissed';

export function useLocation(): UseLocationResult {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<LocationPermissionStatus>('unknown');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bannerDismissed, setBannerDismissed] = useState<boolean>(() => {
    try {
      return localStorage.getItem(BANNER_DISMISSED_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const dismissBanner = useCallback(() => {
    setBannerDismissed(true);
    try {
      localStorage.setItem(BANNER_DISMISSED_KEY, 'true');
    } catch {
      // ignore
    }
  }, []);

  const checkBrowserPermission = useCallback(async () => {
    if (!navigator.geolocation) {
      setPermissionStatus('unavailable');
      return;
    }

    if (navigator.permissions && navigator.permissions.query) {
      try {
        const result = await navigator.permissions.query({ name: 'geolocation' });
        if (result.state === 'granted') {
          setPermissionStatus('granted');
        } else if (result.state === 'denied') {
          setPermissionStatus('denied');
        } else {
          setPermissionStatus('unknown');
        }
        result.onchange = () => {
          if (result.state === 'granted') setPermissionStatus('granted');
          else if (result.state === 'denied') setPermissionStatus('denied');
          else setPermissionStatus('unknown');
        };
        return;
      } catch {
        // navigator.permissions.query might fail for geolocation in some environments
      }
    }
  }, []);

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setPermissionStatus('unavailable');
      setError('Geolocation is not supported by your browser.');
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setPermissionStatus('granted');
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        if (err.code === 1) { // PERMISSION_DENIED
          setPermissionStatus('denied');
          setError('Location access was denied in browser settings.');
        } else {
          setPermissionStatus('unavailable');
          setError('Your location could not be determined. Please try again.');
        }
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    );
  }, []);

  useEffect(() => {
    checkBrowserPermission();
  }, [checkBrowserPermission]);

  useEffect(() => {
    if (permissionStatus === 'granted' && latitude === null && !loading) {
      requestLocation();
    }
  }, [permissionStatus, latitude, loading, requestLocation]);

  return {
    latitude,
    longitude,
    permissionStatus,
    loading,
    error,
    bannerDismissed,
    requestLocation,
    dismissBanner,
  };
}
