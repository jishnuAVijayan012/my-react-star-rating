import React from "react";
import "./StarRating.css"; // Import the CSS file

const StarRating = ({ rating }) => {
    return (
        <div className="Stars" style={{ "--rating": rating }} aria-label={`Rating of this product is ${rating} out of 5.`} />

    );
};

export default StarRating;
