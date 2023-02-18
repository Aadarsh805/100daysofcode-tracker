import React from "react";

type CardProps = {
  title: string;
  points: number;
  startDate?: string;
  endDate?: string;
};
const Card = (props: CardProps) => {
  return (
    <div className="w-full md:w-1/3 border border-[#b2b2b2] rounded-lg m-5 p-5">
      <div className="flex justify-between items-center">
        <p className="text-ourBlack text-xs font-semibold font-poppins">
          {" "}
          {props.title}
        </p>
        <p className="text-ourPink font-bold text-xl font-poppins">
          {props.points}
        </p>
      </div>
      <div className="w-34 h-[1px] my-3 bg-ourBlack" />
      <div className="flex items-center gap-8">
        {" "}
        <p className="text-sm font-bold text-ourDarkGray font-poppins">
          {props.startDate}
        </p>
        <p className="text-sm font-bold text-ourDarkGray font-poppins">
          {props.endDate}
        </p>
      </div>
    </div>
  );
};

export default Card;
