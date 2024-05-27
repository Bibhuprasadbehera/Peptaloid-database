// Button.js
import React from 'react';

const Button = ({ color, size, action, text }) => {
    return <button style={{ backgroundColor: color, fontSize: size }} onClick={action}>{text}</button>;
};

export default Button;