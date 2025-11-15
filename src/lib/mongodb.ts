// lib/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;


if (!MONGODB_URI) {
  throw new Error("⚠️ Missing MONGODB_URI in .env.local");
}

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGODB_URI, {
      dbName: "vrbs1DB",
    });
    console.log("✅ MongoDB Connected");
    return connection;
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
};