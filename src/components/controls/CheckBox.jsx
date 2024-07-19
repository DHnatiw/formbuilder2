import React from 'react';

const CheckBoxControl = ({ label, className }) => {
    return (
        <label className={`flex items-center ${className}`}>
            <input type="checkbox" className="mr-2" />
            {label || 'CheckBox'}
        </label>
    );
};

export default CheckBoxControl;