import { connect } from "mongoose";

export const connectToDatabase = () => connect(process.env.MONGODBURL);
