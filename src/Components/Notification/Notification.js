import React, { useEffect, useState } from 'react';
import './Notification.css';
import Navbar from '../Navbar/Navbar'; // ✅ Ensure path is correct

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(false); // ✅ For toggling visibility

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const rawDoctorData = localStorage.getItem('doctorData');

    // Debugging logs (optional)
    console.log('📦 sessionStorage email:', storedUsername);
    console.log('📦 doctorData (raw):', rawDoctorData);

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (rawDoctorData) {
      const parsedDoctor = JSON.parse(rawDoctorData);
      setDoctorData(parsedDoctor);

      const rawAppointment = localStorage.getItem(parsedDoctor.name);
      if (rawAppointment) {
        const parsedAppointment = JSON.parse(rawAppointment);
        setAppointmentData(parsedAppointment);
        setShowNotification(true); // ✅ Show notification only if data is present
      }
    }
  }, []);

  const handleCancel = () => {
    if (doctorData?.name) {
      localStorage.removeItem(doctorData.name); // Remove specific appointment
    }
    setAppointmentData(null);
    setShowNotification(false); // ✅ Hide notification
  };

  return (
    <div>
      <Navbar />
      {children}
      {isLoggedIn && showNotification && appointmentData && (
        <div className="notification-container">
          <div className="appointment-card">
            <h3 className="appointment-title">Appointment Notification</h3>
            <p><strong>User:</strong> {username}</p>
            <p><strong>Doctor:</strong> {doctorData?.name}</p>
            <p><strong>Date:</strong> {appointmentData?.date}</p>
            <p><strong>Time:</strong> {appointmentData?.time}</p>
            <button className="cancel-button" onClick={handleCancel}>Cancel Appointment</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
