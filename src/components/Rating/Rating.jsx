import React from "react";
import './Rating.css';

const Rating = ( {getRatingScore} ) => {

    return (
        <div className="rate-container">
            <div className="rate-content" onClick={getRatingScore}>
                <input type="radio" name="rate" value="1"/>
                <input type="radio" name="rate" value="2"/>
                <input type="radio" name="rate" value="3"/>
                <input type="radio" name="rate" value="4"/>
                <input type="radio" name="rate" value="5"/>
            </div>
        </div>
    )
}

export default Rating;