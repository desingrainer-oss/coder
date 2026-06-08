"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function BlogSearch({ placeholder = "Buscar artículos..." }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/blog/buscar?q=${encodeURIComponent(q)}`);
    } else {
      router.push("/blog");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md w-full">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 border-[1.5px] border-border rounded-lg py-2.5 px-3.5 text-sm outline-none focus:border-blue"
      />
      <button type="submit" className="btn btn-blue shrink-0">
        Buscar
      </button>
    </form>
  );
}
