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
import { FaArrowCircleDown } from "react-icons/fa";
export default function HomeFa() {
  return (
    <div dir="rtl" className="lg:flex ">

      <div className=" lg:border-l-[2px] lg:border-[whitesmoke] lg:w-[250px] text-center lg:sticky lg:top-0 lg:h-screen p-4 gap-10">

        <div dir="rtl" className="lg:mt-4 flex gap-10 justify-between ">
          <LangToggle />
          <DarkMode />
        </div>
        <div className="select-none lg:mt-[0px] mt-[40px]">
          <h1 className="font-[fa8] lg:mt-10 text-[26px] text-[#0888fe]">&lt; /محمدرضا بیدار&gt;</h1>
          

          <h2 className="font-bold font-[fa12] mt-[10px] text-[20px] leading-[40px] flex flex-col lg:gap-0 gap-2 justify-center items-center">
            <span className="flex items-center gap-2" > برنامه‌نویس<img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-programming-language-software-with-admin-access-control-programing-bold-tal-revivo.png" alt="external-programming-language-software-with-admin-access-control-programing-bold-tal-revivo"/></span>

            <span className="flex items-center gap-2">توسعه‌دهنده<img width="20" height="20" src="https://img.icons8.com/ios-filled/50/development-skill.png" alt="development-skill"/></span>

            <span className="flex items-center gap-2">طراح صفحات وب<img width="21" height="21" src="https://img.icons8.com/fluency-systems-filled/48/designer.png" alt="designer"/></span>
          </h2>

        </div>

        <div className="leading-[35px] mt-[40px] lg:leading-[45px]">
          <NavHighlighter sectionIds={["project", "skills", "aboutme", "contactme"]} />
        </div>

        <div className="lg:flex leading-[20px] lg:flex-col mt-5 lg:leading-[40px]  text-[18px]  font-[fa6] ">

          <a href="/resume/bidar.pdf" download className="hover:text-[#0888fe] border border-gray-400 rounded-xl px-4 py-2 mt-[30px] text-center hover:bg-gray-100 transition"> دانلود رزومه</a>



          <a href="tel:+989192080697" className="hidden lg:font-[fa11] lg:font-bold  lg:text-[16px]  lg:flex lg:items-center lg:justify-center gap-4 lg:gap-4 gap-2 lg:mt-[17px] lg:ml-[25px] lg:mt-[20px]">
            <GiSmartphone size={20} />09192080697</a>
          

          <h1 className="hidden lg:font-[fa12] lg:select-none lg:flex lg:items-center lg:justify-center lg:gap-4  mt-[22px] gap-4 lg:mt-[2px] lg:ml-[25px]"> <MdOutlineLocationOn />تهران،ایران   </h1>


          <div className="text-[30px] lg:text-[18px] lg:mt-[30px] mt-[50px]  flex justify-center">
            <SocialLinks />
          </div>
        </div>

      </div>

      <div className="lg:flex lg:flex-col lg:justify-center">

        <div id="project" className="lg:w-full  lg:h-screen ">
          <Projects />
        </div>


        <div id="skills" dir="ltr" className="lg:flex lg:flex-col lg:w-full  lg:h-screen lg:items-center lg:justify-center lg:text-center pt-[20px]">
          <h1 className="lg:text-[4rem] font-[fa7] text-[#0888fe] font-black lg:ml-[10px] lg:border-none text-[40px] text-center flex items-center gap-5 ml-[10px]"> <FaArrowCircleDown />زبان ها و فریم ورک ها <FaArrowCircleDown /></h1>
          <Skills />
        </div>

        <div id="aboutme" className=" lg:w-full lg:h-screen lg:flex lg:flex-col ">
          <AboutMe />
        </div>





        <div id="contactme" dir="ltr" className=" lg:w-full  lg:h-screen leading-[50px] items-center justify-center text-center  lg:mt-[50px] mt-[100px] flex">
          <img src="/images/silver.jpeg" alt="" className="lg:w-screen lg:h-screen blur-3xl"/>
          <ContactMe />
        </div>

      </div>



    </div >
  );
}
