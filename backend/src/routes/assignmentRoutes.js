import e from "express";
import { getAssignments, createAssignment, updateAssignment, deleteAssignment } from "../controllers/assignmentController.js";

const router = e.Router();

router.get("/",getAssignments);
router.post("/", createAssignment);
router.put("/:id",updateAssignment);
router.delete("/:id",deleteAssignment)

export default router;