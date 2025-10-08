import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
export default function SocialLinks() {
  return (
    <div className="flex gap-6" >

      <a href="https://instagram.com/mrbidar97" target="_blank"
        rel="noopener noreferrer" className=" hover:text-pink-600 transition-colors" ><FaInstagram /></a>

      <a href="https://wa.me/989192080697" target="_blank"
        rel="noopener noreferrer" className=" hover:text-green-600 transition-colors">
        <FaWhatsapp /></a>

      <a
        href="https://t.me/BidarMr97"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#25a3e1] transition-colors"
      >
        <FaTelegramPlane />
      </a>

      <a
        href="https://www.bidar.mr97@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-600 transition-colors"
      >
        <BiLogoGmail />
      </a>
      <a
        href="https://github.com/bidarMr97"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[black] transition-colors dark:hover:bg-[white]"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/mohammadreza-bidar-887603389"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition-colors"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
}
