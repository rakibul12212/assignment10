import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleSignOut=()=>{
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }

    return ( 
        <div className='flex lg:flex-row flex-col p-2 justify-between'>
            <div className='w-7 h-10 flex '>
             <img src="https://upload.wikimedia.org/wikipedia/en/4/44/MasterChef_Logo.svg" alt="Example" />
             <Link to="/" className='head-title link p-2 border-none'>Chefsmate</Link>
            </div>
            
            <div className="flex lg:flex-row flex-col gap-6 items-center ">
              <div className='flex gap-3'>
              <Link to='/' className="block sm:inline-block   text-center text-sm">Home</Link>
               <Link to='/blog' className="block sm:inline-block   text-center text-sm">Blog</Link>
               <Link to='/aboutus' className="block sm:inline-block   text-center text-sm">About Us</Link>
              </div>
            <div>
            {
                user?.email ?
                <div className='flex gap-2'>
                     <img src={user?.photoURL} alt="userPhoto" className='rounded-2xl h-8' />
                     <button onClick={handleSignOut} className="rounded-full ">Sign Out</button>
                </div>
                :
                <div className='flex gap-2'>
                    <Link to='/signin' className="block sm:inline-block  text-center text-sm">Sign In</Link>
                    <Link to='/signup' className="block sm:inline-block  text-center text-sm">Sign Up</Link>
              
                </div>

            }
            </div>
               
               
              
               

            </div>
        </div>
    );
};

export default Header;