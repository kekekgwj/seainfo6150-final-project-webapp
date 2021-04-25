import React from "react";
import Movie from "./Movie";

describe("Movie page tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Movie/>);
    expect(container).toMatchSnapshot();
  });
});