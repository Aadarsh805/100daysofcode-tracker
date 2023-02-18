"use client";
import Link from "next/link";
import useTweetStore from "../store/tweetStore";

function Sidebar() {
  const { username } = useTweetStore((state) => ({
    username: state.username,
  }));

  return (
    <div className="hidden md:block md:h-screen md:w-1/6  top-0 left-0 bg-[#232135] overflow-x-hidden pt-3 border-r-2 border-[#312E47] text-[#c4c4c9]">
      <div className="py-2 px-5 text-xl block">
        <div>{username}</div>
        <div>
          <h5 className="uppercase text-[#676B67] text-sm">Menu</h5>
          <h6 className="text-[#bdbbc2] hover:text-[#ed3881] cursor-pointer flex items-center flex-row">
            Progress
          </h6>
          <Link
            href="/search"
            className="text-[#bdbbc2] hover:text-[#ed3881] cursor-pointer"
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
