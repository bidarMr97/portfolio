"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type Lang = "English-Home" | "Farsi-Home";

export default function LangToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLang: Lang = pathname.startsWith("/Farsi-Home")
    ? "Farsi-Home"
    : "English-Home";

  const [lang, setLang] = useState<Lang>(currentLang);

  useEffect(() => {
    setLang(currentLang);
  }, [currentLang]);

  const toggleLang = () => {
    const newLang = lang === "English-Home" ? "Farsi-Home" : "English-Home";
    setLang(newLang);

    const newPath = pathname.replace(/^\/(English-Home|Farsi-Home)/, `/${newLang}`);
    router.replace(newPath); // ✅ replace instead of push
  };

  return (
    <button
      onClick={toggleLang}
      className={`relative flex items-center w-20 h-10 rounded-full transition-colors duration-200 ${lang === "Farsi-Home" ? "bg-gray-300" : "bg-gray-300"}`}
    >
      <span
        className={`absolute top-1 left-1 w-8 h-8 flex items-center justify-center rounded-full shadow-md transform transition-transform duration-200 text-xs font-bold   
          ${lang === "Farsi-Home" ? "translate-x-10 bg-[#0f172a] text-[white]" : "translate-x-0 bg-[grey] text-white"}`}
      >
        {lang === "Farsi-Home" ? "FA" : "EN"} {/* ✅ shorter text */}
      </span>
    </button>
  );
}

