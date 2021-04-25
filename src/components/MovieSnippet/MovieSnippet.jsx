import React from "react";
import "./MovieSnippet.css";
import newIcon from "../../assets/new-icon.png";
import { useHistory } from 'react-router-dom';

const MovieSnippet = (props) => {
    const { snippetData } = props;
    const {
        cover = "",
        isNew = false,
        name = "",
        rating = 0,
        id
    } = snippetData;

    const history = useHistory();
    const onClickCover = (e) => {
        if (e.target && e.target.id) {
            const id = e.target.id;
            history.replace(`/movie/${id}`)
        } 
    }
    return (
        <div className="movie-snippet-container">
            <div className="cover-wrapper"  onClick={(e) => onClickCover(e)}>
                <img src={cover} id={id} alt="movie-cover" ></img>
            </div>
            <p className="movie-snippet-info">
                {isNew && 
                    <span>
                        <img className="new" src={newIcon} alt="new-movie"></img>
                    </span> }
                <span>{name}</span>
                <span className="rating">{rating}</span>
            </p>
        </div>
    )
}

export default MovieSnippet;