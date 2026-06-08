import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoute from "./routes/contact.route.js";
import { verifyTransporter } from "./utils/email.js";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://the-meridian.com.vn"],
    credentials: true,
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
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

  verifyTransporter().then((res) => {
    if (res.ok) console.log("SMTP transporter verified");
    else
      console.warn(
        "SMTP transporter verification failed:",
        res.error?.message || res.error,
      );
  });
};

startServer().catch((err) => {
  console.error("Failed to start server:", err.message || err);
  process.exit(1);
});
