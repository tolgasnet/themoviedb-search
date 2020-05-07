const searchMovies = (searchTerm) => {
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

export default searchMovies;
