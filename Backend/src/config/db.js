import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  if (!process.env.MONGO_URL) {
    console.log("MONGO_URL not set, skipping MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err);

    process.exit(1);
  }
};

export default connectDB;
