import mongoose, { Document, model, Model, Schema } from "mongoose";
import moment from "moment";

export interface IData extends Document {
  work: number;
  happiness: number;
  leisure: number;
  game: number;
  note: string;
  date: string;
}

const DataSchema: Schema = new Schema({
  work: {
    type: Number,
    required: true,
  },
  happiness: {
    type: Number,
    required: true,
  },
  leisure: {
    type: Number,
    required: true,
  },
  game: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    default: moment().format("MMM Do YY"),
  },
});

export const Data: Model<IData> =
  mongoose.models.Data || model("Data", DataSchema);
