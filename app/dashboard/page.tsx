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
import { FormEvent, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { poppins } from "@/public/assets/fonts/fonts";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
//   variable: "--font-Poppins",
// });

interface Person {
  name: string;
  username: string;
  profile_img: string;
}

const dashboardPage = () => {
  const [tweets, setTweets] = useState<any>([]);
  const [dates, setDates] = useState<any>([]);
  const [userProfile, setUserProfile] = useState<Person>();
  const [isDownloadModalOpen, setIsDownloadModalOpen] =
    useState<boolean>(false);

  const openDownloadModal = () => setIsDownloadModalOpen(true);

  const { username, dataLoadError, setDataLoadError, loading, setLoading } =
    useTweetStore((state) => ({
      username: state.username,
      loading: state.loading,
      setLoading: state.setLoading,
      dataLoadError: state.dataLoadError,
      setDataLoadError: state.setDataLoadError,
    }));

  const getData = async () => {
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
      console.log(results);
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
    } else {
      setDataLoadError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (username) {
      getData();
    }
  }, []);

  if (loading) return <Loading />;

  if (dataLoadError) {
    <div className="h-screen items-center justify-centert">
      <p className="text-lg bg-red-300 p-4">An error occurred!!</p>
      <Link href="/">Go Back to Home Page</Link>
    </div>;
  }

  return (
    <div className="px-8 relative">
      <Navbar />
      <div className="md:flex md:gap-8 w-full bg-white">
        <Sidebar userProfile={userProfile} />
        <div className="w-full md:w-5/6 p-9 ">
          {/* top */}
          <div className="md:flex mb-5 md:space-x-5">
            {/* streaks */}
            <div className="w-full md:w-2/3 p-8 rounded-md shadow-md shadow-[#bcbcbc29] border-[#bcbcbc20] border-[1px] bg-white">
              <p className={`text-[#5f6577] text-base font-bold ${poppins.className}`}>
                Saturday, Jan 21
              </p>
              <h2 className={`text-xl font-bold text-gray-700 font-poppins pt-2 pb-5 ${poppins.className}`}>
                Hello, {username}
              </h2>

              <div className="md:flex">
                <Streak dates={dates} />
              </div>
            </div>

            <button
              className={`border-[1px] p-4 text-lg rounded-lg h-fit ${poppins.className}`}
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
                      <DownloadCanvas
                        dates={dates}
                        tweets={tweets}
                        username={username}
                        userProfile={userProfile}
                      />
                    </div>
                  </Dialog.Panel>
                </div>
              </Dialog>
            )}
          </div>

          {/* bottom */}
          <div className="p-8 rounded-md shadow-md shadow-[#bcbcbc20] border-[#bcbcbc32] border-[1px] bg-white flex flex-col gap-12">
            <p className={`text-lg font-bold text-gray-700 ${poppins.className}`}>
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
