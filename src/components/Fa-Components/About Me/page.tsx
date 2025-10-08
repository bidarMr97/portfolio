
export default function AboutMe() {
  return (
    <section className="w-full flex flex-col text-right px-8  py-10 leading-relaxed" dir="rtl">
    
      <h2 className="mt-[5px] font-[fa8] text-[4rem] mb-8 text-[#0888fe]">
        برنامه‌نویس، توسعه‌دهنده و طراح صفحات وب
      </h2>

      <p className="text-[18px] text-[#222] mb-8 leading-[50px]">
        در بخش فرانت‌اند به طراحی و توسعه‌ی صفحات وب با استفاده از جدیدترین تکنولوژی‌ها فعالیت دارم. <br /> 
        مهارت‌های من در قسمت{" "}
        <a href="#skills" className="font-bold text-[#0888fe] hover:underline">
          زبان‌ها و فریم‌ورک‌ها
        </a>{" "}
        قابل مشاهده است. همچنین <a href="/resume/bidar.pdf" download className="text-[#0888fe] hover:underline">لینک دانلود رزومه</a> برای جزئیات دقیق‌تر قرار داده‌ام.
      </p>
                        
   

      <h3 className="text-5xl font-[fa8] mt-[10%] mb-3 text-[#086948]">مسیر آینده</h3>
      <p className="text-[18px] text-[#222] mt-[5%] leading-[50px]">
        در حال یادگیری تکنولوژی های روز دنیا هستم<br /> تا هدفم که نوشتن برنامه های سریع کاربردی و جامع هست را به تحقق برسانم و تمام تلاشم را در این مسیر به کار خواهم گرفت.
      </p>
    </section>
  );
}
