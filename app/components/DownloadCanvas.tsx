"use client";

import { FC, useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { download } from "@/utils/download";
import useTweetStore from "../store/tweetStore";
import Streak from "../dashboard/Streak";
import ContributionGraph from "../dashboard/ContributionGraph";
import Logo from "./Logo";
import UserProfile from "./UserProfile";

type DownloadCanvasProps = {
  dates: any;
  tweets: any;
  username: string;
  userProfile: any;
};

const DownloadCanvas: FC<DownloadCanvasProps> = ({
  dates,
  tweets,
  username,
  userProfile,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const componentRef = useRef<HTMLDivElement>(null!);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      setWidth(componentRef?.current?.offsetWidth);
      setHeight(componentRef?.current?.offsetHeight);
    };

    updateSize();

    html2canvas(componentRef.current).then((canvas) => {
      const ctx = canvasRef?.current?.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.drawImage(canvas, 0, 0);
      }
    });

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const onDownload = (e: any) => {
    e.preventDefault();
    download(canvasRef.current);
  };

  return (
    <div>
      <div ref={componentRef} className="border-[1px] rounded-lg mt-4 p-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <UserProfile userProfile={userProfile} />

            <div className="w-1/3">
              <Logo />
            </div>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-700 mb-4">Streaks</p>
            <Streak dates={dates} />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-700 mb-4">
              Contribution Graph
            </p>
            <ContributionGraph
              dates={dates}
              tweets={tweets}
              username={username}
            />
          </div>
        </div>
      </div>
      <canvas
        className="hidden"
        ref={canvasRef}
        width={width}
        height={height}
      />
      <button
        className="bg-red-400 p-4 mt-10 text-lg rounded-lg"
        onClick={onDownload}
      >
        download
      </button>
    </div>
  );
};

export default DownloadCanvas;
