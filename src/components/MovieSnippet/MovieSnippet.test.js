import React from "react";
import MovieSnippet from "./MovieSnippet";

const SnippetData = {
    cover: "http://localhost:5000/images/poster/p2636551330.jpeg",
    isNew: true,
    rating: 7,
    name : "nobody",
    id: "p2636551330",
}
describe("MovieSnippet tests", () => {
  it("renders correctly", () => {
    const { container } = render(<MovieSnippet snippetData={SnippetData} title="test title"/>);
    expect(container).toMatchSnapshot();
  });
});