import React, { useEffect, useState } from 'react';

const ImgGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/images`)
      .then(res => res.json())
      .then(data => setImages(data))
  }, [images])




  if (!images.length) {
    return (
      <div className='flex flex-col items-center my-20'>
        <h2 className='text-5xl font-bold text-center mt-20 mb-10 custom-font'>See some of the <span style={{ color: 'orangered' }}>Images</span></h2>
        <button className="btn btn-square loading"></button>
      </div>
    );
  }


  return (
    <div className='my-20'>
      <div className='flex flex-col justify-center'>
        <h2 className='text-5xl font-bold text-center mt-20 mb-10 custom-font'>See some of the <span style={{ color: 'orangered' }}>Images</span></h2>
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