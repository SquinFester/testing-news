"use client";

import { INFINITE_SCRILLING_PAGINATTION_RESULTS } from "@/config";
import { ExtendedPost } from "@/types/db";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import { Post } from "./Post";

export const PostFeed = async ({
  initialPost,
  subredditName,
}: {
  initialPost: ExtendedPost[];
  subredditName?: string;
}) => {
  const lastPostRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  const { data: session } = useSession();

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["infinite-query"],
    async ({ pageParam = 1 }) => {
      const query =
        `/api/post?limit=${INFINITE_SCRILLING_PAGINATTION_RESULTS}&page=${pageParam}` +
        (!!subredditName ? `&subredditName=${subredditName}` : "");
      const { data } = await axios.get(query);
      return data as ExtendedPost[];
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialData: {
        pages: [initialPost],
        pageParams: [1],
      },
    }
  );

  const posts = data?.pages.flatMap((page) => page) ?? initialPost;

  return (
    <ul className="flex flex-col col-span-2 space-y-6">
      {posts.map((post, index) => {
        const votesAmt = post.votes.reduce(
          (acc: number, vote: { type: "UP" | "DOWN" }) => {
            if (vote.type === "UP") return acc + 1;
            if (vote.type === "DOWN") return acc - 1;
            return acc;
          },
          0
        );

        const currentVote = post.votes.find(
          (vote: any) => vote.userId === session?.user.id
        );
        if (index === posts.length - 1) {
          return (
            <li key={post.id} ref={ref}>
              <Post />
            </li>
          );
        }
      })}
    </ul>
  );
};
