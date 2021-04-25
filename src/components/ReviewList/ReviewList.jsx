import React from "react";
import "./ReviewList.css";
import Review from "../Review/Review";

const ReviewList = (props) => {
    const {
        reviewNumb = 10,
        reviewData = {}
    } = props;

    const getReviewList = () => {
        const reviewItems = [];
        const reviewKeys = Object.keys(reviewData);
        for (let i = 0; i < reviewNumb && i < reviewKeys.length; i++) {
            const  reviewId = reviewKeys[i];
            reviewItems.push(
                <Review data = {reviewData[reviewId]} key={reviewId}></Review>
            )
        }
        return reviewItems;
    }
    return (
        <div className="review-list-container">
            {getReviewList()}
        </div>
    );
}

export default ReviewList;