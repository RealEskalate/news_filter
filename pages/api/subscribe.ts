// pages/api/subscribe.ts

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { keyword, email, schedule } = req.body;
    console.log("keyword", keyword, " email", email, " schedule", schedule);

    try {
      const response = await axios.post(
        "https://newsaggregator-s588.onrender.com/aggregator/subscribe/",
        {
          keyword,
          email,
          schedule,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Add other headers if necessary, like Authorization
          },
        },
      );

      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error subscribing:", error);
      if (error instanceof AxiosError) {
        // Forward the actual error message from the API response
        res
          .status(error.response?.status || 500)
          .json({
            message:
              error.response?.data ||
              "An error occurred while processing your request.",
          });
      } else {
        // Handle other errors
        res
          .status(500)
          .json({
            message: "An unknown error occurred while processing your request.",
          });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
