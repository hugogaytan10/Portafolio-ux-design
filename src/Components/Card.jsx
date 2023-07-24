import React, { useState } from 'react'
export const Card = ({text, image}) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const handleMouseEnter = () => {
        setShowOverlay(true);
    };

    const handleMouseLeave = () => {
        setShowOverlay(false);
    };

    return (
        <div
            className='w-3/4 h-96 relative mt-2 mb-2 overflow-hidden md:w-1/4'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <div
                className={showOverlay ? `z-50  w-full h-96 absolute bg-overlay flex items-center justify-center text-white transition-all text-3xl` : `w-full h-0 overflow-hidden`}
            >
                {text}
            </div>
            <img src={image} alt='ecommer' className={`w-full h-96 object-cover hover:scale-105 transition-all` } />
        </div>
    )
}
