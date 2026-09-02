import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, website, businessType, questions } = body;

    // Validate
    if (!name || !email || !phone || !website || !businessType) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    console.log("Inserting into Supabase:", { name, email, phone, website, businessType });

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
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to save your request" },
        { status: 500 }
      );
    }

    console.log("Insert successful:", data);
    return NextResponse.json(
      { message: "Audit request submitted successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unhandled error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}