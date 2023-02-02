import Link from "next/link";
import React from "react";
import Search from "../search/page";

function Sidebar() {
  return (
    <div className=" h-screen w-1/6  top-0 left-0 bg-[#232135] overflow-x-hidden pt-3 border-r-2 border-[#312E47] text-[#c4c4c9]">
      <div className="py-2 px-5 text-xl block">
        <div>Aadarsh Thakur</div>
        <div>
          <h5 className="uppercase text-[#676B67] text-sm">Menu</h5>
          <h6 className="text-[#bdbbc2] hover:text-[#ed3881] cursor-pointer flex items-center flex-row">
            Progress
          </h6>
          <Link
            href="./search"
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
