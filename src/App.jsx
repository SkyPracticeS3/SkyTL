import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Layout/Header'
import { createContext, useEffect } from 'react'
import {Main} from './Layout/Main'
import {Nav} from './Layout/Nav'
import OverAll from './assets/overall.svg'
import { TierDetails } from './Layout/TierDetails'
import { ToastContainer } from 'react-toastify'
import { EnlistedPerson, Tier, Region } from './Layout/Main'

export const TierDetailsContext = createContext({ visible: false, person: null });
export const SearchContext = createContext(null);

function App() {
  const [count, setCount] = useState(0)
  const [currentGmS, setCurrentGmS] = useState({Gamemode: "OverAll", Image: OverAll})
  const [getTierDetails, setTierDetails] = useState({ visible: false, person: null, place: 0 });
  const [People, setPeople] = useState([]);
  const [myPeopleMap, setMyPeopleMap] = useState(new Map());
  useEffect(()=>{
    setPeople([    
      new EnlistedPerson("Swight", Tier.LT1, Tier.HT4, Tier.HT3, Tier.HT5, Tier.HT4, Tier.LT1, Tier.HT1, 1),
      new EnlistedPerson("Katieey", Tier.HT1, Tier.LT2, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, 2),
      new EnlistedPerson("HealingPotion", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, 3),
      new EnlistedPerson("MightySaS", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, 4),
      new EnlistedPerson("Xern", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, 5),
      new EnlistedPerson("gatzox", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, 6),
      new EnlistedPerson("NeonXStrik3r", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, 7)])
  }, []);
  useEffect(()=>{
      let map = new Map();
      for(const guy of People){
        map.set(guy.name, guy);
      }
      setMyPeopleMap(map);
  }, [People])
  return (
    <>
      <TierDetailsContext.Provider value={{getTierDetails, setTierDetails}}>
        <SearchContext.Provider value={{myPeopleMap, setMyPeopleMap}}>
          <Header></Header>
          <Nav currentGm={currentGmS} setCurrentGm={setCurrentGmS}></Nav>
          <Main currentGm={currentGmS} setCurrentGm={setCurrentGmS} people={People}></Main>
          {getTierDetails.visible && <TierDetails details={getTierDetails.person} place={getTierDetails.place} setDetails={setTierDetails}></TierDetails>}
        </SearchContext.Provider>
      </TierDetailsContext.Provider>
      <ToastContainer theme='dark' autoClose={3000}/>
    </>
  )
}

export default App
