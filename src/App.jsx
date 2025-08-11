import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Layout/Header'
import {Main} from './Layout/Main'
import {Nav} from './Layout/Nav'
import OverAll from './assets/overall.svg'

function App() {
  const [count, setCount] = useState(0)
  const [currentGmS, setCurrentGmS] = useState({Gamemode: "OverAll", Image: OverAll})

  return (
    <>
      <Header></Header>
      <Nav currentGm={currentGmS} setCurrentGm={setCurrentGmS}></Nav>
      <Main currentGm={currentGmS} setCurrentGm={setCurrentGmS}></Main>
    </>
  )
}

export default App
