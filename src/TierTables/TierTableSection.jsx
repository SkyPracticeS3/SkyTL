import { useRef } from 'react'
import './TierTableSection.css'
import { TierDetailsContext } from '../App';
import { useContext } from 'react';
import Trophy from '../assets/Trophy.png'
import GoldTrophy from '../assets/GoldTrophy.png'
import SilverTrophy from '../assets/SilverTrophy.png'
import BronzeTrophy from '../assets/BronzeTrophy.png'
import { regionBkColor, regionTxtColor } from '../LeaderBoard/Enlisted';

export const TierTableGuy = ({guy, low}) => {
    const regionRef = useRef(null);
    const {getTierDetails, setTierDetails} = useContext(TierDetailsContext)
    let mousein = false;
    const mouseEnter = ()=>{
        if(regionRef != null && !mousein){
            regionRef.current.style.marginLeft = '0px';
            regionRef.current.style.clipPath = 'inset(0 0 0 0)';
            mousein = true;
        }
    }
    const mouseLeave = ()=> {
        if(regionRef != null && mousein){
            regionRef.current.style.marginLeft = '-31px';
            regionRef.current.style.clipPath = 'inset(0 0 0 31px)';
            mousein = false;
        }
    }

    return <div className={low ? 'lowSection ' : '' + 'TierTableSectionGuy' } onClick={() => {
        setTierDetails({visible : true, person : guy}); mouseLeave();
    }} onMouseEnter={() => {mouseEnter()}} onMouseLeave={() => {mouseLeave()}}>
               <div className='regionIndicator' ref={regionRef} style={{backgroundColor: regionTxtColor[guy.region],
                color: regionBkColor[guy.region]}}>{guy.region}</div>
               <img src={'https://mc-heads.net/head/' + guy.name} className='guyHead' loading='lazy'></img><p className='guyName'>{guy.name}</p></div>
}

export const TierTableSection = (props) => {

    const getTrophy = (tierName) => {
        if(tierName == 'Tier 1')
            return GoldTrophy;
        if(tierName == 'Tier 2')
            return SilverTrophy;
        return BronzeTrophy;
    }

    return <div className='TierTableSection'>
        <div className='TierTableSectionHeader'>
            {props.tier != 'Tier 5' && props.tier != 'Tier 4' && <img src={getTrophy(props.tier)} className='TierTableTrophy'></img>}<p className='TierTableSectionHeaderText'>{props.tier}</p></div>
        <div className='SectionContainer'>
        {
            props.people.filter((guy) => { return guy.getGm(props.gm).startsWith('H')}).map((guy) => <TierTableGuy guy={guy} low={false}></TierTableGuy>)
        }{props.people.filter((guy) => { return guy.getGm(props.gm).startsWith('L')}).map((guy) => <TierTableGuy guy={guy} low={true}></TierTableGuy>)
        }</div>
    </div>
}