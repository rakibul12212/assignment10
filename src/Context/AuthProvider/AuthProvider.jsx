import React, { createContext } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    

    const googleProvider=(provider)=>{

        return signInWithPopup(auth , provider)
    }
    const authInfo={name:'Chefsmate', googleProvider}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;