import express from "express";
import { createPost } from "../controllers/postLogic";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", protect, createPost);

export default router;
