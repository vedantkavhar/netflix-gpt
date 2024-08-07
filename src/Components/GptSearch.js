import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptSearchSuggestions from "./GptSearchSuggestions";
import {LOGO} from "../Utils/Constants";
const GptSearch = () => {
  return (
    <div className=''>
      <div className='fixed -z-30  '>
          <img className='h-screen object-cover' src={LOGO} alt="bg" />
      </div>
      <div className=''>
        <GptSearchBar/>
        <GptSearchSuggestions/>
      </div>
    </div>
  )
}

export default GptSearch;