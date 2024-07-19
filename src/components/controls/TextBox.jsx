import React from 'react';

const TextBoxControl = ({ placeholder }) => {
    return (
        <input
            type="text"
            className="border p-2 w-full"
            placeholder={placeholder || 'TextBox'}
        />
    );
};

export default TextBoxControl;