import React, { lazy, Suspense } from "react";
import { SEA } from "../constants/site";
import usePrefersReducedData from "../hooks/usePrefersReducedData";

const CardWaterBubbles = lazy(() => import("./ambient/CardWaterBubbles"));

export default function OceanDepthBG() {
  const reduced = usePrefersReducedData();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(1200px 600px at 20% -10%, #0A2B38 0%, transparent 55%), radial-gradient(900px 500px at 80% 110%, #0B2F3C 0%, transparent 50%), linear-gradient(180deg, ${SEA.trench} 0%, ${SEA.midnight} 40%, ${SEA.trench} 100%)`,
        }}
      />
      {/* Subtle 3D water + rising bubbles across the background; disabled for reduced-motion */}
      {!reduced && (
        <Suspense fallback={null}>
          <div className="absolute inset-0">
            <CardWaterBubbles className="absolute inset-0" />
          </div>
        </Suspense>
      )}
      {/* Decorative SVG icons and grain overlay removed per request to keep only bubbles */}
    </div>
  );
}
