import express from 'express';
import mangodb from 'mongodb';

const app = express();



app.listen(3001, () => {
  console.log('Server is running on port 3001');
})