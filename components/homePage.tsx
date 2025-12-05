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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-100 to-blue-200 flex items-center justify-center p-6">

      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1.2 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 left-5 w-[18rem] h-[18rem] bg-purple-300 rounded-full blur-3xl opacity-40"
      />

      <motion.div
        initial={{ opacity: 0.2, scale: 1 }}
        animate={{ opacity: 0.5, scale: 1.3 }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-10 right-10 w-[22rem] h-[22rem] bg-indigo-300 rounded-full blur-3xl opacity-40"
      />

     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-16 left-1/3 w-2 h-2 bg-white rounded-full opacity-70 blur-[2px] animate-ping" />
        <div className="absolute top-28 right-1/4 w-3 h-3 bg-indigo-200 rounded-full blur-[1px] animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-200 rounded-full blur-[1px] animate-ping" />
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative bg-white/60 backdrop-blur-2xl shadow-2xl border border-white/50 rounded-3xl p-12 max-w-3xl text-center"
      >
        
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-200/30 to-purple-100/20 blur-xl -z-10" />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight"
        >
          💸 Plan Better.  
          <br />
          <span className="text-indigo-600">Spend Smarter.</span>
        </motion.h1>

        {/* Dialogues */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-700 text-xl leading-relaxed mb-6"
        >
          “Your money deserves a strategy.”  
          <br />
          “Let every rupee have a purpose.”  
          <br />
          “Small changes today → Big savings tomorrow.”
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-gray-800 font-medium mb-10 text-lg"
        >
          Create, track, and improve your spending —  
          <span className="font-bold text-indigo-600"> effortlessly.</span>
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex flex-col md:flex-row gap-5 justify-center"
        >
          <Link
            href="/register"
            className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-xl hover:bg-indigo-700 hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Create Your Account
          </Link>

          <button
            onClick={handleExplore}
            className="px-8 py-3 rounded-xl bg-white border-2 border-indigo-600 text-indigo-700 font-semibold shadow-xl hover:bg-indigo-50 hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 relative overflow-hidden"
          >
           
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 opacity-0 hover:opacity-80 transition-all duration-500 blur-2xl"></span>
            <span className="relative">
              {loading ? "Checking..." : "Explore Expenses"}
            </span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
