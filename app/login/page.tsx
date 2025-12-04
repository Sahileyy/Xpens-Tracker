"use client";

import { useState } from "react";
import Image from "next/image";
import Xpenlogo from "@/public/assets/xpenlogo.svg";
import { useRouter } from "next/navigation";
import { resolve } from "path";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      
      console.log("STATUS:", res.status);
      console.log("RAW RESPONSE:",res);


      const data = await res.json();
      const id = data.id
      localStorage.setItem('user_id',id)
      console.log(id);
      

      if (!res.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      await new Promise((resolve) => setTimeout(resolve, 50))
      router.replace(`/expense/${id}`)
      router.refresh()
     
      // window.location.href = `/expense/${id}`;
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-4">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        
        <div className="flex justify-center mb-4">
          <Image src={Xpenlogo} alt="logo" className="w-20 h-20" />
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
          xpens Tracker
        </h1>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-gray-800 font-semibold">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 border text-black border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="text-gray-800 font-semibold">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 border text-black border-gray-300 rounded-lg"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
         <div className="mt-4 text-center">
        <p className="text-gray-600 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-600 hover:underline font-medium">
            Register
          </a>
        </p>
      </div>
      </div>
    </div>
  );
}
