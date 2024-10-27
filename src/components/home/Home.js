import React from 'react';
import Nav from '../nav/Nav';
import land1 from '../../Assets/land2.jpg';
import land2 from '../../Assets/landing.jpg';
import land3 from '../../Assets/land3.jpg';
import './home.css';
import About from '../about/About';
import Homeabout from './Homeabout/Homeabout';
import Footer from '../footer/Footer';
export default function Home() {
  const carouselStyle = {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  };

  const captionStyle = {
    position: 'absolute',
    top: '50%',
    left: '100px',
    transform: 'translateY(-50%)',
    textAlign: 'left',
    paddingLeft: '20px',
    color: '#fff',
    maxWidth: '504px',
   maxWidth: '485px',
   maxHight: '400px',
  };

  return (
    <div style={{zIndex:'100'}}>
      <Nav />
      <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ ...carouselStyle, backgroundImage: `url(${land1})` }}>
            <div className="carousel-caption d-md-block" style={captionStyle}>
              <h5>Welcome to <span>Royal Flavors</span></h5>
              <p>Experience the finest gourmet dishes crafted by world-class chefs.</p>
            </div>
          </div>
          <div className="carousel-item" style={{ ...carouselStyle, backgroundImage: `url(${land2})` }}>
            <div className="carousel-caption d-md-block" style={captionStyle}>
              <h5>Discover Our <span>Signature Dishes</span></h5>
              <p>Indulge in our specialty meals made with fresh, locally sourced ingredients.</p>
            </div>
          </div>
          <div className="carousel-item" style={{ ...carouselStyle, backgroundImage: `url(${land3})` }}>
            <div className="carousel-caption d-md-block" style={captionStyle}>
              <h5>A Warm and Inviting <span>Atmosphere</span></h5>
              <p>Enjoy a cozy dining experience with exceptional service and attention to detail.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Homeabout />
      <Footer/>
    </div>
  );
}
