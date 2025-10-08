import "../globals.css";
export default function leyout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html className="scroll-smooth" dir="rtl" lang="fa" >
      <body>
        {children}
      </body>
    </html>
  );
}
