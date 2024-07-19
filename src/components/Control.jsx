import React from 'react';
import { Rnd } from 'react-rnd';
import ButtonControl from './controls/Button';
import TextBoxControl from './controls/TextBox';
import ImageControl from './controls/Image';
import CheckBoxControl from './controls/CheckBox';
import RadioButtonControl from './controls/RadioButton';
import DropdownControl from './controls/Dropdown';

const Control = ({ control, onUpdateControl, onSelectControl }) => {
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

    const handleClick = () => {
        onSelectControl(control.id);
    };

    const renderControl = () => {
        switch (control.type) {
            case 'Button':
                return <ButtonControl {...control.properties} />;
            case 'TextBox':
                return <TextBoxControl {...control.properties} />;
            case 'Image':
                return <ImageControl {...control.properties} />;
            case 'CheckBox':
                return <CheckBoxControl {...control.properties} />;
            case 'RadioButton':
                return <RadioButtonControl {...control.properties} />;
            case 'Dropdown':
                return <DropdownControl {...control.properties} />;
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
            className="absolute border-2 border-transparent hover:border-blue-500 hover:shadow-lg cursor-move rounded transition duration-300 ease-in-out"
            style={{ transitionProperty: 'border, box-shadow' }}
            grid={[20, 20]}
            onClick={handleClick}
            minWidth={50} // Minimum width of standard control
            minHeight={30} // Minimum height of standard control
            dragGrid={[10, 10]} // Snap to 10px grid for dragging
            resizeGrid={[10, 10]} // Snap to 10px grid for resizing
        >
            <div className="w-full h-full flex items-center justify-center">
                {renderControl()}
            </div>
        </Rnd>
    );
};

export default Control;