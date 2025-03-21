import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ stars = 0, onRated }) => {
    const [value, setValue] = useState(stars);
    const [dynamicValue, setDynamicValue] = useState(stars);

    const handleClick = (newValue) => {
        setValue(newValue);
        setDynamicValue(newValue);

        if (onRated) {
            onRated(newValue);
        }
    };

    const handleMouseEnter = (newValue) => {
        setDynamicValue(newValue);
    };

    const handleMouseLeave = () => {
        setDynamicValue(value);
    };

    const starSpans = [];
    for (let v = 1; v <= 5; v++) {
        const isFilled = v <= Math.floor(dynamicValue); // Whole stars
        const isPartial = v === Math.ceil(dynamicValue) && dynamicValue % 1 !== 0;  // Half star logic

        starSpans.push(
            <span
                key={v}
                className={`star ${isFilled ? 'filled' : ''} ${isPartial ? 'partial' : ''}`}
                onMouseEnter={() => handleMouseEnter(v)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(v)}
            >
                {isFilled ? '★' : '☆'} {/* Full star, half star, or empty star */}
            </span>
        );
    }
    return <div className="rating-container">{starSpans}</div>;
};

export default StarRating;
