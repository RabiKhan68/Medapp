import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const DoctorCard = ({ name, experience, rating, specialty, image }) => {
  const [showForm, setShowForm] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [appointmentInfo, setAppointmentInfo] = useState(null);

  const handleBookClick = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setIsBooked(false);
    setAppointmentInfo(null);
    setShowForm(false);
  };

  const handleFormSubmit = (formData) => {
    setIsBooked(true);
    setAppointmentInfo(formData);
    setShowForm(false);
  };

  return (
    <div className="doctor-card-container">
      <img className="doctor-image" src={image} alt={`${name}`} />
      <div className="doctor-card-details-container">
        <h2>{name}</h2>
        <p>Experience: {experience}</p>
        <p>Rating: {rating}</p>
        <p>Specialty: {specialty}</p>

        <div className="doctor-card-options-container">
          {!isBooked && (
            <button className="book-appointment-btn" onClick={handleBookClick}>
              <div>Book Appointment</div>
              <div>No Booking Fee</div>
            </button>
          )}

          {isBooked && (
            <>
              <p className="booking-confirmation">
                Appointment booked on {appointmentInfo.date} at {appointmentInfo.time}
              </p>
              <button className="cancel-appointment-btn" onClick={handleCancelClick}>
                Cancel Appointment
              </button>
            </>
          )}
        </div>

        {showForm && !isBooked && (
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
