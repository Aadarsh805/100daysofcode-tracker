import type { FC } from "react";
import loading from "public/assets/loading.webp";
import Image from "next/image";
import { Roboto_Mono } from "@next/font/google";

interface loadingProps {}

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-roboto-mono",
});

const Loading: FC<loadingProps> = ({}) => {
  return (
    <div
      className={`h-screen flex flex-col items-center justify-center bg-[url('../public/assets/plainbg2.png')] bg-no-repeat w-full bg-cover overflow-hidden ${roboto_mono.className}`}
    >
      <Image src={loading} alt="loading..." className="w-[32rem] rounded" />
      <p className="text-ourBlack text-lg p-6">
        Please Wait While we hack your twitter account
      </p>
    </div>
  );
};

export default Loading;
