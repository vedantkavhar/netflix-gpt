import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptSearchSuggestions from "./GptSearchSuggestions";
import {LOGO} from "../Utils/Constants"
const GptSearch = () => {
  return (
    <div>
      <div className='fixed -z-30'>
          <img src={LOGO} alt="bg" />
      </div>
      <GptSearchBar/>
      <GptSearchSuggestions/>
    </div>
  )
}

export default GptSearch;