
import "../globals.css";
import LangToggle from "@/components/links/language-btn/toggle-switch";
import DarkMode from "@/components/links/darkmode-btn/dark-btn";
import SocialLinks from "@/components/links/social-links/socialLinks"
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html className="scroll-smooth">
      <body className="bg-[grey] dark:bg-[#0f172a] flex flex-col">
        <div className="m-[10px] grid grid-cols-2">
          <div className="flex items-center justify-start">
            <LangToggle />
          </div>
          <div className="flex items-center justify-end">
            <DarkMode />
          </div>
        </div>
        <main className="flex-grow">
          {children}
        </main>
        <footer id="footer" className="p-4 text-white text-center">
          <div className="flex justify-center gap-6">
            <SocialLinks />
          </div>
        </footer>
      </body>
    </html>
  );
}
