const VideoTitle = ({val}) => {
    const { title, overview, id} = val;

    // console.log(title, overview, id)
  return (
    <div className="z-10 pt-[20%] px-14 absolute text-white bg-gradient-to-r h-full from-black">
        <p className="text-6xl font-small">{title}</p>
        <p className="max-w-[450px] py-5">{overview}</p>
    </div>
  )
}

export default VideoTitle