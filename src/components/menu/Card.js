import React from 'react'
import './card.css'; // Create a separate CSS file for styles
import { Link } from 'react-router-dom';
export default function Card(props) {
  return (
    <div className='cardm'>
      <div className="image-container">
        <img src={props.img} alt={props.name} className="card-img" />
      </div>
      <h2 style={{fontFamily:'cursive',marginTop:'10px',fontSize:'25px'}}>{props.name}</h2>
      <p>{props.disc}</p>
      <p style={{color: 'var(--primary)',
    fontWeight: 'bold',
    fontSize: '29px'}}>{props.price }</p>
      {props.sale && <h2 className="sale-badge" >Sale</h2>}
      <Link style={{color:'white',padding:'15px',fontWeight:'bold',backgroundColor:'var(--primary)',borderRadius:'13px'}} to='/order'>Order!</Link>
    </div>
  )
}
