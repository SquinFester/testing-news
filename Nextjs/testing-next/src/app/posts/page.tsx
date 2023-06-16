import getPosts from "@/utility/getPosts";
import Link from "next/link";

export default async function PostsList() {
  const posts: Post[] = await getPosts();

  return (
    <section>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
