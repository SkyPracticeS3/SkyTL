import './Nav.css'
import Sword from '../assets/Sword.png'
import DiaPot from '../assets/DiaPot.webp'
import NethPot from '../assets/NethPot.webp'
import Crystal from '../assets/Crystal.png'
import SMP from '../assets/SMP.webp'
import Axe from '../assets/Axe.png'
import UHC from '../assets/UHC.webp'
import OverAll from '../assets/overall.svg'

const GmSelector = (props) => {
    return <div className='GmSelectorContainer'
        onClick={() => {
            props.setCurrentGm({Gamemode:props.gm.Gamemode, Image: props.gm.Image})
        }}><img src={props.gm.Image} className='GmSelectorImage'></img></div>
}

export const GmNameToImg = Object.freeze({
    'Sword' : Sword,
    'Potion' : DiaPot,
    'NetheritePot' : NethPot,
    'Crystal' : Crystal,
    'SMP' : SMP,
    'Axe' : Axe,
    'UHC' : UHC 
})

export const Nav = (props) => {
    const icons = [
                   {Gamemode : "OverAll", Image: OverAll},
                   {Gamemode: "Sword", Image: Sword},
                   {Gamemode: "Potion", Image: DiaPot},
                   {Gamemode: "NetheritePot", Image: NethPot},
                   {Gamemode: "Crystal", Image: Crystal},
                   {Gamemode: "SMP", Image: SMP},
                   {Gamemode: "Axe", Image: Axe},
                   {Gamemode: "UHC", Image: UHC}]
    
    return <nav>
        <div className='CurrentGm'>
            <img src={props.currentGm.Image} className='CurrentGmImg'></img>
                <div className='CurrentGmStatus'>
                <p className='CurrentGmName'>{props.currentGm.Gamemode}</p>
                <p className='CurrentGmEnlisted'>{'100 Enlisted'}</p>
                </div>
        </div>
        {
        icons.map((gm)=>
            <GmSelector gm={gm} setCurrentGm={props.setCurrentGm}></GmSelector>
        )
    }</nav>
} 