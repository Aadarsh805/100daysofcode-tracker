import "react-calendar-heatmap/dist/styles.css";
import CalendarHeatmap from "react-calendar-heatmap";
import getValueForClick from "react-calendar-heatmap";
import Value from "react-calendar-heatmap";
import { FC, useState } from "react";
import Tooltip from "react-tippy";
interface ContributionGraphProps {
  tweets: any;
  dates: string[];
  username: string;
}
interface HeatmapData {
  date: string;
  count: number;
}
const createHeatmapData = (dates: string[]) => {
  const heatmapData: HeatmapData[] = [];
  const counts: { [date: string]: number } = {};
  dates?.forEach((date) => {
    if (counts[date]) {
      counts[date]++;
    } else {
      counts[date] = 1;
    }
  });
  for (const date in counts) {
    heatmapData.push({ date, count: counts[date] });
  }
  return heatmapData;
};

const ContributionGraph: FC<ContributionGraphProps> = ({
  tweets,
  dates,
  username,
}) => {
  const heatmapData = createHeatmapData(dates);
  // const heatmapData = dates?.map((date) => {
  //   return {
  //     date: new Date(date),
  //     count: 1,
  //   };
  // });
  const [tooltipContent, setTooltipContent] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleClick = (value: Value) => {
    // @ts-ignore
    setTooltipContent(value.date);
  };

  return (
    <div className="relative">
      <CalendarHeatmap
        startDate={new Date("2022-01-01")}
        endDate={new Date("2022-12-31")}
        values={heatmapData}
        gutterSize={3}
        classForValue={(value: Value) => {
          if (!value) {
            return "color-empty";
          }
          // @ts-ignore
          return `color-scale-${value.count} date-cell ${
            // @ts-ignore
            dates.includes(value.date) ? "active" : ""
          }`;
        }}
        onClick={(value) => {
          if (value) setSelectedDate(value.date);
        }}
        // onMouseOver={(value) => {
        //   if (value) setSelectedDate(value.date);
        // }}
        // onMouseLeave={(value) => {
        //   if (value) setSelectedDate("");
        // }}
      />
      {selectedDate ? (
        <div className="tooltip p-6 rounded bg-white text-black max-w-3xl w-fit mt-2">
          <div className="flex gap-4">
            <span className="w-12 h-12 rounded-full bg-gray-200"></span>
            <div className="flex flex-col">
              <p className="">{username}</p>
              <p className=" text-xs opacity-50">@{username}</p>
            </div>
          </div>
          <p className="my-2">
            {tweets.find((tweet: any) => tweet.date === selectedDate).content}
          </p>
          <p className=" text-sm text-gray-500 ">
            {new Date(selectedDate).toDateString()}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ContributionGraph;
