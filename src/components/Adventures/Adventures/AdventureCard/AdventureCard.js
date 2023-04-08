import React from 'react';
import { Link } from 'react-router-dom';

const AdventureCard = ({ adventure }) => {

  const { _id, name, locations, duration, images, price } = adventure;
  // console.log(adventure);
  return (
    <div className="card card-compact w-72 md:w-80 bg-base-100 shadow-xl rounded-none m-5 adventure-font">
      <figure><img src={images[0]} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className='text-lg'>Price: {price} bdt</p>
        <p className='text-base'>Duration: {duration}</p>
        <p className='text-base'>Places: {locations}</p>
        <div className="card-actions justify-end mt-2 mx-auto">
          <Link to={`/adventures/${_id}`} className="btn btn-outline">Details</Link>
          <Link className='btn btn-outline' to={`/placeOrder/${_id}`}>ADD TO YOUR BUCKET</Link>
        </div>
      </div>
    </div>
  );
};

export default AdventureCard;