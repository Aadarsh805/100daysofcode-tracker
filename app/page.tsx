"use client";

import Image from "next/image";
import graphImage from "public/assets/graph-snake3.svg";
import useTweetStore from "./store/tweetStore";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Form from "./Form";
import Footer from "./components/Footer";
import supabase from "@/config/supabase";
import { Roboto_Mono } from "@next/font/google";
import Link from "next/link";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-roboto-mono",
});

export default function Home() {
  return (
    <div
      className={`flex flex-col items-center px-4 sm:px-16 pb-8 gap-2 bg-hero2 bg-no-repeat w-full bg-cover ${roboto_mono.className}`} style={{height: "calc(100vh - 108px)"}}
    >
      <div className="flex-1 flex flex-col justify-center items-center w-full mt-32">
        <div className="flex flex-col items-center w-full justify-center gap-8 ">
          <div className="flex flex-col items-center justify-center text-center gap-3 ">
            <h3 className="icon-group relative uppercase tracking-[.2em] font-semibold text-xs md:text-base  text-ourBlack">
              <span className="text-ourPink">100</span> days of coding,{" "}
              <span className="text-ourBlue">0</span> days of sleep
            </h3>
            <h1 className="text-4xl md:text-5xl text-ourBlack font-semibold capitalize">
              100 Days Of Code Tracker
            </h1>
            <p className="font-medium text-sm md:text-base text-ourBlack opacity-60 max-w-[45em]">
              With a contribution graph that showcases your coding journey,
              you&apos;ll have 100 reasons to code every day. So, sit back, grab
              a cup of coffee, and let us help you track your progress,
              celebrate your achievements, and turn 100 days of coding into a
              fun and fulfilling experience.&apos;
            </p>
          </div>

          <Form />
        </div>
        <Image
          src={graphImage}
          alt="graph_img"
          className="max-w-screen-2xl w-full"
        />
      </div>
      <Footer />
    </div>
  );
}
