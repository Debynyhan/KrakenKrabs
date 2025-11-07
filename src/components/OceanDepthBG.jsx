import React from "react";
import { SEA } from "../constants/site";

function SeaIcon({ x, y, size, type }) {
  const pathColor1 = SEA.tide;
  const pathColor2 = SEA.midnight;
  const icons = {
    octo: `<svg width='${size}' height='${size}' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='32' cy='24' r='10' stroke='${pathColor1}' stroke-width='2' opacity='0.3'/><path d='M16 40c6 6 26 6 32 0' stroke='${pathColor2}' stroke-width='2' opacity='0.22' stroke-linecap='round'/><path d='M14 34c2 3 4 6 4 10M50 34c-2 3-4 6-4 10' stroke='${pathColor1}' stroke-width='2' opacity='0.22' stroke-linecap='round'/></svg>`,
    anchor: `<svg width='${size}' height='${size}' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M32 8v28' stroke='${pathColor1}' stroke-width='2' opacity='0.28'/><circle cx='32' cy='8' r='4' stroke='${pathColor2}' stroke-width='2' opacity='0.28'/><path d='M14 38c3 8 10 14 18 14s15-6 18-14' stroke='${pathColor1}' stroke-width='2' opacity='0.2' stroke-linecap='round'/></svg>`,
    crab: `<svg width='${size}' height='${size}' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'><ellipse cx='32' cy='36' rx='12' ry='8' stroke='${pathColor1}' stroke-width='2' opacity='0.25'/><path d='M20 28l-6-6M44 28l6-6' stroke='${pathColor2}' stroke-width='2' opacity='0.25' stroke-linecap='round'/></svg>`,
    shell: `<svg width='${size}' height='${size}' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 44c6-14 34-14 40 0' stroke='${pathColor1}' stroke-width='2' opacity='0.22' stroke-linecap='round'/><path d='M22 28c6-8 14-8 20 0' stroke='${pathColor2}' stroke-width='2' opacity='0.22' stroke-linecap='round'/></svg>`,
  };
  return (
    <div
      className="absolute animate-[float_12s_ease-in-out_infinite]"
      style={{ left: x, top: y, filter: "blur(0.3px)", opacity: 0.55 }}
      dangerouslySetInnerHTML={{ __html: icons[type] }}
    />
  );
}

export default function OceanDepthBG() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(1200px 600px at 20% -10%, #0A2B38 0%, transparent 55%), radial-gradient(900px 500px at 80% 110%, #0B2F3C 0%, transparent 50%), linear-gradient(180deg, ${SEA.trench} 0%, ${SEA.midnight} 40%, ${SEA.trench} 100%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-soft-light"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><circle cx="6" cy="6" r="1.2" fill="white" opacity="0.35"/><circle cx="30" cy="50" r="0.8" fill="white" opacity="0.25"/></svg>")',
        }}
      />
      <SeaIcon x="12%" y="68%" size={70} type="octo" />
      <SeaIcon x="82%" y="32%" size={56} type="anchor" />
      <SeaIcon x="52%" y="12%" size={64} type="crab" />
      <SeaIcon x="28%" y="42%" size={50} type="shell" />
    </div>
  );
}
