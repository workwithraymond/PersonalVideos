const VideoList = ({author, title, videoUrl, desc}) => {
  return (
    <article className="video-item">
      <video controls width='100%' height='auto'>
        <source src=""

      </video>
        <video src={videoUrl} alt={title} className="video"/>
        <div className="item-info">
          <header>
            <h5>{title}</h5>
          </header>
        </div>
        <p className="item-price">By {author}</p>
        <div className="item-info">
        <p className="item-text">{desc}</p>
        </div>
        
    </article>
  )
}
export default VideoList