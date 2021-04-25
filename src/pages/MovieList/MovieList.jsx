import React, { useEffect, useState } from "react";
import { getMovieListData } from "../../services";
import "./MovieList.css";
import MovieListBox from  "../../components/MovieListBox/MovieListBox"


const MovieList = () => {
    const [data, setData] = useState({});
    
    useEffect(() => {
        getMovieListData()
        .then( res => {
            setData(res);
        })
        .catch(err => {
            console.log(err);
        })

    }, [])

    return (
        <div className="movie-list-wrapper">
            <div className="movie-list-content">
                <div className="movie-list-popular"> 
                    <MovieListBox movieListData={data.now} title="Now Showing" />
                </div>
                <div className="movie-list-now"> 
                    <MovieListBox movieListData={data.pop} title="Popular Movie"/>
                </div>
                
            </div>
        </div>
    )
}

export default MovieList;