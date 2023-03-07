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
import DownloadCanvas from "../components/DownloadCanvas";
import { download } from "@/utils/download";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { redirect } from "next/navigation";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const dashboardPage = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] =
    useState<boolean>(false);

  const openDownloadModal = () => setIsDownloadModalOpen(true);

  const {
    tweets,
    dates,
    username,
    dataLoadError,
    setDataLoadError,
    userProfile,
  } = useTweetStore((state) => ({
    tweets: state.tweets,
    dates: state.dates,
    username: state.username,
    loading: state.loading,
    dataLoadError: state.dataLoadError,
    setDataLoadError: state.setDataLoadError,
    userProfile: state.userProfile,
  }));

  // useEffect(() => {
  //   if (!userProfile.username) redirect("/");
  // }, []);

  if (dataLoadError) {
    <div className="h-screen items-center justify-centert">
      <p className="text-lg bg-red-300 p-4">An error occurred!!</p>
      <Link href="/">Go Back to Home Page</Link>
    </div>;
  }

  return (
    <div className="px-8">
      <Navbar />
      <div className="md:flex w-full bg-white">
        <Sidebar />
        <div className="w-full md:w-5/6 p-9">
          {/* top */}
          <div className="md:flex mb-5 md:space-x-5">
            {/* streaks */}
            <div className="w-full md:w-2/3 p-8 rounded-md shadow-md shadow-[#bcbcbc29] border-[#bcbcbc20] border-[1px] bg-white">
              <p className="text-[#5f6577] text-base font-bold">
                Saturday, Jan 21
              </p>
              <h2 className="text-xl font-bold text-gray-700 font-poppins pt-2 pb-5">
                Hello, {username}
              </h2>

              <div className="md:flex">
                <Streak dates={dates} />
              </div>
            </div>

            <button
              className="border-[1px] p-4 text-lg rounded-lg h-fit"
              onClick={openDownloadModal}
            >
              Share your progress
            </button>

            {/* canvas */}
            {isDownloadModalOpen && (
              <Dialog
                open={isDownloadModalOpen}
                onClose={() => setIsDownloadModalOpen(false)}
                className="relative z-50"
              >
                <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

                <div className="fixed inset-0 flex items-center justify-center p-4">
                  <Dialog.Panel className="relative w-full max-w-4xl">
                    <div className="w-full p-8 rounded-md shadow-md shadow-[#bcbcbc21] border-[#bcbcbc40] border-[1px] bg-white">
                      <DownloadCanvas />
                    </div>
                  </Dialog.Panel>
                </div>
              </Dialog>
            )}
          </div>

          {/* bottom */}
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
