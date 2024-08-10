// BestSellers.js
import React from 'react';
import './BestSellers.css';

const BestSellers = ({ heading, items, showViewAll }) => {
  return (
    <div className="best-sellers">
      <div className="header1">
        <h2>{heading}</h2>
        {showViewAll && <button className="view-all">View All</button>}
      </div>
      <div className="items-container">
        {items.map((item, index) => (
          <div key={index} className="items">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.name} className="item-image" />
            </a>
            <div className="item-name">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
