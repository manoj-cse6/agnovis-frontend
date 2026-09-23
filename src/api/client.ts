/**
 * Centralized API Client for AgriVision AI
 * Connects directly to the FastAPI backend at VITE_API_BASE_URL (default: http://127.0.0.1:8000).
 * 
 * Features:
 * - Automatically injects 'Authorization: Bearer <token>' from localStorage
 * - Transparent JSON serialization and parsing
 * - Seamless multipart/form-data upload support
 * - Standardized error extraction
 * - Consistent 401 handling (clears expired session and triggers auth state change)
 */

export const API_BASE_URL =
  (import.meta.env.VITE_API_BASE_URL as string) || 'http://127.0.0.1:8000';

export const ACTIVE_SESSION_TOKEN_KEY = 'agrivision_session_token';
export const ACTIVE_SESSION_USER_ID_KEY = 'agrivision_session_user_id';

export class ApiError extends Error {
  status: number;
  data: any;

  constructor(status: number, message: string, data?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

export function getStoredToken(): string | null {
  try {
    return localStorage.getItem(ACTIVE_SESSION_TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setStoredToken(token: string | null): void {
  try {
    if (token) {
      localStorage.setItem(ACTIVE_SESSION_TOKEN_KEY, token);
    } else {
      localStorage.removeItem(ACTIVE_SESSION_TOKEN_KEY);
      localStorage.removeItem(ACTIVE_SESSION_USER_ID_KEY);
    }
  } catch (err) {
    console.error('Failed to set stored token:', err);
  }
}

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined | null>;
}

function extractApiErrorMessage(data: any, fallback: string): string {
  if (!data) return fallback;
  if (typeof data === 'string') return data;
  if (Array.isArray(data)) {
    return data.map(item => extractApiErrorMessage(item, '')).filter(Boolean).join(', ') || fallback;
  }
  if (typeof data === 'object') {
    if (typeof data.detail === 'string') return data.detail;
    if (Array.isArray(data.detail)) {
      const messages = data.detail.map((errItem: any) => {
        if (!errItem) return '';
        if (typeof errItem === 'string') return errItem;
        const loc = Array.isArray(errItem.loc) ? errItem.loc.filter((p: any) => p !== 'body').join('.') : '';
        const msg = errItem.msg || errItem.message || JSON.stringify(errItem);
        return loc ? `${loc}: ${msg}` : msg;
      }).filter(Boolean);
      if (messages.length > 0) return messages.join(', ');
    }
    if (typeof data.message === 'string') return data.message;
    if (typeof data.error === 'string') return data.error;
  }
  return fallback;
}

async function request<T = any>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { params, headers: customHeaders, body, ...fetchOptions } = options;

  let url = endpoint.startsWith('http')
    ? endpoint
    : `${API_BASE_URL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;

  if (params) {
    const query = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        query.append(key, String(value));
      }
    }
    const queryString = query.toString();
    if (queryString) {
      url += (url.includes('?') ? '&' : '?') + queryString;
    }
  }

  const headers = new Headers(customHeaders || {});

  const token = getStoredToken();
  if (token && !headers.has('Authorization')) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const isFormData = body instanceof FormData;
  if (!isFormData && !headers.has('Content-Type') && body !== undefined && !(body instanceof Blob)) {
    headers.set('Content-Type', 'application/json');
  }

  let finalBody: any = body;
  if (!isFormData && body !== undefined && typeof body === 'object' && !(body instanceof Blob)) {
    finalBody = JSON.stringify(body);
  }

  const response = await fetch(url, {
    ...fetchOptions,
    headers,
    body: finalBody
  });

  if (response.status === 401) {
    // Session token expired or invalid
    setStoredToken(null);
    window.dispatchEvent(new CustomEvent('agrivision:unauthorized'));
  }

  let responseData: any = null;
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    try {
      responseData = await response.json();
    } catch {
      responseData = null;
    }
  } else {
    try {
      responseData = await response.text();
    } catch {
      responseData = null;
    }
  }

  if (!response.ok) {
    const errorMessage = extractApiErrorMessage(
      responseData,
      `Request failed with status ${response.status}`
    );
    throw new ApiError(response.status, errorMessage, responseData);
  }

  return responseData as T;
}

export const client = {
  get: <T = any>(endpoint: string, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'GET' }),

  post: <T = any>(endpoint: string, body?: any, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'POST', body }),

  put: <T = any>(endpoint: string, body?: any, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'PUT', body }),

  patch: <T = any>(endpoint: string, body?: any, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'PATCH', body }),

  delete: <T = any>(endpoint: string, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'DELETE' }),

  // Axios-like helper response structure for code compatibility
  request: async <T = any>(endpoint: string, options?: RequestOptions) => {
    const data = await request<T>(endpoint, options);
    return { data };
  }
};

export default client;
