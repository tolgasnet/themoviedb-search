import { render, fireEvent } from "@testing-library/react";
import React from "react";
import MovieSearch from "./MovieSearch";

describe("movie search test", () => {
  it("displays search results", async () => {
    const { getByRole, getByText } = render(<MovieSearch />);

    fireEvent.change(getByRole("textbox"), { target: { value: "test-movie" } });
    fireEvent.click(getByRole("button"));

    expect(getByText("test-movie-1")).toBeTruthy();
  });
});
