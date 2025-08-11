import './Header.css'
import Logo from '../assets/Logo.png'


export const Header = (props) => {
    return <header>
        <div className='LeftHeaderSectionContainer'>
            <img className='Logo' src={Logo}></img>
            <h1 className='Title'>SkyTiers</h1>
        </div>
        <input className='SearchInput' placeholder='Search'></input>
    </header>
};