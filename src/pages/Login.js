import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css'; // Import specific styles for Login
import { useNavigate } from 'react-router-dom';

function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://auth-backend-mbgi.onrender.com/login", {
        emailOrUsername,
        password
      });
      setMsg(res.data.message);
      // Simulate successful login with a unique pop-up
      const successPopup = document.createElement('div');
      successPopup.className = 'login-success-popup';
      successPopup.innerHTML = `
        <div class="popup-content">
          <div class="checkmark-circle">
            <div class="checkmark"></div>
          </div>
          <p>Login Successful!</p>
        </div>
      `;
      document.body.appendChild(successPopup);
      setTimeout(() => {
        successPopup.remove();
        navigate('/home'); // Redirect to home page after successful login
      }, 2000);
    } catch (err) {
      setMsg(err.response?.data?.message || 'Login failed');
      // Optionally, display a styled error message or pop-up
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <svg viewBox="0 0 100 100" className="lock-icon">
            <path d="M70 40h-10V30c0-5.5-4.5-10-10-10s-10 4.5-10 10v10H30c-5.5 0-10 4.5-10 10v40c0 5.5 4.5 10 10 10h40c5.5 0 10-4.5 10-10V50c0-5.5-4.5-10-10-10zM40 30c0-2.8 2.2-5 5-5s5 2.2 5 5v10h-10V30z"/>
          </svg>
          <h2>Welcome Back!</h2>
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Email or Username"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
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
        <button onClick={handleLogin} className="login-button">
          Log In
        </button>
        <p className="message">{msg}</p>
        <div className="login-footer">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          <a href="/forgot-password">Forgot Password?</a> {/* Example link */}
        </div>
      </div>
      <div className="login-artwork">
        {/* You can add an SVG or image here for visual appeal */}
        <svg viewBox="0 0 200 200">
          <defs>
            <linearGradient id="gradientColor1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2193b0" />
              <stop offset="100%" stopColor="#6dd5ed" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#gradientColor1)" opacity="0.7" />
          <path fill="#fff" d="M130 110q0 15-10 25t-25 10q-15 0-25-10t-10-25q0-15 10-25t25-10q15 0 25 10t10 25zm-50-10v40h10v-40h-10z"/>
        </svg>
      </div>
    </div>
  );
}

export default Login;