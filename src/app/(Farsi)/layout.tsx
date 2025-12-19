import type { Metadata } from "next";
import "../globals.css";
import NavBar from "@/components/Fa-Components/navbar/page";

export const metadata: Metadata = {
  title: "محمدرضا بیدار",
  description:
    "نمونه پورتفولیو برای برنامه نویسان و توسعه دهندگان وب",
  metadataBase: new URL("https://mrbidar.ir"),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className="lg:flex dark:bg-[black] ">
        <nav className="lg:sticky lg:top-0 text-center lg:border-l-[2px]  lg:max-h-screen scrollbar-auto-hide lg:overflow-y-auto lg:border-[whitesmoke] lg:w-[400px] dark:bg-[black] dark:text-[white]">
          <NavBar />
        </nav>
        <main className="dark:bg-[black] dark:text-[white]">
          {children}
        </main>
      </body>
    </html>
  );
}
