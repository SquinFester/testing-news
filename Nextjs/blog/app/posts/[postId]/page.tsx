import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = () => {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ postId: post.id }));
};

export const generateMetadata = ({
  params,
}: {
  params: { postId: string };
}) => {
  const posts = getSortedPostsData();
  const { postId } = params;
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return { title: "Post Not Found" };
  }
  return { title: post.title };
};

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();

  const { postId } = params;

  if (!posts.find((p) => p.id === postId)) {
    notFound();
  }

  const { title, date, contentHtml } = await getPostData(params.postId);

  const pubData = getFormattedDate(date);

  return (
    <main>
      <h1>{title}</h1>
      <p>{pubData}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">Back to home</Link>
        </p>
      </article>
    </main>
  );
}
