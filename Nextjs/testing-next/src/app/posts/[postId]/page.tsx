import getPosts from "@/utility/getPosts";

type Props = {
  params: {
    postId: string;
  };
};

export default async function PostDetail({ params: { postId } }: Props) {
  const post: Post = await getPosts(postId);

  console.log(post);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
