import React, { useState } from 'react';
import Canvas from './components/Canvas';
import ControlPanel from './components/ControlPanel';
import PropertiesPanel from './components/PropertiesPanel'; // Import PropertiesPanel component
import Modal from './components/Modal';
import './index.css';

const App = () => {
    const [controls, setControls] = useState([]);
    const [selectedControlId, setSelectedControlId] = useState(null);
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
            properties: {},
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

    const selectControl = (id) => {
        setSelectedControlId(id);
    };

    const updateSelectedControlProperties = (newProperties) => {
        setControls(
            controls.map((control) =>
                control.id === selectedControlId
                    ? { ...control, properties: { ...control.properties, ...newProperties } }
                    : control
            )
        );
    };

    return (
        <div className="App flex">
            <div className="flex flex-col p-2">
                <ControlPanel addControl={addControl} />
                <button className="bg-blue-500 text-white px-2 py-1 mt-2" onClick={saveLayout}>Save Layout</button>
                <button className="bg-blue-500 text-white px-2 py-1 mt-2" onClick={() => setIsModalOpen(true)}>Load Layout</button>
                {selectedControlId && (
                    <PropertiesPanel
                        control={controls.find((control) => control.id === selectedControlId)}
                        updateProperties={updateSelectedControlProperties}
                    />
                )}
            </div>
            <Canvas controls={controls} onUpdateControl={updateControl} onSelectControl={selectControl} />
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