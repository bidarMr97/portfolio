
export default function AboutMe() {
  return (
    <section className="lg:w-full lg:flex lg:flex-col lg:text-right lg:px-8  lg:py-10 lg:leading-relaxed text-center leading-[50px]" dir="rtl">
    
      <h2 className="lg:mt-[5px] font-[fa8] lg:text-[4rem] lg:mb-8 text-[#0888fe] text-[26px] pt-[50px]">
        برنامه‌نویس، توسعه‌دهنده و طراح صفحات وب
      </h2>

      <p className="lg:text-[18px] text-[#222] lg:mb-8 lg:leading-[50px] p-[10px]">
        در بخش فرانت‌اند به طراحی و توسعه‌ی صفحات وب با استفاده از جدیدترین تکنولوژی‌ها فعالیت دارم. <br /> 
        مهارت‌های من در قسمت{" "}
        <a href="#skills" className="font-bold text-[#0888fe] hover:underline">
          زبان‌ها و فریم‌ورک‌ها
        </a>{" "}
        قابل مشاهده است. همچنین <a href="/resume/bidar.pdf" download className="text-[#0888fe] hover:underline">لینک دانلود رزومه</a> برای جزئیات دقیق‌تر قرار داده‌ام.
      </p>
                        
   

      <h3 className="lg:text-5xl font-[fa8] lg:mt-[10%] lg:mb-3 text-[#086948] text-[25px]">مسیر آینده</h3>
      <p className="lg:text-[18px] text-[#222] lg:mt-[5%] lg:leading-[50px]">
        در حال یادگیری تکنولوژی های روز دنیا هستم<br /> تا هدفم که نوشتن برنامه های سریع کاربردی و جامع هست را به تحقق برسانم و تمام تلاشم را در این مسیر به کار خواهم گرفت.
      </p>
    </section>
  );
}
