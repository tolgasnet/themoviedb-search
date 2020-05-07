export const searchByTitle = (searchTerm) => {
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
