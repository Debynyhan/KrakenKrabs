import React from "react";
import { ASSETS } from "../constants/site";

export default function LocationHours() {
  return (
    <section id="location" className="mt-14">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="rounded-2xl p-6 md:p-8 border shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ background: "var(--kk-midnight)", borderColor: "#0D2A3355" }}
        >
          <div className="md:col-span-2">
            <h2
              className="text-2xl font-semibold"
              style={{ color: "var(--kk-light-foam)" }}
            >
              Find Us
            </h2>
            <p
              className="text-sm mt-1"
              style={{ color: "var(--kk-warm-sand)" }}
            >
              University Heights, OH · Tap to navigate
            </p>
            <div className="mt-4 w-full overflow-hidden rounded-xl">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open in Maps"
              >
                <img
                  src={ASSETS.images.mapPlaceholder}
                  alt="Map preview"
                  className="w-full h-auto opacity-80"
                />
              </a>
            </div>
          </div>
          <div>
            <h3
              className="font-semibold"
              style={{ color: "var(--kk-light-foam)" }}
            >
              Hours
            </h3>
            <ul
              className="mt-2 text-sm space-y-1"
              style={{ color: "var(--kk-warm-sand)" }}
            >
              <li>Mon–Thu: 11a–9p</li>
              <li>Fri–Sat: 11a–10p</li>
              <li>Sun: 12p–8p</li>
            </ul>
            <a
              href="tel:+12165551234"
              className="inline-block mt-4 px-4 py-2 rounded-xl font-semibold border"
              style={{
                borderColor: "var(--kk-kraken-red)",
                color: "var(--kk-kraken-red)",
              }}
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
