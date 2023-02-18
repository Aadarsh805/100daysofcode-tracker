"use client";

import { FC, useEffect, useState } from "react";
import Card from "./Card";

interface StreakProps {
  dates: string[];
}

// const dataElement = data.map((item) => {
//   return (
//     <Card
//       key={item.id}
//       title={item.title}
//       date={item.date}
//       points={item.points}
//     />
//   );
// });

const Streak: FC<StreakProps> = ({ dates }) => {
  const [longestStreak, setLongestStreak] = useState(0);
  const [streakStart, setStreakStart] = useState("");
  const [streakEnd, setStreakEnd] = useState("");
  const [currentStreak, setCurrentStreak] = useState(0);
  const [currentStreakStart, setCurrentStreakStart] = useState("");
  const currentDate = new Date();

  useEffect(() => {
    if (dates?.length) {
      const sortedDates = [...dates].sort();
      let currentStreak = 1;
      let longestStreak = 1;
      let currentStart = sortedDates[0];
      setCurrentStreakStart(currentStart);
      for (let i = 0; i < sortedDates.length - 1; i++) {
        const date = new Date(sortedDates[i]);
        const nextDate = new Date(sortedDates[i + 1]);
        const diff =
          (nextDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
        if (diff === 1) {
          currentStreak++;
          setCurrentStreak(currentStreak);
          if (currentStreak > longestStreak) {
            longestStreak = currentStreak;
            setStreakStart(currentStart);
            setStreakEnd(sortedDates[i + 1]);
          }
        } else {
          currentStreak = 1;
          setCurrentStreak(currentStreak);
          currentStart = sortedDates[i + 1];
        }
      }
      setLongestStreak(longestStreak);
      const lastDate = new Date(sortedDates[sortedDates.length - 1]);
      const currentDiff =
        (currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24);
      if (currentDiff === 1) {
        setCurrentStreakStart(lastDate.toDateString());
        setCurrentStreak(currentStreak + 1);
      } else {
        setCurrentStreakStart("");
        setCurrentStreak(0);
      }
    }
  }, [dates]);

  return (
    dates && (
      <div className="md:flex gap-12 space-y-5 md:space-y-0">
        <Card
          title="Total Days"
          startDate={new Date(dates[0])?.toDateString()}
          endDate={new Date(dates[dates.length - 1])?.toDateString()}
          points={dates?.length}
        />
        <Card
          title="Longest Streak"
          startDate={new Date(streakStart)?.toDateString()}
          endDate={new Date(streakEnd)?.toDateString()}
          points={longestStreak}
        />
        {currentStreak !== 0 ? (
          <Card
            title="Current Streak"
            startDate={new Date(currentStreakStart)?.toDateString()}
            endDate="present"
            points={currentStreak}
          />
        ) : (
          <Card
            title="Current Streak"
            points={currentStreak}
          />
        )}
      </div>
    )
  );
};

export default Streak;
