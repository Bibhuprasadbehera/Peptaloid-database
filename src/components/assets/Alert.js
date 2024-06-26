// Alert.js
import React from 'react';

const Alert = ({ message, type = 'error' }) => {
  const backgroundColor = type === 'error' ? '#ffcccc' : '#ccffcc';
  const color = type === 'error' ? '#990000' : '#006600';

  return (
    <div style={{
      backgroundColor,
      color,
      padding: '10px',
      borderRadius: '4px',
      marginBottom: '10px'
    }}>
      {message}
    </div>
  );
};

export default Alert;