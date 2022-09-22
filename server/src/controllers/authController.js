const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const encryptedPassword = await bcrypt.hash(req.body.password, salt);
    const user = User({
      name: req.body.name,
      username: req.body.username,
      password: encryptedPassword,
      email: req.body.email,
    });
    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
};
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      name: req.body.name,
    });

    if (!user) {
      return res.json({ error: { message: "User not Found", code: 404 } });
    }
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparePassword)
      return res.status(400).json({ code: 400, message: "wrong password" });

    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "20s",
    });
    return res.status(200).json({ accessToken: token });
  } catch (err) {
    console.log(err);
    res.json({ error: { message: "Server Did not Respond", code: 500 } });
  }

  const params = req.body;
  console.log(params);

  // POST
};
module.exports = {
  registerUser,
  loginUser,
};
