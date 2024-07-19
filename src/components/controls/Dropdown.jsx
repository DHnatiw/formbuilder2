import React, { useState, useEffect } from 'react';

const DropdownControl = ({ options, className, value, onChange }) => {
    const [selectedValue, setSelectedValue] = useState(value || ''); // Use value prop or empty string

    useEffect(() => {
        setSelectedValue(value || ''); // Update on value prop change
    }, [value]);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        onChange(event.target.value); 
    };

    return (
        <select className={`border p-2 w-full ${className}`} value={selectedValue} onChange={handleChange}>
            {options && options.length > 0 ? (
                options.map((option) => (
                    <option key={option.value} value={option.value}> {/* Add key here */}
                        {option.label}
                    </option>
                ))
            ) : (
                <option value="">Select an option</option>
            )}
        </select>
    );
};

export default DropdownControl;