import { useEffect } from 'react';
import {API_OPTIONS} from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";


const useNowPlayingMovies=()=>{
  const dispatch = useDispatch();
  const nowPlayingMovies= useSelector((store )=> store?.movies?.nowPlayingMovies);

  const getNowPlayingMovies= async ()=>{

    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);

    const json=await data.json();
    // console.log(json.results);
     
    //dispatch put fetched data to redux store using adNowPlayingMovies action
    dispatch(addNowPlayingMovies(json.results));

  };



  useEffect(()=>{
    //memoization
    !nowPlayingMovies && getNowPlayingMovies();
  },[]);
  // useEffect(()=>{
  //   getNowPlayingMovies();
  // },[]);
};

export default useNowPlayingMovies;

