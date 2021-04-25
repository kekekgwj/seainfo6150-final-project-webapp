import React from "react";
import Nav from "./Nav";


describe("nav tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Nav username='test user'/>);
    expect(container).toMatchSnapshot();
  });
});