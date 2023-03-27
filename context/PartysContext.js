import React,{useState} from "react";
import parties from "../data/PartiesData"
export const PartyContext = React.createContext("parties")

export function PartysContext({children}){
    const [partys, setParties] = useState(parties);
    // let users = userData;

    const addParty=() => {

    }


    return (
        <PartyContext.Provider value={{partys, setParties}}>
            {children}
        </PartyContext.Provider>
    )
}