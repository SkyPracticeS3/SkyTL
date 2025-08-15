import './TierDetails.css'
import {Sword, DiaPot, NethPot, UHC, SMP, Crystal, Axe} from '../Layout/Nav'
import Trophy from '../assets/GoldTrophy.png'
import {regionTxtColor, regionBkColor} from '../LeaderBoard/Enlisted'
export const TierDetails = ({details, setDetails}) => {
    return <div className='tierDetails'>
        <div className='personDetailsContainer'>
            <img className='headImg' src={'https://mc-heads.net/head/' + details.name}></img>
                <p className='detailsName'>{details.name}</p>
                <p className='detailsPerk'>{"Combat Enlisted"}</p>
                <div className='tierRegion' style={{backgroundColor: regionBkColor[details.region],
            color: regionTxtColor[details.region]}}>{details.region}</div>
        </div>
        
        <div className='tierPlaceCon'>
            {/* <div className='tierPlaceDectorator'>
                <p className='tierPlaceText'>{details.Place + "."}</p>
            </div> */}
            <img className='tierPlaceCrown' src={Trophy}></img>
            <div className='tierPlacePointsCon'>
                <p className='tierPlacePointsIndicator'>{"OVERALL"}</p>
                <p className='tierPlacePoints'>{details.Points + " POINTS"}</p>
            </div>
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