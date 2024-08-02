import React from 'react';
import 'remixicon/fonts/remixicon.css';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white aspect-video pt-[19%] px-16 bg-gradient-to-r from-black ">
        <h1 className='font-bold text-5xl'>{title}</h1>
        <p className='text-xl w-1/2 py-4'>{overview}</p>

        <div className=''>
            <button className="bg-white text-black rounded-lg text-xl px-12 p-2  hover:bg-opacity-60 "  > <i class="ri-play-large-fill"></i>Play</button>
            <button className="bg-gray-500 text-white rounded-lg text-xl px-12 p-2 hover:bg-opacity-60 mx-3"> <i class="ri-information-line"></i>More info</button>
        </div>
    
    </div>
  )
}

export default VideoTitle;