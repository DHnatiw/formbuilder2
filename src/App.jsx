import React, { useState } from 'react';
import Canvas from './components/Canvas';
import ControlPanel from './components/ControlPanel';
import Modal from './components/Modal';
import './index.css';

const App = () => {
    const [controls, setControls] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const addControl = (type) => {
        const newControl = {
            id: controls.length + 1,
            type,
            x: 0,
            y: 0,
            width: 100,
            height: 50,
        };
        setControls([...controls, newControl]);
    };

    const updateControl = (id, newProperties) => {
        setControls(
            controls.map((control) =>
                control.id === id ? { ...control, ...newProperties } : control
            )
        );
    };

    const saveLayout = () => {
        const layoutData = JSON.stringify(controls);
        setModalContent(layoutData);
        setIsModalOpen(true);
    };

    const loadLayout = () => {
        const layout = JSON.parse(modalContent);
        setControls(layout);
        setIsModalOpen(false);
    };

    return (
        <div className="App">
            <ControlPanel addControl={addControl} />
            <button className="bg-blue-500 text-white px-2 py-1" onClick={saveLayout}>Save Layout</button>
            <button className="bg-blue-500 text-white px-2 py-1" onClick={() => setIsModalOpen(true)}>Load Layout</button>
            <Canvas controls={controls} onUpdateControl={updateControl} />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <textarea
                    className="w-full h-48 p-2 border"
                    value={modalContent}
                    onChange={(e) => setModalContent(e.target.value)}
                />
                <button className="bg-green-500 text-white px-2 py-1 mt-2" onClick={loadLayout}>Load Layout</button>
            </Modal>
        </div>
    );
};

export default App;