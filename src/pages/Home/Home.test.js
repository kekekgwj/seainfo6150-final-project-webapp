import React from "react";
import Home from "./Home";

describe("Home page tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Home/>);
    expect(container).toMatchSnapshot();
  });
});