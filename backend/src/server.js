import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import classRoutes from '../src/routes/classRoutes.js'
import assignmentRoutes from '../src/routes/assignmentRoutes.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

connectDB();

// middleware
app.use(cors({
  origin: ["https://timely-dusky.vercel.app/"], // change this to your actual frontend URL
  credentials: true,
}));
app.use(express.json());

app.use('/classes',classRoutes);
app.use('/assignments',assignmentRoutes);

app.listen(PORT, ()=> {
    console.log(`Server started on port: ${PORT}`)
})