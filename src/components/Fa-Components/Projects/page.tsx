// export default function Projects() {
//     return (
//         <div className="w-screen flex flex-col m-[20px]">
//                    <img src="images/war.jpg" alt="warcraft image" className="w-[1000px] h-[500px] justify-center items-center" />
//             <p className="w-[500px]">
//           در حال حاضر روی برنامه ی دستیار دوتا ۱ که نوعی
//           راهنما برای بازی کامپیوتری warcraft dota 1
//           هست کار میکنم ولی اگر پیشنهادی برای همکاری داشتین مشتاقم از طریق <a className="font-bold" href="">لینک های تماس</a> که در انتهای صفحه برای شما قرار دادم با من در ارتباط باشید
//             </p>
//         </div>
//     )
// }

export default function Projects() {
    return (
        <div className="lg:w-full lg:flex ">
            <div >

                <img src="/images/war.jpg" alt="warcraft dota 1 image" className="lg:blur-3xl lg:h-screen lg:w-screen" />
            </div>

            <div className="lg:flex lg:absolute lg:mt-[10%] lg:bg-[silver]/30 lg:h-[500px] lg:w-[75%] lg:mr-[30px] lg:rounded-2xl">

                <h1 className="lg:text-[20px] font-[fa11] font-bold lg:h-[60px] lg:absolute lg:mt-[50px]  lg:mr-[20px] text-[18px] mt-[10px] text-center">برنامه ی راهنمای آموزشی بازی Warcraft Dota <span className="font-[fa5]">1</span>(دستیار دوتا) </h1>
                <p className="lg:w-[600px] lg:leading-[50px] lg:text-[22px] lg:text-center lg:mt-[12%] text-center mt-[15px] leading-[35px]">
                    در حال حاضر روی برنامه‌ی دستیار دوتا ۱ که
                    راهنما برای بازی کامپیوتری <span className="font-[michroma]">Warcraft Dota 1</span>
                    هست کار می‌کنم. <br /> اگر پیشنهادی برای همکاری داشتین،از طریق{" "}
                    <a href="#contactme" className="font-bold text-blue-600 hover:underline hover:text-blue-800 transition-colors">
                        <br />  لینک‌های تماس<br />
                    </a>{" "}
                    که در انتهای صفحه برای شما قرار دادم،<br /> با من در ارتباط باشید.
                </p>
                <img src="/images/war.jpg" alt="warcraft dota 1 image" className="hidden sm:block lg:rounded-2xl lg:shadow-lg lg:object-cover  lg:h-[500px] " />
            </div>

        </div>
    );
}
