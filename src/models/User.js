import mongoose from "mongoose";

const { Schema } = mongoose;

const usersSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: false },
    name: { type: String, required: false, default: "Anonymous" },
    image: { type: String, required: false, default: "default" },
    role: { type: String, required: true, default: "user" },
    isActive: { type: Boolean, default: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
export default mongoose.models.User || mongoose.model("User", usersSchema);