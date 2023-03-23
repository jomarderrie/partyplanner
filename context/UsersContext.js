import React,{useState} from "react";
import userData from "../data/UserData"
export const UserContext = React.createContext("user")

export function UsersContext({children}){
    const [user,setUser] = useState("Not logged in")
    const [users, setUsers] = useState(userData);
    // let users = userData;

    const setCurrentUser = (userId) => {
        let foundUser = users.find((user) => {
            return user.id === userId
        })
        setUser(foundUser.username)
    }
    return (
        <UserContext.Provider value={{user,setCurrentUser, users}}>
            {children}
        </UserContext.Provider>
    )
}