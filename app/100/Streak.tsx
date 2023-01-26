"use client";

import { FC, useEffect, useState } from "react";

interface StreakProps {
  dates: string[];
}

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
    <div className="flex gap-12">
      <div>
        <p>{dates?.length} Total Days</p>
      </div>
      <div>
        <p>{longestStreak} longestStreak</p>
        <p>{new Date(streakStart).toDateString()} </p>
        <p>{new Date(streakEnd).toDateString()} </p>
      </div>
      <div>
        <p>{currentStreak} currentStreak</p>
        {currentStreak !== 0 && (
          <p>
            {new Date(currentStreakStart).toDateString()} currentStreakStart
          </p>
        )}
      </div>
    </div>
  );
};

export default Streak;
