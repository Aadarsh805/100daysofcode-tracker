"use client";

import { FC, MouseEvent, useState } from "react";

interface FormProps {}

const Form: FC<FormProps> = ({}) => {
  const [tweets, setTweets] = useState<any>();
  const [date, setDate] = useState<any>();
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

    console.log(results.jsonData);
    if (results) {
      const dateArray = Object.values(results.jsonData.date);
      const usernameArray = Object.values(results.jsonData.username);
      const contentArray = Object.values(results.jsonData.content);
      console.log(dateArray);
      console.log(usernameArray);
      console.log(contentArray);
      const tweets = contentArray.map((content, index) => ({
        content,
        date: dateArray[index],
      }));
      setTweets(tweets);
    }
  };

  console.log(tweets, "bro");
  return (
    <div className="bg-red-500 flex flex-col">
      <input
        value={username}
        onChange={(e): any => setUsername(e.target.value)}
      />
      <button className="bg-black text-white" onClick={handleClick}>
        Click me
      </button>
      <div className="bg-yellow-500 w-full min-h-[20vh] text-black flex gap-12">
        <div>
          {tweets &&
            tweets
              .slice()
              .reverse()
              .map((tweet: any, i: any) => (
                <div key={i} className="bg-green-200 mt-2 flex gap-4">
                  <p className="min-w-[10rem]">
                    {new Date(tweet.date).toDateString()}
                  </p>
                  <p>{tweet.content}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
