import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>home</Link>
            <Link to='/blog'>blog</Link>
        </div>
    );
};

export default Header;