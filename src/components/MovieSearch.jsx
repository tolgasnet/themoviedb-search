import React, { useEffect, useState } from "react";
import searchMovies from "../api-clients/movieDB";

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const typeDelay = 1000;

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const apiResults = searchMovies(searchTerm);
      setResults(apiResults);
    }, typeDelay);
    return () => clearTimeout(timeOutId);
  }, [searchTerm]);

  return (
    <>
      <form>
        <input
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </form>
      <div>
        {results.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
    </>
  );
};

export default MovieSearch;
