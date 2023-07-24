import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Menu = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setIsMobile(window.innerWidth < 578);
        };

        window.addEventListener('resize', updateWindowDimensions);
        updateWindowDimensions();

        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        };
    }, []);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='flex justify-between p-3'>
            <span>Intento de user designer</span>
            {isMobile ? (
                <FaBars color='blue' onClick={handleMenuToggle} />
            ) : (
                <ul className='flex gap-14 cursor-pointer'>
                    <li className='hover:border-b-2 border-cyan-600 transition-all'>
                        <Link to={"/"}>Work</Link>
                    </li>
                    <li className='hover:border-b-2 border-cyan-600 transition-all'>
                        <Link to={"/about"}>
                            About
                        </Link>
                    </li>
                </ul>
            )}
            {isMobile && isMenuOpen && (
                <ul className='flex flex-col gap-6 absolute top-12 right-4 bg-white shadow-md py-4 px-6'>
                    <li className='hover:text-blue-500 cursor-pointer'>
                        <Link to={"/"}>Work</Link>
                    </li>
                    <li className='hover:text-blue-500 cursor-pointer'>
                        <Link to={"/about"}>About</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};
