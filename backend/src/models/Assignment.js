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
      enum: ["low", "medium", "high"],
      required: true,
    },
    dueDate: {
      type: Date,
    },
    status : {
      type : String,
      enum : ["not started","in progress","completed"],
      required: true,
    }
  },
  { timestamps: true }
);
 
const Assignment = mongoose.model("Assignment", assignmentSchema);

export default Assignment;