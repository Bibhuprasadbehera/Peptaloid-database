// InputField.js
import React from 'react';

const InputField = ({ type, placeholder, onChange }) => {
    return <input type={type} placeholder={placeholder} onChange={onChange} />;
};

export default InputField;