import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";
import { Mongoose } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: false },
    name: { type: String, required: false, default: "Anonymous" },
    role: { type: String, required: true, default: "user" },
    isActive: { type: Boolean, default: true, default: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
export default mongoose.models.User || mongoose.model("User", userSchema);
