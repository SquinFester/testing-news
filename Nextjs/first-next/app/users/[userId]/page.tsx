import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";

import UserPosts from "./components/UserPosts";

type Params = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  //   const [user, posts] = await Promise.all([userData, userPostsData]);

  const user = await userData;

  return (
    <>
      {user.name}
      <Suspense fallback={<p>Loading...</p>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}
