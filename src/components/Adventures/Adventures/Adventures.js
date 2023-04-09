import React, { useEffect, useState } from 'react';
import AdventureCard from './AdventureCard/AdventureCard';
import useTitle from '../../../hooks/useTitle';

const Adventures = ({ children }) => {

  const [adventures, setAdventures] = useState([]);

  useTitle('Adventures');

  useEffect(() => {

    fetch('http://localhost:5000/api/adventures')
      .then(res => res.json())
      .then(data => setAdventures(data))
  }, [adventures])

  // console.log(adventures)

  if (!adventures.length) {
    return (
      <div className='flex flex-col items-center my-20'>
        {children}
        <button className="btn btn-square loading"></button>
      </div>
    )
  }

  //grid lg:grid-cols-3 gap-5 place-content-center

  return (
    <div className='flex flex-col items-center'>
      {children}
      <div className='flex flex-wrap justify-center'>
        {
          adventures.map(adventure =>
            <AdventureCard
              key={adventure._id}
              adventure={adventure}
            >
            </AdventureCard>)
        }
      </div>
    </div>
  );
};

export default Adventures;