import Projects from "@/components/Fa-Components/Projects/page";
import Skills from "@/components/Fa-Components/Fa-Skills/page";
import AboutMe from "@/components/Fa-Components/About Me/page";
import ContactMe from "@/components/Fa-Components/Contact Me/page";
import {FaArrowCircleDown } from 'react-icons/fa';
export default function HomeFa() {
  return (
    <div>
        <section id="project">
          <Projects />
        </section>

        <section id="skills" dir="ltr" className="mt-[80px]">
          <h2 className="text-[31px] sm:text-[55px] font-[fa7] text-[#0888fe] font-black flex items-center justify-center gap-5 lg:text-[4rem]"> <FaArrowCircleDown />زبان ها و فریم ورک ها <FaArrowCircleDown /></h2>
          <Skills />
        </section>

        <section id="aboutme">
          <AboutMe />
        </section>


        <section id="contactme" dir="ltr" className="flex mt-[100px] leading-[50px] items-center justify-center text-center relative sm:pb-[100px]">
          <img src="/images/silver.jpeg" alt="پس‌زمینه بخش تماس وب‌سایت محمدرضا بیدار برنامه‌نویس وب"
            className="absolute -z-1 h-full w-full object-cover blur-3xl dark:hidden" />
          <div>
            <ContactMe />
          </div>
        </section>
     
    </div >
  );
}
