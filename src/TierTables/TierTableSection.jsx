import { useRef } from 'react'
import './TierTableSection.css'
import { TierDetailsContext } from '../App';
import { useContext } from 'react';

export const TierTableGuy = ({guy}) => {
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
            regionRef.current.style.marginLeft = '-30px';
            regionRef.current.style.clipPath = 'inset(0 0 0 30px)';
            mousein = false;
        }
    }

    return <div className='TierTableSectionGuy' onClick={() => {
        setTierDetails({visible : true, person : guy}); mouseLeave();
    }} onMouseEnter={() => {mouseEnter()}} onMouseLeave={() => {mouseLeave()}}>
               <div className='regionIndicator' ref={regionRef}>{guy.region}</div>
               <img src={'https://mc-heads.net/head/' + guy.name} className='guyHead'></img><p className='guyName'>{guy.name}</p></div>
}

export const TierTableSection = (props) => {


    return <div className='TierTableSection'>
        <div className='TierTableSectionHeader'>{props.tier}</div>
        {
            props.people.map((guy) => <TierTableGuy guy={guy}></TierTableGuy>)
        }
    </div>
}