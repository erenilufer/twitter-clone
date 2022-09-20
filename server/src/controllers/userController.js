const User = require("../models/user.js");

const updateUser = async (req, res) => {
  if (req.params.id === req.body.id) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
const deleteUser = async (req, res) => {
  if (req.params.id === req.body.id) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports = {
  updateUser,
  deleteUser,
};
