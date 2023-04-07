import React from 'react';
import aboutimg from '../../../images/about/aboutimg.jpg';

const About = () => {
  return (
    <div className="hero my-20 mx-0">
      <div className="flex flex-col items-center md:flex-row">
        <img src={aboutimg} className="w-3/4 md:w-1/2 rounded-lg shadow-2xl mr-7" alt='' />
        <div className="lg:ml-7 sm:my-20 w-3/4">
          <h1 className="text-5xl font-bold">About <span style={{ color: 'orangered' }}>MAdventurers</span></h1>
          <p className="py-6">We are a team of passionate adventurers who specialize in crafting unique and thrilling trips for those seeking new and exciting experiences. Whether you're a seasoned explorer or new to adventure travel, we're here to help you create unforgettable memories. Join us on the journey of a lifetime!</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};


export default About;