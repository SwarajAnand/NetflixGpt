import { imagePath } from "../utils/constants"

const MovieCard = ({ movie }) => {
  const { title, poster_path } = movie;

  return (
    <div className="flex-none w-64">
      <img className="w-full h-[350px] rounded" src={imagePath + poster_path} alt={title} />
    </div>
  )
}

export default MovieCard
