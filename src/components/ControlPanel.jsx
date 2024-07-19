import React from 'react';

const ControlPanel = ({ addControl }) => {
    return (
        <div className="flex space-x-2 p-2">
            <button className="bg-blue-500 text-white px-2 py-1" onClick={() => addControl('Button')}>Add Button</button>
            <button className="bg-blue-500 text-white px-2 py-1" onClick={() => addControl('TextBox')}>Add TextBox</button>
            <button className="bg-green-500 text-white px-2 py-1" onClick={() => addControl('Image')}>Add Image</button>
            <button className="bg-green-500 text-white px-2 py-1" onClick={() => addControl('CheckBox')}>Add CheckBox</button>
            <button className="bg-green-500 text-white px-2 py-1" onClick={() => addControl('RadioButton')}>Add RadioButton</button>
            <button className="bg-green-500 text-white px-2 py-1" onClick={() => addControl('Dropdown')}>Add Dropdown</button>
        </div>
    );
};

export default ControlPanel;