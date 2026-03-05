import express from "express";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const envFile =
  process.env.NODE_ENV === "test" || process.env.JEST_WORKER_ID
    ? ".env.test"
    : ".env";

dotenv.config({ path: envFile });

connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

export default app;