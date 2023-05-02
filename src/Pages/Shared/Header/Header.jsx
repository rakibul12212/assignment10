import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const {name} = useContext(AuthContext)

    return (
        <div className='flex p-2'>
            
           <div className='w-7 h-10'>
              <img src="https://upload.wikimedia.org/wikipedia/en/4/44/MasterChef_Logo.svg" alt="Example" />
            </div> {name}

            <div >
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/error'>Error page</Link>
            </div>
            
            
      
        </div>
    );
};

export default Header;