// "use client "

import TweetData from "../../tweets";
import Navbar from "../components/Navbar";
import Sidebar from "../dashboard/Sidebar";
import SearchBar from "../search/SearchBar";
import useTweetStore from "../store/tweetStore";
import Profile from "./Profile";
import UserProfile from "../components/UserProfile";
import { poppins } from "@/public/assets/fonts/fonts";

const page = () => {
  const profiles = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
 
  return (
    <div className="relative">
    <div className="flex items-start gap-8">
        <Sidebar userProfile={UserProfile}  />

      <div className="md:w-[80%] ml-10 shadow-md border p-5 px-10 rounded-md h-[calc(100vh-120px)] overflow-y-scroll">
        <div className="flex items-center justify-between">
          <h1 className={`text-2xl md:text-3xl font-bold ${poppins.className}`}>Discover people</h1>
          <SearchBar placeholder="@techy_nidhi" data={TweetData} />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {profiles.map((profile, idx) => (
            <Profile key={idx} />
          ))} 
        </div>
      </div>
    </div>
  </div>  
  );
};

export default page;
