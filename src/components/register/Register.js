import React, { useState } from 'react';
import './register.css';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import register from '../../Assets/register.jpg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Clear previous error
    setError('');

    // Validate name
    if (!name) {
      setError('Name is required.');
      return;
    }

    // Validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email.');
      return;
    }

    // Validate password (at least 6 characters)
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // If all validations pass, proceed with registration logic
    alert('Registration successful!');
  };

  return (
    <div>
      <div className="register-container">
        <div className="register-form">
          <h2>Create Account</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="register-btn">Register</button>
          </form>
          <p className="login-link" style={{ color: 'gray' }}>
            Already have an account? <a href="/login" className="login">Login</a>
          </p>
          <div className="social-register">
            <p style={{ color: 'gray' }}>Or register using</p>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon facebook" />
            <FaGoogle className="icon google" />
            <FaTwitter className="icon twitter" />
          </div>
        </div>
        <div className="register-image" style={{ flexBasis: '50%' }}>
          <img src={register} alt="Register" />
        </div>
      </div>
    </div>
  );
}
