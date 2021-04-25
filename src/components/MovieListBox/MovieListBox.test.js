import React from "react";
import MovieListBox from "./MovieListBox";

const movieList = [
  {
      cover: "http://localhost:5000/images/poster/p2636551330.jpeg",
      isNew: true,
      rating: 7,
      name : "nobody",
      id: "p2636551330",
  },
  {
      cover: "http://localhost:5000/images/poster/2b72a4da-80ba-4b58-9459-4273f9089d2e.jpg",
      isNew: false,
      rating: 9.2,
      name : "The Godfather",
      id: "2b72a4da-80ba-4b58-9459-4273f9089d2e",
  },
  {
      cover: "http://localhost:5000/images/poster/p2636551330.jpeg",
      isNew: true,
      rating: 7,
      name : "nobody",
      id: "p2636551330",
  },
  {
      cover: "http://localhost:5000/images/poster/p2636551330.jpeg",
      isNew: true,
      rating: 7,
      name : "nobody",
      id: "p2636551330",
  },
  {
      cover: "http://localhost:5000/images/poster/p2636551330.jpeg",
      isNew: true,
      rating: 7,
      name : "nobody",
      id: "p2636551330",
  },
  {
      cover: "http://localhost:5000/images/poster/p2636551330.jpeg",
      isNew: true,
      rating: 7,
      name : "nobody",
      id: "p2636551330",
  },
  {
      cover: "http://localhost:5000/images/poster/p2636551330.jpeg",
      isNew: true,
      rating: 7,
      name : "nobody",
      id: "p2636551330",
  },
  {
      cover: "http://localhost:5000/images/poster/p2636551330.jpeg",
      isNew: true,
      rating: 7,
      name : "nobody",
      id: "p2636551330",
  },
  {
      cover: "http://localhost:5000/images/poster/p2636551330.jpeg",
      isNew: true,
      rating: 7,
      name : "nobody",
      id: "p2636551330",
  },
  {
      cover: "http://localhost:5000/images/poster/p2636551330.jpeg",
      isNew: true,
      rating: 7,
      name : "nobody",
      id: "p2636551330",
  },
];
describe("Movie List box tests", () => {
  it("renders correctly", () => {
    const { container } = render(<MovieListBox movieListData={movieList} title="test title"/>);
    expect(container).toMatchSnapshot();
  });
});