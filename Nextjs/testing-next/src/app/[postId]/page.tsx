import getPosts from "@/utility/getPosts";

type Props = {
  params: {
    postId: string;
  };
};

export default async function PostDetail({ params: { postId } }: Props) {
  const post: Post = await getPosts(postId);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export const generateStaticParams = async () => {
  const posts: Post[] = await getPosts();

  if (!posts) throw new Error("No posts found");

  return posts.map((post) => ({ postId: post.id.toString() }));
};
