import React, { useState} from "react";
import './ReviewEditor.css';
import Rating from "../../components/Rating/Rating"

import { useHistory, useLocation } from 'react-router-dom';
import { checkSession, sendReviw } from "../../services";
import { errMsgs} from "../../base";

const ReviewEditor = () => {
    const [title, setTitle] = useState('');
    const [body ,setBody] = useState('');
    const [inputValid, setInputValid] = useState(true);
    const [status, setStatus] = useState('');
    const bodyMaxLength = 300;
    const titleMaxLength = 100;

    let score = -1;
    const history = useHistory();
    const location = useLocation();
    
    const getMovieId = () => {
        if (location && location.state) {
            return location.state.id;
        }
       
    }
    const submitReview = () => {

        if (!title) {
            setStatus('title is empty!')
            setInputValid(false);
            return;
        }
        if (title.length > titleMaxLength) {
            setStatus('maximum title length exceeded');
            setInputValid(false);
            return;
        }
        if (!body) {
            setStatus('review is empty');
            setInputValid(false);
            return;
        }
        if (score < 0) {
            setStatus('rating is empty');
            setInputValid(false);
            return;
        } 
        checkSession()
        .then(() => {
            onSendReview();
        })
        .catch((err) => {
            setStatus(errMsgs[err.error] || err.error);
            setTimeout(() => {toLoginPage()}, 1500)
        })
    }
    const getRatingScore = () => {
        const checkedInput = document.querySelector("input[name=rate]:checked");
        
        score = (checkedInput ?  5 - Number(checkedInput.value) + 1: 0) * 2;
    }
    const toLoginPage = () => {
        history.replace({pathname: '/login', 
        state: {nextPathname: `/new_review/${getMovieId()}`, pageInfo: {id: location.state.id,name: location.state.name}}});
    }
    const onSendReview = () => {
        const newReview = {
            title,
            content: body,
            score,
            movieId: location.state.id,
            movieName: location.state.name,
        }
        sendReviw(newReview)
        .then(() => {
            setStatus('Review has been sent');
            setTimeout(()=> {
                history.push(`/movie/${location.state.id}`)
            }, 1500)
        })
        .catch((err) => {
            setStatus(errMsgs[err.error] || err.error);
        })
    }
    return (
        <div className="review-editor-container">
            <div className="review-editor-wrapper">
                <div className="review-editor-snnipet"></div>
                <div className="review-editor-rating">
                    <span className="review-editor-rating-label">Rating this movie:</span>
                    <Rating getRatingScore={getRatingScore}/>
                </div>
                <div className="review-editor-form">
                    <div className="review-editor-title">
                        <input id="title" name="title" 
                            type="text" className="editor-input-title" 
                            placeholder="Type Title"
                            value={title} onChange={e => setTitle(e.target.value)}>
                        </input>
                    </div>
                    <div className="review-editor-body">
                        <textarea id="body" name="body" 
                            type="text" className="editor-input-body" 
                            placeholder="Type review..."
                            maxLength={bodyMaxLength}
                            value={body} onChange={e => setBody(e.target.value)}>
                        </textarea>
                    </div>
                    {!inputValid &&
                    <div className="review-editor-error">
                        <span className="error-message">{status}</span>
                    </div>}
                    <div className="review-extra">
                        <div className="review-extra-tag">
                                <label for="tag">Tag this movie: </label>
                                <input name="tag" id="tag"></input>
                        </div>
                        <div className="review-extra-feel">
                                <label for="tag">Share your feel:</label>
                                <input name="feel" id="feel"></input>
                        </div>
                        <div className="review-extra-recommend">
                            <label for="recommend">Would you recommend it to your friend?</label>
                            <select name="recommend" id="recommend">
                                <option value="yes">YES</option>
                                <option value="no">NO</option>
                            </select>
                        </div>
                        <div className="review-extra-place">
                            <label for="place">Where watch this?</label>
                            <select name="place" id="place">
                                <option value="cinema">CINEMA</option>
                                <option value="home">HOME</option>
                                <option value="school">SCHOOL</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button className="review-editor-submit" onClick={submitReview}>
                    SUBMIT
                </button>
            </div>
        </div>)
    
}

export default ReviewEditor;