import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';



export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const[loading,setLoading]=useState(false);
    

    const [user , setUser]= useState({})
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false);

        })
        return ()=>{unsubscribe()}
    },[])
    

    const googleProvider=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth , provider)
    }
    const signUp=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser=(profile)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,profile)
    }

    const logOut=()=>{

        return signOut(auth)
    }

    const authInfo={user, googleProvider,logOut,signUp,updateUser,signIn,loading,setLoading}
    
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;