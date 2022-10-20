import tweetRoutes from "./tweetRoutes.js";
import authRoutes from "./authRoutes.js";
import userRoutes from "./userRoutes.js";
import imageRoutes from "../controllers/imageController.js";
import express from "express";
import authToken from "../middlewares/auth.js";

const router = express.Router();
router.use(authRoutes);
router.use(authToken);
router.use(userRoutes);
router.use(tweetRoutes);
router.use(imageRoutes);

export default router;
