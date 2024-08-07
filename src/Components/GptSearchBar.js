import React, { useRef } from 'react';
import 'remixicon/fonts/remixicon.css'
import lang from '../Utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../Utils/Constants';
import { addGptMovieResult } from '../Utils/gptSlice';
import Openai from '../Utils/Openai';
// import genAI from '../Utils/Openai';
// import { GoogleGenerativeAI } from '@google/generative-ai';

const GptSearchBar=() =>{
    const dispatch= useDispatch();
    const langKey =useSelector(store => store.config.lang);
    const searchText =useRef(null);

    const SearchTMDBAPI= async(movie)=>{
        const data =await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1",API_OPTIONS)

        const json= await data.json();
        
        return json.results;
    }
    
   
    const handleGPTSearchClick =async ()=>{
        console.log(searchText.current.value);
        
        const gptQuery= "Act as a movie recommendation system and suggest movies for the query" +searchText.current.value +". only give me names of 5 movies ,comma separated like the example ahead . Example Don,Sholay ,Gadar, Golmaal,Hera pheri";
        
        //gemini 
        // const apiKey = OPENAPI_KEY; // Replace with your actual API key
        // const model = new GoogleGenerativeAI(apiKey);

        // try {
        //   const result = await model.generateContent({
        //     prompt: gptQuery,
        //   });
        //   console.log(result.response.text());
        // } catch (error) {
        //   console.error('Error calling Gemini API:', error);
        // }


        // make api call to Gpt API and get  movie result
        const gptResults=  await Openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: gptQuery }],
            
          });
          console.log(gptResults.choices);

          if(!gptResults.choices){
            //error handling
          }

          const gptMovies= gptResults.choices?.[0]?.message?.content.split(",");
          //   will give arr of 5 movies 
          
          //   for each movie search in  tmdb api
          const promiseArray= gptMovies.map((movie)=> SearchTMDBAPI(movie));
        // why proomise ? since seachtmdbapi is async fn ,it takes time to execute but map fn nnot map one shot run and reutnr arr of 5 promise 
        // will return arr of 5 promise 
        //   [promise,promise,promise,promise,promise]

        // run only when all promise resolve
          const tmdbResults = await Promise.all(promiseArray);
        // console.log(tmdbResults);
          dispatch(addGptMovieResult({moviesNames: gptMovies , movieResults:  tmdbResults}));

    };

    return (
        <div className="pt-[45%] md:pt-[10%]   flex justify-center ">
            <form className='w-full md:w-1/2  bg-black grid grid-cols-12 ' onSubmit={(e)=> e.preventDefault()}>
                <input 
                ref={searchText}
                type="text" 
                className="p-3 m-3 col-span-9 text-black  md:text-2xl" 
                placeholder={lang[langKey].GptSearchPlaceholder}/>

                <button className='rounded-lg text-white py-2 px-3 bg-red-700 m-3 col-span-3 text-sm md:text-2xl ' onClick={handleGPTSearchClick}><i class="ri-search-line"></i>{" "}
                {lang[langKey].search}
                </button> 
            </form>
        
        </div>
    )
};

export default GptSearchBar;