import React from 'react';
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();


  return (
    <div>
      <Header/>
      <MainContainer/>
      {/* vid title
      vid trailer */}
      
      <SecondaryContainer/>
      {/* //movies card */}
    </div>
  )
};

export default Browse;