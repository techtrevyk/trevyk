import React from "react";
import { entryLoader } from "../config/media";
import { ROUTE_LOADER_ID } from "../utils/routeTransitionOverlay";

interface RouteLoaderProps {
  visible: boolean;
  reducedMotion?: boolean;
}

export const RouteLoader: React.FC<RouteLoaderProps> = ({ visible }) => {
  const bg = entryLoader.background;

  return (
    <div
      id={ROUTE_LOADER_ID}
      className={`fixed inset-0 z-[9999] isolate transition-opacity duration-150 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ backgroundColor: bg }}
      aria-hidden={!visible}
      aria-busy={visible}
      aria-live="polite"
      aria-label={visible ? "Loading page" : undefined}
    />
  );
};
