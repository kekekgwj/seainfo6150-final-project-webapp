import React from "react";
import ReviewEditor from "./ReviewEditor";

describe("Review page tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ReviewEditor/>);
    expect(container).toMatchSnapshot();
  });
});