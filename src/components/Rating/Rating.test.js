import React from "react";
import Rating from "./Rating";


describe("rating  tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Rating getRatingScore={()=>{console.log('get rating score')}}/>);
    expect(container).toMatchSnapshot();
  });
});