const express = require("express");
const { deleteUser, updateUser } = require("../controllers/userController.js");

const router = express.Router();

router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
module.exports = router;
