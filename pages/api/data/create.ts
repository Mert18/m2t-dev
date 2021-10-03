import { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../../models/index";
import { IData } from "../../../models/Data";
import { connectToDatabase } from "../../../lib/mongoose";

export default async function getData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      await connectToDatabase();
      const body: IData = req.body;
      const newData = new Data(body);
      const saved = await newData.save();
      res.send(saved);
    } catch (err) {
      console.log(err);
      res.status(500).send("error");
    }
  } else {
    res.status(405).json({ messagge: "Method not allowed" });
  }
}
