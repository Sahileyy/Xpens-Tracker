import { connectDB } from "@/lib/mongoConnect";
import Plan from "@/models/planModel";
import PlanDetails from "@/components/planDetails";

export default async function PlanDetailsPage({ params }: { params: { id: string } }) {
  await connectDB();

  const { id } = await params;

  const plan = await Plan.findById(id).lean();
  if (!plan) return <div className="p-10">Plan Not Found</div>;

  
  const safePlan = JSON.parse(JSON.stringify(plan));

  return (
    <div className="p-10 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <h1 className="text-3xl font-bold mb-6 text-black">{safePlan.month} PLAN</h1>

    
      <PlanDetails plan={safePlan} />
    </div>
  );
}
