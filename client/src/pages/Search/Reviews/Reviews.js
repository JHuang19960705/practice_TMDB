import React from 'react';
import ReviewsContent from './ReviewsContent';
import "../../../styles/reviews-page.css";

export default function Reviews({currentUser}) {
  return (
    
    <div className="blog-wrap">
        <ReviewsContent currentUser={currentUser} />
    </div>
  )
}
