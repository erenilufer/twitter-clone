import { User } from "../models/user.js";

export const registerUser = async (req, res) => {
  try {
    const user = User({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });
    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
};
