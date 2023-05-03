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
        <div className='flex lg:flex-row flex-col p-2 justify-between bg-slate-100'>
            <div className='w-7 h-10 flex '>
             <img src="https://upload.wikimedia.org/wikipedia/en/4/44/MasterChef_Logo.svg" alt="Example" />
             <Link to="/" className='head-title link p-2 border-none text-bold text-xl'><span className='text-cyan-600'>Chefs</span><sub className='text-cyan-800'>mate.</sub></Link>
            </div>
            
            <div className="flex lg:flex-row flex-col gap-6 items-center ">
              <div className='flex gap-3'>
              <Link to='/' className="block sm:inline-block   text-center text-sm hover:text-cyan-600  ">Home</Link>
               <Link to='/blog' className="block sm:inline-block   text-center text-sm hover:text-cyan-600">Blog</Link>
               <Link to='/aboutus' className="block sm:inline-block   text-center text-sm hover:text-cyan-600">About Us</Link>
               <Link to='/contact' className="block sm:inline-block   text-center text-sm hover:text-cyan-600">Contact</Link>
               <Link to='/chefsdetails' className="block sm:inline-block   text-center text-sm hover:text-cyan-600">chefdetails</Link>
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
                    <Link to='/signin' className="block sm:inline-block  text-center text-sm rounded shadow shadow-cyan-600  px-4 py-2 hover:bg-cyan-600 hover:text-white">Sign In</Link>
                    <Link to='/signup' className="block sm:inline-block  text-center text-sm rounded shadow shadow-cyan-600  px-4 py-2 hover:bg-cyan-600 hover:text-white">Sign Up</Link>
              
                </div>

            }
            </div>
               
               
              
               

            </div>
        </div>
    );
};

export default Header;