import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import ImgGallery from '../ImgGallery/ImgGallery';
import SubScribe from '../Subscribe/Subscribe';
import Adventures from '../../Adventures/Adventures/Adventures';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Adventures>
        <div className='mb-5'>
          <h2 className='custom-font text-5xl font-bold'>Our <span style={{ color: 'orangered' }}>Adventures</span></h2>
        </div>
      </Adventures>
      <ImgGallery></ImgGallery>
      <SubScribe></SubScribe>
    </div>
  );
};

export default Home;