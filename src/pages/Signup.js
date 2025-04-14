import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css"; // Import specific styles for Signup

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await axios.post("https://auth-backend-mbgi.onrender.com/signup", {
        email,
        username,
        password,
      });
      setMsg(res.data.message);
      // Simulate successful signup with a unique pop-up
      const successPopup = document.createElement('div');
      successPopup.className = 'signup-success-popup';
      successPopup.innerHTML = `
        <div class="popup-content">
          <svg viewBox="0 0 512 512" class="checkmark-icon">
            <path fill="currentColor" d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-320 320c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 402.7 470.6 105.4z"/>
          </svg>
          <p>Signup Successful!</p>
          <p>Redirecting to Login...</p>
        </div>
      `;
      document.body.appendChild(successPopup);
      setTimeout(() => {
        successPopup.remove();
        navigate('/login'); // Redirect to login page after successful signup
      }, 2500);
    } catch (err) {
      setMsg(err.response?.data?.message || "Signup failed");
      // Optionally, display a styled error message or pop-up
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <svg viewBox="0 0 100 100" className="user-icon">
            <path d="M50 6a44 44 0 1 1 0 88 44 44 0 0 1 0-88zm0 18c-9.9 0-18 8.1-18 18s8.1 18 18 18 18-8.1 18-18-8.1-18-18-18zm0 50c-11 0-20 9-20 20h40c0-11-9-20-20-20z"/>
          </svg>
          <h2>Create Account</h2>
        </div>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSignup} className="signup-button">
          Sign Up
        </button>
        <p className="message">{msg}</p>
        <div className="signup-footer">
          <p>Already have an account? <a href="/login">Log In</a></p>
          {/* You can add terms and conditions link here */}
        </div>
      </div>
      <div className="signup-artwork">
        <svg viewBox="0 0 200 200">
          <defs>
            <linearGradient id="gradientColor2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a18cd1" />
              <stop offset="100%" stopColor="#fbc2eb" />
            </linearGradient>
          </defs>
          <ellipse cx="100" cy="100" rx="80" ry="60" fill="url(#gradientColor2)" opacity="0.7" />
          <path fill="#fff" d="M130 135c-5 10-15 15-25 10-10-5-15-15-10-25l20-40 20 40c5 10 0 20-10 25zm-60-5c5-10 15-15 25-10 10 5 15 15 10 25l-20 40-20-40c-5-10 0-20 10-25zM70 80h60v10h-60z"/>
        </svg>
      </div>
    </div>
  );
}

export default Signup;