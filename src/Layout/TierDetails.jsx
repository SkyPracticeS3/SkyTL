import './TierDetails.css'

export const TierDetails = ({details, setDetails}) => {
    return <div className='tierDetails'>
        <div className='personDetailsContainer'>
            <img className='headImg' src={'https://mc-heads.net/head/' + details.name}></img>
                <p className='detailsName'>{details.name}</p>
                <p className='detailsPerk'>{"Combat Enlisted"}</p>
        </div>
        <div className='closeMark' onClick={()=>{
            setDetails({visible: false, person: null})
        }}>&#10006;</div>
    </div>
}