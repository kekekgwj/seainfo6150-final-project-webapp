import React from "react";
import Error from "./Error";

describe("Error page tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Error errorMessage="test error message" />);
    expect(container).toMatchSnapshot();
  });
});