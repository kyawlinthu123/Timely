// This is where you define how your data looks
import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    classTitle: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Class = mongoose.model("Class", classSchema);

export default Class;
