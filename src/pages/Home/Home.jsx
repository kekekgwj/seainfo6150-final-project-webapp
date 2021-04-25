import React, { useEffect, useState } from "react";
import "./Home.css";
import ReviewList from "../../components/ReviewList/ReviewList";
import { getUserReview } from "../../services";
import { errMsgs } from "../../base";

const Home = () => {
    const [data, setData] = useState({});
    const [status, setStatus] = useState('');

    useEffect(() => {
        getUserReview()
        .then( res => {
            setData(res);
        })
        .catch( err => {
            setStatus(errMsgs[err.error] || err.error);
        }
        )
    },[])

    return (
        <div className="home-wrapper">   
            <div className="home-review-list-wrapper">
                <h2 className="home-review-list-title">My Reviews · · · · · ·</h2>
                <div className="home-error">
                        <span className="error-message">{status}</span>
                </div>
                <ReviewList className="home-review-list" reviewData= {data}/>
            </div>

        </div>)
} 


export default Home;