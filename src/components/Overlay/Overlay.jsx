import React from 'react';
import './Overlay.css';

const Overlay = ({ onClose }) => {
  return <div className="overlay" onClick={onClose}></div>;
};

export default Overlay;