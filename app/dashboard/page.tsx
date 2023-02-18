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
    <div className="md:flex w-full bg-white">
      <Sidebar />
      <div className="w-full md:w-5/6 p-9">
        <div className="md:flex mb-5 md:space-x-5 space-y-5 md:space-y-0">
          <div className="w-full md:w-2/3 p-8 rounded-md shadow-md shadow-[#bcbcbc] border-[#bcbcbc] border-[1px] bg-white">
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
            {/* <div className="w-34 h-[1px] bg-[#5f6577]" />
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
            </div> */}
          </div>

          <div className="w-full md:w-1/3 p-8 rounded-md shadow-md shadow-[#bcbcbc] border-[#bcbcbc] border-[1px] bg-white">
            <p className="text-lg font-bold text-gray-700">Badges</p>
            {/* <Badges /> */}
          </div>
        </div>
        <div className="p-8 rounded-md shadow-md shadow-[#bcbcbc] border-[#bcbcbc] border-[1px] bg-white  flex flex-col gap-12">
          <p className="text-lg font-bold text-gray-700">Contribution Graph</p>
          <div>
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
