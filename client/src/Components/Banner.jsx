import React from 'react'
import banner from '../Images/banner.jpg'
import '../StyleSheet/Banner.css';

const Banner = () => {
  return (
    <div className='Banner__container'>
        <img src={banner} alt="Homepage Banner" />

    </div>
  )
}

export default Banner