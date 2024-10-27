import React from 'react';
import Nav from '../nav/Nav';
import './booking.css';

export default function Booking() {
  return (
    <div className='about'>
      <Nav />
      <div className='main'>
        <h2>Booking a Table!</h2>
      </div>
      
      <div className='form'>
        <form className='container'>
          <div className='form-group'>
            <label>Full Name:</label>
            <input type='text' placeholder='Enter your full name' />
          </div>
          <div className='form-group'>
            <label>Email:</label>
            <input type='email' placeholder='Enter your email' />
          </div>
          <div className='form-group'>
            <label>Phone Number:</label>
            <input type='tel' placeholder='Enter your phone number' />
          </div>
          <div className='form-group'>
            <label>Reservation Date:</label>
            <input type='date' />
          </div>
          <div className='form-group'>
            <label>Number of Guests:</label>
            <input type='number' min='1' placeholder='Enter number of guests' />
          </div>
          <button type='submit' className='submit'>Book Now</button>
        </form>
      </div>
    </div>
  );
}
