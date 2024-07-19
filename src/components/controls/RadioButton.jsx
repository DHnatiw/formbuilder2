import React from 'react';

const RadioButtonControl = ({ label, className }) => {
    return (
        <label className={`flex items-center ${className}`}>
            <input type="radio" className="mr-2" />
            {label || 'RadioButton'}
        </label>
    );
};

export default RadioButtonControl;