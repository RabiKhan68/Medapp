import React, { useState } from 'react';
import './Sign_Up.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';  // Correct relative path assuming config.js is in src/

const Sign_Up = () => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showerr, setShowerr] = useState('');  // For error messages

  const navigate = useNavigate(); // React Router navigation hook

  // Function to handle form submission and API call
  const register = async (e) => {
    e.preventDefault();

    // Optional: client-side validation (phone length)
    if (phone.length > 10) {
      setShowerr('Phone number must be maximum 10 digits');
      return;
    }

    // Call backend API for registration
    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, phone }),
      });

      const json = await response.json();

      if (json.authtoken) {
        // Save token and user info in session storage
        sessionStorage.setItem("auth-token", json.authtoken);
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("phone", phone);
        sessionStorage.setItem("email", email);

        // Redirect to home page and reload
        navigate("/");
        window.location.reload();
      } else {
        // Show errors from backend response
        if (json.errors) {
          // If multiple errors, show first one or join them
          setShowerr(json.errors[0].msg || "Registration error");
        } else if (json.error) {
          setShowerr(json.error);
        } else {
          setShowerr("Registration failed. Please try again.");
        }
      }
    } catch (error) {
      setShowerr("Network error. Please try again later.");
    }
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="signup-grid">
        <div className="signup-form">
          <form method="POST" onSubmit={register}>

            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                required
                aria-describedby="nameHelp"
              />
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Enter your phone number"
                maxLength={10}
                required
                aria-describedby="phoneHelp"
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                required
                aria-describedby="emailHelp"
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                required
                aria-describedby="passwordHelp"
              />
            </div>

            {/* Show Error Message */}
            {showerr && (
              <div className="err" style={{ color: 'red', marginBottom: '10px' }}>
                {showerr}
              </div>
            )}

            {/* Submit and Reset Buttons */}
            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
                onClick={() => setShowerr('')}
              >
                Reset
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign_Up;
