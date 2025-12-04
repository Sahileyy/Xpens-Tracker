import Sidebar from "@/components/sidebar";
import Link from "next/link";

export default function ExpensePage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="ml-64 p-8 w-full flex flex-col justify-center items-center">
        <Link
          href="/expense/create"
          className="bg-indigo-600 text-sm text-white p-2 rounded-lg hover:bg-indigo-700"
        >
          ADD PLAN
        </Link>

        <h1 className="text-3xl mt-4 text-gray-600 font-extrabold">
          Xpens Tracker
        </h1>
        <p className="text-gray-600">Make your own Xpens.</p>
      </div>
    </div>
  );
}
