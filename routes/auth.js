import express from 'express';
import { GetPosts, login, profile, userUpdata } from '../controllers/auth.js';
import { verifyToken } from '../middleware/auth.js';
const router = express.Router();

router.post("/login", login);
router.get("/user/:id",verifyToken, profile);
router.put("/updata/:id", userUpdata);
router.get('/getposts', GetPosts);


export default router; 