import React from 'react';

const TextBoxControl = ({ placeholder, className }) => {
    return (
        <input
            type="text"
            className={`border p-2 w-full ${className}`}
            placeholder={placeholder || 'TextBox'}
        />
    );
};

export default TextBoxControl;