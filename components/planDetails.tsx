"use client";

import { useState } from "react";
import Link from "next/link";

export default function PlanDetails({ plan }: { plan: any }) {
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    allowanceTravel: plan.allowanceTravel,
    allowanceBills: plan.allowanceBills,
    allowanceGrocery: plan.allowanceGrocery,
    allowanceShopping: plan.allowanceShopping,
  });

  const [expense, setExpense] = useState({
    travel: "",
    bills: "",
    grocery: "",
    shopping: "",
  });

  type ExpenseKey = "travel" | "bills" | "grocery" | "shopping";

  type AllowanceKey =
    | "allowanceTravel"
    | "allowanceBills"
    | "allowanceGrocery"
    | "allowanceShopping";

  const keyMap: Record<ExpenseKey, AllowanceKey> = {
    travel: "allowanceTravel",
    bills: "allowanceBills",
    grocery: "allowanceGrocery",
    shopping: "allowanceShopping",
  };

  const handleExpenseAdd = (key: ExpenseKey) => {
    const spent = Number(expense[key]);
    if (!spent || spent <= 0) return alert("Enter valid number!");
    const allowanceKey = keyMap[key];

    if (spent > form[allowanceKey]) return alert("Not enough balance!");

    setForm((prev) => ({
      ...prev,
      [allowanceKey]: prev[allowanceKey] - spent,
    }));

    setExpense((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  const handleSave = async () => {
    const res = await fetch(`/api/plan/${plan._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) return alert("Update failed!");
    alert("Plan updated!");
    setIsEditing(false);
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-100 p-6">

      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{plan.month} Plan</h2>

        <Link
          href="/"
          className="px-5 py-2 rounded-xl bg-gray-900 text-white shadow hover:bg-black transition"
        >
          Home
        </Link>
      </div>

      
      <div className="bg-white rounded-3xl shadow-lg p-6 space-y-8">

        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-5 rounded-2xl shadow-sm text-center">
            <p className="text-gray-500 text-sm">Salary</p>
            <p className="text-4xl font-bold text-gray-900">₹{plan.salary}</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl shadow-sm text-center">
            <p className="text-gray-500 text-sm">Savings Goal</p>
            <p className="text-4xl font-bold text-gray-900">₹{plan.savings}</p>
          </div>
        </div>

        <div className="border-t border-gray-200" />

       
        <h3 className="text-xl font-semibold text-gray-800">
          Remaining Allowances
        </h3>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

         
          <div className="bg-gray-50 p-5 rounded-2xl shadow-sm space-y-3">
            <p className="font-medium text-gray-700">Travel</p>
            <p className="text-3xl font-bold text-gray-900">{form.allowanceTravel}</p>

            <div className="flex gap-2">
              <input
                type="number"
                value={expense.travel}
                placeholder="Spent"
                className="flex-1 p-2 rounded-xl border text-black shadow-sm bg-white"
                onChange={(e) =>
                  setExpense((prev) => ({ ...prev, travel: e.target.value }))
                }
              />
              <button
                onClick={() => handleExpenseAdd("travel")}
                className="px-4 py-2 bg-gray-900 text-white rounded-xl shadow hover:bg-black"
              >
                Add
              </button>
            </div>
          </div>

          
          <div className="bg-gray-50 p-5 rounded-2xl shadow-sm space-y-3">
            <p className="font-medium text-gray-700">Bills</p>
            <p className="text-3xl font-bold text-gray-900">{form.allowanceBills}</p>

            <div className="flex gap-2">
              <input
                type="number"
                value={expense.bills}
                placeholder="Spent"
                className="flex-1 p-2 rounded-xl border text-black shadow-sm bg-white"
                onChange={(e) =>
                  setExpense((prev) => ({ ...prev, bills: e.target.value }))
                }
              />
              <button
                onClick={() => handleExpenseAdd("bills")}
                className="px-4 py-2 bg-gray-900 text-white rounded-xl shadow hover:bg-black"
              >
                Add
              </button>
            </div>
          </div>

          
          <div className="bg-gray-50 p-5 rounded-2xl shadow-sm space-y-3">
            <p className="font-medium text-gray-700">Grocery</p>
            <p className="text-3xl font-bold text-gray-900">{form.allowanceGrocery}</p>

            <div className="flex gap-2">
              <input
                type="number"
                value={expense.grocery}
                placeholder="Spent"
                className="flex-1 p-2 rounded-xl border shadow-sm bg-white text-black"
                onChange={(e) =>
                  setExpense((prev) => ({ ...prev, grocery: e.target.value }))
                }
              />
              <button
                onClick={() => handleExpenseAdd("grocery")}
                className="px-4 py-2 bg-gray-900 text-white rounded-xl shadow hover:bg-black"
              >
                Add
              </button>
            </div>
          </div>

          
          <div className="bg-gray-50 p-5 rounded-2xl shadow-sm space-y-3">
            <p className="font-medium text-gray-700">Shopping</p>
            <p className="text-3xl font-bold text-gray-900">{form.allowanceShopping}</p>

            <div className="flex gap-2">
              <input
                type="number"
                value={expense.shopping}
                placeholder="Spent"
                className="flex-1 p-2 rounded-xl border text-black shadow-sm bg-white"
                onChange={(e) =>
                  setExpense((prev) => ({ ...prev, shopping: e.target.value }))
                }
              />
              <button
                onClick={() => handleExpenseAdd("shopping")}
                className="px-4 py-2 bg-gray-900 text-white rounded-xl shadow hover:bg-black"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        
        <button
          onClick={handleSave}
          className="w-full py-3 bg-gray-900 text-white text-lg font-semibold rounded-2xl shadow hover:bg-black"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
