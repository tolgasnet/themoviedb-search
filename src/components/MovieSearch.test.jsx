import { render } from "@testing-library/react";
import React from "react";
import MovieSearch from "./MovieSearch";

it("renders", async () => {
  const { getByRole } = render(<MovieSearch />);
  const searchBox = getByRole("textbox");

  expect(searchBox.placeholder).toBe("Movie title");
});
