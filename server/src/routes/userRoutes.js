import express from "express";
import { deleteUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
