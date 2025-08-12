import './Enlisted.css'
import { GmNameToImg } from '../Layout/Nav'
import OverAll from '../assets/overall.svg'
import { useContext } from 'react'
import { TierDetailsContext } from '../App'

import {Sword, DiaPot, NethPot, UHC, SMP, Crystal, Axe} from '../Layout/Nav'




const TierDisplay = (props) => {
    return <div className='GmTierDisplay'><img className='GmTierImage' src={props.gmImg}></img><p className='GmTier'>{props.tier}</p></div>
}

export const Enlisted = (props) => {
    const {getTierDetails, setTierDetails} = useContext(TierDetailsContext)
    console.log(getTierDetails);
    const BkImgByIndex = [
        'rgb(212, 175, 55)',
        'silver',
        'rgb(205, 127, 50)'

    ]
    return <div className='EnlistedContainer' onClick={()=>{
        setTierDetails({visible: true, person: props.guy})
    }}>
        <div className='EnlistedTopThreeStyler' style={{backgroundColor : props.index < 3 ? BkImgByIndex[props.index] : 'none'}}>
            <h1 className='Place'>{props.index + 1 + '.'}</h1>
        </div>
        <img className='EnlistedImage' src={'https://render.crafty.gg/3d/bust/' + props.guy.name} loading='lazy'></img>
        <div className='EnlistedInfo'>
            <h2 className='EnlistedName'>{props.guy.name}</h2>
            <h3 className='EnlistedPerk'>{"Combat Enlisted"}</h3>
        </div>
        <div className='TierDisplayCon'>
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