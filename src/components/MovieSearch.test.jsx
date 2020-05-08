import { render, fireEvent } from "@testing-library/react";
import React from "react";
import MovieSearch from "./MovieSearch";

describe("movie search test", () => {
  it("displays no results initially", async () => {
    const { queryByTestId } = render(<MovieSearch />);

    expect(queryByTestId(/result-/)).toBeFalsy();
  });

  it("displays search results", async () => {
    const { getByRole, getAllByTestId } = render(<MovieSearch />);

    fireEvent.change(getByRole("textbox"), { target: { value: "test-movie" } });
    fireEvent.click(getByRole("button"));

    const results = getAllByTestId(/result-/g);

    expect(results).toHaveLength(1);
    expect(results[0].textContent).toBe("test-movie-1");
  });
});
