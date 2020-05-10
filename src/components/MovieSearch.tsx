import React, { useState } from "react";
import { searchByTitleAsync } from "../api-clients/movieDBClient";
import Message from "./Message";
import { Movie } from "../models/movie";

const MovieSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([] as Movie[]);
  const [message, setMessage] = useState("");

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const onSearchClickAsync = async (): Promise<void> => {
    try {
      const apiResults = await searchByTitleAsync(searchTerm);
      setMessage("Results:");
      setResults(apiResults);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <>
      <input type="text" onChange={onTextChange} />
      <input
        type="button"
        value="Search"
        onClick={async (): Promise<void> => {
          await onSearchClickAsync();
        }}
      />
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
