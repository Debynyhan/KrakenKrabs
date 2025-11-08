import React, { Suspense, useEffect, useRef, useState } from "react";
import usePrefersReducedData from "../../hooks/usePrefersReducedData";

const ThreeCanvasWrapper = React.lazy(() => import("./ThreeCanvasWrapper"));

// Lightweight wrapper that only loads the heavy 3D chunk when needed
export default function CardWaterBubbles({ className = "" }) {
  const reduced = usePrefersReducedData();
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) return; // respect reduced motion
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          setVisible(e.isIntersecting);
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  if (reduced) return <div ref={containerRef} className={className} />;

  return (
    <div ref={containerRef} className={className}>
      {visible ? (
        <Suspense fallback={null}>
          <ThreeCanvasWrapper />
        </Suspense>
      ) : null}
    </div>
  );
}
