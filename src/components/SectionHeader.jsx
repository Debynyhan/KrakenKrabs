import React from "react";
import { SEA } from "../constants/site";

export default function SectionHeader({ id, title, caption }) {
  return (
    <div id={id} className="mx-auto max-w-7xl px-4 mt-10 mb-3">
      <h2
        className="text-2xl md:text-3xl font-semibold"
        style={{ color: SEA.foam }}
      >
        {title}
      </h2>
      {caption ? (
        <p className="text-sm mt-1" style={{ color: SEA.sand }}>
          {caption}
        </p>
      ) : null}
    </div>
  );
}
