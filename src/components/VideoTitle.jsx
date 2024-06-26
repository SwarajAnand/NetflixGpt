import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";

const VideoTitle = ({val}) => {
    const { title, overview, id} = val;

    // console.log(title, overview, id)
  return (
    <div className="z-10 pt-[16%] px-14 absolute text-white bg-gradient-to-r h-full from-black">
        <p className="text-6xl font-small">{title}</p>
        <p className="max-w-[450px] py-5">{overview}</p>
        <div className="flex gap-6 text-[20px] justify-start items-center">
        <button className="flex justify-center items-center gap-2 bg-[#e50914dc] hover:bg-[#f6121dc9] py-1 px-4 rounded-md"><FaPlay size={20}/><span>Play</span> </button>
        <button className="flex justify-center items-center gap-2 bg-slate-50 text-black py-1 px-4 rounded-md"><IoIosInformationCircle size={25}/><span> More Info</span></button>
        </div>
    </div>
  )
}

export default VideoTitle