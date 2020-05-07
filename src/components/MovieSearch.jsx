import React, { useEffect, useState } from "react";
import { searchByTitle } from "../api-clients/movieDBClient";

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const typeDelay = 1000;

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const apiResults = searchByTitle(searchTerm);
      setResults(apiResults);
    }, typeDelay);
    return () => clearTimeout(timeOutId);
  }, [searchTerm]);

  return (
    <>
      <input
        type="text"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <div>
        {results.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
    </>
  );
};

export default MovieSearch;
