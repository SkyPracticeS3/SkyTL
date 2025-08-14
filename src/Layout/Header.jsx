import './Header.css'
import Logo from '../assets/Logo.png'
import { useContext, useRef } from 'react';
import { TierDetailsContext, SearchContext } from '../App';
import { toast } from 'react-toastify';

export const Header = (props) => {
    const {getTierDetails, setTierDetails} = useContext(TierDetailsContext)
    const {myPeopleMap, setMyPeopleMap} = useContext(SearchContext)
    const inputRef = useRef(null);
    return <header>
        <div className='LeftHeaderSectionContainer'>
            <img className='Logo' src={Logo}></img>
            <h1 className='Title'>SkyTiers</h1>
        </div>
        <form onSubmit={(evt)=>{
            evt.preventDefault();
            if(inputRef.current.value == ''){
                toast.warn("Fill Out The Input With A Player Name");
                return;
            }
            if(!myPeopleMap.has(inputRef.current.value)){
                toast.warn(inputRef.current.value + " Doesn't Exist")
                return;
            }
            setTierDetails({visible: true, person: myPeopleMap.get(inputRef.current.value)})
        }}><input className='SearchInput' placeholder='Search' ref={inputRef}></input></form>
        <div className='discordButtonContainer'>
            <div className='discordButton'><a className='discordLink' href='https://discord.gg/Fb92ymJ63Y'>Discord</a></div>
        </div>
    </header>
};