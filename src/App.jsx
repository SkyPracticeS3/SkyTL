import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Layout/Header'
import { createContext } from 'react'
import {Main} from './Layout/Main'
import {Nav} from './Layout/Nav'
import OverAll from './assets/overall.svg'
import { TierDetails } from './Layout/TierDetails'

export const TierDetailsContext = createContext({ visible: false, person: null });

function App() {
  const [count, setCount] = useState(0)
  const [currentGmS, setCurrentGmS] = useState({Gamemode: "OverAll", Image: OverAll})
  const [getTierDetails, setTierDetails] = useState({ visible: false, person: null });

  return (
    <>
      <TierDetailsContext.Provider value={{getTierDetails, setTierDetails}}>
        <Header></Header>
        <Nav currentGm={currentGmS} setCurrentGm={setCurrentGmS}></Nav>
        <Main currentGm={currentGmS} setCurrentGm={setCurrentGmS}></Main>
        {getTierDetails.visible && <TierDetails details={getTierDetails.person} setDetails={setTierDetails}></TierDetails>}
      </TierDetailsContext.Provider>
    </>
  )
}

export default App
