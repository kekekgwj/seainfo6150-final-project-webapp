import React from "react";
import ReviewList from "./ReviewList";

const mockReviews =  {
  '3c9eeda6-0e33-4c98-afc9-f9b0b0478e33': {
      movieId: 'p2636551330',
      movieName: 'Nobody',
      username: 'Jack',
      date: '2021-1-1',
      rating: '6',
      title: 'For Me, This Is The Definitive Film',
      content: 'This is not just a beautifully crafted gangster film. Or an outstanding family portrait, for that matter. An amazing period piece. A character study. A lesson in filmmaking and an inspiration to generations of actors, directors, screenwriters and producers. For me, this is more: this is the definitive film. 10 stars out of 10.'
  },
  '38e31725-41e6-41ce-a145-ef02f3d8b6c9': {
      movieId: 'p2636551330',
      movieName: 'Nobody',
      username: 'Jack',
      date: '2021-1-1',
      rating: '6',
      title: 'An offer so good, I could not refuse',
      content: 'It is now past 1 PM and I just finished watching Francis Ford Coppolas "The Godfather". I should probably go to bed. It iss late and tomorrow I have to wake up a bit early. But not early enough to postpone writing these lines. Now that I have seen it three times, the opportunity of sharing my thoughts and refreshed insights are too much of a good offer to sit on. So, bear with me.'
  },    
  'e2fa4a64-22d5-4a6d-aea7-d1bb6e9e4aaa': {
      movieId: 'p2636551330',
      movieName: 'Nobody',
      username: 'Jack',
      date: '2021-1-1',
      rating: '6',
      title: 'For Me, This Is The Definitive Film',
      content: 'This is not just a beautifully crafted gangster film. Or an outstanding family portrait, for that matter. An amazing period piece. A character study. A lesson in filmmaking and an inspiration to generations of actors, directors, screenwriters and producers. For me, this is more: this is the definitive film. 10 stars out of 10.'
  },
  '434887fb-9545-4c06-95b1-367f670052ae': {
      movieId: 'p2636551330',
      movieName: 'Nobody',
      username: 'Jack',
      date: '2021-1-1',
      rating: '6',
      title: 'For Me, This Is The Definitive Film',
      content: 'This is not just a beautifully crafted gangster film. Or an outstanding family portrait, for that matter. An amazing period piece. A character study. A lesson in filmmaking and an inspiration to generations of actors, directors, screenwriters and producers. For me, this is more: this is the definitive film. 10 stars out of 10.'
  },
  '34cd0b54-943b-472b-8cc6-acd3604a2bf7' : {
      movieId: 'p2636551330',
      movieName: 'Nobody',
      username: 'Jack',
      date: '2021-1-1',
      rating: '6',
      title: 'For Me, This Is The Definitive Film',
      content: 'This is not just a beautifully crafted gangster film. Or an outstanding family portrait, for that matter. An amazing period piece. A character study. A lesson in filmmaking and an inspiration to generations of actors, directors, screenwriters and producers. For me, this is more: this is the definitive film. 10 stars out of 10.'
  },     
};
describe("ReviewList  tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ReviewList reviewData={mockReviews}/>);
    expect(container).toMatchSnapshot();
  });
});