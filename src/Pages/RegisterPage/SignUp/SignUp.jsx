import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const SignUp = () => {

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
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input type="text" name='photoUrl' placeholder="photo url" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <button onClick={handleGoogleSignIn} className='rounded shadow shadow-cyan-600  px-4 py-2 hover:bg-cyan-600 hover:text-white'>Sign up with google</button>
      </form>
    </div>
  </div>
  
</div>
</div>
    );
};

export default SignUp;