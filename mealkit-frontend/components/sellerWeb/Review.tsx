import React from 'react';

interface ReviewProps {
  onReviewClick: () => void;
}

const Review: React.FC<ReviewProps> = ({ onReviewClick }) => {
  return (
    <button className="review-button" onClick={onReviewClick}>
      Review
    </button>
  );
}

export default Review;
