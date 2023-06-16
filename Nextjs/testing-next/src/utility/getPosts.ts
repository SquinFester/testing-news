export default async function getPosts(id: string = "") {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) throw new Error("failed to get posts");

  return res.json();
}
