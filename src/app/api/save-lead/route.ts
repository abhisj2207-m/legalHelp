// app/api/save-lead/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

// ------------- Schema -------------
const LeadSchema = new mongoose.Schema(
  {
    formType: { type: String },       // identifies which form
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    message: String,
    exposureType: String,
    diagnosis: String,
  },
  { timestamps: true, collection: "lead" }
);

// Prevent model overwrite on hot reload
const Lead = mongoose.models.Lead || mongoose.model("Lead", LeadSchema);

// ------------- POST REQUEST -------------
export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Respond instantly — no waiting for DB
    const response = NextResponse.json(
      { success: true, message: "✓ Submitted" },
      { status: 200 }
    );

    // Save to DB in background
    (async () => {
      await connectDB();
      await Lead.create(data);
      console.log("📥 Lead saved:", data.formType);
    })();

    return response;

  } catch (error) {
    console.error("❌ API Error:", error);

    return NextResponse.json(
      { success: false, message: "Server error", error },
      { status: 500 }
    );
  }
}
