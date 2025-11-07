import React, { useEffect, useRef, useState } from "react";
import usePrefersReducedData from "../hooks/usePrefersReducedData";

export default function StackPlayOnce({
  videoSrc,
  posterSrc,
  sessionKey = "stack_ya_mac_played",
}) {
  const reduced = usePrefersReducedData();
  const [played, setPlayed] = useState(() => {
    try {
      return (
        typeof window !== "undefined" &&
        sessionStorage.getItem(sessionKey) === "1"
      );
    } catch {
      return false;
    }
  });
  const [shouldPlay, setShouldPlay] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (played || reduced) return;
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShouldPlay(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [played, reduced, sessionKey]);

  useEffect(() => {
    if (!shouldPlay || !videoRef.current) return;
    const v = videoRef.current;
    const p = v.play && v.play();
    if (p && typeof p.then === "function") p.catch(() => {});
  }, [shouldPlay]);

  const onEnded = () => {
    try {
      if (typeof window !== "undefined")
        sessionStorage.setItem(sessionKey, "1");
    } catch {}
    setPlayed(true);
    setShouldPlay(false);
  };

  const handleCanPlay = () => {
    setVideoVisible(true);
    try {
      videoRef.current && videoRef.current.play && videoRef.current.play();
    } catch {}
  };

  if (reduced || played) {
    return (
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <img
          src={posterSrc}
          alt="stack ya mac"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/2] w-full overflow-hidden"
    >
      <img
        src={posterSrc}
        alt="stack ya mac"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-linear ${
          videoVisible ? "opacity-0" : "opacity-100"
        }`}
        style={{ objectFit: "cover" }}
        loading="lazy"
      />

      <video
        ref={videoRef}
        src={shouldPlay ? videoSrc : undefined}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-linear ${
          videoVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ objectFit: "cover" }}
        muted
        playsInline
        onCanPlay={handleCanPlay}
        onEnded={onEnded}
        preload={shouldPlay ? "auto" : "metadata"}
      />
    </div>
  );
}
