import React, { useEffect, useState } from 'react';

const ImgGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/images`)
      .then(res => res.json())
      .then(data => setImages(data))
  }, [])


  return (
    <div className='my-20'>
      <div>
        <h2 className='text-5xl text-center my-20'>Image Section</h2>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 place-items-center mx-auto h-[60vh] lg:h-[80vh] overflow-y-auto overflow-x-hidden'>
        {
          images.map(img =>
            <div className='h-36 w-36 lg:h-72 lg:w-72 p-2' key={img._id}>
              <img className='object-cover h-full w-full' src={img.img} alt="" srcset="" />
            </div>)
        }
      </div>
    </div>
  );
};

export default ImgGallery;