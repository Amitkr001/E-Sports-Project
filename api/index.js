import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDB');
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

// Use userRoutes for handling requests starting with /api/users
app.use('/api/users', userRoutes);
