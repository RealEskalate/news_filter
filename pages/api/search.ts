import axios from 'axios';

export default async function handler(req : any, res: any) {
  try {
    const { keyword } = req.query;
    const url = keyword 
      ? `https://newsaggregator-s588.onrender.com/aggregator/search?keyword=${keyword}`
      : `https://newsaggregator-s588.onrender.com/aggregator/search`;

    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}