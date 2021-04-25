import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Review.css";
import userAvatar from "../../assets/user.png"
import star from "../../assets/star.png";
import movieIcon from "../../assets/movie.png";
const Review = (props) => {
    const {
        data = {}
    } = props;

    const {
        username,
        date,
        rating,
        title,
        content,
        movieId,
        movieName,

    } = data;
    const shortContentLength = 100;
    const [ showFullReview, setShowFullReview ] = useState(false);

    const shortContent = (content && content.length > shortContentLength) ? content.substring(0, shortContentLength) + " ..." : content; 
    const handleClickFold= () => {
        setShowFullReview(!showFullReview);
    }
    return (
        <div className="review-wrapper">
            <div className="review-user">
                <span className="avatar-wrapper">
                    <img className="avatar" src={userAvatar} alt="user"/>
                </span>
                <span className="review-username">{username}</span>
                <span className="review-rating">
                    <img src={star} className="rating-star-icon" alt="star"></img>
                </span>
                <span>{rating}</span>
                <span>
                    {movieName && movieId &&
                        <Link to={`/movie/${movieId}`} className="review-link">
                            <img src={movieIcon} alt="movie-icon"/>
                            <span>{movieName}</span>
                        </Link>
                    }        
                </span>

                <span className="review-date">
                    {date}
                </span>
            </div>
            <div className="review-main-wrapper">
                <h2 className="review-title">
                    {title}
                </h2>
                <div className="review-content">
                    {showFullReview ? content : shortContent}
                    {content && content.length > shortContentLength &&     
                    <button className="review-fold" onClick={handleClickFold}>
                        {showFullReview ? "FOLD" : "UNFOLD"}
                    </button>}
                
                </div>
            </div>
        </div>
    )
}

export default Review;