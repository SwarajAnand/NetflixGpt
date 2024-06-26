import { GET } from "../utils/constants";
import useFetch from "../utils/useGetMovies";

const VideoBG = ({ id }) => {
  const [data] = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/videos`,
    GET
  );
  let trailerVideo = data.find((ele) => ele.type === "Trailer");

  return (
    <div className="overflow-hidden">
      <iframe
        className="min-h-screen max-h-screen min-w-full aspect-auto zoomed-iframe"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title=" video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBG;
