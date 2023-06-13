"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/${search}/`);

    setSearch(() => "");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-50 flex justify-center md:justify-between"
    >
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(() => e.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-xl"
      />
      <button
        type="submit"
        className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold"
      >
        🚀
      </button>
    </form>
  );
}
