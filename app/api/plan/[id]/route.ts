import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoConnect";
import Plan from "@/models/planModel";
import { error } from "console";
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await context.params;
    console.log("consoling params:", id);
    const body = await req.json();

    console.log("PUT called with id:", id);

    const updatedPlan = await Plan.findByIdAndUpdate(
      id,
      {
        allowanceTravel: body.allowanceTravel,
        allowanceBills: body.allowanceBills,
        allowanceGrocery: body.allowanceGrocery,
        allowanceShopping: body.allowanceShopping,
      },
      { new: true, runValidators: true }
    );

    if (!updatedPlan) {
      return NextResponse.json({ error: "Plan not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Plan updated", plan: updatedPlan });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export  async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try{

    await connectDB()
    const{ id }= await context.params;
    const deletedPlan = await Plan.findByIdAndDelete(id)
    console.log(id);
    

    if(!deletedPlan){
      return NextResponse.json({ message: "Plan not Deleted"},{status:404})
    }
    return NextResponse.json({message:"plan deleted", Plan:deletedPlan})
  }
  catch(err){
    console.log("delete error",err);
    return NextResponse.json({error:"server error"},{status:500})
    
  }
}