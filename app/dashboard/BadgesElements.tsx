import React from "react";

type BadgesProps = {
  title: string;
  duration: string;
  //   icon?: HTMLImageElement;
};
const BadgesElements = (props: BadgesProps) => {
  return (
    <div className="w-full bg-[#2e2b43] m-5 p-3 rounded-lg">
      {/* {props.icon} */}
      <p className="text-sm font-bold text-white font-poppins">{props.title}</p>
      <p className="text-xs font-bold text-white font-poppins">
        {props.duration}
      </p>
    </div>
  );
};

export default BadgesElements;
