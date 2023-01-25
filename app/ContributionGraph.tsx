import "react-calendar-heatmap/dist/styles.css";
import CalendarHeatmap from "react-calendar-heatmap";
import getValueForClick from "react-calendar-heatmap";
import Value from "react-calendar-heatmap";
import { FC, useState } from "react";
import Tooltip from "react-tippy";
interface ContributionGraphProps {
  dates: string[];
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

const ContributionGraph: FC<ContributionGraphProps> = ({ dates }) => {
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
        <div
          className="tooltip bg-red-500 p-4 rounded"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <p className="mb-3">{new Date(selectedDate).toDateString()}</p>
          <p></p>
        </div>
      ) : null}
    </div>
  );
};

export default ContributionGraph;
