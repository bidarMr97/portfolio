import BackGround from "@/components/En-Components/BackGround/page";
import Skills from "@/components/En-Components/EN-Skills/page";

export default function HomeEn() {




  return (
    <div>

      <section className="h-160 flex flex-col lg:flex lg:flex-col lg:justify-start lg:pt-22">
        <div className="relative text-center font-[Michroma] z-10 select-none mt-[50px]">
          <h1 className="dark:text-[red] sm:text-4xl text-white text-[23px]  text-center lg:text-white   lg:text-6xl xl:text-[70px]">Mohammad-Reza Bidar</h1>
          <h2 className="text-stone-200 mt-[50px]  text-center lg:text-3xl  lg:pt-[100px] ">Front-end Developer</h2>
        </div>

        <div className="select-none blur-[1px] mt-[-100px] font-[Michroma] text-center lg:mt-[-225px]  lg:dark:mt-[-244px] xl:mt-[-235px] xl:dark:mt-[-255px]">
          <p className=" text-[23px]  sm:text-4xl lg:blur-[4px] lg:dark:text-[red] dark:mt-[-10px] lg:dark:mt-[0px]  lg:text-6xl xl:text-[70px]" >Mohammad-Reza Bidar</p>
          <p className="mt-[50px] sm:mt-[42px] lg:text-3xl lg:pt-[100px] lg:dark:pt-[100px] lg:blur-[2px]">Front-end Developer</p>
        </div>
        <div className="dark:hidden absolute inset-0 h-[700px] lg:w-full lg:h-[800px] bg-gradient-to-b from-black via-transparent to-black opacity-60 pointer-events-none z-0" />
        <nav className="lg:flex grid-row text-center text-gray-300 leading-[50px] lg:justify-center  gap-x-5 lg:gap-x-10  mt-[100px] lg:text-[25px] font-[michroma] font-bold dark:text-[white] ">
          <a href="#background">BackGround</a><br />
          <a href="#skills">Skills</a><br />
          <a href="/resume/bidar.pdf" download>PDF Resume</a><br />
          <a href="#footer">Contact Me</a>
        </nav>

      </section>



      <section id="background" className="mt-[40px] select-none  h-170 lg:h-80  scroll-mt-[100px] sm:h-120 md:h-120 ">
        <BackGround />
      </section>
           
      <section id="skills" className="select-none  lg:h-70  scroll-mt-[100px] lg:ml-[90px]">
        <Skills />
      </section>

    </div>


  );
}




