import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
             <img src="https://upload.wikimedia.org/wikipedia/en/4/44/MasterChef_Logo.svg" alt="logo" />
             <NavLink to="/" className='head-title link p-2 border-none text-bold text-xl'><span className='text-cyan-600'>Chefs</span><sub className='text-cyan-800'>mate.</sub></NavLink>
            </div>
            
            <div className="flex lg:flex-row flex-col gap-6 items-center ">
              <div className='flex gap-3'>
              <NavLink to='/' className={({isActive})=>(isActive ? "bg-gray-400 px-2 py-1 text-sm rounded text-white":"block sm:inline-block   text-center text-sm hover:text-cyan-600 ")}  >Home</NavLink>
               <NavLink to='/blog' className={({isActive})=>(isActive ? "bg-gray-400 px-2 py-1 text-sm rounded text-white":"block sm:inline-block   text-center text-sm hover:text-cyan-600 ")}>Blog</NavLink>
               <NavLink to='/aboutus' className={({isActive})=>(isActive ? "bg-gray-400 px-2 py-1 text-sm rounded text-white":"block sm:inline-block   text-center text-sm hover:text-cyan-600 ")}>About Us</NavLink>
               <NavLink to='/contact' className={({isActive})=>(isActive ? "bg-gray-400 px-2 py-1 text-sm rounded text-white":"block sm:inline-block   text-center text-sm hover:text-cyan-600 ")}>Contact</NavLink>
              
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
                    <NavLink to='/signin' className="block sm:inline-block  text-center text-sm rounded shadow shadow-cyan-600  px-4 py-2 hover:bg-cyan-600 hover:text-white">Sign In</NavLink>
                    <NavLink to='/signup' className="block sm:inline-block  text-center text-sm rounded shadow shadow-cyan-600  px-4 py-2 hover:bg-cyan-600 hover:text-white">Sign Up</NavLink>
              
                </div>

            }
            </div>
               
               
              
               

            </div>
        </div>
    );
};

export default Header;