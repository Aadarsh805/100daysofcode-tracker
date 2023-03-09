"use client";
import Image from "next/image";
import Link from "next/link";
import useTweetStore from "../store/tweetStore";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import UserProfile from "../components/UserProfile";

const links = [
  {
    name: "Progress",
    url: "/dashboard",
    icon: <DonutLargeIcon className="text-xl text-ourPink" />,
  },
  {
    name: "Search",
    url: "/search",
    icon: <AiOutlineSearch className="text-xl text-ourPink" />,
  },
  {
    name: "Discover",
    url: "/discover",
    icon: <BsPeopleFill className="text-2xl text-ourPink" />,
  },
];

const activeLink =
  "flex items-center gap-3 text-ourPink bg-[#343434] rounded-lg cursor-pointer py-4 px-4 text-lg transition-all duration-300 ease-in-out";
const normalLink =
  "flex items-center gap-3 text-ourPink hover:bg-[#343434] rounded-lg cursor-pointer py-4 px-4 text-lg transition-all duration-300 ease-in-out";

type SidebarProps = {
  userProfile: any;
};

const Sidebar: FC<SidebarProps> = ({ userProfile }) => {
  const pathname = usePathname();

  return (
    <div
    className="hidden md:block md:w-[20em] h-[calc(100vh-108px)] fixed left-0 pl-9 "
  >
      <div className="flex flex-col gap-10">
        <UserProfile userProfile={userProfile} />
        <div className="flex flex-col gap-2 w-full ">
          {links.map((link) => (
            <Link key={link.name} href={link.url} className="">
              <div className={pathname === link.url ? activeLink : normalLink}>
                {link.icon}
                <p className="text-xl font-medium">{link.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
