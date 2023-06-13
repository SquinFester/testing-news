import type { Metadata } from "next";

import getWikiResults from "@/lib/getWikiResults";

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
        Object.values(results).map((result) => <p>{JSON.stringify(result)}</p>)
      ) : (
        <p>{`${searchTerm} not found`}</p>
      )}
    </main>
  );

  return content;
}
