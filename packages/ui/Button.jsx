'use client';

import React from 'react';

export const Button = ({ children, backgroundColor }) => {
  const styles = {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: backgroundColor || '#3b82f6',
    color: 'white',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  };

  return (
    <button style={styles} onClick={() => alert(`Button clicked in ${children}`)}>
      {children}
    </button>
  );
};