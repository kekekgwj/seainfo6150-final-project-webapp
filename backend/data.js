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
const movieListData = {
    now: movieList,
    pop: movieList
}

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
const movieData = {
    p2636551330: {
        info: {
            poster: "http://localhost:5000/images/poster/p2636551330.jpeg",
            name: "nobody",
            director: "Elijah Nesuler",
            scriptwriter: "Derek Kolstad",
            actor: "Bob Odenkirk",
            genre: "Action / Crime",
            region: "USA",
            language: "English",
            initialReleaseDate: "2021-03-26",
            runtime: "92mins",
            rating: 8,
            IMDb: "https://www.imdb.com/title/tt7888964/",
            brief: "One night, two thieves break into Hutch's (Bob Odenkirk) suburban home. To avoid violence, Hutch did not fight back for himself or his family. His son, Blake (Gage Munroe), is disappointed in him, and his wife, Becca (ConnieNielsen), seems even more distant from him. This incident stirs up long-pent up emotions and instincts in Hutch, prompting him to embark on a cruel path that will reveal his dark secrets and deadly powers. Amid fists, bullets and speeding cars, Hutch must save his family from a dangerous enemy (AlexeySerebryakov) and make sure he's never seen as a nobody again."
        
        },
        reviews: mockReviews
    },
    '2b72a4da-80ba-4b58-9459-4273f9089d2e': {
        info: {
            poster: "http://localhost:5000/images/poster/2b72a4da-80ba-4b58-9459-4273f9089d2e.jpg",
            name: "The Godfather",
            director: "Francis Ford Coppola",
            scriptwriter: "Mario Puzo / Francis Ford Coppola",
            actor: "Marlon Brando/Al Pacino/James Kane/Richard Castelno",
            genre: "Action / Crime",
            region: "USA",
            language: "English",
            initialReleaseDate: "1972-03-15",
            runtime: "175mins",
            rating: 9.3,
            IMDb: "https://www.imdb.com/title/tt0068646",
            brief: "Godfather Vito Corleone (Marlon Brando) is the leader of the Corleone family in 1940s America. He leads the Corleone family through their illegal activities, but he is also a beloved patron saint of many vulnerable civilians. Tensions between the Corleone family and several other New York Mafia families intensify when they refuse a drug deal from drug Lord Soloso. Christmas Eve, Soloso hijacked the Godfather of the staff Tom, and sent to assassinate the Godfather; Because of the traitor betrayed, Godfather son Sunny was killed by the enemy; Younger son Mike (Al Pacino is acted the role of) also be coiled come in, lose beloved wife. Tensions between Mafia families are becoming more and more intense."
        
        },
        reviews: {}
    }
}
const reviewsByUsername = {
    'Jack': mockReviews
}
const data = {
    movieListData,
    movieData,
    reviewsByUsername
}

module.exports = data;