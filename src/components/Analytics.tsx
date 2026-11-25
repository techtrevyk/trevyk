import React, { useEffect } from "react";
import { initAnalytics, getGaMeasurementId } from "../utils/analytics";

/** Loads GA4 as soon as the app mounts (env `VITE_GA_MEASUREMENT_ID` or production fallback). */
export const Analytics: React.FC = () => {
  useEffect(() => {
    if (getGaMeasurementId()) initAnalytics();
  }, []);

  return null;
};
