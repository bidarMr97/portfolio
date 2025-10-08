import Projects from "@/components/Fa-Components/Projects/page";
import Skills from "@/components/Fa-Components/Fa-Skills/page";
import LangToggle from "@/components/links-buttons/language-btn/toggle-switch";
import SocialLinks from "@/components/links-buttons/social-links/socialLinks";
import AboutMe from "@/components/Fa-Components/About Me/page";
import ContactMe from "@/components/Fa-Components/Contact Me/page";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";
import DarkMode from "@/components/links-buttons/darkmode-btn/dark-btn";
import NavHighlighter from "@/components/Fa-Components/NavHighlighter/page";

export default function HomeFa() {
  return (
    <div dir="rtl" className="flex ">

      <div className="border-l-[2px] border-[whitesmoke] w-[250px] text-center sticky top-0 h-screen p-4 gap-10 ">
        <div dir="rtl" className="mt-4 flex gap-10">
          <LangToggle />
          <DarkMode />
        </div>
        <h1 className="font-[fa8] mt-10 text-[26px] w-full select-none">&lt; /محمدرضا بیدار&gt;</h1>
        <h2 className="font-bold mt-[10px] text-[20px] leading-[40px] select-none">برنامه‌نویس <br />توسعه‌دهنده <br />طراح صفحات وب</h2>
        <div className="flex flex-col mt-20 leading-[40px] text-[18px]  font-[fa6] ">
          <NavHighlighter
            sectionIds={["project", "skills", "aboutme", "contactme"]}
          />
          <a href="/resume/bidar.pdf" download className="hover:text-[#0888fe] border border-gray-400 rounded-xl px-4 py-2 mt-[30px] text-center hover:bg-gray-100 transition"> دانلود رزومه</a>

          <div className="flex items-center gap-6 mr-[15px] mt-[20px]">
            <GiSmartphone size={20} />
            <a href="tel:+989192080697" className="font-[fa11] font-bold text-center text-[16px]">09192080697</a>
          </div>

          <div className="flex items-center gap-10 mr-[15px]">
            <MdOutlineLocationOn />
            <h1 className="font-[fa12] select-none ">تهران،ایران</h1>
          </div>

          <div className="social-links mt-[30px]">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">

        <div id="project" className="h-screen w-full ">
          <Projects />
        </div>


        <div id="skills" dir="ltr" className="flex flex-col w-full  h-screen items-center justify-center text-center">
          <h1 className="text-[4rem] font-[fa7] text-[#0888fe] font-black ml-[10px]">زبان ها و فریم ورک ها</h1>
          <Skills />
        </div>

        <div id="aboutme" className=" w-full  h-screen flex flex-col ">
          <AboutMe />
        </div>





        <div id="contactme" dir="ltr" className=" w-full  h-screen flex leading-[50px] items-center justify-center text-center  ">
          <img src="/images/silver.jpeg" alt="" className="relative -z-1 w-screen h-screen blur-3xl" />
          <ContactMe />
        </div>

      </div>



    </div >
  );
}
