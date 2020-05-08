import { movie } from "../models/movie";

export const searchByTitle = (searchTerm: string): movie[] => {
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
