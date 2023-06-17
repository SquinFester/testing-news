import getPosts from "./getPosts";

export default async function getUsers(id: string = "") {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) throw new Error("failed to get users");

  return res.json();
}
