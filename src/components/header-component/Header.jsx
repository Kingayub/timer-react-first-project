import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import header from './header.css'

const Header = () => {
    return (
        <div className='nav_bar'>
            <Logo />
            <Menu />
        </div>
    );
};

export default Header;