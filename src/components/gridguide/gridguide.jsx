import React from 'react';
import './gridguide.css';

const GridGuide = ({ columns = 12, gap = 16 }) => {
  const columnStyle = {
    flex: `0 0 calc(${100 / columns}% - ${gap}px)`,
    marginLeft: gap / 2,
    marginRight: gap / 2,
  };

  return (
    <div className="grid-guide">
      {Array.from({ length: columns }).map((_, idx) => (
        <div key={idx} className="grid-column" style={columnStyle}></div>
      ))}
    </div>
  );
};

export default GridGuide;
