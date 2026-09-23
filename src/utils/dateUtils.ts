/**
 * Safe date and time formatting utilities for AgriVision.
 * Prevents any occurrence of "Invalid Date" by validating timestamps
 * and providing localized date and time formats.
 */

/**
 * Formats a date string, timestamp, or Date object into a readable date and time.
 * Example: "Aug 28, 2026, 06:19 PM"
 */
export function formatAnalysisDateTime(
  dateValue?: string | number | Date | null,
  fallbackText: string = 'Just now'
): string {
  if (!dateValue) return fallbackText;

  if (typeof dateValue === 'string' && (dateValue === 'Just now' || dateValue === 'Recent')) {
    return dateValue;
  }

  try {
    const d = new Date(dateValue);
    if (isNaN(d.getTime())) {
      return fallbackText;
    }
    return d.toLocaleString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch {
    return fallbackText;
  }
}

/**
 * Formats a date string into a date-only string.
 * Example: "Aug 28, 2026"
 */
export function formatAnalysisDateOnly(
  dateValue?: string | number | Date | null,
  fallbackText: string = 'Today'
): string {
  if (!dateValue) return fallbackText;

  if (typeof dateValue === 'string' && (dateValue === 'Just now' || dateValue === 'Recent')) {
    return dateValue;
  }

  try {
    const d = new Date(dateValue);
    if (isNaN(d.getTime())) {
      return fallbackText;
    }
    return d.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return fallbackText;
  }
}

/**
 * Formats a time-only string.
 * Example: "06:19 PM"
 */
export function formatAnalysisTimeOnly(
  dateValue?: string | number | Date | null,
  fallbackText: string = 'Just now'
): string {
  if (!dateValue) return fallbackText;

  try {
    const d = new Date(dateValue);
    if (isNaN(d.getTime())) {
      return fallbackText;
    }
    return d.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch {
    return fallbackText;
  }
}
