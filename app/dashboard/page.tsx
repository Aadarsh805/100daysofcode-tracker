"use client";
import { useState } from "react";
import Badges from "./Badges";
import Card from "./Card";
import Sidebar from "./Sidebar";
import ContributionGraph from "./ContributionGraph";
import useTweetStore from "../store/tweetStore";
import Streak from "./Streak";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { Poppins } from "@next/font/google";
import SideNavbar from "./SideNavbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const DashboardPage = () => {
  const { tweets, dates, username, loading } = useTweetStore((state) => ({
    tweets: state.tweets,
    dates: state.dates,
    username: state.username,
    loading: state.loading,
  }));

  const [navbar, setNavbar] = useState(false);
  return (
    <div className="px-8">
      <Navbar />
      {/* <div className="md:hidden">
        <button
          className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div> */}
      <div className="md:flex w-full bg-white">
        <SideNavbar />

        <div className="w-full p-9 md:ml-32 lg:ml-56">
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

export default DashboardPage;
