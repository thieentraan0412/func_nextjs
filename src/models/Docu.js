import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";
import { Mongoose } from "mongoose";

const docSchema = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: false, default: "Anonymous" },
    name_document: { type: String, required: false, default: "document" },
    tags: { type: String, required: false, default: "tags" },
    type: { type: String, required: false, default: "infomation" },
    img: { type: String, required: false },
  },
  { timestamps: true }
);
export default mongoose.models.Doc || mongoose.model("Doc", docSchema);
