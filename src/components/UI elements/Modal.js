// Modal.js
import React from 'react';

const Modal = ({ isOpen, children, onClose }) => {
    if (!isOpen) return null;

    return (
        <div>
            <button onClick={onClose}>Close</button>
            {children}
        </div>
    );
};

export default Modal;