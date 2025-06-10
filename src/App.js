// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/Landing_Page/Landing_Page";
import Appointments from "./Pages/Appointments";
import SignUp from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation'; // ✅ Add this import

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/instantconsultation" element={<InstantConsultation />} />
          <Route path="/bookingconsultation" element={<BookingConsultation />} /> {/* ✅ Add this route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
