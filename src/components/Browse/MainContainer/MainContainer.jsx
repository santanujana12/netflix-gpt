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

    return (
      <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview} />
        <VideoBackground id={mainMovie?.id} />
      </div>
    );
}

export default MainContainer;