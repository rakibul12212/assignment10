import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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
    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const authInfo={user, googleProvider,logOut,signUp,updateUser,signIn}

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;