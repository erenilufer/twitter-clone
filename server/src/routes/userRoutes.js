const express = require("express");
const {
  deleteUser,
  updateUser,
  getOneUser,
} = require("../controllers/userController.js");

const router = express.Router();

router.get("/user/:username", getOneUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
module.exports = router;
