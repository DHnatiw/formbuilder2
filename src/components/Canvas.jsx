import React from 'react';
import Control from './Control';

const Canvas = ({ controls, onUpdateControl, onSelectControl }) => {
    return (
        <div className="relative w-full h-screen bg-gray-100">
            {controls.map((control) => (
                <Control
                    key={control.id}
                    control={control}
                    onUpdateControl={onUpdateControl}
                    onSelectControl={onSelectControl}
                />
            ))}
        </div>
    );
};

export default Canvas;