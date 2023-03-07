"use client";

import "./globals.css";
import Head from "./head";
import Loading from "./components/Loading";
import useTweetStore from "./store/tweetStore";
import Navbar from "./components/Navbar";

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
        <div className="px-10">
        <Navbar />

        </div>
        {children}
      </body>
    </html>
  );
}
