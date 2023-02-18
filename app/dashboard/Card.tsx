import React from "react";

type CardProps = {
  title: string;
  points: number;
  startDate?: string;
  endDate?: string;
};
const Card = (props: CardProps) => {
  return (
    <div className="w-full p-5 md:w-1/3 rounded-md shadow-md shadow-[#bcbcbc]  bg-white">
      <div className="flex justify-between items-centre">
        <p className="text-[#5f6577] text-xs font-semibold font-poppins">
          {" "}
          {props.title}
        </p>
        <p className="text-blue-500 font-bold text-xl font-poppins">
          {props.points}
        </p>
      </div>
      <div className="w-34 h-[1px] my-3 bg-[#5f6577]" />
      <div className="flex items-center gap-8">
        {" "}
        <p className="text-[10px] font-bold text-gray-500 font-poppins">
          {props.startDate}
        </p>
        <p className="text-[10px] font-bold text-gray-500 font-poppins">
          {props.endDate}
        </p>
      </div>
    </div>
  );
};

export default Card;
