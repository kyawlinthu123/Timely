import e from "express";
import { getClasses,createClass,updateClass,deleteClass } from "../controllers/classController.js";

const router = e.Router();

router.get("/", getClasses);
router.post("/", createClass);
router.put("/:id",updateClass);
router.delete("/:id",deleteClass)

export default router;