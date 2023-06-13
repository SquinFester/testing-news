import type { Metadata } from "next";
import Link from "next/link";
import getAllUsers from "@/lib/getAllUsers";

export const metadata: Metadata = {
  title: "users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  const content = (
    <section>
      <h1>
        <Link href="/">Back to Home</Link>
      </h1>
      {users.map((user) => (
        <>
          <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
        </>
      ))}
    </section>
  );

  return <div>{content}</div>;
}
