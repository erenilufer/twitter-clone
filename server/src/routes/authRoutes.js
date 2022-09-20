const express = require("express");
const { loginUser, registerUser } = require("../controllers/authController.js");

const router = express.Router();

router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
/* router.post("/auth/logout", logoutUser);
 */ module.exports = router;
