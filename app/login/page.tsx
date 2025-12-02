"use client";

import { useState } from "react";
import Image from "next/image";
import Xpenlogo from "@/public/assets/xpenlogo.svg";

 

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Login failed");
      setLoading(false);
      return;
    }

    window.location.href = "/expense";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-4">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src={Xpenlogo} alt="logo" className="w-20 h-20" />
        </div>

        <h1 className="text-2xl font-bold font-rubik text-center  text-gray-900 mb-6">
          xpens Tracker
        </h1>

        <p className="text-gray-600 text-center mb-4 mt-3">
          Login to continue tracking your expenses
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-black"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-black"
              placeholder="••••••••"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg
                       hover:bg-indigo-700 active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-indigo-600 font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
