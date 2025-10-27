import e from "express";
import Assignment from "../models/Assignment.js";

export async function getAssignments(req, res) {
  try {
    const assignments = await Assignment.find();  
    res.status(200).json(assignments);
  } catch (error) {
    console.error("Internal Server Error", error);
  }
}

export async function createAssignment(req, res) {
  try {
    const { assignmentTitle, classTitle, priority, dueDate } = req.body;
    const newAssignment = new Assignment({
      assignmentTitle,
      classTitle,
      priority,
      dueDate,
    });
    await newAssignment.save();
    res.status(201).json({ message: "Assignment Created Successfully" });
  } catch (error) {
    console.error("failed creating new assignment", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateAssignment(req, res) {
  try {
    const { assignmentTitle, classTitle, priority, dueDate } = req.body;
    const updatedAssignment = await Assignment.findByIdAndUpdate(
      req.params.id,
      { assignmentTitle, classTitle, priority, dueDate },
      { new: true }
    );
    if (!updatedAssignment)
      return res.status(401).json({ message: "Assignment not found" });
    res.status(201).json({ message: "Assignment updated successfully" });
  } catch (error) {
    console.error("Failed updating the assignment");
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteAssignment(req, res) {
  try {
    const { assignmentTitle, classTitle, priority, dueDate } = req.body;
    await Assignment.findByIdAndDelete(req.params.id,);
    res.status(200).json({ message: "Assignment deleted successfully" });
  } catch (error) {
    console.error("failed deleting assignment", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
