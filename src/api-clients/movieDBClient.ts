import { Movie, MovieApiResult } from "../models/movie";
import { getLogger } from "../logging";

const log = getLogger("client");

export const searchByTitleAsync = async (keyword: string): Promise<Movie[]> => {
  if (!keyword) {
    return [];
  }

  const apiKey = "<placeholder>";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`;

  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      log("Response code was NOT 200! Got %d instead.", response.status);
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
  } catch (error) {
    log(`${error.message}`);
    return [];
  }
};
