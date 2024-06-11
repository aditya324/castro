import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, toggleMobileMenu }) => {
    return (
        <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-900 text-white`}>
            <ul className="flex flex-col space-y-4 p-4">
                <li>
                    <Link to={`${process.env.PUBLIC_URL}/home-one`} onClick={toggleMobileMenu}> HOME </Link>
                </li>
                <li>
                    <Link to={`${process.env.PUBLIC_URL}/about-us`} onClick={toggleMobileMenu}>ABOUT</Link>
                </li>
                <li>
                    <Link to={`${process.env.PUBLIC_URL}/services`} onClick={toggleMobileMenu}>SERVICE</Link>
                </li>
                <li>
                    <Link to={`${process.env.PUBLIC_URL}/projects`} onClick={toggleMobileMenu}>PROJECT</Link>
                </li>
                <li>
                    <Link to={`${process.env.PUBLIC_URL}/contact-us`} onClick={toggleMobileMenu}>CONTACT</Link>
                </li>
            </ul>
        </div>
    );
};

export default MobileMenu;
