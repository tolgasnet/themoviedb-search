import { Movie, MovieApiResult } from "../models/movie";

export const searchByTitleAsync = async (keyword: string): Promise<Movie[]> => {
  if (!keyword) {
    return [];
  }

  const apiKey = "<placeholder>";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`;

  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    // log
    return [];
  }

  const json = await response.json();
  const results: MovieApiResult[] = json.results;

  return results.map(
    (result) =>
      ({
        id: result.id,
        title: result.title,
      } as Movie)
  );
};
