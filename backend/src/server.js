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

// middlewareS
app.use(cors());
app.use(express.json());

app.use('/classes',classRoutes);
app.use('/assignments',assignmentRoutes);

app.listen(PORT, ()=> { 
    console.log(`Server started on port: ${PORT}`)
})
// app.listen creates an HTTP server using Node's built-in http module
// begins listening for incoming requests on port 5001
// when it runs, Node opens a TCP port and starts waiting for clients (like browsers, Postman, frontend apps) to make requests.