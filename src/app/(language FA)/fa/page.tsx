import LangToggle from "@/components/links/language-btn/toggle-switch";

export default function HomeFa() {
  return (
    <div className="flex">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video src="/videos/clip.mp4" autoPlay loop muted className="w-screen h-screen object-cover" />
      </div>
          <div className="fixed top-10 mr-[5px] w-[250px] h-[700px] bg-white/10 backdrop-blur-md rounded-full">
          <div>
            <LangToggle />
          </div>
      </div>
      <div className="my-16 fixed flex justify-center">
        <div className="bg-white/10 backdrop-blur-md rounded-xl mr-[260px] w-[1000px]  h-[44rem] flex items-center ">
        </div>
      </div>

      <div className="fixed top-[250px] left-0 w-[250px] h-[300px] bg-white/10 backdrop-blur-md rounded-full flex flex-col justify-center items center space-y-2 text-center font-[fa8] text-[#1268d2] text-[22px]">
      <a>زبان ها و فریم ورک ها </a>
      <a>پروژه</a>
      <a>لینک دانلود رزومه</a>
      <a>مسیر آینده</a>
      <a>تماس با من</a>
      </div>

    </div>
  );
}

