import React from 'react';
import 'remixicon/fonts/remixicon.css';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen text-white aspect-video pt-[24%] md:pt-[19%] px-6 md:px-16 bg-gradient-to-r from-black ">
        <h1 className='font-bold text-2xl w-1/2 md:text-5xl'>{title}</h1>
        <p className='hidden  md:inline-block text-xl w-1/2  py-4'>{overview}</p>

        <div className=''>
            <button className="bg-white text-black rounded-lg md:text-xl px-3   md:px-12 md:p-2  hover:bg-opacity-60 my-2 "  > <i class="ri-play-large-fill"></i>Play</button>
            <button className="hidden md:inline-block bg-gray-500 text-white rounded-lg md:text-xl px-3   md:px-12 md:p-2 hover:bg-opacity-60 mx-1 md:mx-3"> <i class="ri-information-line"></i>More info</button>
        </div>
    
    </div>
  )
}

export default VideoTitle;