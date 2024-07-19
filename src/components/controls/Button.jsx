import React from 'react';

const ButtonControl = ({ label, className }) => {
    return (
        <button className={`px-4 py-2 w-full h-full ${className}`}>
            {label || 'Button'}
        </button>
    );
};

export default ButtonControl;