// src/Components/BookingConsultation.js
import React, { useState } from 'react';
import DoctorCard from './DoctorCard/DoctorCard';
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';

const doctorsData = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    experience: '10 years',
    rating: '4.8',
    specialty: 'Cardiologist',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Dr. Ramesh Mehta',
    experience: '15 years',
    rating: '4.7',
    specialty: 'Dermatologist',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Dr. Rahim Khan',
    experience: '13 years',
    rating: '4.8',
    specialty: 'Dentist',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    name: 'Dr. Henry John',
    experience: '30 years',
    rating: '4.8',
    specialty: 'Dentist',
    image: 'https://via.placeholder.com/150'
  }
  // Add more sample doctors if needed
];

const BookingConsultation = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctorsData.filter((doctor) =>
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="booking-consultation-container">
      <FindDoctorSearch onSearch={setSearchTerm} />
      <div className="doctor-list">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} {...doctor} />
        ))}
      </div>
    </div>
  );
};

export default BookingConsultation;
