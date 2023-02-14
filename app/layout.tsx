"use client";

import "./globals.css";
import Head from "./head";
import Loading from "./components/Loading";
import useTweetStore from "./store/tweetStore";
import { Roboto_Mono } from "@next/font/google";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading } = useTweetStore((state) => ({
    loading: state.loading,
  }));

  if (!loading)
    return (
      <html lang="en">
        <Loading  />;
      </html>
    );

  return (
    <html lang="en">
      <Head />
      <body className={roboto_mono.className}>{children}</body>
    </html>
  );
}
