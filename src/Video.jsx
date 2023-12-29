import React from 'react'

import VideoList from "./VideoList"

const Video = ({items}) => {
  return (
    <div className="section-center">
        {items.map((videoList) => {
            return(
                <VideoList key={videoList.id} {...videoList}/>
            )
        })}
    </div>
  )
}
export default Video