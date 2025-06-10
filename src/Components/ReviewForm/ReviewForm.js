// src/components/ReviewForm/ReviewForm.js

import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFeedbackClick = () => {
    setShowForm(true);
  };

  return (
    <div className="review-container">
      <h2>Consultation Summary</h2>
      <p><strong>Doctor:</strong> Dr. John Doe</p>
      <p><strong>Date:</strong> June 10, 2025</p>
      <p><strong>Time:</strong> 11:00 AM</p>

      {!showForm && (
        <button className="feedback-button" onClick={handleFeedbackClick}>
          Give Feedback
        </button>
      )}

      {showForm && (
        <div className="feedback-form">
          <h3>Leave a Review</h3>
          <textarea rows="4" placeholder="Write your feedback here..."></textarea>
          <br />
          <button type="submit">Submit</button>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
