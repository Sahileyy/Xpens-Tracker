"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-100 to-blue-200 flex items-center justify-center p-6">

      {/* Floating background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0.3 }}
          animate={{ scale: 1.2, opacity: 0.6 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{ scale: 1.3, opacity: 0.7 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-300 rounded-full blur-3xl opacity-40"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-xl shadow-2xl border border-white/40 rounded-3xl p-12 max-w-3xl text-center"
      >
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          💸 Plan Better.  
          <br />
          <span className="text-indigo-600">Spend Smarter.</span>
        </h1>

        {/* Creative dialogues */}
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          “Your money deserves a plan.”  
          <br />
          “Small steps today, big savings tomorrow.”  
          <br />
          “Let XPENS guide your financial journey.”  
        </p>

        {/* Sub text */}
        <p className="text-gray-800 font-medium mb-10 text-lg">
          Designed to help you stay in control —  
          <span className="font-bold text-indigo-600"> effortlessly.</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          
          {/* Register Button */}
          <Link
            href="/register"
            className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-xl hover:bg-indigo-700 hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Create Your Account
          </Link>

          {/* Expense Button */}
          <Link
            href="/expense"
            className="px-8 py-3 rounded-xl bg-white border-2 border-indigo-600 text-indigo-700 font-semibold shadow-xl hover:bg-indigo-50 hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Explore Expenses
          </Link>
        </div>
      </motion.div>

    </div>
  );
}
