
import { Metadata } from "next";
import "../globals.css";
import LangToggle from "@/components/links-buttons/language-btn/toggle-switch";
import DarkMode from "@/components/links-buttons/darkmode-btn/dark-btn";
import SocialLinks from "@/components/links-buttons/social-links/socialLinks"

export const metadata: Metadata = {
  title: "Mr Bidar",
  description:
    "front-end developer portfolio project",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL("https://mrbidar.ir"),

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className="bg-[grey] dark:bg-[#0f172a] flex flex-col">
        <nav className="sticky top-0 z-50 p-2 flex items-center justify-between m-[10px]">
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
          <div className="flex text-[30px] justify-center gap-6 social-links">
            <SocialLinks />
          </div>
        </footer>
      </body>
    </html>
  );
}
