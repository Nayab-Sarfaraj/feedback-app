import { Schema } from "mongoose";
import mongoose from "mongoose";
const feedbackSchema = new Schema(
  {
    name: { type: String, required: [true, "name is required"] },
    email: { type: String, required: [true, "email is required"] },
    feedback: { type: String, required: [true, "feedback is required"] },
  },
  { timestamps: true }
);

const Feedback = mongoose.model("feedback", feedbackSchema);
export default Feedback;
