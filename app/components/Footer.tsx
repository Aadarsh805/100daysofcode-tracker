import Link from "next/link";
import type { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 px-10 bg-[#EAF3FE] rounded-lg">
      <p className="text-lg tracking-wide uppercase text-ourBlue font-semibold cursor-pointer">
        FAQ
      </p>
      <p className="font-semibold text-ourBlack tracking-wider">
        Open source |{" "}
        <Link
          href="https://github.com/Aadarsh805/100daysofcode-tracker/blob/main/LICENSE"
          className="underline"
          target="_blank"
        >
          MIT License 2023
        </Link>{" "}
        <span className="text-ourBlue">100DaysOfCodeTracker</span>
      </p>

      <div className="flex items-center gap-4">
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
