"use client";

import "./globals.css";
import Head from "./head";
import Loading from "./Loading";
import useTweetStore from "./tweetStore";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading } = useTweetStore((state) => ({
    loading: state.loading,
  }));

  if (loading)
    return (
      <html lang="en">
        <Loading />;
      </html>
    );

  return (
    <html lang="en">
      <Head />
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
