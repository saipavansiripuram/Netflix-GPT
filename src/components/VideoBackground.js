import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import { VIDEO_URL } from "../utils/constant";
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={VIDEO_URL + trailerVideo?.key + "?&autoplay=1&mute=1&showinfo=0&controls=0&loop=1"}
        title="YouTube"
        // allow=" autoplay; "
      ></iframe>
    </div>
  );
};

export default VideoBackground;
