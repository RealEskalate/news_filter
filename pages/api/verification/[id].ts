// pages/api/verification/[id].ts

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id, status } = req.query;

  try {
    const response = await axios.get(
      `https://newsaggregator-s588.onrender.com/aggregator/verification/${id}/${status}`,
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching verification status:", error);
    res.status(500).json({ message: "Error fetching verification status" });
  }
}
