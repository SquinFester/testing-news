export default async function UserPosts({
  promise,
}: {
  promise: Promise<Post[]>;
}) {
  const posts = await promise;

  const content = posts.map((post) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  ));

  return <div>{content}</div>;
}
