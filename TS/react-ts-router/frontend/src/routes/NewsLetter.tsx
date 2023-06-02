import NewsletterSingup from "../components/NewsletterSingup";

const NewsLetter = () => {
  return (
    <section>
      <h1>Join to our newsletter</h1>
      <NewsletterSingup />
    </section>
  );
};

export default NewsLetter;

export const action = async ({ request }: any) => {
  const data = await request.formData();
  const email = data.get("email");

  console.log(email);
  return { message: "Singup successful" };
};
