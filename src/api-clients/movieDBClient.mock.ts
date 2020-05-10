import { Movie } from "../models/movie";

export const getMockResults = (): Movie[] => {
  return [
    {
      id: 1,
      title: "test-movie-1",
    },
    {
      id: 2,
      title: "test-movie-2",
    },
  ];
};
