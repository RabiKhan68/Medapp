// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/Landing_Page/Landing_Page";
import Appointments from "./Pages/Appointments";
import SignUp from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import ReportsLayout from "./Components/ReportsLayout/ReportsLayout"; // ✅ Fixed path

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Notification>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/instantconsultation" element={<InstantConsultation />} />
            <Route path="/bookingconsultation" element={<BookingConsultation />} />
            <Route path="/reviewform" element={<ReviewForm />} />
            <Route path="/reports" element={<ReportsLayout />} /> {/* ✅ Route is correct */}
          </Routes>
        </Notification>
      </BrowserRouter>
    </div>
  );
}

export default App;
