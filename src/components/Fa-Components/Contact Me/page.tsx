import { FaTelegramPlane, FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function ContactMe() {
  return (
    <div className="absolute ml-[160px]">
     

      <a href="https://instagram.com/mrbidar97" target="_blank" rel="noopener noreferrer"
        className="flex items-center transition-colors gap-2  text-[20px] hover:text-pink-600 ">
        <FaInstagram className="text-pink-600 " /> https://www.instagram.com/mrbidar97</a>
      <a href="https://wa.me/989192080697" target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-2 transition-colors  text-[20px] hover:text-green-600">
        <FaWhatsapp className="text-green-600  " /> https://wa.me/989192080697</a>

      <a href="https://t.me/BidarMr97" target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-2 transition-colors  text-[20px] hover:text-[#25a3e1]">
        <FaTelegramPlane className="text-[#25a3e1]  " /> https://t.me/BidarMr97</a>

      <a href="https://www.bidar.mr97@gmail.com" target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-2 transition-colors  text-[20px] hover:text-red-600">
        <BiLogoGmail className=" text-red-600  " /> https://www.bidar.mr97@gmail.com</a>

      <a href="https://github.com/bidarMr97" target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-2 transition-colors  text-[20px] hover:text-white">
        <FaGithub className=" " />https://github.com/bidarMr97</a>

      <a href="https://www.linkedin.com/in/mohammadreza-bidar-887603389" target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-2 transition-colors  text-[20px] hover:text-blue-600">
        <FaLinkedinIn className="text-blue-600  " />www.linkedin.com/in/mohammadreza-bidar</a>

      <h1 dir="ltr">
        • +98 919 208 0697 / +98 930 841 3783
        <br />•  Iran, Tehran
      </h1>
    </div>
  );
}
