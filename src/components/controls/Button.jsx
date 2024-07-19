import React from 'react';

const ButtonControl = ({ label }) => {
    return (
        <button className="bg-blue-500 text-white px-4 py-2">
            {label || 'Button'}
        </button>
    );
};

export default ButtonControl;