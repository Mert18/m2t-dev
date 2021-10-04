import { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../../models/index";
import { connectToDatabase } from "../../../lib/mongoose";

export default async function getData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectToDatabase();
    const data = await Data.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("error");
  }
}
