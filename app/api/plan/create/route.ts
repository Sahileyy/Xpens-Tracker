import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoConnect";
import Plan from "@/models/planModel";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import User from "@/models/userModel";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const user = await User;
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const userId = cookieStore.get("user_id")?.value;

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const form = await req.formData();

    const salary = Number(form.get("salary"));
    const month = String(form.get("month"));
    const savings = Number(form.get("savings"));

    const allowanceTravel = Number(form.get("travel"));
    const allowanceBills = Number(form.get("bills"));
    const allowanceGrocery = Number(form.get("grocery"));
    const allowanceShopping = Number(form.get("shopping"));

    if (!salary || !month || !savings) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await Plan.create({
      userId,
      salary,
      month,
      savings,
      allowanceTravel,
      allowanceBills,
      allowanceGrocery,
      allowanceShopping,
    });
    console.log(req.cookies);

    return NextResponse.redirect(new URL(`/expense/${userId}`, req.url));
  } catch (err) {
    console.error("Plan creation error:", err);
    return NextResponse.json(
      { error: "Failed to create plan" },
      { status: 500 }
    );
  }
}
