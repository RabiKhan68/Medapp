// ✅ KEEP THIS ONE
import React, { useState, useRef } from 'react';
import './FindDoctorSearch.css';

const specialities = ['Cardiologist', 'Dentist', 'Dermatologist', 'Neurologist', 'Pediatrician', 'Orthopedic'];

const FindDoctorSearch = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(null);

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  const handleBlur = (e) => {
    if (!suggestionsRef.current.contains(e.relatedTarget)) {
      setShowSuggestions(false);
    }
  };

  const handleSelectSpeciality = (speciality) => {
    setSearchText(speciality);
    setShowSuggestions(false);
    onSearch(speciality);
  };

  return (
    <div className="find-doctor-search" onBlur={handleBlur}>
      <input
        type="text"
        placeholder="Search by speciality..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          onSearch(e.target.value); // real-time search
        }}
        onFocus={handleFocus}
        className="search-input"
      />
      {showSuggestions && (
        <ul className="suggestions-list" ref={suggestionsRef}>
          {specialities
            .filter((item) => item.toLowerCase().includes(searchText.toLowerCase()))
            .map((speciality) => (
              <li
                key={speciality}
                tabIndex="0"
                onClick={() => handleSelectSpeciality(speciality)}
              >
                {speciality}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default FindDoctorSearch;
