import { Router } from "express";
import authRouter from "./auth.js";
import userRouter from "./user.js";
import { verifyToken } from "../middleware.js";

const routes = Router();

routes.use("/auth", authRouter);

routes.use(verifyToken);

routes.use("/user", userRouter);

export default routes;
