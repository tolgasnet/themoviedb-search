import React, { useState, FC } from "react";
import { searchByTitle } from "../api-clients/movieDBClient";
import Message from "./Message";
import { movie } from "../models/movie";

const MovieSearch: FC<{}> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([] as movie[]);
  const [message, setMessage] = useState("");

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const onSearchClick = (): void => {
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
