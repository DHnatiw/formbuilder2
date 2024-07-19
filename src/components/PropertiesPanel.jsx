import React, { useState, useEffect } from 'react';

const PropertiesPanel = ({ control, updateProperties }) => {
    const [properties, setProperties] = useState(control.properties || {});

    useEffect(() => {
        const defaultProperties = controlPropertiesConfig[control.type]?.reduce((acc, prop) => {
            if (prop.defaultValue !== undefined) {
                acc[prop.name] = prop.defaultValue;
            }
            return acc;
        }, {});
        setProperties({ ...defaultProperties, ...control.properties });
    }, [control]); 

    // useEffect(() => {
    //     setProperties(control.properties || {});
    // }, [control]); // Update when control changes

    const controlPropertiesConfig = {
        Button: [
            { name: 'label', label: 'Label', type: 'text' },
            { name: 'className', label: 'Tailwind', type: 'text' },
            { name: 'onClick', label: 'On Click', type: 'function' }, // Handle function props later
        ],
        TextBox: [
            { name: 'placeholder', label: 'Placeholder', type: 'text' },
            { name: 'value', label: 'Default Value', type: 'text' },
            { name: 'className', label: 'Tailwind', type: 'text' },
        ],
        Image: [
            { name: 'src', label: 'Image URL', type: 'text' },
            { name: 'alt', label: 'Alt Text', type: 'text' },
            { name: 'className', label: 'Tailwind', type: 'text' },
        ],
        CheckBox: [
            { name: 'label', label: 'Label', type: 'text' },
            { name: 'checked', label: 'Checked', type: 'boolean' }, // For default checked state
            { name: 'className', label: 'Tailwind', type: 'text' },
        ],
        RadioButton: [
            { name: 'label', label: 'Label', type: 'text' },
            { name: 'value', label: 'Value', type: 'text' },
            { name: 'className', label: 'Tailwind', type: 'text' },
        ],
        Dropdown: [
            {
                name: 'options',
                label: 'Options',
                type: 'array',
                defaultValue: [
                    { "label": "Option 1", "value": "option1" },
                    { "label": "Option 2", "value": "option2" },
                    { "label": "Option 3", "value": "option3" }
                ]
            },
            { name: 'value', label: 'Default Value', type: 'text' },
        ],

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newProperties = { ...properties, [name]: value };

        if (name === 'options') {
            try {
                newProperties[name] = JSON.parse(value);
            } catch (error) {
                console.error('Error parsing options:', error);
                // Handle error or notify the user
            }
        }

        setProperties(newProperties);
        updateProperties(newProperties);
    };

    const renderPropertyInput = (propertyConfig) => {
        const { name, label, type } = propertyConfig;

        return (
            <div className="mb-2" key={name}>
                <label className="block mb-1">{label}</label>
                {type === 'text' && (
                    <input
                        type="text"
                        name={name}
                        value={properties[name] || ''}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                )}
                {type === 'array' && (
                    <textarea
                        name={name}
                        value={JSON.stringify(properties[name] || [], null, 2)}
                        onChange={handleChange}
                        className="border p-2 w-full"
                        rows="4"
                    />
                )}
                {/* Add input fields for other property types as needed */}
            </div>
        );
    };

    return (
        <div className="p-2 bg-gray-100 border rounded mt-2">
            <h3 className="font-bold mb-2">Properties</h3>
            {control && controlPropertiesConfig[control.type]?.map(renderPropertyInput)}
        </div>
    );
};

export default PropertiesPanel;
