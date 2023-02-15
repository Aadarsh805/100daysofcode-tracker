"use client";

import Image from "next/image";
import graphImage from "public/assets/graph-snake3.svg";
import useTweetStore from "./store/tweetStore";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Form from "./Form";
import Footer from "./components/Footer";
import supabase from "@/config/supabase";

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
  } = useTweetStore((state) => ({
    tweets: state.tweets,
    setTweets: state.setTweets,
    dates: state.dates,
    setDates: state.setDates,
    username: state.username,
    setUsername: state.setUsername,
    loading: state.loading,
    setLoading: state.setLoading,
  }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");

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
      const usernameArray = Object?.values(results?.data?.username);
      const contentArray = Object?.values(results?.data?.content);
      const tweets = contentArray.map((content, index) => ({
        content,
        date: dates[index],
      }));
      setTweets(tweets);
      setDates(dates);
      setLoading(false);
    }

    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          username: username,
          // name: name,
          // profile_img: profile_img,
        },
      ])
      .select();
    if (error) {
      alert(error.message);
    } else {
      console.log("something");
    }
  };

  return (
    <div className="flex flex-col items-center px-16 pb-8 h-screen gap-2 bg-hero2 bg-no-repeat w-full bg-cover">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center w-full md:mt-24">
        <div className="flex flex-col items-center w-full justify-center gap-8 ">
          <div className="flex flex-col items-center justify-center text-center gap-3 ">
            <h3 className="icon-group relative uppercase tracking-[.2em] font-semibold text-ourBlack">
              <span className="text-[#F43984]">100</span> days of coding,{" "}
              <span className="text-ourBlue">0</span> days of sleep
            </h3>
            <h1 className="text-5xl md:text-5xl text-ourBlack font-semibold capitalize">
              100 Days Of Code Tracker
            </h1>
            <p className="font-medium text-ourBlack opacity-60 max-w-[45em]">
              With a contribution graph that showcases your coding journey,
              you'll have 100 reasons to code every day. So, sit back, grab a
              cup of coffee, and let us help you track your progress, celebrate
              your achievements, and turn 100 days of coding into a fun and
              fulfilling experience."
            </p>
          </div>

          <Form
            handleSubmit={handleSubmit}
            username={username}
            setUsername={setUsername}
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
