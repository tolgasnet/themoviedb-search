import React, { useState } from "react";
import { searchByTitle } from "../api-clients/movieDBClient";
import Message from "./Message";

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

  const onTextChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSearchClick = () => {
    try {
      const apiResults = searchByTitle(searchTerm);
      setMessage("Results:");
      setResults(apiResults);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <>
      <input type="text" onChange={onTextChange} />
      <input type="button" value="Search" onClick={onSearchClick} />
      <Message text={message} />
      <div>
        {results.map((movie) => (
          <p key={movie.id} data-testid={`result-${movie.id}`}>
            {movie.title}
          </p>
        ))}
      </div>
    </>
  );
};

export default MovieSearch;
