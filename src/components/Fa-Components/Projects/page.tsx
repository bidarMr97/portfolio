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
        <div className="w-full flex ">
            <div >

            <img src="/images/war.jpg" alt="warcraft dota 1 image" className="blur-3xl   h-screen w-screen " />
            </div>

            <div className="flex absolute mt-[10%] bg-[silver]/30 h-[500px] w-[75%] mr-[30px] rounded-2xl">
                <h1 className="text-[20px] font-[fa11] font-bold h-[60px] absolute mt-[50px]  mr-[20px]">برنامه ی راهنمای آموزشی بازی Warcraft Dota <span className="font-[fa5]">1</span>(دستیار دوتا) </h1>
                <p className="w-[600px] leading-[50px] text-[22px] text-center mt-[12%] ">
                    در حال حاضر روی برنامه‌ی دستیار دوتا ۱ که
                    راهنما برای بازی کامپیوتری <span className="font-[michroma]">Warcraft Dota 1</span>
                    هست کار می‌کنم. <br /> اگر پیشنهادی برای همکاری داشتین، مشتاقم از طریق{" "}
                    <a href="#contactme" className="font-bold text-blue-600 hover:underline hover:text-blue-800 transition-colors">
                      <br />  لینک‌های تماس<br />
                    </a>{" "}
                    که در انتهای صفحه برای شما قرار دادم،<br /> با من در ارتباط باشید.
                </p>
                <img src="/images/war.jpg" alt="warcraft dota 1 image" className="rounded-2xl shadow-lg object-cover h-[500px] " />
            </div>

        </div>
    );
}
