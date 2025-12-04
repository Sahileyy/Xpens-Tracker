import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoConnect";
import Plan from "@/models/planModel";


export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const form = await req.formData();

    const salary = Number(form.get("salary"));
    const month = form.get("month") as string;
    const savings = Number(form.get("savings"));

    const travel = Number(form.get("travel"));
    const bills = Number(form.get("bills"));
    const grocery = Number(form.get("grocery"));
    const shopping = Number(form.get("shopping"));

    await Plan.create({
      salary,
      month,
      savings,
      allowanceTravel: travel,
      allowanceBills: bills,
      allowanceGrocery: grocery,
      allowanceShopping: shopping,
    });

    return NextResponse.redirect(new URL("/expense", req.url));
  } catch (err) {
    console.log("Plan create error:", err);
    return NextResponse.json({ error: "Failed to create plan" }, { status: 500 });
  }
}
