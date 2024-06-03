import useFetch from "../utils/useGetMovies"
import MovieCard from "./MovieCard"

const MovieList = ({ link, method }) => {
  const [data, loading, error] = useFetch(link, method)
  console.log(link)
  return (
    <div className="container mx-auto">
      <div className="flex overflow-x-scroll no-scrollbar space-x-4 p-4">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
