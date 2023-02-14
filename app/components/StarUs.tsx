import Link from "next/link";
import type { FC } from "react";
import { AiFillGithub } from "react-icons/ai";

type StarUsProps = {};

const StarUs: FC<StarUsProps> = () => {
  return (
    <Link
      href="https://github.com/Aadarsh805/100daysofcode-tracker"
      target="_blank"
      className="flex items-center gap-2 border border-ourBlue py-[.35rem] px-2 rounded"
    >
      <AiFillGithub className="text-2xl text-ourBlue" />
      <span className="w-[1px] h-4 bg-ourBlue opacity-60"></span>
      <p className="font-semibold text-ourBlue">Star Us</p>
    </Link>
  );
};

export default StarUs;
