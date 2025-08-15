import './Enlisted.css'
import { GmNameToImg } from '../Layout/Nav'
import OverAll from '../assets/overall.svg'
import { useContext } from 'react'
import { TierDetailsContext } from '../App'

import {Sword, DiaPot, NethPot, UHC, SMP, Crystal, Axe} from '../Layout/Nav'




const TierDisplay = (props) => {
    return <div className='GmTierDisplay'><img className='GmTierImage' src={props.gmImg}></img><p className='GmTier'>{props.tier}</p></div>
}

export const regionBkColor = {
    'EU' : '#013220',
    'NA' : '#550000',
    'AS' : 'rgb(139, 128, 0)',
    'AU' : 'rgb(101, 67, 33)',
    'SA' : 'rgb(0, 50, 139)',
    'AF' : '#17111D',
    'ME' : 'rgb(139, 128, 0)'
    
}
export const regionTxtColor = {
    'EU' : 'lightgreen',
    'NA' : 'rgb(255, 100, 100)',
    'AS' : 'rgb(255, 245, 158)',
    'AU' : 'rgb(196, 164, 132)',
    'SA' : 'rgb(0,122,255)',
    'AF' : "#DAB1DA",
    'ME' : 'rgb(255, 245, 158)'
}

export const Enlisted = (props) => {
    const {getTierDetails, setTierDetails} = useContext(TierDetailsContext)
    const BkImgByIndex = [
        'linear-gradient(to right, red, orange, yellow, green, blue, indigo, Violet, indigo, blue, green, yellow, red,  orange)',
        'linear-gradient(to right, silver, #71706E, silver, rgb(192, 192, 192)',
        'linear-gradient(to right, #804A00, #CD7F32, #DAAA5E)'

    ]
    return <div className='EnlistedContainer' onClick={()=>{
        setTierDetails({visible: true, person: props.guy})
    }}>
        <div className={'EnlistedTopThreeStyler' + (props.index == 1 ? ' enablerainbow' : '')} style={{backgroundImage : props.index - 1 < 3 ? BkImgByIndex[props.index - 1] : 'none',
            backgroundSize: props.index == 1 ? '1000% 100%' : 'default'}}>
            <h1 className='Place'>{props.index + '.'}</h1>
        </div>
        <img className='EnlistedImage' src={'https://render.crafty.gg/3d/bust/' + props.guy.name} loading='lazy'></img>
        <div className='EnlistedInfo'>
            <h2 className='EnlistedName'>{props.guy.name}</h2>
            <h3 className='EnlistedPerk'>{"Combat Enlisted"}</h3>
        </div>
        
        <div className='TierDisplayCon'>
        <div className='TierRegion' style={{backgroundColor : regionBkColor[props.guy.region],
                color: regionTxtColor[props.guy.region]}}>{props.guy.region}</div>
            <TierDisplay gmImg={Sword} tier={props.guy.Sword}></TierDisplay>
            <TierDisplay gmImg={DiaPot} tier={props.guy.DiaPot}></TierDisplay>
            <TierDisplay gmImg={NethPot} tier={props.guy.NethPot}></TierDisplay>
            <TierDisplay gmImg={UHC} tier={props.guy.UHC}></TierDisplay>
            <TierDisplay gmImg={Crystal} tier={props.guy.Crystal}></TierDisplay>
            <TierDisplay gmImg={SMP} tier={props.guy.SMP}></TierDisplay>
            <TierDisplay gmImg={Axe} tier={props.guy.Axe}></TierDisplay>
        </div>
    </div>
}