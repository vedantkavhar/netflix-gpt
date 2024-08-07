import React from 'react';
import { useSelector } from 'react-redux';

import MovieList from './MovieList';
const GptSearchSuggestions=() =>{
    const {movieNames , movieResults } = useSelector(store => store.gpt);
    if(!movieNames) return null;

    return (
        <div className='text-white  bg-black bg-opacity-70'>
            <div>
                {movieNames.map( (movieName, index ) => <MovieList  key={movieName} title={movieName} movies={movieResults[index]}/>) }
            </div>
        </div>
    )
};

export default GptSearchSuggestions;