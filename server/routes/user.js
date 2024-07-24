import { Router } from "express";
import {
  getUserAnyByUsernameorEmail,
  getUserByIdFromUsernameOrEmail,
  updateUserOnBoarded,
} from "../db/user.js";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  const { user } = req;

  if (!(user.email || user.username)) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const dbUser = await getUserAnyByUsernameorEmail(
    user.email ? user.email : user.username
  );

  if (!dbUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.send({
    id: dbUser._id,
    username: dbUser.username,
    email: dbUser.email,
    onBoarded: dbUser.onBoarded,
  });
});

userRouter.post("/onboarded", async (req, res) => {
  const { user } = req;

  if (!(user.email || user.username)) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const dbUser = await getUserByIdFromUsernameOrEmail(
    user.email ? user.email : user.username
  );

  if (!dbUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    await updateUserOnBoarded(dbUser._id);
    res.send({ message: "Onboarding complete" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default userRouter;
