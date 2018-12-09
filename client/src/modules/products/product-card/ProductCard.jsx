import React from 'react';
import './ProductCard.css';

const ProductCard = ({
  item
}) => (
  <div className="card">
    <h2>{item.title}</h2>
    <div className="photos">
      <img src={item.img} alt="front" />
    </div>
    <div className="cardInfo">
      <h3>About:</h3>
      <p>{item.description}</p>
      <h4>created:</h4>
      <p>{item.title}</p>
      <h4>{item.text}</h4>
    </div>
  </div>
);

export default ProductCard;
