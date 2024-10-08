import React from 'react'

function ImageCard({imgURl}) {
  return (
    <div>
      <div className='w-[400px] h-[400px] rounded-2xl'> 
        <img src={imgURl} className='object-cover' alt="" />
      </div>
    </div>
  );
}

export default ImageCard;
