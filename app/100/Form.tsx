"use client";

import path from "path";
import { FC, MouseEvent, useState } from "react";
import ComparisonPage from "./Comparison";
import ContributionGraph from "../ContributionGraph";
interface FormProps {}

const Form: FC<FormProps> = ({}) => {
  const [tweets, setTweets] = useState<any>();
  const [dates, setDates] = useState<any>();
  const [username, setUsername] = useState<string>("");

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const results = await fetch("/api/scrape", {
      method: "POST",
      body: JSON.stringify({
        username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    if (results) {
      const dateArray = Object.values(results.data.date);
      const usernameArray = Object.values(results.data.username);
      const contentArray = Object.values(results.data.content);
      const tweets = contentArray.map((content, index) => ({
        content,
        date: dateArray[index],
      }));
      setTweets(tweets);
      setDates(dateArray);
    }
  };

  // console.log(dates, "bro");
  return (
    <div className="bg-red-500 flex flex-col">
      <input
        value={username}
        onChange={(e): any => setUsername(e.target.value)}
      />
      <button className="bg-black text-white" onClick={handleClick}>
        Click me
      </button>
      <ContributionGraph
      // dates={dates}
      />
      <div className="bg-yellow-500 w-full min-h-[20vh] text-black flex gap-12">
        <div>
          {tweets &&
            tweets
              .slice()
              .reverse()
              .map((tweet: any, i: any) => (
                <div key={i} className="bg-green-200 mt-2 flex gap-4">
                  <p className="min-w-[10rem]">
                    {i}
                    {") " + " "}
                    {new Date(tweet.date).toDateString()}
                  </p>
                  <p>{tweet.content}</p>
                </div>
              ))}
        </div>
      </div>

      <ComparisonPage tweets={tweets} />
    </div>
  );
};

export default Form;
