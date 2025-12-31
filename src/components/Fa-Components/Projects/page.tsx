
export default function Projects() {
    return (
        <div className="mt-[40px] lg:flex lg:justify-center lg:items-center">
            <div>
                <img src="/images/war.jpg" alt="warcraft dota 1 image" className="lg:blur-3xl xl:h-[700px] xl:w-[1037px] 2xl:h-[800px] 2xl:w-[1286px]" />
            </div>

            <section className="lg:flex lg:absolute  lg:bg-[silver]/30 lg:h-[500px] lg:w-[770px]  lg:rounded-2xl ">

                <h2 className="text-[18px] mt-[10px] text-center font-[fa11] font-bold sm:text-[25px] lg:text-[19px] lg:p-[5px] lg:absolute lg:mt-[50px] lg:pr-[50px]"> راهنمای آموزشی بازی <strong className="text-blue-600 hover:underline hover:text-blue-800"><a href="https://dota1.ir">Warcraft (دستیار دوتا)</a></strong></h2>
                <p  className="text-center mt-[15px] leading-[35px] sm:text-[22px] sm:leading-[50px] lg:w-[600px] lg:leading-[50px] lg:text-[22px] lg:text-center lg:mt-[12%]">
                    در حال حاضر روی برنامه‌ی دستیار دوتا ۱ که
                    راهنما برای بازی کامپیوتری <strong className="font-[michroma] text-blue-600 hover:underline hover:text-blue-800"><a href="https://dota1.ir">Warcraft Dota 1</a></strong>
                    هست کار می‌کنم. <br /> اگر پیشنهادی برای همکاری داشتین،از طریق{" "}
                    <a href="#contactme" className="font-bold text-blue-600 hover:underline hover:text-blue-800 transition-colors">
                        <br />  لینک‌های تماس<br />
                    </a>{" "}
                    که در انتهای صفحه برای شما قرار دادم،<br /> با من در ارتباط باشید.
                </p>
                <img src="/images/war.jpg" alt="warcraft dota 1 image" className="hidden sm:hidden lg:block lg:rounded-2xl lg:shadow-lg lg:object-cover  lg:w-[300px] " />
            </section>

        </div>
    );
}
