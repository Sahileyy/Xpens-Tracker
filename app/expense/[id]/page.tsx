import LogoutButton from "@/components/logout";
import Sidebar from "@/components/sidebar";
import Link from "next/link";

export default function ExpensePage() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="ml-64 w-full">

       
        <nav
          className="fixed top-0 left-64 right-0 h-16 
          bg-white/80 backdrop-blur-lg shadow-md border-b border-gray-200
          flex items-center justify-between px-6 z-30"
        >
          <div className="flex justify-end w-full">
            <LogoutButton />
          </div>
        </nav>

        
        <div className="p-8 mt-24 flex flex-col items-center justify-center text-center">

          
          <Link
            href="/expense/create"
            className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow 
            hover:bg-gray-800 transition-all text-md font-semibold"
          >
            Add Plan
          </Link>

          <h1 className="text-4xl mt-8 font-extrabold text-gray-900 tracking-tight">
            Xpens Tracker
          </h1>

          
          <p className="text-gray-600 mt-3 text-lg">
            Track your financial journey with ease.
          </p>

        
          <div className="mt-6 w-16 h-1 bg-gray-700 rounded-full"></div>

        </div>
      </div>
    </div>
  );
}
