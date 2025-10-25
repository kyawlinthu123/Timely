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
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Class = mongoose.model("Class", classSchema);

export default Class;
