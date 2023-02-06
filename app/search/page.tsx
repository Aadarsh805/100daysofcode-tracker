"use client";

import SearchBar from "./SearchBar";
import TweetData from "../../tweets";
function Search() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#120D31]">
      <SearchBar
        placeholder="@techy_nidhi"
        data={TweetData}
      />
    </div>
  );
}

export default Search;
