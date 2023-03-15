"use client";

import "./globals.css";
import Head from "./head";
import Loading from "./components/Loading";
import useTweetStore from "./store/tweetStore";
import { ContextProvider } from "./context/MyContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
