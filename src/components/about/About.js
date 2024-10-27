import React from 'react';
import Nav from '../nav/Nav';
import Data from './Data';
import './about.css'; // Import the CSS file for styles
import Card from './Card';
import videoFile from '../../Assets/Pho Kingdom - Calgary Vietnamese Restaurant- Full Version.mp4';
export default function About() {
  return (
    <div className="about-container">
      <Nav />
      <div className="item-container">
        <h1 style={{color:'white !important'}}>Meet our Chefs</h1>
      </div>
      <h2 style={{textAlign:'center',marginTop:'70px',color:'var(--primary)',fontSize:'37px',fontFamily:'cursive'}}>Our Chefs</h2>
      <div className='chef container'  >
      {
          Data.map((item)=>{
            return <Card img={item.img} name={item.name} dis={item.disc} socialMedia={item.socialMedia}  />
          })
        }
      </div>
      <div style={{backgroundColor:'#80808030', paddingTop:'40px,', marginTop:'60px',}}>
      <h2 style={{fontFamily:'cursive' ,paddingTop:'40px',color:'black',textAlign:'center'}}>About Our Resturant😉</h2>
      <div className='video' style={{textAlign:'center',display:'flex'}}>
        <div className='disc' style={{textAlign: 'left',padding:'20px',marginTop:'50px'}}>
          <h2>Story of Royal Flavors Restaurant</h2>
          <p>
          <span>Founding Vision: </span>Royal Flavors began over two decades ago when our founder,
           a passionate chef, envisioned a dining experience that celebrates authentic culinary traditions.
          </p>
          <p><span>Growth and Menu Expansion:</span> What started as a small eatery quickly gained a loyal customer base,
           leading to an expanded menu that features a diverse range of dishes crafted from the freshest ingredients.
           </p>
           <p><span>Community Commitment: </span>Our dedication to community engagement and sustainability has made Royal Flavors a beloved dining destination,
            where every meal tells a story and every guest is treated like family.</p>
        </div>
        <video  controls style={{ width: '50%',marginTop:'40px' ,borderRadius:'6px',padding:'20px'}}>
  <source src={videoFile} type='video/mp4' />
  Your browser does not support the video tag.
</video>
      </div>
      </div>
    </div>

  );
}
