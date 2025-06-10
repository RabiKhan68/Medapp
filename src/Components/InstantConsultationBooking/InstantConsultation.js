import React, { useEffect, useState } from 'react';
import './InstantConsultation.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FindDoctorSearch from '../FindDoctorSearch/FindDoctorSearch';
import DoctorCard from '../DoctorCard/DoctorCard';

const InstantConsultation = () => {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const navigate = useNavigate();

    const getDoctorsDetails = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
            .then(res => res.json())
            .then(data => {
                setDoctors(data);

                const speciality = searchParams.get('speciality');
                if (speciality) {
                    const filtered = data.filter(doctor =>
                        doctor.speciality.toLowerCase() === speciality.toLowerCase()
                    );
                    setFilteredDoctors(filtered);
                    setIsSearched(true);
                } else {
                    setFilteredDoctors([]);
                    setIsSearched(false);
                }
            })
            .catch(err => console.error('Failed to fetch doctor data:', err));
    };

    const handleSearch = (searchText) => {
        if (searchText.trim() === '') {
            setFilteredDoctors([]);
            setIsSearched(false);
        } else {
            const filtered = doctors.filter(doctor =>
                doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredDoctors(filtered);
            setIsSearched(true);
        }
    };

    useEffect(() => {
        getDoctorsDetails();
        // Optional auth check:
        // const authtoken = sessionStorage.getItem("auth-token");
        // if (!authtoken) {
        //     navigate("/login");
        // }
    }, [searchParams]);

    return (
        <center>
            <div className="searchpage-container">
                <FindDoctorSearch onSearch={handleSearch} />
                <div className="search-results-container">
                    {isSearched && (
                        <>
                            <h2>{filteredDoctors.length} doctors are available {searchParams.get('location')}</h2>
                            <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                            {filteredDoctors.length > 0 ? (
                                filteredDoctors.map(doctor => (
<DoctorCard
  key={doctor.id || doctor.name}
  name={doctor.name}
  experience={doctor.experience}
  rating={doctor.rating}
  specialty={doctor.speciality}
  image={doctor.image}
/>
                                ))
                            ) : (
                                <p>No doctors found.</p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </center>
    );
};

export default InstantConsultation;
