import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const SignIn = () => {

    const {googleProvider}=useContext(AuthContext)
    
    const handleGoogleSignIn=()=> {
        googleProvider(provider)
        .then(result=>{
            const user = result.user
            console.log(user);
        })
        .catch(err=>console.error(err))
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='rounded-full'>Sign in with google</button>
        </div>
    );
};

export default SignIn;