import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className="flex justify-between items-center bg-[#312E47] p-5">
          <h1>#100DaysOfCode</h1>
          <p>Star Us</p>
        </nav>
        {children}
      </body>
    </html>
  );
}
