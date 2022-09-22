const User = require("../models/user.js");

const getOneUser = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ code: 404, message: "User not Found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
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
  getOneUser,
};
