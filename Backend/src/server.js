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

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  
  await connectDB();

  verifyTransporter().then((res) => {
    if (res.ok) console.log("SMTP transporter verified");
    else
      console.warn(
        "SMTP transporter verification failed:",
        res.error?.message || res.error,
      );
  });
});