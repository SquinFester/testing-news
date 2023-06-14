import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="mx-auto flex justify-between max-w-2xl flex-col items-center sm:flex-row">
        <h1 className="text-3xl font-bold text-white">
          <Link href="/" className="text-white/90 hover:text-white">
            Dave
          </Link>
        </h1>
        <div className="flex justify-center gap-2 mt-2 sm:mt-0 text-xl cursor-pointer text-white/90">
          <FaYoutube className="hover:text-white" />
          <FaTwitter className="hover:text-white" />
          <FaGithub className="hover:text-white" />
          <FaLaptop className="hover:text-white" />
        </div>
      </div>
    </nav>
  );
}
