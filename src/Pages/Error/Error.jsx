import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center p-20">
            <img className='w-full' src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/06/how-to-fix-error-404-1.webp" alt="Errror img" />
            <Link className='p-5' to='/'><button  className='rounded shadow shadow-cyan-600  px-4 py-2 hover:bg-cyan-600 hover:text-white'>back to home</button></Link>
        </div>
    );
};

export default Error