"use client";

import { useState } from "react";
import Image from "next/image";
import Xpenlogo from "@/public/assets/xpenlogo.svg";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("password", password);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: form,
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Registration failed");
      return;
    }

    setSuccess("Account created! Redirecting...");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2f2f2] p-4">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 border border-gray-200">

       
        <div className="flex justify-center mb-4">
          <Image src={Xpenlogo} alt="logo" className="w-20 h-20 grayscale" />
        </div>

       
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2 tracking-tight">
          xpens Tracker
        </h1>

        <p className="text-gray-600 text-center mb-6 text-sm">
          Create your account to Keep a Track
        </p>

       
        {error && (
          <div className="bg-gray-200 text-gray-700 p-3 rounded-lg mb-4 border border-gray-300">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-gray-100 text-gray-700 p-3 rounded-lg mb-4 border border-gray-300">
            {success}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="text-gray-700 font-medium text-sm">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl bg-gray-100 text-black focus:outline-none"
              placeholder="username"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium text-sm">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl bg-gray-100 text-black focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium text-sm">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl bg-gray-100 text-black focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gray-900 text-white font-semibold shadow hover:bg-black transition-all"
          >
            Register
          </button>
        </form>

        
        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-gray-900 font-semibold underline underline-offset-2"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
