import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const {name} = useContext(AuthContext)

    return (
        <div>
            {name}
            <Link to='/'>home</Link>
            <Link to='/blog'>blog</Link>
        </div>
    );
};

export default Header;