import express from 'express';
import { authRouter } from './auth.route.js';
import { profileRouter } from './profile.route.js';

const router = express.Router();

// Auth Router
router.use("/auth",authRouter)

// Profile Router
router.use("/profile",profileRouter)

export { router };

