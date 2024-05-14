import { useState } from "react"
import Background from "./Components/Background/Background"
import Navbar from "./Components/Navbar/Navbar"


export const App = () => {
  let heroData = [
    {text1: 'Dive into', text2: 'what you love'},
    {text1: 'Indulge', text2: 'your passions'},
    {text1: 'Give in to', text2: 'your passions'},
  ]

  const [heroCount, setHeroCount] = useState(2)
  const [playstatus, setPlaystatus] = useState(true)
      
  return (
    <div>
      <Background heroCount={heroCount} playstatus={playstatus} />
      <Navbar/>
    </div>
  )
}
