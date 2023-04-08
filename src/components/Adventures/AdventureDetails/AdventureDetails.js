import React from 'react';
import './AdventureDetails.css';
import { Link, useLoaderData } from 'react-router-dom';


const AdventureDetails = () => {
  const { _id, name, locations, duration, descriptions, images, price, thingsToDo } = useLoaderData();

  let showDiv;

  if (!name) {
    showDiv = <button className="btn btn-square loading"></button>
  }
  else {
    showDiv = <div className='adventure-details adventure-font'>
      <h2 className='custom-font text-5xl font-bold border-b-2 border-orange-500 py-2'>{name}</h2>
      <p className='text-xl'>{duration}</p>
      <h4 className='text-2xl text-center mb-10'>Locations: {locations}</h4>
      <img src={images[0]} alt="" />
      <p className='text-lg'>{descriptions[0]}</p>
      <img src={images[1]} alt="" />
      <p className='text-lg'>{descriptions[1]}</p>
      <img src={images[2]} alt="" />
      <p className='text-lg'>{descriptions[2]}</p>
      <img src={images[3]} alt="" />
      <p className='text-lg'>{descriptions[3]}</p>
      <ul>
        <h3 className='text-lg'>Things to do here - </h3>
        {
          thingsToDo?.map(thing => <li className='' key={thing}>{thing}</li>)
        }

      </ul>
      <h3 className=' text-lg font-bold mb-8'>Price: {price} bdt</h3>
      <Link className='btn btn-outline btn-ghost' to={`/placeOrder/${_id}`}>ADD TO YOUR BUCKET</Link>
    </div>
  }


  return (
    <div className='flex flex-col items-center'>
      {showDiv}
    </div>
  );
};

export default AdventureDetails;