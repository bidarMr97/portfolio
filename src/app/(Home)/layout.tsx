

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html>
      <body className="bg-[grey] dark:bg-[#0f172a]">
      {children}
      </body>
    </html>
  );
}
