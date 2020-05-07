import { render, fireEvent } from "@testing-library/react";
import React from "react";
import MovieSearch from "./MovieSearch";

jest.useFakeTimers();

describe("movie search test", () => {
  it("renders a search box", async () => {
    const { getByRole } = render(<MovieSearch />);

    expect(getByRole("textbox")).toBeTruthy();
  });

  it("displays search results", async () => {
    const { getByRole, getByText } = render(<MovieSearch />);

    const searchBox = getByRole("textbox");
    fireEvent.change(searchBox, { target: { value: "test-movie" } });

    jest.runAllTimers();

    expect(getByText("test-movie-1")).toBeTruthy();
  });
});
