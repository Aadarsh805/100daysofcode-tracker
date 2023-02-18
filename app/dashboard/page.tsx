"use client";

import Badges from "./Badges";
import Card from "./Card";
import Sidebar from "./Sidebar";
import ContributionGraph from "./ContributionGraph";
import useTweetStore from "../store/tweetStore";
import Streak from "./Streak";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const dashboardPage = () => {
  const { tweets, dates, username, loading } = useTweetStore((state) => ({
    tweets: state.tweets,
    dates: state.dates,
    username: state.username,
    loading: state.loading,
  }));

  return (
    <div
      className={`px-8 bg-[#F4F4F4] h-screen overflow-hidden ${poppins.className}`}
    >
      <Navbar />
      <div className="flex w-full h-screen">
        <Sidebar />
        <div className="w-5/6 mx-5">
          <div className="w-2/3 mb-12">
            <Streak dates={dates} />
          </div>
          <ContributionGraph
            dates={dates}
            tweets={tweets}
            username={username}
          />
        </div>
      </div>
    </div>
  );
};

export default dashboardPage;
