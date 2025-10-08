// import { FaHtml5 } from "react-icons/fa6";
// import { SiCss3 } from "react-icons/si";
// import { TbBrandJavascript } from "react-icons/tb";
// import { FaReact } from "react-icons/fa";
// import { RiNextjsFill } from "react-icons/ri";
// import { BiLogoTypescript } from "react-icons/bi";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { FaBootstrap } from "react-icons/fa6";
// import { FaSass } from "react-icons/fa";
// import { SiMui } from "react-icons/si";
// import { FaGithub } from "react-icons/fa6";
// import { VscVscode } from "react-icons/vsc";
// import { DiChrome } from "react-icons/di";
// import { SiEslint } from "react-icons/si";
// import { FaDocker } from "react-icons/fa";
// import { IoLogoVercel } from "react-icons/io5";
// export default function Skills() {
//     return (
//         <div dir="rtl" className="lg:flex flex lg:justify-center lg:ml-[150px] gap-x-10 lg:mt-[100px]">
//             <div className="flex">
//                 <h1 className="select-none">
//                     مهارت ها
//                 </h1>
//             </div>
//             <div className="grid grid-cols-4 gap-5 lg:gap-10 mt-10 lg:mt-0">
//                 <FaHtml5 className="text-[orange] text-[70px]" />
//                  html
//                 <SiCss3 className="text-[70px]" />
//                css
//                 <TbBrandJavascript className="text-[70px]" />
//                 <FaReact className="text-[70px]" />
//                 <RiNextjsFill className="text-[70px]" />
//                 <BiLogoTypescript className="text-[70px]" />
//                 <RiTailwindCssFill className="text-[70px]" />
//                 <FaBootstrap className="text-[70px] text-[purple]"/>
//                 <FaSass className=" text-[70px] text-[pink]"/>
//                 <SiMui  className="text-[70px]" />
//                 <FaGithub className="text-[70px]"/>
//                 <VscVscode className="text-[70px]" />
//                 <DiChrome className="text-[70px]"/>
//                 <SiEslint className="text-[70px]"/>
//                 <FaDocker className="text-[70px]"/>
//                 <IoLogoVercel className="text-[70px]"/>
//                 <img className="w-[70px]" src="/images/turbopack.webp" alt="" />
//                 <img className="w-[70px]" src="/images/vite.png" alt="" />
//                 <div>
//                 </div>
//             </div>
//         </div>
//     )
// }



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
    <section dir="rtl" className="flex flex-col items-center mt-20 px-6">
   
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 sm:gap-8 max-w-6xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white/5 hover:bg-white/10 rounded-2xl backdrop-blur-md transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <div className="text-6xl">{skill.icon}</div>
            <p className="mt-2 text-sm font-[michroma]">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
