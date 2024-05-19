import { useSelector } from "react-redux";
import VideoBackground from "../VideoBackground/VideoBackground";
import VideoTitle from "../VideoTitle/VideoTitle";

const MainContainer = () => {

  const movies = useSelector((store)=>store.movies?.nowPlayingMovies);

  // Early return
  if(!movies){
    return;
  }

  const mainMovie = movies[0];
  console.log(mainMovie);

    return (
      <>
        <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview}/>
        <VideoBackground id={mainMovie?.id}/>
      </>
    );
}

export default MainContainer;