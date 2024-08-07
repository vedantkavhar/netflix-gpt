import React from 'react';
import {IMG_CDN_URL} from "../Utils/Constants";
const MovieCard = ({ poster_path }) => {
  if(!poster_path) return null;

  return (    
    <div className="w-48 pr-5">
        <img alt="moviee card " src={IMG_CDN_URL + poster_path}   />
    </div>
  )
}

export default MovieCard;