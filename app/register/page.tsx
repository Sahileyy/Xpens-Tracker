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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-2">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        <div className="flex justify-center mb-4">
          <Image src={Xpenlogo} alt="logo" className="w-20 h-20" />
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-900 mb-3">
          xpens Tracker
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Create your account to Keep a Track
        </p>

        {error && <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4">{error}</div>}
        {success && <div className="bg-green-100 text-green-600 p-3 rounded-lg mb-4">{success}</div>}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg text-black"
              placeholder="username"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg text-black"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg text-black"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 font-semibold hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
