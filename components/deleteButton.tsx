"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Are you sure?")) return;

    const res = await fetch(`/api/plan/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      alert("Delete failed");
      return;
    }

    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="text-white rounded-md text-xs hover:bg-red-600 p-2 bg-red-700 "
    >
      Delete
    </button>
  );
}
