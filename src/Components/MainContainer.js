import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";
const MainContainer=()=>{

    // ,fetch movies from store
    const movies= useSelector(store => store?.movies?.nowPlayingMovies);
    if(movies === null) return;

    // display atrailer in bg
    const mainMovie=movies[0];
    console.log(mainMovie);

    // pass data of main moveie as props in that comp 
    const { original_title, overview ,id} = mainMovie;


    return(
        <div>
        {/* vid title  */}
        <VideoTitle  title={original_title} overview={overview} />
        <VideoTrailer movieId={id}/>
        </div>
    );
};

export default MainContainer;