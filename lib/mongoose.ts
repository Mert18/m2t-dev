import { connect } from "mongoose";

export const connectToDatabase = () =>
  connect(process.env.NEXT_PUBLIC_MONGODBURL);
