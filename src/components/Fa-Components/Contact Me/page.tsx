import { FaTelegramPlane, FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp, FaArrowCircleDown } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
export default function ContactMe() {
  return (
    <div className="text-[#0888fe]">
      <div className="flex items-center justify-center mb-[100px]">
        <FaArrowCircleDown className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[40px]" /><h1 className="text-[22px] font-[fa12] font-bold sm:text-[38px] lg:text-[30px]">لینک های تماس مستقیم با من</h1><FaArrowCircleDown className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[40px]" />
      </div>

      <div className="grid grid-cols-2 gap-y-8 mt-[60px] place-items-center ">


        <a href="https://instagram.com/mrbidar97" target="_blank" rel="noopener noreferrer"
          className="flex justify-center text-center text-[18px] transition-colors hover:text-pink-600 sm:items-center sm:shadow-xl/70 sm:rounded-xl sm:p-[2px] sm:gap-2 sm:ml-[50px] lg:text-[20px]">
          <FaInstagram className="text-[white] border-[1px] border-pink-600 p-[2px] bg-pink-700 rounded-[20px] w-[70px] h-[70px] bg-silver-200 sm:w-[30px] sm:h-[30px]" /><span className="hidden sm:block ">https://www.instagram.com/mrbidar97</span></a>




        <a href="https://wa.me/989192080697" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 transition-colors hover:text-green-600 sm:items-center sm:shadow-xl/70 sm:rounded-xl sm:p-[2px] sm:gap-2 sm:ml-[30px] lg:text-[20px] ">
          <FaWhatsapp className="text-green-600 text-[70px] sm:text-[30px]" /> <span className="hidden sm:block ">https://wa.me/989192080697</span></a>




        <a href="https://t.me/BidarMr97" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2     transition-colors sm:items-center sm:shadow-xl/70 sm:rounded-xl sm:p-[2px] sm:gap-2 lg:text-[20px] hover:text-[#25a3e1]">
          <FaTelegramPlane className="text-[#25a3e1]  text-[70px] sm:text-[30px]" /><span className="hidden sm:block ">https://t.me/BidarMr97</span> </a>




        <a href="https://www.bidar.mr97@gmail.com" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 transition-colors sm:items-center sm:shadow-xl/70 sm:rounded-xl sm:p-[2px] sm:gap-2 lg:text-[20px] hover:text-red-600">
          <BiLogoGmail className=" text-red-600 text-[70px] sm:text-[30px]" /><span className="hidden sm:block ">https://www.bidar.mr97@gmail.com</span></a>





        <a href="https://github.com/bidarMr97" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 transition-colors hover:text-white sm:items-center sm:shadow-xl/70 sm:rounded-xl sm:p-[2px] sm:gap-2 
          sm:mr-[50px] lg:text-[20px] lg:mr-[65px] ">
          <FaGithub className="text-black text-[70px] sm:text-[30px]" /><span className="hidden sm:block ">https://github.com/bidarMr97</span></a>




        <a href="https://www.linkedin.com/in/mohammadreza-bidar-887603389" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 transition-colors hover:text-blue-600 sm:items-center sm:shadow-xl/70 sm:rounded-xl sm:p-[2px] sm:gap-2 sm:mr-[60px] sm:w-[360px] lg:text-[20px] lg:w-[433px] lg:mr-[70px]">
          <FaLinkedinIn className="text-blue-600 text-[70px] sm:text-[30px]" />
          <span className="hidden sm:block ">www.linkedin.com/in/mohammadreza-bidar</span></a>


        <a href="tel:+989192080697" className="hidden gap-2 transition-colors sm:block sm:flex sm:items-center sm:shadow-xl/70 sm:rounded-xl sm:p-[2px] sm:gap-2 sm:ml-[30px] lg:text-[20px]"><FaPhone />SIM1 +989192080697</a>

        <a href="tel:+989308413783" className="hidden gap-2 transition-colors sm:block sm:flex  sm:items-center sm:shadow-xl/70 sm:rounded-xl sm:p-[2px] sm:gap-2  lg:text-[20px]"><FaPhone />SIM2 +989308413783</a>

      </div>

      <div className="flex justify-between mt-[90px] sm:hidden">
        <a href="tel:+989192080697"><div className="relative flex items-center justify-center w-[120px] h-[120px]">
          <FaPhone className="absolute text-[60px] border-[4px] rounded-full p-[10px]" />
          <svg className="absolute w-full h-full">
            <defs>
              <path id="circlePath" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" /></defs>
            <text fontSize="12" fill="#0888fe" fontWeight="bold"><textPath href="#circlePath" startOffset="0%">SIM 1 • SIM 1 • SIM 1 • SIM 1 • SIM 1 • SIM 1 •</textPath></text>
          </svg>
        </div>
        </a>

        <a href="tel:+989308413783"><div className="relative flex items-center justify-center w-[120px] h-[120px]">

          <FaPhoneFlip className="absolute text-[60px] border-[4px] rounded-full p-[10px]" /><svg className="absolute w-full h-full"><defs><path id="circlePath" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" /></defs>
            <text fontSize="12" fill="#0888fe" fontWeight="bold">
              <textPath href="#circlePath" startOffset="0%">SIM 2 • SIM 2 • SIM 2 • SIM 2 • SIM 2  • SIM 2 • 2 • </textPath>
            </text>
          </svg>
        </div></a>
      </div>
    </div>
  );
}
