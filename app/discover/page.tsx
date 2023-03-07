"use client";

import TweetData from "../../tweets";
import Navbar from "../components/Navbar";
import Sidebar from "../dashboard/Sidebar";
import SearchBar from "../search/SearchBar";
import Profile from "./Profile";

// bg-[#120D31]
function Search() {
  const profiles = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="relative">
      {/* <Navbar /> */}
      <div>
          <Sidebar />

        <div className="md:w-[80%] ml-10 shadow-md border p-5 px-10 rounded-md absolute right-0 h-[calc(100vh-120px)] overflow-y-scroll">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Discover people</h1>
            <SearchBar placeholder="@techy_nidhi" data={TweetData} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-3">
            {profiles.map((profile, idx) => (
              <Profile key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
