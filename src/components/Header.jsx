import React from "react";
import { SEA } from "../constants/site";

export default function Header() {
  const TOAST_URL = "https://example.com/order";
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" aria-label="Kracken Krabs home">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center p-1">
              <img
                src="/media/logo.png"
                alt="Kracken Krabs logo"
                className="w-full h-full object-contain"
              />
            </div>
          </a>
          <span
            className="font-semibold text-base md:text-lg"
            style={{ color: SEA.foam }}
          >
            Kracken Krabs
          </span>
        </div>
        <nav
          className="hidden md:flex items-center gap-6 text-sm"
          aria-label="Primary"
        >
          <a
            href="#menu"
            className="hover:underline"
            style={{ color: SEA.sand }}
          >
            Menu
          </a>
          <a
            href="#specials"
            className="hover:underline"
            style={{ color: SEA.sand }}
          >
            Specials
          </a>
          <a
            href="#location"
            className="hover:underline"
            style={{ color: SEA.sand }}
          >
            Location
          </a>
        </nav>
        <a
          href={TOAST_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="px-4 py-2 rounded-xl font-semibold shadow"
          style={{ background: SEA.coral, color: SEA.trench }}
        >
          Order Now
        </a>
      </div>
    </header>
  );
}
