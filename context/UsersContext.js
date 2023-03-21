import React,{useState} from "react";

export const UserContext = React.createContext()

export function UsersContext({children}){
    const [user,setUser] = useState("johan")

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}