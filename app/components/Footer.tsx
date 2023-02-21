import Link from "next/link";
import type { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

type FooterProps = {};

// bg-[#EAF3FE] 
const Footer: FC<FooterProps> = () => {
  return (
    <div className="flex items-center justify-between  w-full py-5 px-3 md:px-10 gap-4 sm:gap-4  bg-[#EAF3FE] rounded-lg">
      <p className="text-lg tracking-wide uppercase text-ourBlue font-semibold cursor-pointer">
        FAQ
      </p>
      <p className="font-semibold text-sm md:text-base text-ourBlack tracking-wider text-center ">
        Open source |{" "}
        <Link
          href="https://github.com/Aadarsh805/100daysofcode-tracker/blob/main/LICENSE"
          className="underline"
          target="_blank"
        >
          MIT License 2023
        </Link>{" "} <br className="  sm:hidden" />
        <span className="text-ourBlue">100DaysOfCodeTracker</span>
      </p>

      <div className="flex items-center gap-2 sm:gap-4">
        <Link
          href="https://github.com/Aadarsh805/100daysofcode-tracker"
          target="_blank"
          className="w-fit hover:bg-white hover:shadow-md rounded-full group transition-all duration-300 ease-linear"
        >
          <AiFillGithub className="text-3xl text-ourBlue group-hover:p-1" />
        </Link>
        <Link
          href="https://twitter.com/Aadarsh805"
          target="_blank"
          className="w-fit hover:bg-white hover:shadow-md rounded-full group transition-all duration-300 ease-linear"
        >
          <AiOutlineTwitter className="text-3xl text-ourBlue group-hover:p-1" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
