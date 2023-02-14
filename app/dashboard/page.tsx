"use client";

import Badges from "./Badges";
import Card from "./Card";
import Sidebar from "./Sidebar";
import ContributionGraph from "./ContributionGraph";
import useTweetStore from "../store/tweetStore";
import Streak from "./Streak";
import Loading from "../components/Loading";
const Page = () => {
  const { tweets, dates, username, loading } = useTweetStore((state) => ({
    tweets: state.tweets,
    dates: state.dates,
    username: state.username,
    loading: state.loading,
  }));

  return (
    <div className="flex w-full bg-[#232135]">
      <Sidebar />
      <div className="w-5/6">
        <div className="flex w-full h-1/2 mx-5 px-5 mt-5 pt-10">
          <div className="w-2/3 border-r-2 border-[#312E47]">
            <p className="text-[#5f6577] text-base font-bold">
              Saturday, Jan 21
            </p>
            <h2 className="text-xl font-bold text-white font-poppins">
              Hello, {username}
            </h2>

            <div
              className=" md:flex
            "
            >
              <Streak dates={dates} />
            </div>
            <div className="w-34 h-[1px] bg-[#5f6577]" />
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <p className="px-5 ">Cool Users List</p>
                <div className=" w-[1px] h-[40px] bg-[#5f6577]" />
              </div>

              <div className="px-5">
                <button className="p-2 rounded-2xl border text-blue-600 font-semibold text-sm border-blue-500 bg-blue-400 bg-opacity-5 font-poppins">
                  Add yourself in cool user list +
                </button>
              </div>
            </div>
          </div>

          <div className="w-1/3">
            <Badges />
          </div>
        </div>
        <div className="p-8 border-[#312E47] border-t-2 bg-[#29263d] h-1/2 flex flex-col gap-12">
          <div>
            <p className="text-lg font-bold text-white">Graph</p>
            <ContributionGraph
              dates={dates}
              tweets={tweets}
              username={username}
            />
          </div>
          <p className="text-lg font-bold text-white">Streak</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
