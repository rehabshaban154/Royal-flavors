import React from 'react'
import chef1 from '../../../Assets/restaurant-chef.jpg';
import chef2 from '../../../Assets/chef2.avif';
import './homeabout.css'
import { Link } from 'react-router-dom';
import SimpleSlider from '../../SimpleSlider';
export default function Homeabout() {
  return (
    <>
    <div>
            <div className='container-about'>
        <h2>Our <span>Excutive</span> Chef</h2>
  <div className="ele">
    <img src={chef1} alt="Chef Gordon Ramsay" />
    <div className="data">
      <h2>Chef Gordon Ramsay</h2>
      <p>Renowned for his culinary skills and television presence.</p>
    </div>
  </div>

  <div className="ele">
    <div className="data">
      <h2>Chef Julia Child</h2>
      <p>Pioneering chef who brought French cuisine to the American public.</p>

    </div>
    <img src={chef2} alt="Chef Julia Child" />
  </div>
</div>
    </div>

    <div className='home-disc' style={{position:'relative'}}>
  <div className='links'>
    <Link to='/order'>Order Online</Link>
    <Link to='/menu'>Veiw Full Menu</Link>
    </div>
    </div>
   <SimpleSlider/>
<div className='find-vist'>
<div className='visit'>
<h2 >Find The Resturant</h2>
<h3>Visit Us</h3>
<p>Northern end of the Overseas Passenger<br/>Terminal, Circular Quay, Sydney NSW 2000, Australia</p>
<div className='open'>
    <h2>Openning Hours</h2>
    <p>Mon-Thu:1am-1am</p>
    <p>Fri-Sun:10am-2am</p>
</div>
<Link to='/about'>Take a Look!</Link>
</div>


<div className='book'>
<h2>Book A table</h2>
<h3 >Reservation</h3>
<p>Planning a romantic dinner for two or a communal <br/>meal with family or friends? Book a table now.</p>
<div className='open'>
<h2>Booking</h2>
    <p>Email:royal@gmail.com</p>
    <p>Call us:+39 120 30415</p>
</div>
<Link to='/booking'>Booking Now!</Link>
</div>
</div>
    </>
  )
}
