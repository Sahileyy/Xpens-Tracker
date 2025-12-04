"use client";

import { useState } from "react";

export default function PlanDetails({ plan }: { plan: any }) {
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    allowanceTravel: String(plan.allowanceTravel ?? ""),
    allowanceBills: String(plan.allowanceBills ?? ""),
    allowanceGrocery: String(plan.allowanceGrocery ?? ""),
    allowanceShopping: String(plan.allowanceShopping ?? ""),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Typing:", e.target.name, e.target.value);
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async () => {
    console.log("Saving form:", form);
    console.log(plan._id);
    
    const res = await fetch(`/api/plan/${plan._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        allowanceTravel: Number(form.allowanceTravel),
        allowanceBills: Number(form.allowanceBills),
        allowanceGrocery: Number(form.allowanceGrocery),
        allowanceShopping: Number(form.allowanceShopping),
      }),
    });
    console.log(res)
    if (!res.ok) {
      alert("Update failed!");
      return;
    }

    alert("Plan updated!");
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl space-y-6">
      {/* SALARY / SAVINGS VIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200 shadow-sm">
          <h3 className="text-lg font-semibold text-indigo-900">Salary</h3>
          <p className="text-3xl font-bold text-black mt-2">₹{plan.salary}</p>
        </div>

        <div className="bg-green-50 p-5 rounded-xl border border-green-200 shadow-sm">
          <h3 className="text-lg font-semibold text-green-900">Savings Goal</h3>
          <p className="text-3xl font-bold text-black mt-2">₹{plan.savings}</p>
        </div>
      </div>

      <hr />

      <h3 className="text-xl font-semibold text-cyan-900">
        Daily Editable Fields
      </h3>

      {/* FORM FIELDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.entries(form).map(([key, value]) => (
          <div key={key}>
            <label className="font-semibold text-gray-700">
              {key.replace("allowance", "")}
            </label>
            <input
              name={key}
              type="number"
              value={value}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full p-3 text-black border rounded-lg 
                ${
                  isEditing
                    ? "bg-white border-gray-400"
                    : "bg-gray-200 border-gray-300 cursor-not-allowed"
                }`}
            />
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      {!isEditing ? (
        <button
          onClick={() => {
            console.log("Editing enabled");
            setIsEditing(true);
          }}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Edit Plan
        </button>
      ) : (
        <button
          onClick={handleSave}
          className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Save Changes
        </button>
      )}
    </div>
  );
}
