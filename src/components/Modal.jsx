import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded shadow-md w-1/2">
                {children}
                <button className="bg-red-500 text-white px-2 py-1 mt-2" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;