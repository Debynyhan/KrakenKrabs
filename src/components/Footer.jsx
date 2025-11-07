import React from "react";
import { SEA } from "../constants/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div
        className="mx-auto max-w-7xl px-4 py-10 text-sm"
        style={{ color: SEA.sand }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Kracken Krabs. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <a href="#menu" className="hover:underline">
              Menu
            </a>
            <a href="#specials" className="hover:underline">
              Specials
            </a>
            <a href="#location" className="hover:underline">
              Location
            </a>
            <a href="#" className="hover:underline">
              Allergens
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
