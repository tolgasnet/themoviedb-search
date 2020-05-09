import MovieSearchComponent from "./MovieSearch.testhelper";

describe("movie search test", () => {
  let component: MovieSearchComponent;

  beforeEach(() => {
    component = new MovieSearchComponent();
  });

  it("displays no results initially", async () => {
    component.expectNoResults();
  });

  it("display no results when keyword is empty", () => {
    component.setSearchText("");
    component.clickSearchButton();

    component.expectNoResults();
  });

  it("displays search results", async () => {
    component.setSearchText("test-movie");
    component.clickSearchButton();

    component.expectResults(1, (results) =>
      expect(results[0].textContent).toBe("test-movie-1")
    );
  });
});
