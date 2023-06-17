import getUsers from "@/utility/getUsers";

export default async function ListItem({
  title,
  userId,
}: {
  title: string;
  userId: number;
}) {
  const author = await getUsers(userId.toString());

  return (
    <div>
      <h1>{title}</h1>
      {author ? <p className="text-red-500">{author.name}</p> : <p>unknow</p>}
    </div>
  );
}
