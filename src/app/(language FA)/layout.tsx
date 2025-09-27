import "../globals.css";
import DarkMode from "@/components/links/darkmode-btn/dark-btn";
import LangToggle from "@/components/links/language-btn/toggle-switch";
import SocialLinks from "@/components/links/social-links/socialLinks"
export default function leyout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
