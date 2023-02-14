import Link from "next/link";
import type { FC } from "react";

type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 px-8 bg-[#EFEFEF]">
      <p className="text-lg tracking-wide uppercase text-ourBlue">FAQ</p>

      <p className="font-semibold text-ourBlackd tracking-widest">
        Open source |{}
        <Link href="https://github.com/Aadarsh805/100daysofcode-tracker/blob/main/LICENSE">
          MIT License 2023
        </Link>
        <span className="text-ourBlue">100DaysOfCodeTracker</span>
      </p>
    </div>
  );
};

export default Footer;
