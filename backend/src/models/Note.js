import mongoose from "mongoose";

const noteScheme = new mongoose.Schema(
    {
        noteTitle: {
            type: String,
            required: true,
        },
        classTitle: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class",
            required: true,
        }
    }
)