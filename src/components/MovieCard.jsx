import { imagePath } from "../utils/constants"
import Nlogo from "../assets/Nlogo.png"

const MovieCard = ({ movie }) => {
  const { title, poster_path } = movie;

  return (
    <div className="flex-none relative">
      <img className="h-[240px] rounded" src={imagePath + poster_path} alt={title} />
      <img className="h-[35px] absolute top-2" src={Nlogo} />
    </div>
  )
}

export default MovieCard
