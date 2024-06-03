import { GET, nowPlayingUrl, trendingMovies, topRatedMovies, upcomingMovies, tvTrending } from "../utils/constants";
import MovieList from "./MovieList"


const MovieContainer = () => {
  return (
    <div>
    MOvies
        {/* <MovieList link={nowPlayingUrl} method={GET}/> */}
        {/* <MovieList link={trendingMovies} method={GET}/> */}
        <MovieList link={topRatedMovies} method={GET}/>
        <MovieList link={upcomingMovies} method={GET}/>
        <MovieList link={tvTrending} method={GET}/>
    </div>
  )
}

export default MovieContainer