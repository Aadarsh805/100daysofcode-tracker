import { FC, MouseEvent, useState } from "react";
import { Button } from "@mui/material";

interface pageProps {
  tweets: any;
}

const Comparison: FC<pageProps> = ({ tweets }) => {
  const [answer, setAnswer] = useState<string>("");

  const prompt = `You are given two tweets first represent the first #100daysofcode challenge of the user, the other tweet is the latest tweet \n
  you gotta read the tweets and generate a comparison and tell how much have they learnt in that progress and how much have they improved \n
  read them and generate a simple comparison telling how much they have improved and in which fields
  
  First tweet that was tweeted on ${
    tweets && tweets[tweets.length - 1].date
  } : ${tweets && tweets[tweets.length - 1].content}
  
  Latest tweet that was tweeted on ${tweets && tweets[0].date}: ${
    tweets && tweets[0].content
  }
  `;

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAnswer("");
    const results = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({
        prompt,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    console.log(results, "answer");
    setAnswer(results.result.choices[0].text);
  };

  return (
    <div className="bg-black">
      <p>ComparisonPage</p>
      <br />
      <br />

      <Button variant="outlined" onClick={handleClick}>
        generate comparison
      </Button>

      <br />
      <br />
      <br />

      <div className="bg-pink-500 p-4">
        <p className="text-lg text-blue-800">{answer && answer}</p>
      </div>
    </div>
  );
};

export default Comparison;
