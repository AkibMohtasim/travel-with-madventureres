import React, { useEffect, useState } from 'react';
import AdventureCard from './AdventureCard/AdventureCard';

const Adventures = () => {

  const [adventures, setAdventures] = useState([]);

  useEffect(() => {

    fetch('http://localhost:5000/api/adventures')
      .then(res => res.json())
      .then(data => setAdventures(data))
  }, [])

  console.log(adventures)

  return (
    <div className='grid lg:grid-cols-3 gap-5'>
      {
        adventures.map(adventure =>
          <AdventureCard
            key={adventure._id}
            adventure={adventure}
          >
          </AdventureCard>)
      }
    </div>
  );
};

export default Adventures;