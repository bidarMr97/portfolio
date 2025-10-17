"use client";
import { useEffect, useState } from "react";

interface NavHighlighterProps {
  sectionIds: string[];
}

export default function NavHighlighter({ sectionIds }: NavHighlighterProps) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [sectionIds]);

  const labelMap: Record<string, string> = {
    project: "پروژه",
    skills: "زبان ها و فریم ورک ها",
    aboutme: "درباره‌ی من",
    contactme: "تماس با من",
  };

  return (
    <div className="flex flex-col gap-2 font-[fa6] text-[18px]">
      {sectionIds.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`relative transition-all duration-300 ease-in-out
            hover:text-[#0888fe]
            ${
              active === id
                ? "lg:text-[#0888fe] lg:text-[24px]"
                : "lg:text-gray-700 dark:text-[white]"
            }
            after:content-[''] after:absolute after:right-0 after:-bottom-1
            after:h-[2px] after:bg-[#0888fe] after:transition-all after:duration-300`}
        >
          {labelMap[id]}
        </a>
      ))}
    </div>
  );
}
