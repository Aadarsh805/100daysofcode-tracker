"use client";

import "./globals.css";
import Head from "./head";
import Loading from "./components/Loading";
import useTweetStore from "./store/tweetStore";


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
      <body>{children}</body>
    </html>
  );
}
