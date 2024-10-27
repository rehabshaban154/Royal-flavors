import React from 'react';
import login from '../../Assets/login.jpg';
import './login.css';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'; // For social media icons

export default function Login() {
  return (
    <div >
    <div className="login-container">
      <div className="login-image">
        <img src={login} alt="Login" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <input type="email" id="email" placeholder="Enter your email" required style={{width:'60%'}}/>
          </div>
          <div className="form-group">
            <input type="password" id="password" placeholder="Enter your password" required style={{width:'60%'}}/>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="create-account">
          Don't have an account? <a href="/register" className='register'>Create Account</a>
        </p>
        <div className="social-login">
          <p className='using'>Or login using</p>
          <div className="social-icons">
            <FaFacebook className="icon facebook" />
            <FaGoogle className="icon google" />
            <FaTwitter className="icon twitter" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
