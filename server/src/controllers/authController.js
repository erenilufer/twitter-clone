import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
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
    res.status(500).json({ error: { code: 500, message: "Server Error" } });
  }
};
export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.json({ error: { message: "User not Found", code: 404 } });
    }
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparePassword)
      return res.json({
        error: { code: 400, message: "Password is not correct!" },
      });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password, ...rest } = user._doc;
    return res.status(200).json({ user: rest, accessToken: token });
  } catch (err) {
    res.json({ error: { message: "Server Did not Respond", code: 500 } });
  }
};

/* TODO */
const refreshToken = (req, res) => {
  const refreshToken = req.body.token;
};
