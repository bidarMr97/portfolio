import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
export default function SocialLinks() {
  return (
    <div className="flex gap-6 ">

      <a href="https://instagram.com/yourprofile"  target="_blank" 
      rel="noopener noreferrer" className=" hover:text-pink-600 transition-colors" ><FaInstagram size={32}/></a>

      <a href="https://wa.me/919208697"            target="_blank" 
       rel="noopener noreferrer" className=" hover:text-green-600 transition-colors">
      <FaWhatsapp size={32} /></a>

      <a
      href="mailto:your.email@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#25a3e1] transition-colors"
      >
<FaTelegramPlane size={32}/>
      </a>

      <a
      href="mailto:your.email@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-red-600 transition-colors"
      >
    <BiLogoGmail size={32}/>
      </a>
      <a
      href="mailto:your.email@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[black] transition-colors dark:hover:bg-[white]"
      >
        <FaGithub size={32}/>
      </a>
      <a
      href="mailto:your.email@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-600 transition-colors"
      >
        <FaLinkedinIn size={32}/>
      </a>
        </div>
  );
}
