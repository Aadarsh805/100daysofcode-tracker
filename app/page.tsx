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
  const router = useRouter();

  const {
    tweets,
    setTweets,
    dates,
    setDates,
    username,
    setUsername,
    loading,
    setLoading,
    userProfile,
    setUserProfile,
    setCount,
    dataLoadError,
    setDataLoadError,
  } = useTweetStore((state) => ({
    tweets: state.tweets,
    setTweets: state.setTweets,
    dates: state.dates,
    setDates: state.setDates,
    username: state.username,
    setUsername: state.setUsername,
    loading: state.loading,
    setLoading: state.setLoading,
    userProfile: state.userProfile,
    setUserProfile: state.setUserProfile,
    setCount: state.setCount,
    dataLoadError: state.dataLoadError,
    setDataLoadError: state.setDataLoadError,
  }));
  const [noUserError, setNoUserError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (username === "") {
      setNoUserError(true);
      return;
    } else {
      setNoUserError(false);
    }

    setUserProfile({
      name: "",
      username: "",
      profile_img: "",
    });

    setDataLoadError(false);
    setLoading(true);

    const results = await fetch("/api/scrape", {
      method: "POST",
      body: JSON.stringify({
        username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    if (results) {
      const dateArray = Object?.values(results?.data?.date);
      const dates = dateArray.map((date: any) => date.slice(0, 10));
      const contentArray = Object?.values(results?.data?.content);
      const tweets = contentArray.map((content, index) => ({
        content,
        date: dates[index],
      }));
      setTweets(tweets);
      setUserProfile({
        name: results?.data?.name?.[0],
        username: results?.data?.username?.[0],
        profile_img: results?.data?.profile_image_url?.[0],
      });
      setDates(dates);

      // const { data, error } = await supabase
      //   .from("users")
      //   .select("view_count, username")
      //   .eq("username", results?.data?.username?.[0]);
      // if (data && data.length > 0) {
      //   const { view_count, username } = data[0];
      //   setCount(view_count + 1);
      //   await supabase
      //     .from("users")
      //     .update({ view_count: view_count + 1 })
      //     .eq("username", username);
      //   return;
      // } else {
      //   setCount(1);
      //   await supabase.from("users").insert([
      //     {
      //       username: results?.data?.username?.[0],
      //       name: results?.data?.name?.[0],
      //       profile_img: results?.data?.profile_image_url?.[0],
      //       view_count: 1,
      //     },
      //   ]);
      //   console.log("added to supabase");
      // }
      // if (error) {
      //   alert(error.message);
      //   setDataLoadError(true);
      // } else {
      //   console.log("supabase");
      // }
      router.push("/dashboard");
    } else {
      setDataLoadError(true);
    }
    setLoading(false);
  };

  if (dataLoadError) {
    <div className="h-screen items-center justify-centert">
      <p className="text-lg bg-red-300 p-4">An error occurred!!</p>
    </div>;
  }

  return (
    <div
      className={`flex flex-col items-center px-4 sm:px-16 pb-8 h-screen gap-2 bg-hero2 bg-no-repeat w-full bg-cover ${roboto_mono.className}`}
    >
      <Navbar />
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

          <Form
            handleSubmit={handleSubmit}
            username={username}
            setUsername={setUsername}
            noUserError={noUserError}
          />
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

// Track your progress, celebrate your achievements.
// Stay motivated, keep coding
// 100 days of coding, 0 days of sleep.
// Coding so hard, streaks are just a side effect
// Code like a boss, track like a pro
