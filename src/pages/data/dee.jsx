import React from 'react';
import data from './data.json';
import './data.css';

const Data = () => {
  return (
    <div className="data-list">
      <h1>Data List</h1>
      <ul>
        {data.map(item => (
          <li key={item.id} className="data-item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Money: ${item.money}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
