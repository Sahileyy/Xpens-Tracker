import { connectDB } from "@/lib/mongoConnect";
import Plan from "@/models/planModel";
import PlanDetails from "@/components/planDetails";

export default async function PlanDetailsPage({ params }: { params: { id: string } }) {
  await connectDB();

  const { id } = await params;

  const plan = await Plan.findById(id).lean();
  if (!plan) return <div className="p-10 text-center text-xl text-gray-600">Plan Not Found</div>;

  const safePlan = JSON.parse(JSON.stringify(plan));

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-10 px-4">

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          {safePlan.month} Plan
        </h1>
        <p className="text-gray-600 mt-1 text-lg">Overview & Spend Tracking</p>
      </div>

      {/* Card Wrapper (Same UI vibe as PlanDetails) */}
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md shadow-xl border border-white/40 rounded-3xl p-6">
        <PlanDetails plan={safePlan} />
      </div>

    </div>
  );
}
