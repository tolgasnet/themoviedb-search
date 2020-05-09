import { render, fireEvent, RenderResult } from "@testing-library/react";
import React from "react";
import MovieSearch from "./MovieSearch";

export default class MovieSearchComponent {
  private component: RenderResult;
  constructor() {
    this.component = render(<MovieSearch />);
  }

  private getSearchTextBox(): HTMLElement {
    return this.component.getByRole("textbox");
  }

  private getSearchButton(): HTMLElement {
    return this.component.getByRole("button");
  }

  setSearchText(text: string): void {
    fireEvent.change(this.getSearchTextBox(), {
      target: { value: text },
    });
    fireEvent.click(this.getSearchButton());
  }

  clickSearchButton(): void {
    fireEvent.click(this.getSearchButton());
  }

  expectNoResults(): void {
    expect(this.component.queryByTestId(/result-/)).toBeFalsy();
  }

  expectResults(
    length: number,
    assert: (results: HTMLElement[]) => void
  ): void {
    const results = this.component.getAllByTestId(/result-/g);
    expect(results).toHaveLength(length);
    assert(results);
  }
}
