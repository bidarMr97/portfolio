import { FaHtml5, FaBootstrap, FaSass, FaGithub, FaDocker } from "react-icons/fa6";
import { SiCss3, SiMui, SiEslint } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { DiChrome } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";
export default function Skills() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <SiCss3 className="text-blue-500" />, name: "CSS" },
    { icon: <TbBrandJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <RiNextjsFill />, name: "Next.js" },
    { icon: <BiLogoTypescript className="text-blue-600" />, name: "TypeScript" },
    { icon: <RiTailwindCssFill className="text-sky-400" />, name: "Tailwind" },
    { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
    { icon: <FaSass className="text-pink-400" />, name: "Sass" },
    { icon: <SiMui className="text-blue-400" />, name: "MUI" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <VscVscode className="text-blue-400" />, name: "VS Code" },
    { icon: <DiChrome className="text-yellow-500" />, name: "Chrome" },
    { icon: <SiEslint className="text-indigo-500" />, name: "ESLint" },
    { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
    { icon: <IoLogoVercel />, name: "Vercel" },
    { icon: <img src="/images/turbopack.webp" alt="Turbopack" className="w-14 h-14" />, name: "Turbopack" },
    { icon: <img src="/images/vite.png" alt="Vite" className="w-14 h-14" />, name: "Vite" },
  ];

  return (
    <section className="lg:flex lg:flex-col lg:items-center lg:mt-20 lg:px-6">
   
      <div className="grid grid-cols-3 lg:grid lg:grid-cols-6 lg:gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center lg:p-4 p-2 lg:bg-white/5 hover:bg-white/10 rounded-2xl lg:backdrop-blur-md transition-transform duration-300 shadow-md lg:hover:shadow-2xl lg:hover:scale-105"
          >
            <div className="text-6xl">{skill.icon}</div>
            <p className="mt-2 text-sm font-[michroma]">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
