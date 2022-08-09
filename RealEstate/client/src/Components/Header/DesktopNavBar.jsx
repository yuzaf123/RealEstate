import React from 'react'
import logo from "../../Images/logo.png"
import '../../StyleSheet/DesktopNav.css';
import { Link } from 'react-router-dom';

const DesktopNavBar = () => {
  return (
    <div className='DesktopNav__container'>
        <div className='DesktopNavLeft__container'>
            <img src={logo} alt="Company Logo" className='logo' />
        </div>
        <div className="DesktopNavRight__container">
            <h4 className="link">For Sale</h4>
            <h4 className="link">To Rent</h4>
            <Link to="/api/house-listing" style={{ textDecporation: "none", color: "black"}}>
            <h4 className="link">Sell Your Property</h4>
            </Link>
            <h4 className="link">Contact Us</h4>
        </div>

    </div>
  )
}

export default DesktopNavBar