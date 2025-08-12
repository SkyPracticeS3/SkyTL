import './TierDetails.css'
import {Sword, DiaPot, NethPot, UHC, SMP, Crystal, Axe} from '../Layout/Nav'
export const TierDetails = ({details, setDetails}) => {
    return <div className='tierDetails'>
        <div className='personDetailsContainer'>
            <img className='headImg' src={'https://mc-heads.net/head/' + details.name}></img>
                <p className='detailsName'>{details.name}</p>
                <p className='detailsPerk'>{"Combat Enlisted"}</p>
        </div>
        
        <div className='tierDetailsCon'>
            <div className='tierDetailCon'><img className='tierDetailImg' style={{height: '45px'}} src={Sword}></img><h3 className='personTier'>{details.Sword}</h3></div>
            <div className='tierDetailCon'><img className='tierDetailImg' src={DiaPot}></img><h3 className='personTier'>{details.DiaPot}</h3></div>
            <div className='tierDetailCon'><img className='tierDetailImg' src={NethPot}></img><h3 className='personTier'>{details.NethPot}</h3></div>
            <div className='tierDetailCon'><img className='tierDetailImg' src={UHC}></img><h3 className='personTier'>{details.UHC}</h3></div>
            <div className='tierDetailCon'><img className='tierDetailImg' src={Crystal}></img><h3 className='personTier'>{details.Crystal}</h3></div>
            <div className='tierDetailCon'><img className='tierDetailImg' src={SMP}></img><h3 className='personTier'>{details.SMP}</h3></div>
            <div className='tierDetailCon'><img className='tierDetailImg' src={Axe}></img><h3 className='personTier'>{details.Axe}</h3></div>
        </div>

        <div className='closeMark' onClick={()=>{
            setDetails({visible: false, person: null})
        }}>&#10006;</div>
    </div>
}