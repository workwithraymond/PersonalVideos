import { useState } from "react"
import videos from './data'
import Title from "./Title"
import Video from "./Video"

function App() {
  const [videoList, setVideoList] = useState(videos)

  return (
    <main>
      <section className='video-title'>
      <Title text= 'Best Videos'/>
      <Video items={videoList}/>
      </section>

    </main>
  )
}

export default App
