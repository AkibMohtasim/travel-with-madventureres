import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PlaceOrder = () => {

  const { _id, name, price, email } = useLoaderData();

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
      message
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
        if (data.service) {
          alert('Order Placed Successfully')
          form.reset();
        }
      })
      .catch(err => console.error(err.message));
  }

  return (
    <div>
      <div className='text-center mt-20'>
        <h2>Place Your Order for: {name}</h2>
        <p>Price: bdt {price}</p>
      </div>

      <form onSubmit={orderHandler} className="form-control w-full max-w-xs mx-auto my-20">
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full max-w-xs" required />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" defaultValue={email} className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <label className="label">
            <span className="label-text">When You want to go?</span>
          </label>
          <input type="date" name='date' className="input input-bordered w-full max-w-xs" required />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Additional Message</span>
          </label>
          <textarea name="message" className="textarea textarea-bordered w-80" placeholder="Additional Message"></textarea>
        </div>
        <button type="submit" className="btn btn-active btn-ghost">Submit</button>
      </form>
    </div>
  );
};

export default PlaceOrder;