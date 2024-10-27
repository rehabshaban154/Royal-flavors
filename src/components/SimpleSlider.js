import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container" style={{textAlign:'center',marginTop:'40px'}}>
      <Slider {...settings}>
        
      <div className="content">
            <p style={{fontSize:'25px'}}>Join us for a delightful afternoon <br/>with friends and fresh pastries.</p>
            <span>Sweet Treats</span>
            <p>Pâtissier</p>
          </div>

          <div className="content">
            <p style={{fontSize:'25px'}}>Experience the vibrant<br/> atmosphere of our cozy café.</p>
            <span>Morning Bliss</span>
            <p>Barista Extraordinaire</p>
          </div>
        <div className="content">
            <p style={{fontSize:'25px'}}>Unwind with our signature blends and <br/>enjoy live music every weekend.</p>
            <span>Evening Harmony</span>
            <p>Music Curator</p>
          </div> 
          <div className="content" >
            <p style={{fontSize:'25px'}}>Unwind with our signature blends and <br></br>enjoy live music every weekend.</p>
            <span>Evening Harmony</span>
            <p>Music Curator</p>
          </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
