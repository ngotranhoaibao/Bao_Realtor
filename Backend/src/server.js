import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoute from "./routes/contact.route.js";
dotenv.config();

const app = express();

const getEnvOrigins = (origins) =>
  (origins || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [
        "https://s-lighttowersungroup.com",
        "https://www.s-lighttowersungroup.com",
        "https://s-lightsungroup.vercel.app",
        "https://s-lighttower.io.vn",
        "https://www.s-lighttower.io.vn",
        ...getEnvOrigins(process.env.CORS_ORIGINS),
        "http://localhost:3001",
        "http://localhost:3000",
        "http://localhost:5173",
      ]
    : [
        "http://localhost:3001",
        "http://localhost:3000",
        "http://localhost:5173",
      ];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());

app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer().catch((err) => {
  console.error("Failed to start server:", err.message || err);
  process.exit(1);
});
