import React from 'react';

const RadioButtonControl = ({ label }) => {
    return (
        <label className="flex items-center">
            <input type="radio" className="mr-2" />
            {label || 'RadioButton'}
        </label>
    );
};

export default RadioButtonControl;