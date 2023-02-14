import type { FC } from "react";
import loading from "public/assets/loading.webp";
import Image from "next/image";

interface loadingProps {}

const Loading: FC<loadingProps> = ({}) => {
  return (
    <div className="h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="flex flex-col items-center rounded-lg shadow-lg ">
        <Image src={loading} alt="loading..." className=" w-full" />
        <p className="text-white text-lg p-6">
          Please Wait While we hack your twitter account
        </p>
      </div>
    </div>
  );
};

export default Loading;
