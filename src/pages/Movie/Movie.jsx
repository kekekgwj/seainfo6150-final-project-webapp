import React, { useEffect, useState } from "react";
import "./Movie.css";
import star from "../../assets/star.png";
import pen from "../../assets/pen.png";
import ReviewList from "../../components/ReviewList/ReviewList";
import { useParams } from "react-router";
import { getMovieData } from "../../services";
import { useHistory } from 'react-router-dom';

const Movie = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect( () => {
        getMovieData(id)
        .then(res => {
            setData(res);
        })
        .catch(err => {
           setData({});
        });
    }, [id])
    const {info, reviews } = data;
    const history = useHistory();
    const addReview = () => {
        history.push({pathname:`/new_review/${id}`, state:{id, name: info.name}})
    }
    
    return (
        <div className="movie-wrapper">
            <div className="movie-content">
                {info && 
                    <div>
                    <h1>{info.name.toUpperCase()}</h1>
                    <div className="movie-intro">
                        <div className="movie-info">
                            <div className="movie-poster-wrapper">
                                <img src={info.poster} alt="movie-poster" className="movie-poster"/>
                            </div>
                            <div className="movie-detail">
                                <span>
                                    <span className="label">Director:</span>
                                    <span className="text">{info.director}</span>
                                </span>
                                <br/>
                                <span>
                                    <span className="label">Script Writer:</span>
                                    <span className="text">{info.scriptwriter}</span>
                                </span>
                                <br/>
                                <span>
                                    <span className="label">Actor:</span>
                                    <span className="text">{info.actor}</span>
                                </span>
                                <br/>
                                <span>
                                    <span className="label">Genre:</span>
                                    <span className="text">{info.genre}</span>
                                </span>
                                <br/>
                                <span>
                                    <span className="label">Language:</span>
                                    <span className="text">{info.language}</span>
                                </span>
                                <br/>
                                <span>
                                    <span className="label">Initial Release Date:</span>
                                    <span className="text">{info.initialReleaseDate}</span>
                                </span>
                                <br/>
                                <span>
                                    <span className="label">Region:</span>
                                    <span className="text">{info.region}</span>
                                </span>
                                <br/>
                                <span>
                                    <span className="label">Film Length:</span>
                                    <span className="text">{info.runtime}</span>
                                </span>
                                <br/>
                                <span>
                                    <a href={info.IMDb} >IMDb LINK</a>
                                </span>
                                <br/>
                            </div>
                            <div className="movie-rating-container">
                                <div className="rating-wrapper">
                                    <span>
                                        <img src={star} className="rating-star-icon" alt="star"></img>
                                    </span>
                                    <p className="rating-text">{info.rating}</p>/ 10
                                </div>
                                <button className="movie-add-review" onClick={addReview}>
                                    <span>
                                        <img src={pen} className="movie-add-review-icon" alt="new-review"></img>
                                    </span>
                                    <p className="movie-add-review-text">Add new review</p>
                                </button>
                            </div>
                        </div>
                        <div className="movie-brief">
                            <h2 className="movie-brief-title">Synopsis of {info.name.toUpperCase()} · · · · · ·</h2>
                            <p className="movie-brief-text">{info.brief}</p>
                        </div>
                    </div>
                </div>}
                {reviews &&
                <div className="movie-review">
                    <h2 className="movie-review-title">User Reviews</h2>
                    <ReviewList reviewData={reviews}></ReviewList>
                </div>}
            </div>
        </div>
    )
}

export default Movie;