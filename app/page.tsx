"use client";

import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import graphImage from "public/graph-snake.svg";
import useTweetStore from "./tweetStore";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import Loading from "./Loading";

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
  };

  

  return (
    <div className="h-screen bg-[#120d31] flex flex-col items-center justify-center px-5 gap-10">
      <div className="flex flex-col items-center justify-center text-center gap-3 max-w-[50em]">
        <h3 className="uppercase tracking-widest text-sm ">
          100 days of coding, 0 days of sleep
        </h3>
        <h1 className="text-4xl md:text-5xl text-[#e4e2ec] font-semibold">
          100 Days Of Code Tracker
        </h1>
        <p className="text-[14px] text-[#9b94c6]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          reiciendis voluptatum modi ratione repudiandae asperiores, nam
          accusamus ea amet odit. Lorem ipsum dolor sit amet. Lorem ipsum dolor
          sit amet.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center gap-2 h-full">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              border: "1px solid #274060",
              borderRadius: "10px",
              input: { color: "white" },
              label: { color: "gray", letterSpacing: "2px" },
            }}
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#3d348b] h-full flex items-center justify-center rounded-lg px-4 cursor-pointer"
          >
            <ArrowForwardIosIcon style={{ color: "white" }} />
          </Button>
        </div>
      </form>

      <Image src={graphImage} alt="graph_img" className="w-full md:w-[90%]" />
    </div>
  );
}

// Track your progress, celebrate your achievements.
// Stay motivated, keep coding
// 100 days of coding, 0 days of sleep.
// Coding so hard, streaks are just a side effect
// Code like a boss, track like a pro
