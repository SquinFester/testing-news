import { useFetcher } from "react-router-dom";

const NewsletterSingup = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="post" action="/newsletter" className="text-black">
      <input
        type="email"
        name="email"
        placeholder="Sing up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sing up</button>
    </fetcher.Form>
  );
};

export default NewsletterSingup;
