import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const {name} = useContext(AuthContext)

    return ( 
        <div className='flex p-2'>
            <div className='w-7 h-10 flex '>
             <img src="https://upload.wikimedia.org/wikipedia/en/4/44/MasterChef_Logo.svg" alt="Example" />
             <Link to="/" className='head-title link p-2 border-none'>Chefsmate</Link>
            </div>
            {/* {name} */}
            <div className="flex justify-center items-center sm:ml-auto">
               <Link to='/' className="block sm:inline-block sm:mr-4 mt-10 text-center text-sm">Home</Link>
               <Link to='/blog' className="block sm:inline-block sm:mr-4 mt-10 text-center text-sm">Blog</Link>
               <Link to='/aboutus' className="block sm:inline-block sm:mr-4 mt-10 text-center text-sm">About Us</Link>
               {/* <Link to='/error' className="block sm:inline-block sm:mr-4 mt-10 text-center text-sm">Error page</Link> */}
               <Link to='/signin' className="block sm:inline-block sm:mr-4 mt-10 text-center text-sm">Sign In</Link>
               <Link to='/signup' className="block sm:inline-block sm:mr-4 mt-10 text-center text-sm">Sign Up</Link>

            </div>
        </div>
    );
};

export default Header;