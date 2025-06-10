import React, { useState } from 'react';
import './ReviewForm.css'; // Optional styling

function ReviewForm() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(null);
  const [formData, setFormData] = useState({
    Docname: '',
    name: '',
    review: '',
    rating: 0,
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRatingChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      rating: parseInt(e.target.value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { Docname, name, review, rating } = formData;

    if (name && review && rating > 0) {
      setShowWarning(false);
      setSubmittedMessage({ ...formData });
      setIsSubmitted(true);
      setShowForm(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className="review-container">
      <h2>Patient Feedback Form</h2>

      {!showForm && !isSubmitted && (
        <button onClick={handleButtonClick} className="open-form-button">
          Click Here
        </button>
      )}

      {showForm && (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <h3>Give Your Feedback</h3>

          {showWarning && <p className="warning">⚠️ Please fill all fields including rating.</p>}

          <label htmlFor="Docname">Doctor name:</label>
          <input
            type="text"
            id="Docname"
            name="Docname"
            value={formData.Docname}
            onChange={handleChange}
            required
          />

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            name="review"
            rows="4"
            value={formData.review}
            onChange={handleChange}
            required
          />

          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleRatingChange}
            required
          >
            <option value="0">Select Rating</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}

      {isSubmitted && submittedMessage && (
        <div className="submitted-review">
          <h3>Submitted Review</h3>
          <p><strong>Doctor Name:</strong>{submittedMessage.Docname}</p>
          <p><strong>Name:</strong> {submittedMessage.name}</p>
          <p><strong>Review:</strong> {submittedMessage.review}</p>
          <p><strong>Rating:</strong> {'⭐'.repeat(submittedMessage.rating)}</p>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;
