"use client";
import Image from "next/image";
import Link from "next/link";
import useTweetStore from "../store/tweetStore";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { usePathname } from "next/navigation";

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

function Sidebar() {
  const pathname = usePathname();
  const { userProfile, count } = useTweetStore((state) => ({
    userProfile: state.userProfile,
    count: state.count,
  }));

  return (
    <div className="hidden md:block md:h-[81vh] md:w-1/6 ">
      <div className="flex flex-col gap-10">
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
}

export default Sidebar;
