import { Router } from "express";
import {
  createUser,
  getUserAnyByUsernameorEmail,
  getUserByUsernameorEmail,
  verifyUser,
} from "../db/user.js";
import { getToken } from "../lib/auth.js";

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  try {
    const userExists = await getUserByUsernameorEmail(username, email);

    if (userExists) {
      return res.status(409).json({ message: "User already existas" });
    }

    const newUserId = await createUser({ username, email, password });
    res
      .status(201)
      .json({ message: "User created successfully", id: newUserId });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

authRouter.post("/login", async (req, res) => {
  const { username, email, password } = req.body;

  if (!(username || email) || !password) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  const field = username || email;

  const userExists = await getUserAnyByUsernameorEmail(field);

  if (!userExists) {
    return res.status(404).json({ message: "User not found" });
  }

  const isVerified = await verifyUser(field, password);

  if (!isVerified) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = getToken(username, password);

  res.cookie("token", token);

  res.status(200).json({
    message: "Login successful",
    username: isVerified.username,
    email: isVerified.email,
  });
});

export default authRouter;
