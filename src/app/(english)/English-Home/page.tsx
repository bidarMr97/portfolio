import BackGround from "@/components/En-Components/BackGround/page";
import Skills from "@/components/En-Components/EN-Skills/page";

export default function HomeEn() {




  return (
    <div>

      <div className="h-160 flex flex-col lg:flex lg:flex-col lg:justify-start lg:pt-22">
        <div className="relative lg:text-center font-[Michroma] z-10 select-none">
          <h1 className="dark:text-[red] text-white text-[30px] pt-[50px] text-center lg:text-white   lg:text-8xl ">Mohammad-Reza Bidar</h1>
          <h2 className="lg:text-stone-200 text-stone-200 pt-[50px] text-center lg:text-3xl lg:pt-[100px] ">Front-end Developer</h2>
        </div>

        <div className=" blur-[1px] mt-[-110px]  font-[Michroma] text-center lg:mt-[-210px] select-none lg:dark:mt-[-230px]">
          <h1 className="lg:blur-[4px] lg:dark:text-[red] dark:mt-[-10px] lg:dark:mt-[0px] text-[30px] lg:text-8xl">Mohammad-Reza Bidar</h1>
          <h2 className="lg:text-3xl lg:pt-[90px] lg:dark:pt-[100px] lg:blur-[2px]  pt-[47px]">Front-end Developer</h2>
        </div>
        <div className="dark:hidden absolute inset-0 lg:w-full w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-60 pointer-events-none z-0" />
        <div className="lg:flex grid-row text-center text-gray-300 leading-[50px] lg:justify-center  gap-x-5 lg:gap-x-20  mt-[100px] lg:text-[25px] font-[michroma] font-bold dark:text-[white] ">
          <a href="#background">BackGround</a><br />
          <a href="#skills">Skills</a><br />
          <a href="/resume/bidar.pdf" download>PDF Resume</a><br />
          <a href="#footer">Contact Me</a>

        </div>

      </div>



      <div id="background" className="select-none lg:h-80 h-160 scroll-mt-[100px]">
        <BackGround />
      </div>
           
      <div id="skills" className="select-none lg:h-70 h-220 scroll-mt-[100px]">
        <Skills />
      </div>

    </div>


  );
}




