import { useEffect } from 'react';
import {API_OPTIONS} from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/moviesSlice";


const usePopularMovies=()=>{
    const dispatch = useDispatch();

  const getPopularMovies= async ()=>{

    const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);

    const json=await data.json();
    // console.log(json.results);
     
    //dispatch put fetched data to redux store using adPopularMovies action
    dispatch(addPopularMovies(json.results));

  };

  useEffect(()=>{
    getPopularMovies();
  },[]);
};

export default usePopularMovies;

