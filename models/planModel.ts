import mongoose, { Schema, Document, models } from "mongoose";

export interface IPlan extends Document {
  salary: number;
  month: string;
  savings: number;
  allowanceTravel: number;
  allowanceBills: number;
  allowanceGrocery: number;
  allowanceShopping: number;
  createdAt: Date;
  updatedAt: Date;
}

const PlanSchema = new Schema<IPlan>(
  {
    salary: { type: Number, required: true },
    month: { type: String, required: true },
    savings: { type: Number, required: true },

    allowanceTravel: { type: Number, required: true },
    allowanceBills: { type: Number, required: true },
    allowanceGrocery: { type: Number, required: true },
    allowanceShopping: { type: Number, required: true },
  },
  { timestamps: true }
);

export default models.Plan || mongoose.model<IPlan>("Plan", PlanSchema);
