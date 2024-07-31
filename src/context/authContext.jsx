import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const AuthProvider = ({children}) => {
    const [isauthenticated, setIsauthenticated] = useState(false);
    const [user , setUser] = useState("");

    return (
        <authContext.Provider value={{
            isauthenticated,setIsauthenticated,
            user,setUser}
        }>
            {children}
        </authContext.Provider>
    )
}

export const useAuthContext = ()=>{
    return useContext(authContext)
}

