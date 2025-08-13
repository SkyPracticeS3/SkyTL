import { Enlisted } from '../LeaderBoard/Enlisted';
import { TierTable } from '../TierTables/TierTable';
import './Main.css'

export const Tier = Object.freeze({
    HT1 : 'HT1',
    LT1 : 'LT1',
    HT2 : 'HT2',
    LT2 : 'LT2',
    HT3 : 'HT3',
    LT3 : 'LT3',
    HT4 : 'HT4',
    LT4 : 'LT4',
    HT5 : 'HT5',
    LT5 : 'LT5'
});

export const Region = Object.freeze({
    EU : 'EU',
    NA : 'NA',
    AS : 'AS',
    ME : 'ME',
    AU : 'AU',
    SA : 'SA',
    AF : 'AF'
})

export class EnlistedPerson {
    constructor(name, Sword, Diapot, Nethpot, UHC, Crystal, SMP, Axe, Place = 0, region = Region.EU){
        this.name = name;
        this.Sword = Sword;
        this.DiaPot = Diapot;
        this.NethPot = Nethpot;
        this.UHC = UHC;
        this.Crystal = Crystal;
        this.SMP = SMP;
        this.Axe = Axe;
        this.Place = Place
        this.region = region
    };
    getGm(gmName) {
        switch(gmName){
            case "Sword": return this.Sword;
            case "Potion": return this.DiaPot;
            case "NetheritePot": return this.NethPot;
            case "UHC": return this.UHC;
            case "Crystal": return this.Crystal;
            case "SMP": return this.SMP;
            case "Axe": return this.Axe;
            default: return "";
        }
    }
};

export const Main = (props) => {
    const People = [
        new EnlistedPerson("Swight", Tier.HT1, Tier.HT4, Tier.HT3, Tier.HT5, Tier.HT4, Tier.LT1, Tier.HT1, 1),
        new EnlistedPerson("Katieey", Tier.HT1, Tier.LT2, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, 2),
        new EnlistedPerson("HealingPotion", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, 3),
        new EnlistedPerson("MightySaS", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, 4),
        new EnlistedPerson("Xern", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, 5),
        new EnlistedPerson("gatzox", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, 6),
        new EnlistedPerson("NeonXStrik3r", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, 7)
    ];
    return <main>
        {
            props.currentGm.Gamemode == "OverAll" &&
            People.map((guy, index)=>
                <Enlisted guy={guy} index={index}></Enlisted>
            )
        }
        {
            props.currentGm.Gamemode != "OverAll" &&
            <TierTable people={People} gm={props.currentGm.Gamemode}></TierTable>
        }
    </main>
}