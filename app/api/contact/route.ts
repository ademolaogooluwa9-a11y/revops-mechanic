import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, website, businessType, questions } = body;

    // Validate required fields
    if (!name || !email || !phone || !website || !businessType) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("audit_requests")
      .insert([
        {
          name,
          email,
          phone,
          website,
          business_type: businessType,
          questions: questions || null,
        },
      ]);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save your request" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Audit request submitted successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting audit request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}