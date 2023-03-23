import React,{useState} from "react";
import userData from "../data/UserData"
export const UserContext = React.createContext("user")

export function UsersContext({children}){
    const [user,setUser] = useState("Not logged in")
    const [users, setUsers] = useState(userData);
    // let users = userData;

    const setCurrentUser = () => {
        setUser("Yup")
        console.log("Yup")
    }
    return (
        <UserContext.Provider value={{user,setCurrentUser, users}}>
            {children}
        </UserContext.Provider>
    )
}