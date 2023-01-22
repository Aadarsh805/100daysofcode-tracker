import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import { NextApiRequest, NextApiResponse } from "next";

const scrape = async (req: NextApiRequest, res: NextApiResponse) => {
  const scriptPath = path.join(__dirname, "static/scraper.py");
  const script = fs.readFileSync(scriptPath);
  const { username } = req.body;
  const python = spawn("python3", [scriptPath, username]);
  let data = "";

  python.stdout.on("data", (chunk) => {
    data += chunk;
  });

  python.on("close", (code) => {
    if (code === 0) {
      const jsonData = JSON.parse(data);
      res.status(200).json({ jsonData });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  python.on("error", (err) => {
    res.status(500).json({ message: "Internal server error2" });
  });
};

export default scrape;
