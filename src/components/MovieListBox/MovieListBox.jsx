import React from "react";
import "./MovieListBox.css";
import MovieSnippet from "../MovieSnippet/MovieSnippet.jsx";

const MovieListBox = (props) => {
    const {
        movieListData = [],
        title,
        
    } = props;

    const getSnippets = () => {
        const snippets = [];
        if (movieListData) {
            for (let idx = 0; idx < movieListData.length && idx < 10; idx++){
                const item = movieListData[idx];
                snippets.push(
                    <MovieSnippet snippetData={item} key= {idx}></MovieSnippet>
                )
            }
            return snippets;
        }
    }
    return (
        <div className="movie-list-box-container">
            <p className="movie-list-box-title">
                {title}
            </p>
            <div className="snippet-list-wrapper">
                {getSnippets()}
            </div>
        </div>
    )

}

export default MovieListBox;