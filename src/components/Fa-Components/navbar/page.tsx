import DarkMode from "@/components/links-buttons/darkmode-btn/dark-btn";
import LangToggle from "@/components/links-buttons/language-btn/toggle-switch";
import { FaHubspot } from "react-icons/fa6";
import { IoLogoDesignernews } from "react-icons/io5";
import { SiCodersrank } from "react-icons/si";
import NavHighlighter from "../NavHighlighter/page";
import SocialLinks from "@/components/links-buttons/social-links/socialLinks";
import { MdOutlineLocationOn } from "react-icons/md";

export default function NavBar() {
    return(
         <div>

        <div className="flex gap-10 justify-between p-4">
          <LangToggle />
          <DarkMode />
        </div>


        <section className="select-none mt-[40px] lg:leading-[75px]">
          <h1 className="font-[fa8] text-[26px] text-[#0888fe]">&lt; /محمدرضا بیدار&gt;</h1>

          <p className="sr-only">
            محمدرضا بیدار برنامه‌نویس وب در تهران متخصص Next.js، React و TypeScript
          </p>

          <h2 className="font-bold font-[fa12] mt-[10px] text-[20px] leading-[40px] flex flex-col lg:gap-0 gap-2 justify-center items-center lg:leading-[45px]">
            <span className="flex items-center gap-2" >برنامه‌نویس<SiCodersrank /></span>

            <span className="flex items-center gap-2">توسعه‌دهنده < FaHubspot /></span>

            <span className="flex items-center gap-2">طراح صفحات وب<IoLogoDesignernews /></span>
          </h2>

        </section>

        <div className="leading-[35px] mt-[40px] lg:leading-[55px] ">
          <NavHighlighter sectionIds={["project", "skills", "aboutme", "contactme"]} />
        </div>
        {/* ******************************************************************************************************** */}
        <div className=" text-[18px] mt-5  font-[fa6] leading-[20px]    lg:leading-[40px]">

          <a href="/resume/bidar.pdf" download className="hover:text-[#0888fe] border border-gray-400 rounded-xl px-4 py-2 mt-[30px] text-center hover:bg-gray-100 transition"> دانلود رزومه</a>


          <h2 className=" flex justify-center mt-[40px] items-center lg:font-[fa12] lg:select-none lg:flex lg:items-center lg:justify-center lg:gap-4    lg:mt-[20px] lg:ml-[25px]"> <MdOutlineLocationOn />تهران،ایران   </h2>


          <section className=" flex justify-center text-[30px] mt-[30px] lg:text-[18px] lg:mt-[30px]">
            <SocialLinks />
          </section>
        </div>
      </div>
    )
    
}