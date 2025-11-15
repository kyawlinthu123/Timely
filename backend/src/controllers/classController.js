import Class from "../models/Class.js";

export async function getClasses(req, res) {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (error) {
    console.error("❌ Failed to fetch classes:", error);
    res.status(500).json({
      message: "Unable to retrieve classes. Please try again later.",
    });
  }
}

export async function createClass(req, res) {
  try {
    const { classTitle, instructor, description } = req.body;
    const newClass = new Class({ classTitle, instructor, description });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    console.error("Failed creating a new class", error);
    res.status(500).json({
      message: "Unable to create class. Please try again later.",
    });
  }
}

export async function updateClass(req, res) {
  try {
    const { classTitle, instructor, description } = req.body;
    const updatedNote = await Class.findByIdAndUpdate(
      req.params.id,
      { classTitle, instructor, description },
      { new: true }
    );
    if (!updatedNote)
      return res.status(401).json({ message: "Class not found" });
    res.status(200).json({ message: "Class updated successfully" });
  } catch (error) {
    console.error("Failed updating the class", error);
    res.status(500).json({
      message: "Unable to update class. Please try again later.",
    });
  }
}

export async function deleteClass(req, res) {
  try {
    await Class.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Class deleted successfully" });
  } catch (error) {
    console.error("Failed deleting the class", error);
    res.status(500).json({
      message: "Unable to delete class. Please try again later.",
    });
  }
}
