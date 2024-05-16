import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

// Use routes for handling requests
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
