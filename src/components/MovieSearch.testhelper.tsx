import {
  render,
  fireEvent,
  RenderResult,
  waitFor,
} from "@testing-library/react";
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
  }

  clickSearchButton(): void {
    fireEvent.click(this.getSearchButton());
  }

  async expectNoResults(): Promise<void> {
    return await waitFor(() => {
      expect(this.component.queryByTestId(/result-/)).toBeFalsy();
    });
  }

  async expectResults(
    length: number,
    assert: (results: HTMLElement[]) => void
  ): Promise<void> {
    const results = await this.component.findAllByTestId(/result-/i);
    expect(results).toHaveLength(length);
    assert(results);
  }
}
