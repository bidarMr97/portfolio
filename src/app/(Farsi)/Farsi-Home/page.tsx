import Projects from "@/components/Fa-Components/Projects/page";
import Skills from "@/components/Fa-Components/Fa-Skills/page";
import LangToggle from "@/components/links-buttons/language-btn/toggle-switch";
import SocialLinks from "@/components/links-buttons/social-links/socialLinks";
import AboutMe from "@/components/Fa-Components/About Me/page";
import ContactMe from "@/components/Fa-Components/Contact Me/page";
import { MdOutlineLocationOn } from "react-icons/md";
import DarkMode from "@/components/links-buttons/darkmode-btn/dark-btn";
import NavHighlighter from "@/components/Fa-Components/NavHighlighter/page";
import { FaHubspot,FaArrowCircleDown   } from 'react-icons/fa';
import { IoLogoDesignernews } from 'react-icons/io';
import { SiCodersrank } from 'react-icons/si';
export default function HomeFa() {
  return (
    <div dir="rtl" className="lg:flex dark:bg-[black] dark:text-[white]">

      <div className=" text-center h-[700px] lg:sticky lg:top-0 lg:h-full lg:border-l-[2px] lg:border-[whitesmoke] lg:w-[240px] dark:bg-[black] dark:text-[white]">

        <div dir="rtl" className="flex gap-10 justify-between p-4">
          <LangToggle />
          <DarkMode />
        </div>


        <div className="select-none mt-[40px] lg:leading-[75px]">
          {/* <h1 className="font-[fa8] text-[26px] text-[#0888fe]">&lt; /محمدرضا بیدار&gt;</h1> */}


          <h2 className="font-bold font-[fa12] mt-[10px] text-[20px] leading-[40px] flex flex-col lg:gap-0 gap-2 justify-center items-center lg:leading-[45px]">
            <span className="flex items-center gap-2" > برنامه‌نویس<SiCodersrank/></span>

            <span className="flex items-center gap-2">توسعه‌دهنده < FaHubspot/></span>

            <span className="flex items-center gap-2">طراح صفحات وب<IoLogoDesignernews/></span>
          </h2>

        </div>

        <div className="leading-[35px] mt-[40px] lg:leading-[55px] ">
          <NavHighlighter sectionIds={["project", "skills", "aboutme","contactme"]} />
        </div>
        {/* ******************************************************************************************************** */}
        <div className=" text-[18px] mt-5  font-[fa6] leading-[20px]    lg:leading-[40px]">

          <a href="/resume/bidar.pdf" download className="hover:text-[#0888fe] border border-gray-400 rounded-xl px-4 py-2 mt-[30px] text-center hover:bg-gray-100 transition"> دانلود رزومه</a>


          <h1 className=" flex justify-center mt-[40px] items-center lg:font-[fa12] lg:select-none lg:flex lg:items-center lg:justify-center lg:gap-4    lg:mt-[20px] lg:ml-[25px]"> <MdOutlineLocationOn />تهران،ایران   </h1>


          <div className=" flex justify-center text-[30px] mt-[30px] lg:text-[18px] lg:mt-[30px]">
            <SocialLinks />
          </div>
        </div>
      </div>
      {/* ******************************************************************************************************************************************* */}



      <div>

        <div id="project">
          <Projects />
        </div>

        <div id="skills" dir="ltr" className="mt-[80px]">
          <h1 className="text-[31px] sm:text-[55px] font-[fa7] text-[#0888fe] font-black flex items-center justify-center gap-5 lg:text-[4rem]"> <FaArrowCircleDown />زبان ها و فریم ورک ها <FaArrowCircleDown /></h1>
          <Skills />
        </div>

        <div id="aboutme">
          <AboutMe />
        </div>


        <div id="contactme" dir="ltr" className="flex mt-[100px] leading-[50px] items-center justify-center text-center relative sm:pb-[100px]">
          <img src="/images/silver.jpeg" alt="" className="absolute -z-1 h-full w-full object-cover blur-3xl" />
          <div>
          <ContactMe />
          </div>
        </div>
      </div>


    </div >
  );
}
