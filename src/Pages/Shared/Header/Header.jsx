import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const {name} = useContext(AuthContext)

    return (
        <div>
            {name}
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    );
};

export default Header;