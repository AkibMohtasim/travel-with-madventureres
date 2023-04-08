import React, { useState } from 'react';
import './Subscribe.css';

const SubScribe = () => {

  const [text, setText] = useState(null);

  const submitHandler = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    if (email) {
      setText(<p>Welcome abroad! You have subscribed to our weekly Newsletter service.</p>)
    }
    form.reset();
  }

  return (
    <div className='newsletter-container h-[70vh] md:h-[60vh]'>
      <img className='object-cover h-full w-full' src='https://i.ibb.co/MVT0Ww6/newsletter.jpg' alt="Drink" />
      <div className="gradient-overlay"></div>
      <div className="newsletter-text-overlay p-5">
        <h2>Subscribe to our Newsletters</h2>
        <br />
        <p className='adventure-font text-lg'>Do you want us to inform you about the festivals and adventures around the world?</p>
        <p className='adventure-font text-lg'>We'll send you a weekly email. You can unsubscribe at any time.</p>

        <form className='flex justify-center w-full my-10 adventure-font' onSubmit={submitHandler}>
          <input className="input input-bordered input-accent w-full max-w-xs mr-2" type="email" name='email' placeholder='Your Email' required />
          <input className='btn btn-outline text-white' type="submit" value="Submit" />
        </form>
        {text}
      </div>


    </div>
  );
};

export default SubScribe;