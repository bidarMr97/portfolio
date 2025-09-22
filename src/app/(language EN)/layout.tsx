
import "../globals.css";
import LangToggle from "@/components/links/language-btn/toggle-switch";
import DarkMode from "@/components/links/darkmode-btn/dark-btn";
import SocialLinks from "@/components/links/social-links/socialLinks"
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html className="scroll-smooth">
      <body className="bg-[grey] dark:bg-[#0f172a] flex flex-col">
        <nav className="sticky top-0 z-50  dark:bg-[#0f172a] p-2 flex items-center justify-between m-[10px]">
          <div className="flex items-center">
            <LangToggle />
          </div>
          <div className="flex items-center">
            <DarkMode />
          </div>
        </nav>
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
