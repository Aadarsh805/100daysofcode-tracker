import type { FC } from "react";
import { AiFillGithub } from "react-icons/ai";

type StarUsProps = {};

const StarUs: FC<StarUsProps> = () => {
  return (
    <div className="flex items-center gap-1 border border-ourBlue py-1 px-2 rounded">
      <AiFillGithub className="text-2xl text-ourBlue" />
      <span className="w-[1px] h-4 bg-ourBlue opacity-60"></span>
      <p className="font-semibold text-ourBlue">Star Us</p>
    </div>
  );
};

export default StarUs;
