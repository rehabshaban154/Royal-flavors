import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import log from '../../Assets/logo.jpg';
import './nav.css';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className='nav'>
      <div className='container'>
        <img src={log} alt="Logo" className='logo' />

        {/* Toggle button (only visible on mobile) */}
        {!isMenuOpen && (
          <button className='menu-toggle' onClick={toggleMenu} aria-label="Toggle menu">
            ☰
          </button>
        )}

        {/* Sidebar overlay (only active when menu is open) */}
        <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          {/* Close button */}
          <button className='close-btn' onClick={toggleMenu} aria-label="Close menu">
            ✕
          </button>

          {/* Links section */}
          <ul className='links'>
            <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
            <li><NavLink to='/menu' className={({ isActive }) => (isActive ? 'active' : '')}>Menu</NavLink></li>
            <li><NavLink to='/booking' className={({ isActive }) => (isActive ? 'active' : '')}>Book a table</NavLink></li>
            <li><NavLink to='/download' className={({ isActive }) => (isActive ? 'active' : '')}>Download App</NavLink></li>
            <li><NavLink to='/order' className={({ isActive }) => (isActive ? 'active' : '')}>Order Now</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
