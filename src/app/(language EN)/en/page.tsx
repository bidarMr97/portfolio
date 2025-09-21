import BackGround from "@/components/EnDocs/BackGround/page";
import Skills from "@/components/EnDocs/Skills/page";

export default function HomeEn() {




  return (
    <div>

      <div className="h-160 lg:flex lg:flex-col lg:justify-start lg:pt-22">
        <div className="lg:relative lg:text-center font-[Michroma] lg:z-10 select-none">
          <h1 className="dark:text-[red] lg:text-white   lg:text-8xl ">Mohammad-Reza Bidar</h1>
          <h2 className="lg:text-stone-200 lg:text-3xl lg:pt-[100px] ">Front-end Developer</h2>
        </div>

        <div className="lg:blur-[4px] lg:font-[Michroma] lg:text-center lg:mt-[-210px] select-none dark:mt-[-230px]">
          <h1 className=" dark:text-[red]  lg:text-8xl">Mohammad-Reza Bidar</h1>
          <h2 className=" lg:text-3xl lg:pt-[100px]">Front-end Developer</h2>
        </div>

        <div className="lg:flex justify-center lg:gap-x-40  mt-[100px] text-[25px] font-[michroma] font-bold dark:text-[white] ">
          <a href="#background">BackGround</a>
          <a href="#skills">Skills</a>
          <a href="/resume/bidar.pdf" download>PDF Resume</a>
          <a href="#footer">Contact Me</a>
        </div>

      </div>



      <div id="background" className="select-none h-70">
        <BackGround />
      </div>

      <div id="skills" className="select-none h-70">
        <Skills/>
      </div>

    </div>


  );
}




