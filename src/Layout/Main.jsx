import { Enlisted } from '../LeaderBoard/Enlisted';
import './Main.css'

const Tier = Object.freeze({
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

class EnlistedPerson {
    constructor(name, Sword, Diapot, Nethpot, UHC, Crystal, SMP, Axe){
        this.name = name;
        this.Sword = Sword;
        this.DiaPot = Diapot;
        this.NethPot = Nethpot;
        this.UHC = UHC;
        this.Crystal = Crystal;
        this.SMP = SMP;
        this.Axe = Axe;
    }
};

export const Main = () => {
    const People = [
        new EnlistedPerson("Swight", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1),
        new EnlistedPerson("Katieey", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1),
        new EnlistedPerson("HealingPotion", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1),
        new EnlistedPerson("MightySaS", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1),
        new EnlistedPerson("Xern", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1),
        new EnlistedPerson("gatzox", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1),
        new EnlistedPerson("NeonXStrik3r", Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1, Tier.HT1)
    ];
    return <main>
        {
            People.map((guy, index)=>
                <Enlisted guy={guy} index={index}></Enlisted>
            )
        }
    </main>
}