import {API_OPTIONS} from "../Utils/Constants";
import {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../Utils/moviesSlice';

const MovieTrailer=(movieId)=>{
    // store trailer in reducx store and fetch its key from storw 
    // to add trailer to store 
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store )=> store?.movies?.trailerVideo);


    // get all vid,trailer,teaser abt the movie 
    const getallVids=async()=>{
        const vidlist= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)

        const json = await vidlist.json();
        // console.log(json);
        
        const filterTrailer = json.results.filter((vid) => vid.type ==="Trailer");
        // console.log(filterTrailer);
        // if mulitple trailler 
        const orgTrailer= filterTrailer.length ? filterTrailer[0] : json.results[0];
        // console.log(orgTrailer);
        // put trailer to store 
        dispatch(addTrailerVideo(orgTrailer));
    };
    

    useEffect(()=>{
        !trailerVideo && getallVids();
    },[]);
    // useEffect(()=>{
    //     getallVids();
    // },[]);
};

export default MovieTrailer;