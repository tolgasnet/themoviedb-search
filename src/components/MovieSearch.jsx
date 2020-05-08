import React, { useState } from "react";
import { searchByTitle } from "../api-clients/movieDBClient";

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onClick = () => {
    const apiResults = searchByTitle(searchTerm);
    setResults(apiResults);
  };

  return (
    <>
      <input type="text" onChange={onChange} />
      <input type="button" value="Search" onClick={onClick} />
      <div>
        {results.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
    </>
  );
};

export default MovieSearch;
