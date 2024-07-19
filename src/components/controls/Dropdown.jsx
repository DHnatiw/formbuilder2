import React from 'react';

const DropdownControl = ({ options }) => {
    return (
        <select className="border p-2 w-full">
            {options && options.length > 0
                ? options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))
                : <option>Dropdown</option>}
        </select>
    );
};

export default DropdownControl;