import { Movie, MovieApiResponse } from "../models/movie";
import { get } from "./apiClient";

export const searchByTitleAsync = async (keyword: string): Promise<Movie[]> => {
  if (!keyword) {
    return [];
  }

  // This API request and the API keys would normally be in serverside! Demo purposes only.
  const url = `https://api.themoviedb.org/3/search/movie?api_key=PLACEHOLDER&query=${keyword}`;

  const json = await get(url);

  const results = (json as MovieApiResponse).results;

  return results.map(
    (result) =>
      ({
        id: result.id,
        title: result.title,
      } as Movie)
  );
};
