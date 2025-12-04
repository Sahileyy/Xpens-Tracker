"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    
    await fetch("/api/logout", { method: "POST" });

   
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");

    
    router.push("/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="text-white p-2 rounded-sm hover:bg-red-600 bg-red-700"
    >
      Logout
    </button>
  );
}
