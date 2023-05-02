import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const authInfo={name:'Chefsmate'}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;