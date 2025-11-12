// lib/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI="mongodb+srv://abhisj2207_db_user:iHyO0MPLWFdXmbqW@clustervrbs1.1rvheys.mongodb.net/?retryWrites=true&w=majority"


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
