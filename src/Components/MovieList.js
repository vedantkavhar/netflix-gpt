import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title , movies }) => {
  console.log(movies);
  return (
    <div >
        <h1 className='text-3xl py-3 font-bold text-white'>{title}</h1>
        <div className='flex overflow-x-scroll '>
            <div className='flex'>
              {/* for 1 movie  */}
              {/* <MovieCard poster_path={movies[0].poster_path} /> */}
              {/* for 20 movies map//loop  */}
              {movies?.map((movie) => (
              <MovieCard  key={movie.id}  poster_path={movie.poster_path} />
              ))}
            </div>
        </div>
    </div>
  )
};

export default MovieList;