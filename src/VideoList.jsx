import React from 'react'
import YouTube from 'react-youtube'
const VideoList = ({id, author, title, videoUrl, desc}) => {
  const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
};


  return (
    <article className="video-item">
     
        <YouTube videoId={getYouTubeVideoId(videoUrl)} opts={opts}/>
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

const getYouTubeVideoId = (url) => {
  const videoIdRegex = /[?&]v=([^?&]+)/;
  const match = url.match(videoIdRegex);
  return match ? match[1] : '';
};

export default VideoList