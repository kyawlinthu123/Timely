import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    assignmentTitle: {
      type: String,
      required: true,
    },
    classTitle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
 
const Assignment = mongoose.model("Assignment", assignmentSchema);

export default Assignment;