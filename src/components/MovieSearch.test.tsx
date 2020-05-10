import MovieSearchComponent from "./MovieSearch.testhelper";
import { mockSuccess } from "../api-clients/apiClient.mock";
import { get } from "../api-clients/apiClient";

jest.mock("../api-clients/apiClient");

describe("movie search test", () => {
  let component: MovieSearchComponent;

  beforeEach(() => {
    component = new MovieSearchComponent();
    (get as jest.Mock).mockReset();
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
    (get as jest.Mock).mockResolvedValue(mockSuccess());

    component.setSearchText("test-movie");
    component.clickSearchButton();

    await component.expectResults(2, (results) => {
      expect(results[0].textContent).toBe("test-movie-1");
      expect(results[1].textContent).toBe("test-movie-2");
    });
  });

  it("displays error message when apiClient throws an error", async () => {
    (get as jest.Mock).mockImplementation(() => {
      throw "Error";
    });

    component.setSearchText("test-movie");
    component.clickSearchButton();

    await component.expectNoResults();
    await component.expectText(/something went wrong/i);
  });
});
