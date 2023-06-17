"use client";

import SearchBar from "@/components/SearchBar";
import getPosts from "@/utility/getPosts";
import { useState } from "react";

export default async function Home() {
  const postsData: Promise<Post[]> = await getPosts();

  const [a, setA] = useState("ad");

  return <main></main>;
}
