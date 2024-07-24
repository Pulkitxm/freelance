import { decodeToken } from "./lib/auth.js";

export async function verifyToken(req, res, next) {
  // const { token } = req.cookies;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InB1bGtpdCIsInBhc3N3b3JkIjoicHAxMTIyMzMzNCIsImlhdCI6MTcyMTgwOTI0OX0.tyhnXg-ZywAGWG5rjdMxqy5UZpgcp6BbfjhoviA_VBM";
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const decodedToken = decodeToken(token);
  if (!decodedToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.user = decodedToken;
  next();
}
