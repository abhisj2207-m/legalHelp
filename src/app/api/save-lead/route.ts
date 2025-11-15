// app/api/save-lead/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

// schema for SAME COLLECTION storing all different form submissions
const LeadSchema = new mongoose.Schema(
  {
    formType: String,        // <-- identifies which form submitted the data
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    message: String,
  },
  { timestamps: true, collection: "lead" }  // <-- Collection name
);

const Lead = mongoose.models.Lead || mongoose.model("Lead", LeadSchema);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectDB();
    await Lead.create(body);

    return NextResponse.json(
      { success: true, message: "Lead stored successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Error storing submission", error: err },
      { status: 500 }
    );
  }
}