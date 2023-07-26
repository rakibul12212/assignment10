import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();
const SignUp = () => {
const navigate=useNavigate()
    const {googleProvider,signUp,updateUser}=useContext(AuthContext)
    
    const handleGoogleSignIn=()=> {
        googleProvider(provider)
        .then(result=>{
            const user = result.user
            console.log(user);
        })
        .catch(err=>console.error(err))
    }

    const handleUserSignUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;



      if (!email || !password) {
        alert("Please enter an email and password");
        return;
      }
      if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
      }



  
      signUp(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
  
        const userProfile = {
          displayName: name,
          photoURL: photoURL
        };
  
        updateUser(userProfile)
        .then(result => {
          const user = result;
          console.log(user);
        })
        .catch(error => console.error(error));
  
        form.reset();
       navigate('/')
        
      })
      .catch(error => console.error(error));
    };
  

    return (
        <div className='flex flex-col max-w-screen  mx-auto'>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0  max-w-md shadow-2xl bg-base-100">
      <form onSubmit={handleUserSignUp} className="card-body">
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
          <input type="text" name='photoURL' placeholder="photo url" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button className="rounded shadow shadow-cyan-600  px-4 py-2 hover:bg-cyan-600 hover:text-whites">Sign Up</button>
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
