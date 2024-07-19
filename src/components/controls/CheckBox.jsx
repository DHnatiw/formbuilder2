import React from 'react';

const CheckBoxControl = ({ label }) => {
    return (
        <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            {label || 'CheckBox'}
        </label>
    );
};

export default CheckBoxControl;