import express from "express";
import { registerUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/auth/register", registerUser);
/* router.post("/auth/login", loginUser);
router.post("/users/logout", logoutUser); */
export default router;
 
