import React from 'react';
import './about.css'
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

export default function Card({ img, name, dis, socialMedia }) {
  return (
    <div className='cardabout '>
      <img src={img} alt={name} className='card-img' />
      <h1 style={{marginTop:'16px',fontSize:'26px'}}>{name}</h1>
      <p style={{ color: 'gray' }}>{dis}</p>
      <div className='social-icons'>
        {socialMedia.facebook && (
          <a href={socialMedia.facebook} target='_blank' rel='noopener noreferrer'>
            <FaFacebook />
          </a>
        )}
        {socialMedia.instagram && (
          <a href={socialMedia.instagram} target='_blank' rel='noopener noreferrer'>
            <FaInstagram />
          </a>
        )}
        {socialMedia.whatsapp && (
          <a href={socialMedia.whatsapp} target='_blank' rel='noopener noreferrer'>
            <FaWhatsapp />
          </a>
        )}
        {socialMedia.twitter && (
          <a href={socialMedia.twitter} target='_blank' rel='noopener noreferrer'>
            <FaTwitter />
          </a>
        )}
      </div>
    </div>
  );
}
