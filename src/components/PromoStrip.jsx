import React from "react";

export default function PromoStrip() {
  return (
    <div className="mx-auto max-w-7xl px-4 mt-6 md:mt-10">
      <div
        className="rounded-2xl p-4 md:p-5 shadow-lg border"
        style={{ background: "var(--kk-midnight)", borderColor: "#0D2A3355" }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div
            className="text-base md:text-lg font-semibold"
            style={{ color: "var(--kk-light-foam)" }}
          >
            Free slushy with $25+ · Today only
          </div>
          <a
            href="#specials"
            className="inline-flex px-4 py-2 rounded-xl font-semibold border btn-outline-yellow"
          >
            Grab the Deal
          </a>
        </div>
      </div>
    </div>
  );
}
