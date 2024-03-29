import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
import { UserAccountNav } from "./UserAccountNav";

export const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <header className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-zinc-300 z-10 py-2">
      <div className="container max-w-7xl h-full mx-auto items-center flex justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Breadit
          </p>
        </Link>

        {/* search bar */}

        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};
