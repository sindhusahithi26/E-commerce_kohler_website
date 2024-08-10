// Area.js
import React from 'react';
import './Area.css';

const Area = ({ heading, items }) => {
  return (
    <div className="area">
      <h2 className="area__heading">{heading}</h2>
      <div className="area__items-container">
        {items.map((item, index) => (
          <div key={index} className="area__item">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.name} className="area__item-image" />
            </a>
            <div className="area__item-name">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Area;
