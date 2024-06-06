import React from 'react';
import './gridguidelines.css';

const GridGuideLines = ({ columns = 12, gap = 16 }) => {
  const columnStyle = {
    flex: `0 0 calc(${100 / columns}%)`,
    borderLeft: '1px solid rgba(255, 0, 0, 0.5)', // Line color and opacity
    boxSizing: 'border-box',
  };

  return (
    <div className="grid-guide-lines">
      {Array.from({ length: columns }).map((_, idx) => (
        <div key={idx} className="grid-line" style={columnStyle}></div>
      ))}
    </div>
  );
};

export default GridGuideLines;
