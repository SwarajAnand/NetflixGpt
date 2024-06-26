import { useEffect, useState } from "react";
import { GET, nowPlayingUrl } from "../utils/constants";
import useFetch from "../utils/useGetMovies";
import VideoBG from "./VideoBG";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const [reload, setReload] = useState(false);
  const [nowPlayingData, nowPlayingLoading] = useFetch(nowPlayingUrl, GET);

  useEffect(() => {
    const interval = setInterval(() => {
      setReload(!reload);
    }, 135000)

    return () => clearInterval(interval);
  }, [reload])
  

  if (nowPlayingLoading) return;

  const randomMovie = () => {
    let randId = nowPlayingData.length;
    return Math.floor(Math.random() * randId);
  };
  const currMovie = nowPlayingData[randomMovie()];
  console.log(currMovie);
  const { title, overview, id } = currMovie;

  return (
    <div>
      <VideoTitle val={{ title, overview, id }} />
      <VideoBG id={id} />
    </div>
  );
};

export default MainContainer;

