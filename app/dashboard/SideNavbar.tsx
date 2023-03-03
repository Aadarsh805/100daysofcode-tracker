"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import useTweetStore from "../store/tweetStore";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { usePathname } from "next/navigation";

import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";

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
const SideNavbar = () => {
  const pathname = usePathname();
  const { userProfile, count } = useTweetStore((state) => ({
    userProfile: state.userProfile,
    count: state.count,
  }));
  return (
    <div>
      <Disclosure>
        <Disclosure.Button className="absolute top-5 right-5 inline-flex items-center peer justify-center rounded-md p-3 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group hover:bg-gray-900">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-gray-400 z-20 fixed top-20 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer-transition ease-out delay-150 duration-200 md:block md:h-screen md:w-1/6">
          <div className="flex flex-col gap-10 justify-start items-center">
            <div className="flex items-center gap-2 ">
              <div className="relative">
                <Image
                  alt={`${userProfile.name}'s profile image`}
                  src={userProfile.profile_img}
                  width={200}
                  height={200}
                  className="rounded-full w-12 object-cover"
                />
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-ourPink text-white text-xs font-medium">
                  {count}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-ourDarkGray text-lg font-semibold">
                  {userProfile.name}
                </p>
                <p className="text-ourDarkGray opacity-90 text-sm">
                  @{userProfile.username}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full ">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className=""
                >
                  <div
                    className={pathname === link.url ? activeLink : normalLink}
                  >
                    {link.icon}
                    <p className="text-xl font-medium">{link.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
};

export default SideNavbar;
