import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-6">
     
      <a
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[white] hover:text-pink-600 transition-colors"
      >
        <FaInstagram size={32} />
      </a>

     
      <a
        href="https://wa.me/919208697" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-[white] hover:text-green-600 transition-colors"
      >
        <FaWhatsapp size={32} />
      </a>

      
      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[white] hover:text-blue-600 transition-colors"
      >
        <FaTwitter size={32} />
      </a>
    </div>
  );
}
