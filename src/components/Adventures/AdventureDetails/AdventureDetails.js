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
    showDiv = <div className='adventure-details'>
      <h2>{name}</h2>
      <p>{duration}</p>
      <h4>Locations: {locations}</h4>
      <img src={images[0]} alt="" />
      <p>{descriptions[0]}</p>
      <img src={images[1]} alt="" />
      <p>{descriptions[1]}</p>
      <img src={images[2]} alt="" />
      <p>{descriptions[2]}</p>
      <img src={images[3]} alt="" />
      <p>{descriptions[3]}</p>
      <ul>
        <h3>Things to do in Nairobi</h3>
        {
          thingsToDo?.map(thing => <li key={thing}>{thing}</li>)
        }

      </ul>
      <h3>Bdt {price}</h3>
      <Link className='btn btn-outline-primary' to={`/placeOrder/${_id}`}>ADD TO YOUR BUCKET</Link>
    </div>
  }


  return (
    <div>
      {showDiv}
    </div>
  );
};

export default AdventureDetails;