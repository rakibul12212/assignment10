import React, { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';



export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user , setUser]= useState({})
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{unsubscribe()}
    },[])
    

    const googleProvider=(provider)=>{

        return signInWithPopup(auth , provider)
    }

    const logOut=()=>{
        return signOut(auth)
    }
    const authInfo={user, googleProvider,logOut}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;