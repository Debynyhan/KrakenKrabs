import React, { useRef, useState } from "react";
import { ASSETS, SEA } from "../constants/site";
import usePrefersReducedData from "../hooks/usePrefersReducedData";

export default function Hero() {
  const reduced = usePrefersReducedData();
  const INTRO_KEY = "kk_intro_seen";
  const hasSeenIntro = () => {
    try {
      if (typeof window === "undefined") return false;
      return sessionStorage.getItem(INTRO_KEY) === "1";
    } catch {
      return false;
    }
  };
  const markIntroSeen = () => {
    try {
      if (typeof window !== "undefined") sessionStorage.setItem(INTRO_KEY, "1");
    } catch {}
  };

  const [introPlaying, setIntroPlaying] = useState(
    () => !reduced && !hasSeenIntro()
  );
  const introRef = useRef(null);
  const mainRef = useRef(null);

  const endIntro = () => {
    markIntroSeen();
    setIntroPlaying(false);
    try {
      mainRef.current && mainRef.current.play && mainRef.current.play();
    } catch {}
    try {
      introRef.current && introRef.current.pause && introRef.current.pause();
    } catch {}
  };

  return (
    <section className="relative">
      <div className="relative h-[62vh] md:h-[72vh] w-full overflow-hidden">
        {!reduced ? (
          <div className="absolute inset-0">
            <video
              key={introPlaying ? "intro" : "intro-hidden"}
              ref={introRef}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                introPlaying ? "opacity-100" : "opacity-0"
              }`}
              autoPlay={introPlaying}
              muted
              playsInline
              preload="auto"
              onEnded={endIntro}
              onError={endIntro}
            >
              <source src={ASSETS.intro} type="video/mp4" />
            </video>

            <video
              key={introPlaying ? "main-hidden" : "main"}
              ref={mainRef}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                introPlaying ? "opacity-0" : "opacity-100"
              }`}
              autoPlay={!introPlaying}
              muted
              playsInline
              loop
              poster={ASSETS.heroPoster}
              preload="auto"
            >
              <source src={ASSETS.heroDesktop} type="video/mp4" />
            </video>

            {introPlaying && (
              <button
                type="button"
                onClick={endIntro}
                className="absolute right-4 top-4 z-10 rounded-xl bg-black/50 px-3 py-1.5 text-sm font-semibold text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Skip intro"
              >
                Skip intro
              </button>
            )}
          </div>
        ) : (
          <img
            src={ASSETS.heroPoster}
            alt="Seafood boil in motion"
            className="h-full w-full object-cover"
          />
        )}
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 pb-8">
            <h1
              className="text-4xl md:text-6xl font-black"
              style={{ textShadow: "0 6px 18px rgba(0,0,0,0.55)" }}
            >
              <span
                className="hero-shimmer"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, var(--kk-golden-treasure), rgba(255,255,255,0.95), var(--kk-golden-treasure))",
                }}
              >
                Let’s Get It Kraken.
              </span>
            </h1>
            <p
              className="mt-2 text-lg md:text-2xl font-medium"
              style={{
                color: SEA.sand,
                textShadow: "0 3px 10px rgba(0,0,0,0.45)",
              }}
            >
              Boils, baskets, and crispy things—done right.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="px-5 py-3 rounded-xl font-semibold shadow-lg btn-cta-gradient"
              >
                Order Now
              </a>
              <a
                href="#specials"
                className="px-5 py-3 rounded-xl font-semibold border btn-outline-yellow"
              >
                See Specials
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
