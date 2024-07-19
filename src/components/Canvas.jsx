import React from 'react';
import Control from './Control';

const Canvas = ({ controls, onUpdateControl }) => {
    return (
        <div className="relative w-full h-screen bg-gray-100">
            {controls.map((control) => (
                <Control
                    key={control.id}
                    control={control}
                    onUpdateControl={onUpdateControl}
                />
            ))}
        </div>
    );
};

export default Canvas;