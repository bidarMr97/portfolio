"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type Lang = "en" | "fa";

export default function LangToggle() {
  const router = useRouter();
  const pathname = usePathname();

  // Detect lang from current URL (/en/... or /fa/...)
  const currentLang: Lang = pathname.startsWith("/fa") ? "fa" : "en";
  const [lang, setLang] = useState<Lang>(currentLang);

  useEffect(() => {
    setLang(currentLang);
  }, [currentLang]);

  const toggleLang = () => {
    const newLang = lang === "en" ? "fa" : "en";
    setLang(newLang);

    // Replace only the first part of the URL (/en or /fa)
    const newPath = pathname.replace(/^\/(en|fa)/, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLang}
      className={`relative flex items-center w-20 h-10 rounded-full transition-colors duration-200 ${
        lang === "fa" ? "bg-white" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute top-1 left-1 w-8 h-8 flex items-center justify-center rounded-full shadow-md transform transition-transform duration-200 text-xs font-bold 
          ${lang === "fa"?"translate-x-10 bg-[#0f172a] text-red-500" : "translate-x-0 bg-[grey] text-white" }`}
      >
        {lang.toUpperCase()}
      </span>
    </button>
  );
}
