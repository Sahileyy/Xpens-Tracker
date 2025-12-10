"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleExplore = async () => {
    setLoading(true);
    const res = await fetch("/api/auth/me");
    const data = await res.json();
    if (data.loggedIn) router.push(`/expense/${data.id}`);
    else router.push("/login");
  };

  return (
    <div className="relative min-h-screen bg-[#EDEDED] flex items-center justify-center p-6">

     
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white shadow-xl rounded-[32px] p-10 max-w-xl w-full border border-gray-200"
      >

        
        <h1 className="text-4xl font-semibold text-gray-900 text-center">
          Plan Better,
          <br />
          <span className="font-bold">Spend Smarter</span>
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Track your expenses in a clean, simple interface.
        </p>

        
        <div className="mt-10 flex flex-col gap-4">

          <Link
            href="/register"
            className="w-full py-3 text-center bg-black text-white rounded-xl font-medium shadow-md"
          >
            Create Account
          </Link>

          <button
            onClick={handleExplore}
            className="w-full py-3 text-center bg-gray-200 text-gray-800 rounded-xl font-medium border border-gray-300 shadow-sm"
          >
            {loading ? "Checking..." : "Explore Expenses"}
          </button>

        </div>
      </motion.div>
    </div>
  );
}
