import React, { useRef, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import FoodCard from "./FoodCard";

export default function CategoryRow({ section }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollBy({ left: e.deltaY, behavior: "smooth" });
      }
    };
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section aria-label={section.title}>
      <SectionHeader
        id={section.id}
        title={section.title}
        caption={section.caption}
      />
      <div className="mx-auto max-w-7xl px-4">
        <div
          ref={ref}
          className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
          style={{ scrollPaddingLeft: 16 }}
        >
          {section.items.map((it) => (
            <FoodCard key={it.id} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}
