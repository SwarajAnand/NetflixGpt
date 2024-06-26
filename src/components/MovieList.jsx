import useFetch from "../utils/useGetMovies"
import MovieCard from "./MovieCard"

const MovieList = ({ link, method, title }) => {
  const [data, loading, error] = useFetch(link, method)
  console.log(link)
  return (
    <div className="p-6">
    <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar space-x-4 p-4">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
