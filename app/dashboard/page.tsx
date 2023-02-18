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
    <div className="px-8">
      <Navbar />
      <div className="md:flex w-full bg-white">
        <Sidebar />
        <div className="w-full md:w-5/6 p-9">
          <div className="md:flex mb-5 md:space-x-5 space-y-5 md:space-y-0">
            <div className="w-full md:w-2/3 p-8 rounded-md shadow-md shadow-[#bcbcbc29] border-[#bcbcbc20] border-[1px] bg-white">
              <p className="text-[#5f6577] text-base font-bold">
                Saturday, Jan 21
              </p>
              <h2 className="text-xl font-bold text-gray-700 font-poppins pt-2 pb-5">
                Hello, {username}
              </h2>

              <div
                className=" md:flex
            "
              >
                <Streak dates={dates} />
              </div>
            </div>

            <div className="w-full md:w-1/3 p-8 rounded-md shadow-md shadow-[#bcbcbc21] border-[#bcbcbc40] border-[1px] bg-white">
              <p className="text-lg font-bold text-gray-700">Badges</p>
              {/* <Badges /> */}
            </div>
          </div>
          <div className="p-8 rounded-md shadow-md shadow-[#bcbcbc20] border-[#bcbcbc32] border-[1px] bg-white flex flex-col gap-12">
            <p className="text-lg font-bold text-gray-700">
              Contribution Graph
            </p>
            <div>
              <ContributionGraph
                dates={dates}
                tweets={tweets}
                username={username}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboardPage;
