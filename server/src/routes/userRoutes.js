import express from "express";
import { updateUser, getOneUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/user/:username", getOneUser);
router.put("/user/:id", updateUser); //authTokenMiddleware

export default router;
