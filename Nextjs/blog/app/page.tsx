import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="mx-auto w-max py-8 text-2xl">
      <p>
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Dave</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
}
