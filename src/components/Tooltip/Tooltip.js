import React, { useState } from 'react';
import './Tooltip.css'; // Make sure to create this CSS file for styling

const Tooltip = ({ message, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="tooltip-container"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onFocus={() => setIsVisible(true)} // For accessibility
            onBlur={() => setIsVisible(false)} // For accessibility
            tabIndex="0" // Makes the div focusable
        >
            {children}
            {isVisible && <div className="tooltip-content">{message}</div>}
        </div>
    );
};

export default Tooltip;
