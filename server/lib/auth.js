import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../lib/contants.js";

export function getToken(username, password) {
  if (!username || !password) {
    throw new Error("Please provide all fields");
  }
  return jwt.sign({ username, password }, JWT_SECRET);
}
