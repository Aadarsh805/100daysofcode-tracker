import { spawn } from "child_process";
import { NextApiRequest, NextApiResponse } from "next";

const scrape = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username } = req.body;
  // const python = spawn("python3", ["pages/api/scraper.py", username]);

  console.log(username);
  let data = "";
  res.status(200).json({ message: username });

  // python.stdout.on("data", (chunk) => {
  //   data += chunk;
  // });

  // python.on("close", (code) => {
  //   if (code === 0) {
  //     const jsonData = JSON.parse(data);
  //     res.status(200).json({ jsonData });
  //   } else {
  //     res.status(500).json({ message: "Internal server error" });
  //   }
  // });
  // python.on("error", (err) => {
  //   res.status(500).json({ message: "Internal server error2" });
  // });
};

export default scrape;
