const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 5000;
const session = require('./session');
const data = require('./data');

app.use(express.json());
app.use(express.static('../build'));
app.use(express.static('../public'));
app.use(cookieParser());

const {
    sessions,
    isValidSession,
    isValidateUsername,
    createSession,
    remove,
    createUUID,
    checkPassword
} = session;

const {
    movieListData,
    movieData,
    reviewsByUsername
} = data;


app.get('/api/movielist', (req, res) => {
    res.json(movieListData);
});

app.get('/api/movie', (req, res) => {
    if (!req.query.id) {
        res.status(401).json( {error: 'movie-id-required'} );
        return;
    }
    const movieId = req.query.id;
    res.json(movieData[movieId]);
});
app.get('/api/home', (req, res) => {
    const sid = req.cookies.sid;
    if (!sid) {
        res.status(401).json( {error: 'login-required'} );
        return;
    }
    if (isValidSession(sid)) {
        const username = sessions[sid].username;
        const userReviews = reviewsByUsername[username];
        return res.status(200).json(userReviews);
    }
    res.status(403).json( {error: 'login-invalid'} );
})
// send review
app.post('/api/review', express.json(), (req, res) => {
    const sid = req.cookies.sid;
    const {
        content,
        movieId,
        movieName,
        score,
        title
    } = req.body;
    const username = sessions[sid].username;
    if (!reviewsByUsername[username]) {
        reviewsByUsername[username] = {};
    }
    const reviewID = createUUID();
    const userReviews = reviewsByUsername[username];
    const newReview = {
        movieId,
        movieName,
        username,
        date: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
        rating: score,
        title,
        content
    };
    userReviews[reviewID] = newReview;
    if (movieId && movieData[movieId]) {
        const curMovieData = movieData[movieId];
        if (!curMovieData.reviews) {
            curMovieData.reviews = {};
        }
        const curReviewsData = curMovieData.reviews;
        curReviewsData[reviewID] = newReview;
    }

    res.status(200).json(userReviews[reviewID] );
});
// check login status
app.get('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    if (!sid) {
        res.status(401).json( {error: 'login-required'} );
        return;
    }
    if (isValidSession(sid)) {
        return res.status(200).json(sessions[sid]);
    }
    res.status(403).json( {error: 'login-invalid'} );
})
// create session
app.post('/api/session', express.json(), (req, res) => {
    const { username, password } = req.body;
    if (!username) {
        res.status(400).json({error:'missing-name'});
    }
    if (!isValidateUsername(username)) {
        res.status(400).json({error:'invalid-name'});
        return;
    }
    if (!checkPassword({username, password})) {
        res.status(400).json({error:'incorrect-password'});
        return;
    }
    const sid = createSession(username);
    res.cookie('sid', sid);
    setTimeout( () => {
        res.status(200).json(sessions[sid])
    }, 3000)
    
})

// log out session
app.delete('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    if (!sid) {
        res.status(401).json( {error: 'login-required'} );
        return;
    }
    if (isValidSession(sid)) {
        remove(sid);
        return res.status(200).json();
    }
    res.status(403).json( {error: 'login-invalid'} );
})


app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

