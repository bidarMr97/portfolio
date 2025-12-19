
export default function AboutMe() {
  return (
    <div className="text-center leading-[50px]">
      <h2 id="about-title" className="sr-only">
      مهارت های شغلی
      </h2>
      <section aria-labelledby="about-title" className="text-center  text-[#0888fe] text-[26px] pt-[50px] font-[fa8] sm:text-[40px] sm:leading-[70px]  md:text-[35px] md:mt-[40px] lg:justify-center lg:text-[2rem] lg:mt-[50px]">
        <ul className="md:flex md:justify-between md:px-[10px] lg:px-[30px] xl:px-[70px] 2xl:px-[150px]">
          <li>برنامه‌نویس</li>
          <li>توسعه‌دهنده </li>
          <li>طراح صفحات وب</li>
        </ul>
      </section>

      <p className="font-[fa12] p-[10px] leading-[45px] text-right sm:text-center sm:text-[22px] sm:leading-[55px] lg:text-[18px] lg:leading-[50px] lg:p-[30px]">
        در بخش فرانت‌اند به طراحی و توسعه‌ی صفحات وب با استفاده از جدیدترین تکنولوژی‌ها فعالیت دارم. <br />
        مهارت‌های من در قسمت{" "}
        <a href="#skills" className="font-bold text-[#0888fe] hover:underline">
          زبان‌ها و فریم‌ورک‌ها
        </a>{" "}
        قابل مشاهده است. همچنین <a href="/resume/bidar.pdf" download type="application/pdf" className="text-[#0888fe] hover:underline">لینک دانلود رزومه(pdf)</a> برای جزئیات دقیق‌تر قرار داده‌ام.
      </p>



      <h3 className=" font-[fa8] text-[#086948] text-[25px] sm:text-[45px] sm:pt-[15px] sm:mt-[20px] lg:text-4xl ">مسیر آینده</h3>
      <p className="font-[fa12]  p-[5px] leading-[45px] sm:text-[22px] sm:leading-[55px] lg:text-[18px]  lg:leading-[45px] lg:p-[30px]">
        در حال یادگیری تکنولوژی های روز دنیا هستم<br /> تا هدفم که نوشتن برنامه های سریع کاربردی و جامع هست را به تحقق برسانم و <br />تمام تلاشم را در این مسیر به کار خواهم گرفت.
      </p>
    </div>
  );
}
