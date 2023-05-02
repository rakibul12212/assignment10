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
        <div className='flex flex-col max-w-screen  mx-auto'>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0  max-w-md shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <button onClick={handleGoogleSignIn} className='rounded shadow shadow-cyan-600  px-4 py-2 hover:bg-cyan-600 hover:text-white'>Sign in with google</button>
      </form>
    </div>
  </div>
  
</div>
</div>
    );
};

export default SignIn;