// src/Components/DoctorCard/DoctorCard.js
import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ name, experience, rating, specialty, image }) => {
  return (
    <div className="doctor-card-container">
      <img className="doctor-image" src={image} alt={`${name}`} />
      <div className="doctor-card-details-container">
        <h2>{name}</h2>
        <p>Experience: {experience}</p>
        <p>Rating: {rating}</p>
        <p>Specialty: {specialty}</p>

        <div>
          <button className="book-appointment-btn">
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
