import React from 'react';
import useTitle from '../../../hooks/useTitle';
import addServiceImg from '../../../images/addService/addService.jpg';




const AddNewAdventure = () => {

  useTitle('Add Adventure');


  const addServiceHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const advName = form.advName.value;
    const locations = form.locations.value;
    const duration = form.duration.value;
    const toDo = form.toDo.value;
    const price = form.price.value;
    const img = form.img.value;
    const description = form.description.value;

    const order = {
      name: advName,
      locations,
      duration,
      thingsToDo: toDo,
      price,
      images: img,
      descriptions: description
    }

    const confirm = window.prompt(`Are you an Admin? Type "ServiceAdmin" to confirm`);

    if (confirm === 'ServiceAdmin') {
      fetch('https://travel-with-madventurers-server.vercel.app/api/adventures', {
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
            alert('Service Created Successfully')
            form.reset();
          }
        })
        .catch(err => console.error(err.message));
    }


  }


  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${addServiceImg})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content adventure-font">
        <div>
          <form onSubmit={addServiceHandler} className="form-control w-full max-w-xs mx-auto my-10">
            <div>
              <label className="label">
                <span className="label-text text-white">Adventure Name</span>
              </label>
              <input type="text" name='advName' placeholder="Adventure Name" className="input input-bordered w-full max-w-xs text-black" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white">Locations</span>
              </label>
              <input type="text" name='locations' placeholder="locations seperated by comma" className="input input-bordered w-full max-w-xs text-black" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white">Duration</span>
              </label>
              <input type="text" name='duration' placeholder="e.g. 10 days" className="input input-bordered w-full max-w-xs text-black" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white">Things to Do</span>
              </label>
              <input type="text" name='toDo' placeholder="e.g. kayaking, trekking, etc" className="input input-bordered w-full max-w-xs text-black" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <input type="text" name='price' placeholder="price in bdt" className="input input-bordered w-full max-w-xs text-black" />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white">Image URL</span>
              </label>
              <input type="text" name='img' placeholder="e.g. https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" className="input input-bordered w-full max-w-xs text-black" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white">Description</span>
              </label>
              <textarea name="description" className="textarea textarea-bordered w-80 text-black" placeholder="Description" required></textarea>
            </div>

            <button type="submit" className="btn btn-outline btn-ghost text-white my-2">Add Service</button>
          </form>
        </div>
      </div>
    </div>


  );
};

export default AddNewAdventure;