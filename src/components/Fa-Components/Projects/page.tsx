
export default function Projects() {
    return (
        <div className=" lg:flex lg:justify-center lg:items-center">
            <div>
                <img src="/images/war.jpg" alt="warcraft dota 1 image" className="lg:blur-3xl " />
            </div>

            <div className="lg:flex lg:absolute  lg:bg-[silver]/30 lg:h-[500px] lg:w-[770px]  lg:rounded-2xl ">

                <h1 className="text-[18px] mt-[10px] text-center font-[fa11] font-bold sm:text-[25px] lg:text-[19px] lg:p-[5px] lg:absolute lg:mt-[50px] ">برنامه ی راهنمای آموزشی بازی Warcraft Dota <span className="font-[fa5]">1</span>(دستیار دوتا) </h1>
                <p className="text-center mt-[15px] leading-[35px] sm:text-[22px] sm:leading-[50px] lg:w-[600px] lg:leading-[50px] lg:text-[22px] lg:text-center lg:mt-[12%]">
                    در حال حاضر روی برنامه‌ی دستیار دوتا ۱ که
                    راهنما برای بازی کامپیوتری <span className="font-[michroma]">Warcraft Dota 1</span>
                    هست کار می‌کنم. <br /> اگر پیشنهادی برای همکاری داشتین،از طریق{" "}
                    <a href="#contactme" className="font-bold text-blue-600 hover:underline hover:text-blue-800 transition-colors">
                        <br />  لینک‌های تماس<br />
                    </a>{" "}
                    که در انتهای صفحه برای شما قرار دادم،<br /> با من در ارتباط باشید.
                </p>
                <img src="/images/war.jpg" alt="warcraft dota 1 image" className="hidden sm:hidden lg:block lg:rounded-2xl lg:shadow-lg lg:object-cover  lg:w-[300px] " />
            </div>

        </div>
    );
}
