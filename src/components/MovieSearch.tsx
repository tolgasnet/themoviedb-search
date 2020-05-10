import React, { useState } from "react";
import { searchByTitleAsync } from "../api-clients/movieClient";
import Message from "./Message";
import { Movie } from "../models/movie";
import { getLogger } from "../logging";

const log = getLogger("moviesearch");

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

      log("Searched with <%s>, got %d results", searchTerm, apiResults.length);
      setResults(apiResults);
    } catch (err) {
      log(`${err.message}`);
      setMessage("Something went wrong, please try again later.");
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
