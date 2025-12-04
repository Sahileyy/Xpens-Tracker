import Link from "next/link";
import Plan from "@/models/planModel";
import { connectDB } from "@/lib/mongoConnect";

export default async function Sidebar() {
  await connectDB();
  const plans = await Plan.find().lean();

  return (
    <div className="w-64 bg-white h-screen border-r fixed z-10">
      <div className="p-4 border-b font-bold text-cyan-900">XPENS</div>

      <div className="p-4 border-b">
        <Link
          href="/expense/create"
          className="block bg-indigo-600 text-white text-center py-2 rounded"
        >
          Create Tracking Plan
        </Link>
      </div>

      <div className="p-4">
        <p className="text-gray-500 text-xs mb-2">Your Plans</p>

        <ul className="space-y-1 text-gray-950">
          {plans.map((plan: any) => (
            <li key={plan._id} className="relative group">
              {/* Click to open plan */}
              <Link
                href={`/expense/plan/${plan._id}`}
                className="block px-3 py-2 hover:bg-gray-100 rounded"
              >
                {plan.month}
              </Link>

              {/* Tooltip */}
              <div className="hidden group-hover:block absolute left-64 top-0 bg-white shadow-lg p-3 rounded border min-w-[220px] text-sm">
                <p>
                  <b>Salary:</b> ₹{plan.salary}
                </p>
                <p>
                  <b>Savings Goal:</b> ₹{plan.savings}
                </p>

                <hr className="my-2" />

                <p>
                  <b>Travel:</b> ₹{plan.allowanceTravel}
                </p>
                <p>
                  <b>Bills:</b> ₹{plan.allowanceBills}
                </p>
                <p>
                  <b>Grocery:</b> ₹{plan.allowanceGrocery}
                </p>
                <p>
                  <b>Shopping:</b> ₹{plan.allowanceShopping}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
