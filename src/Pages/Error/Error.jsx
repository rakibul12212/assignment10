import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div >
            <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/06/how-to-fix-error-404-1.webp" alt="Errror img" />
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default Error