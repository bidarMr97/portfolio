
export default function AboutMe() {
  return (
    <section dir="rtl" className="text-center leading-[50px]">

      <h2 className="text-center text-[#0888fe] text-[26px] pt-[50px] font-[fa8] sm:text-[40px] sm:leading-[70px]  md:flex md:flex-row md:justify-between md:p-[20px] md:text-[35px] md:mt-[40px] lg:justify-center lg:gap-20  lg:text-[2rem] lg:mt-[50px]">
        <div>برنامه‌نویس</div>
        <div> توسعه‌دهنده</div>
        <div className="md:text-[30px]"> طراح صفحات وب</div>
      </h2>

      <p className="font-[fa12] p-[10px] leading-[45px] text-right sm:text-center sm:text-[22px] sm:leading-[55px] lg:text-[18px] lg:leading-[50px] lg:p-[30px]">
        در بخش فرانت‌اند به طراحی و توسعه‌ی صفحات وب با استفاده از جدیدترین تکنولوژی‌ها فعالیت دارم. <br />
        مهارت‌های من در قسمت{" "}
        <a href="#skills" className="font-bold text-[#0888fe] hover:underline">
          زبان‌ها و فریم‌ورک‌ها
        </a>{" "}
        قابل مشاهده است. همچنین <a href="/resume/bidar.pdf" download className="text-[#0888fe] hover:underline">لینک دانلود رزومه</a> برای جزئیات دقیق‌تر قرار داده‌ام.
      </p>



      <h3 className=" font-[fa8] text-[#086948] text-[25px] sm:text-[45px] sm:pt-[15px] sm:mt-[20px] lg:text-4xl ">مسیر آینده</h3>
      <p className="font-[fa12]  p-[5px] leading-[45px] sm:text-[22px] sm:leading-[55px] lg:text-[18px]  lg:leading-[45px] lg:p-[30px]">
        در حال یادگیری تکنولوژی های روز دنیا هستم<br /> تا هدفم که نوشتن برنامه های سریع کاربردی و جامع هست را به تحقق برسانم و <br />تمام تلاشم را در این مسیر به کار خواهم گرفت.
      </p>
    </section>
  );
}
