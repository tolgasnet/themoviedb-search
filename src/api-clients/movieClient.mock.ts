/* eslint-disable @typescript-eslint/camelcase */
import { MovieApiResponse } from "../models/movie";

export const getMockResults = (): MovieApiResponse => {
  return {
    results: [
      {
        id: 1,
        title: "test-movie-1",
        overview: "overview",
        poster_path: "poster1",
      },
      {
        id: 2,
        title: "test-movie-2",
        overview: "overview",
        poster_path: "poster2",
      },
    ],
  };
};
