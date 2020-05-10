import MovieSearchComponent from "./MovieSearch.testhelper";
import { MovieApiResponse } from "../models/movie";
import { getMockResults } from "../api-clients/movieClient.mock";

jest.mock("../api-clients/apiClient", () => ({
  get: (): MovieApiResponse => getMockResults(),
}));

describe("movie search test", () => {
  let component: MovieSearchComponent;

  beforeEach(() => {
    component = new MovieSearchComponent();
  });

  it("displays no results initially", async () => {
    await component.expectNoResults();
  });

  it("display no results when keyword is empty", async () => {
    component.setSearchText("");
    component.clickSearchButton();

    await component.expectNoResults();
  });

  it("displays search results", async () => {
    component.setSearchText("test-movie");
    component.clickSearchButton();

    await component.expectResults(2, (results) => {
      expect(results[0].textContent).toBe("test-movie-1");
      expect(results[1].textContent).toBe("test-movie-2");
    });
  });
});
