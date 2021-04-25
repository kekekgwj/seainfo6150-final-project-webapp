import React from "react";
import Review from "./Review";

const mockReviw = {
    movieId: 'p2636551330',
    movieName: 'Nobody',
    username: 'Jack',
    date: '2021-1-1',
    rating: '6',
    title: 'For Me, This Is The Definitive Film',
    content: 'This is not just a beautifully crafted gangster film. Or an outstanding family portrait, for that matter. An amazing period piece. A character study. A lesson in filmmaking and an inspiration to generations of actors, directors, screenwriters and producers. For me, this is more: this is the definitive film. 10 stars out of 10.'
}
describe("Review  tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Review data={mockReviw}/>);
    expect(container).toMatchSnapshot();
  });
});