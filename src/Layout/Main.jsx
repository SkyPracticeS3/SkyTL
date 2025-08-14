import { createContext, useEffect } from 'react';
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

    return <main>
        {
            props.currentGm.Gamemode == "OverAll" &&
            Array.isArray(props.people) && props.people.map((guy, index)=>
                <Enlisted guy={guy} index={guy.Place}></Enlisted>
            )
        }
        {
            props.currentGm.Gamemode != "OverAll" && Array.isArray(props.people) &&
            <TierTable people={props.people} gm={props.currentGm.Gamemode}></TierTable>
        }
    </main>
}