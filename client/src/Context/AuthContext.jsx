import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AuthContext = ({children}) => {

    const [user,setUser] = useState(()=>{
        let isExist = localStorage.getItem('user');
        isExist ? JSON.parse(isExist) : null
    });

    useEffect(()=>{
        if(user){
            localStorage.setItem('user',JSON.stringify(user))
        }else{
            localStorage.removeItem('user')
        }
    },[user]);

    const value = {
        user,setUser
    }

    return <AppContext value={value}>
        {children}
    </AppContext>
};

export const UseAuthContext =()=> useContext(AppContext);