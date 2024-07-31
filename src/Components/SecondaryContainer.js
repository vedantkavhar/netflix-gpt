import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer=()=>{
    const movies  = useSelector( store => store.movies);
    console.log(movies);
    return(
        movies.nowPlayingMovies &&  (
            <div className="bg-black pl-16">
                <div className="relative -mt-60 z-30  " >
                    <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
                    <MovieList title={"Popular"} movies={movies?.popularMovies}/>
                    <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}/>
                    <MovieList title={"Upcoming"} movies={movies?.upcomingMovies}/>
                </div>
  
            </div>)   
    )
};

export default SecondaryContainer;