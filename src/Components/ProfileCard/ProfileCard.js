import React from 'react';
import './ProfileCard.css';

function ProfileCard() {
  const user = {
    name: 'Abdul',
    email: 'abdul123@gmail.com',
    role: 'Patient',
    image: 'https://via.placeholder.com/100', // Replace with real image URL if available
  };

  return (
    <div className="profile-card">
      <img src={user.image} alt="Profile" className="profile-img" />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default ProfileCard;
