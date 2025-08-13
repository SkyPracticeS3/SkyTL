import { Tier } from '../Layout/Main'
import './TierTable.css'
import { TierTableSection } from './TierTableSection'

export const TierTable = (props) => {
    
    return <div className='TierTable'>
        <TierTableSection tier="Tier 1" gm={props.gm} people={props.people.filter((guy)=>{
            return guy.getGm(props.gm) == Tier.LT1 || guy.getGm(props.gm) == Tier.HT1;
        })}></TierTableSection>
        <TierTableSection tier="Tier 2" gm={props.gm} people={props.people.filter((guy)=>{
            return guy.getGm(props.gm) == Tier.LT2 || guy.getGm(props.gm) == Tier.HT2;
        })}></TierTableSection>
        <TierTableSection tier="Tier 3" gm={props.gm} people={props.people.filter((guy)=>{
            return guy.getGm(props.gm) == Tier.LT3 || guy.getGm(props.gm) == Tier.HT3;
        })}></TierTableSection>
        <TierTableSection tier="Tier 4" gm={props.gm} people={props.people.filter((guy)=>{
            return guy.getGm(props.gm) == Tier.LT4 || guy.getGm(props.gm) == Tier.HT4;
        })}></TierTableSection>
        <TierTableSection tier="Tier 5" gm={props.gm} people={props.people.filter((guy)=>{
            return guy.getGm(props.gm) == Tier.LT5 || guy.getGm(props.gm) == Tier.HT5;
        })}></TierTableSection>
    </div>
}