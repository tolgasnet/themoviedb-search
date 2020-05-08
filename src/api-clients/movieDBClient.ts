import { Movie } from "../models/movie";

export const searchByTitle = (searchTerm: string): Movie[] => {
  if (!searchTerm) {
    return [];
  }

  return [
    {
      id: 1,
      title: `${searchTerm}-1`,
    },
  ];
};
