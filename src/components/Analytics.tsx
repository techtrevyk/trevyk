import React, { useEffect } from "react";
import { initAnalytics, getGaMeasurementId } from "../utils/analytics";

/**
 * Loads GA4 when VITE_GA_MEASUREMENT_ID is set.
 * No-op locally / until the env var is configured for production.
 */
export const Analytics: React.FC = () => {
  useEffect(() => {
    if (getGaMeasurementId()) {
      initAnalytics();
    }
  }, []);

  return null;
};
