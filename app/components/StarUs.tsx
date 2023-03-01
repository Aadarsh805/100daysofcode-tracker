import Link from "next/link";
import type { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import mdiGithub from "public/assets/mdi_github.png";
import Image from "next/image";

type StarUsProps = {};

const StarUs: FC<StarUsProps> = () => {
  return (
    <Link
      href="https://github.com/Aadarsh805/100daysofcode-tracker"
      target="_blank"
      className="flex items-center gap-1 border-[2px] border-ourBlack py-1 px-2 md:py-2 md:px-3 rounded-md"
    >
      <div className="w-fit bg-white shadow-md rounded-full">
        <AiFillGithub className="text-2xl text-ourBlack p-[3px]" />
      </div>
      <span className="w-[1px] h-4 bg-ourBlack opacity-70"></span>
      <p className="font-semibold text-ourBlack">Star Us</p>
    </Link>
  );
};

export default StarUs;
