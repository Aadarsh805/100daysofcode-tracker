import Link from "next/link";
import type { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 px-10 bg-[#EFEFEF] rounded-lg">
      <p className="text-lg tracking-wide uppercase text-ourBlue font-semibold cursor-pointer">
        FAQ
      </p>
      <p className="font-semibold text-ourBlackd tracking-widest">
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
        <AiFillGithub className="text-3xl text-ourBlue" />
        <AiOutlineTwitter className="text-3xl text-ourBlue" />
      </div>
    </div>
  );
};

export default Footer;
