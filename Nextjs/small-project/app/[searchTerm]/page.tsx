import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";
import { Suspense } from "react";
import Loading from "./loading";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const dispayTerm = searchTerm.replaceAll("%20", "");

  if (!data?.query?.pages) {
    return {
      title: `${dispayTerm} not found`,
    };
  }

  return {
    title: dispayTerm,
  };
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => (
          <Item key={result.pageid} result={result} />
        ))
      ) : (
        <p>{`${searchTerm} not found`}</p>
      )}
    </main>
  );

  return <Suspense fallback={<Loading />}>{content}</Suspense>;
}
