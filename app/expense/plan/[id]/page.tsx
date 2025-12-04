import { connectDB } from "@/lib/mongoConnect";
import Plan from "@/models/planModel";

interface Props {
  params: { id: string };
}

export default async function PlanDetailsPage({ params }: {params: {id: string}}) {
  await connectDB();

  
  const { id } = await params;

  console.log(params);  
  
  console.log(id);

  const plan = await Plan.findById(id).lean();
  console.log(plan);
  

  if (!plan) {
    return <div className="p-10">Plan not found</div>;
  }

  return (
    <div className="p-10 ml-64">
      <h1 className="text-3xl font-bold mb-4">{plan.month} Plan</h1>

      <div className="bg-white p-6 shadow rounded-lg space-y-3 text-gray-900">
        <p>
          <b>Salary:</b> ₹{plan.salary}
        </p>
        <p>
          <b>Savings Goal:</b> ₹{plan.savings}
        </p>

        <h3 className="text-xl font-semibold mt-4">Allowance Breakdown</h3>

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
    </div>
  );
}
