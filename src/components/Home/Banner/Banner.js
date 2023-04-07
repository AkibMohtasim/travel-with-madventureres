import React from 'react';
import './Banner.css';
import img1 from '../../../images/banner/1.jpg';
import img2 from '../../../images/banner/2.jpg';
import img3 from '../../../images/banner/3.jpg';
import img4 from '../../../images/banner/4.jpg';

const Banner = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      <div className='image-container'>
        <img src={img1} alt="" />
      </div>

      <div className='image-container'>
        <img src={img2} alt="" />
        <div className="gradient-overlay"></div>
        <div className="text-overlay">
          <p>Adventure Awaits</p>
        </div>
      </div>

      <div className='image-container'>
        <img src={img3} alt="" />
        <div className="gradient-overlay"></div>
        <div className="text-overlay">
          <p>Let's go Explore!</p>
        </div>
      </div>

      <div className='image-container'>
        <img src={img4} alt="" />
      </div>

    </div>
  );
};

export default Banner;