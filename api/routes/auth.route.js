import express from 'express';
import { signup } from '../controllers/auth.controller.js';
import { signin } from '../controllers/auth.controller.js';


const router = express.Router();

router.post('/api/auth', signup);
router.post('/api/auth', signin);

export default router;
