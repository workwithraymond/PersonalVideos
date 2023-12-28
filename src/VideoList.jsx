const VideoList = ({author, title, videoUrl, category, desc}) => {
  return (
    <article className="video-item">
        <video src={videoUrl} alt={title} className="video"/>
    </article>
  )
}
export default VideoList