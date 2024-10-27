import React from 'react'
import Nav from '../../components/nav/Nav'
import andro from '../../Assets/andorid-removebg-preview.png'
import ios from '../../Assets/ios-Photoroom.png'
import './download.css'
export default function Download() {
  return (
    <div>
      <Nav />
      <div className='download' style={{position:'relative'}}>
        </div>
      <div className='container down' style={{marginTop:'60px'}}>
      <p style={{position:'absolute'}}> The Royal Flavors Mobile app is designed to provide a seamless dining experience by allowing users to explore menus, place orders, make reservations, and receive updates from the restaurant.
      It’s a comprehensive platform that simplifies interactions for both dine-in and takeaway customers.</p>
      <div className='images'>
        <div className='andorid'>
          <img src={andro} />
          <h2 style={{marginTop:'20px',color:'var(--primary)'}}>Android App</h2>
        </div>

        <div className='ios'>
          <img src={ios} />
          <h2 style={{marginTop:'20px',color:'var(--primary)'}}>IOS</h2>
        </div>
      </div>
      </div>
    </div>
  )
}
