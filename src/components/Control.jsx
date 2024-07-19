import React from 'react';
import { Rnd } from 'react-rnd';
import ButtonControl from './controls/Button';
import TextBoxControl from './controls/TextBox';
import ImageControl from './controls/Image';
import CheckBoxControl from './controls/CheckBox';
import RadioButtonControl from './controls/RadioButton';
import DropdownControl from './controls/Dropdown';

const Control = ({ control, onUpdateControl }) => {
    const handleDragStop = (e, d) => {
        onUpdateControl(control.id, { x: d.x, y: d.y });
    };

    const handleResizeStop = (e, direction, ref, delta, position) => {
        onUpdateControl(control.id, {
            width: ref.offsetWidth,
            height: ref.offsetHeight,
            ...position,
        });
    };

    const renderControl = () => {
        switch (control.type) {
            case 'Button':
                return <ButtonControl />;
            case 'TextBox':
                return <TextBoxControl />;
            case 'Image':
                return <ImageControl />;
            case 'CheckBox':
                return <CheckBoxControl />;
            case 'RadioButton':
                return <RadioButtonControl />;
            case 'Dropdown':
                return <DropdownControl />;
            default:
                return <div>{control.type}</div>;
        }
    };

    return (
        <Rnd
            size={{ width: control.width, height: control.height }}
            position={{ x: control.x, y: control.y }}
            onDragStop={handleDragStop}
            onResizeStop={handleResizeStop}
            bounds="parent"
            grid={[20, 20]}
        >
            <div className="bg-white shadow-md p-2">
                {renderControl()}
            </div>
        </Rnd>
    );
};

export default Control;