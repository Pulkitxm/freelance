import express from "express";
import mongoose from "mongoose";
import { DATABASE_URL, PORT } from "./lib/contants.js";
import routes from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);

app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, async () => {
  console.log("Connecting to database...", DATABASE_URL);
  await mongoose.connect(DATABASE_URL);
  console.log("Server is running on http://localhost:" + PORT);
});
