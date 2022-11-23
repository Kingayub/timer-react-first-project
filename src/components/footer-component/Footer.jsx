import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import footer from './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Logo />
            <Menu />
        </div>
    );
};

export default Footer;