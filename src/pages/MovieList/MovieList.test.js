import React from "react";
import MovieList from "./MovieList";

describe("Movie List page tests", () => {
  it("renders correctly", () => {
    const { container } = render(<MovieList/>);
    expect(container).toMatchSnapshot();
  });
});