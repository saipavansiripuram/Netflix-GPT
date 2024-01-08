import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen z-10">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key +"?&autoplay=1&mute=1"}
        title="YouTube"
        // allow=" autoplay; "
      ></iframe>
    </div>
  );
};

export default VideoBackground;
