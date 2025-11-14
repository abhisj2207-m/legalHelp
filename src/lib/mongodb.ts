// lib/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;
const DB_NAME = process.env.DB_NAME || "vrbs1DB";

if (!MONGODB_URI) {
  throw new Error("❌ Missing MONGODB_URI in environment variables");
}

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(MONGODB_URI, {
      dbName: DB_NAME,
    });

    isConnected = conn.connections[0].readyState === 1;
    console.log("🔥 MongoDB Connected");

  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
