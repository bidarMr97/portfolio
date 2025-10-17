"use client"
import { useState, useEffect } from "react";
import { IoMoonSharp } from "react-icons/io5";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  // On mount: check localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDark(savedTheme === "dark");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else {
      // Detect system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  // Sync dark mode state with html + localStorage
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`relative flex items-center w-20 h-10 rounded-full transition-colors duration-300 ${dark ? "bg-[white]" : "bg-gray-300"}`}>
      {/* Knob */}
      <span
        className={`absolute top-1 left-1 w-8 h-8 flex items-center justify-center rounded-full shadow-md transform transition-transform duration-300 
          ${dark ? "translate-x-10 bg-[#0f172a]" : "translate-x-0 bg-[gray]" }`}>
        <IoMoonSharp className={`${dark ? "text-[white]" : "text-[white]"}`} />
      </span>
    </button>
  );
}
