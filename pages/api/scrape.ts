import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const scrape = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username } = req.body;
  try {
    const response = await axios.get(
      `https://web-production-134e2.up.railway.app//${username}`
    );
    res.status(200).json({ data: response.data });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Internal server error" });
  }
};

export default scrape;
