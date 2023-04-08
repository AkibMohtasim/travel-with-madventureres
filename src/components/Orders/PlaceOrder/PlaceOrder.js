import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const PlaceOrder = () => {

  const { user } = useContext(AuthContext);

  const { _id, name, price, images, duration, locations } = useLoaderData();

  const orderHandler = event => {
    event.preventDefault();
    const form = event.target;
    const customerName = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const message = form.message.value;

    const order = {
      adventure_id: _id,
      adventureName: name,
      price,
      customerName,
      email,
      date,
      message,
      status: 'Pending'
    }

    fetch('http://localhost:5000/api/orders', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          alert('Order Placed Successfully')
          form.reset();
        }
      })
      .catch(err => console.error(err.message));
  }

  return (
    <div>
      <div className="hero min-h-[50vh]" style={{ backgroundImage: `url(${images[0]})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{name}</h1>
            <p className="mb-5">{duration}</p>
            <p className="mb-5">Locations: {locations}</p>
            <p className="mb-5">Price: {price} Bdt</p>
            <form onSubmit={orderHandler} className="form-control w-full max-w-xs mx-auto my-10 text-black">
              <div>
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full max-w-xs" defaultValue={user.displayName} required />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" defaultValue={user.email} className="input input-bordered w-full max-w-xs" readOnly />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-white">When you want to go?</span>
                </label>
                <input type="date" name='date' className="input input-bordered w-full max-w-xs" required />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-white">Additional message</span>
                </label>
                <textarea name="message" className="textarea textarea-bordered w-80" placeholder="Additional Message"></textarea>
              </div>
              <button type="submit" className="btn btn-outline text-white mt-2">Submit</button>
            </form>
          </div>
        </div>
      </div>


    </div>
  );
};

export default PlaceOrder;