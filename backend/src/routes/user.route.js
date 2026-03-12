import express from 'express';
import { getCurrentUser, loginUser, logoutUser, refreshAccessToken, registerUser } from '../controllers/user.controller.js';
import { verifyJwt } from '../middleware/verifyJwt.js';

const router = express.Router()

router.post('/register',registerUser)
router.post('/login',loginUser);


//secure routes
router.post('/logout',logoutUser)
router.post('/refresh-token',refreshAccessToken )
router.get("/me", verifyJwt, getCurrentUser);

export default router