import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 flex flex-col p-4 justify-between sticky top-0 drop-shadow-xl md:flex-row">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/">WikiRocket!</Link>
      </h1>
      <Search />
    </nav>
  );
}
