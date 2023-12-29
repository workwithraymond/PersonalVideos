import { useState } from "react"
import videos from './data'
import Title from "./Title"
import Video from "./Video"
import Categories from "./Categories"

const allCategories = ['all', ...new Set(videos.map((video) => video.category))];

function App() {
  const [videoList, setVideoList] = useState(videos)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if(category === 'all') {
      setVideoList(videos) 
      return;
    }

    const newItems = videos.filter((video) => video.category === category);
    setVideoList(newItems)
  }

  return (
    <main>
      <section className='video-title'>
      <Title text= 'Best Videos'/>
      <Categories categories={categories} filterItems={filterItems} />
      <Video items={videoList}/>
      
      
      
      </section>

    </main>
  )
}

export default App
