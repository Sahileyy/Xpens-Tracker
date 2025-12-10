import Link from "next/link";
import Plan from "@/models/planModel";
import { connectDB } from "@/lib/mongoConnect";
import { cookies } from "next/headers";
import DeleteButton from "./deleteButton";
import Image from "next/image";
import Xpenlogo from "@/public/assets/xpenlogo.svg";

export default async function Sidebar() {
  await connectDB();
  const cookieStore = await cookies();
  const userId = cookieStore.get("user_id")?.value;
  const plans = await Plan.find({ userId: userId }).lean();

  return (
    <div className="w-64 h-screen fixed z-10 bg-white/80 backdrop-blur-lg border-r border-white/40 shadow-xl flex flex-col">

      
      <div className="p-3 border-b border-white/40 bg-white/70 backdrop-blur-xl shadow-md flex items-center gap-3">
        <Image 
          src={Xpenlogo} 
          alt="XPENS Logo" 
          className="w-10 h-10 grayscale"
        />
        <span className="text-gray-900 text-2xl font-extrabold tracking-wide">
          XPENS
        </span>
      </div>

     
      <div className="p-4 border-b border-gray-200">
        <Link
          href="/expense/create"
          className="block bg-gray-900 text-white text-center py-2 rounded-xl font-semibold shadow-md hover:bg-black transition"
        >
          Create Tracking Plan
        </Link>
      </div>

      
      <div className="p-4 overflow-auto flex-1">
        <p className="text-gray-500 text-xs mb-3 tracking-wider font-medium">
          YOUR PLANS
        </p>

        <ul className="space-y-2">
          {plans.map((plan: any) => (
            <li
              key={plan._id}
              className="relative group flex items-center justify-between bg-white/60 backdrop-blur-sm p-2 rounded-lg shadow-sm hover:shadow-md transition"
            >
             
              <Link
                href={`/expense/plan/${plan._id}`}
                className="block px-3 py-2 rounded font-semibold text-gray-900 hover:text-gray-700 transition flex-1 text-lg"
              >
                {plan.month}
              </Link>

              
              <DeleteButton id={plan._id.toString()} />

              
              <div className="hidden group-hover:block absolute left-60 top-0 bg-white/90 backdrop-blur-md shadow-xl p-4 rounded-xl border border-gray-200 min-w-[220px] text-sm z-20">
                <p><b>Salary:</b> ₹{plan.salary}</p>
                <p><b>Savings Goal:</b> ₹{plan.savings}</p>
                <hr className="my-2" />
                <p><b>Travel:</b> ₹{plan.allowanceTravel}</p>
                <p><b>Bills:</b> ₹{plan.allowanceBills}</p>
                <p><b>Grocery:</b> ₹{plan.allowanceGrocery}</p>
                <p><b>Shopping:</b> ₹{plan.allowanceShopping}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
