import LogoutButton from "@/components/logout";
import Sidebar from "@/components/sidebar";
import Link from "next/link";

export default function ExpensePage() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="ml-64 w-full">

      
        <nav className="fixed top-0 left-64 right-0 h-16 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 flex items-center justify-between px-6 z-30">
          

          <div className="flex justify-end w-full">
            <LogoutButton />
          </div>
        </nav>

       
        <div className="p-8 mt-20 flex flex-col items-center justify-center text-center">

          <Link
            href="/expense/create"
            className="bg-indigo-600 text-sm text-white px-4 py-2 rounded-lg hover:bg-indigo-700 shadow-md transition-all"
          >
            ADD PLAN
          </Link>

          <h1 className="text-3xl mt-6 text-gray-700 font-extrabold">
            Xpens Tracker
          </h1>

          <p className="text-gray-600 mt-2">
            Make your own Xpens.
          </p>

        </div>
      </div>
    </div>
  );
}
