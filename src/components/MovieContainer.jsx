import { GET, nowPlayingUrl, trendingMovies, topRatedMovies, upcomingMovies, tvTrending } from "../utils/constants";
import MovieList from "./MovieList"


const MovieContainer = () => {
  return (
    <div className="bg-black text-white relative z-40">
        <MovieList link={nowPlayingUrl} method={GET} title={"Now Playing"}/>
        <MovieList link={trendingMovies} method={GET} title={"Trending Movies"}/>
        <MovieList link={topRatedMovies} method={GET} title={"Top Rated"}/>
        <MovieList link={upcomingMovies} method={GET} title={"Upcoming"}/>
        <MovieList link={tvTrending} method={GET} title={"Television"}/>
    </div>
  )
}

export default MovieContainer