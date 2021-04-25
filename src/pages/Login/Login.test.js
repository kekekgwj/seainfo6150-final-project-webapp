import React from "react";
import Login from "./Login";

describe("Login page tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Login onLogin={() => {console.log('test onLogin func')}}/>);
    expect(container).toMatchSnapshot();
  });
});