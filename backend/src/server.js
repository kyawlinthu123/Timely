import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import classRoutes from "./routes/classRoutes.js";
import assignmentRoutes from "./routes/assignmentRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/classes", classRoutes);
app.use("/assignments", assignmentRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("✅ Timely backend is running.");
});

// For local dev only
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Export app for Vercel
export default app;


// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import classRoutes from '../src/routes/classRoutes.js'
// import assignmentRoutes from '../src/routes/assignmentRoutes.js'
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5001

// connectDB();

// // middleware
// app.use(cors());
// app.use(express.json());

// app.use('/classes',classRoutes);
// app.use('/assignments',assignmentRoutes);

// app.listen(PORT, ()=> {
//     console.log(`Server started on port: ${PORT}`)
// })