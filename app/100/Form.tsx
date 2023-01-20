"use client";

import { FC, MouseEvent, useState } from "react";

interface FormProps {}

const Form: FC<FormProps> = ({}) => {
  const [tweets, setTweets] = useState<any>();
  const [username, setUsername] = useState<string>("");

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const results = await fetch("/api/user/scrape", {
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
      console.log(dateArray, "bitch1");
      console.log(usernameArray, "bitch2");
      console.log(contentArray, "bitch3");
      setTweets(contentArray);
    }
    // setUserProfile(results.data?.includes?.users[0]);
  };

  return <div>Form</div>;
};

export default Form;
