// src/Components/DoctorCard/DoctorCard.js
import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const DoctorCard = ({ name, experience, rating, specialty, image }) => {
  const [showForm, setShowForm] = useState(false); // Step 1: Toggle state

  const handleBookClick = () => {
    setShowForm(!showForm); // Toggle form visibility
  };

  const handleFormSubmit = (formData) => {
    console.log('Appointment Data:', formData);
    alert(`Appointment booked for ${formData.name} with Dr. ${name} on ${formData.date} at ${formData.time}`);
    setShowForm(false); // Hide form after submission
  };

  return (
    <div className="doctor-card-container">
      <img className="doctor-image" src={image} alt={`${name}`} />
      <div className="doctor-card-details-container">
        <h2>{name}</h2>
        <p>Experience: {experience}</p>
        <p>Rating: {rating}</p>
        <p>Specialty: {specialty}</p>

        <div>
          <button className="book-appointment-btn" onClick={handleBookClick}>
            <div>{showForm ? 'Cancel' : 'Book Appointment'}</div>
            <div>No Booking Fee</div>
          </button>
        </div>

        {/* Step 3: Conditional rendering of AppointmentForm */}
        {showForm && (
          <AppointmentForm
            doctorName={name}
            doctorSpeciality={specialty}
            onSubmit={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
