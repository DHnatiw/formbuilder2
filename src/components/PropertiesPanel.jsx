import React, { useState, useEffect } from 'react';

const PropertiesPanel = ({ control, updateProperties }) => {
    const [properties, setProperties] = useState(control.properties || {});

    useEffect(() => {
        setProperties(control.properties || {});
    }, [control]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newProperties = { ...properties, [name]: value };
        setProperties(newProperties);
        updateProperties(newProperties);
    };

    return (
        <div className="p-2 bg-gray-100 border rounded mt-2">
            <h3 className="font-bold mb-2">Properties</h3>
            {control.type === 'Button' && (
                <div className="mb-2">
                    <label className="block mb-1">Label</label>
                    <input
                        type="text"
                        name="label"
                        value={properties.label || ''}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                </div>
            )}
            {control.type === 'TextBox' && (
                <div className="mb-2">
                    <label className="block mb-1">Placeholder</label>
                    <input
                        type="text"
                        name="placeholder"
                        value={properties.placeholder || ''}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                </div>
            )}
            {control.type === 'Image' && (
                <div className="mb-2">
                    <label className="block mb-1">Image URL</label>
                    <input
                        type="text"
                        name="src"
                        value={properties.src || ''}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                </div>
            )}
            <div className="mb-2">
                <label className="block mb-1">Tailwind CSS Classes</label>
                <input
                    type="text"
                    name="className"
                    value={properties.className || ''}
                    onChange={handleChange}
                    className="border p-2 w-full"
                    placeholder="e.g., bg-red-500 text-white p-4"
                />
            </div>
        </div>
    );
};

export default PropertiesPanel;