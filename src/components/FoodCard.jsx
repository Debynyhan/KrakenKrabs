import React from "react";
import { ASSETS } from "../constants/site";
import StackPlayOnce from "./StackPlayOnce";

export default function FoodCard({ item }) {
  const src = ASSETS.images[item.imgKey];
  return (
    <div className="min-w-[68%] sm:min-w-[48%] md:min-w-[32%] lg:min-w-[24%] xl:min-w-[20%] snap-start">
      <div
        className="relative rounded-2xl overflow-hidden shadow-lg border"
        style={{ background: "var(--kk-midnight)", borderColor: "#0D2A3355" }}
      >
        <div className="relative">
          {item.id === "stack-ya-mac" || item.imgKey === "stackYaMac" ? (
            <StackPlayOnce
              videoSrc="/media/stack-ya-mac-video.mp4"
              posterSrc={src}
              sessionKey="stack_ya_mac_played"
            />
          ) : (
            <div className="aspect-[3/2] w-full overflow-hidden">
              <img
                src={src}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between gap-3">
            <h3
              className="font-semibold truncate"
              title={item.name}
              style={{ color: "var(--kk-light-foam)" }}
            >
              {item.name}
            </h3>
            <span className="text-sm" style={{ color: "var(--kk-warm-sand)" }}>
              {item.price}
            </span>
          </div>
          <a
            href="#"
            className="mt-3 inline-flex w-full items-center justify-center px-3 py-2 rounded-xl text-sm font-semibold btn-cta-gradient"
          >
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
