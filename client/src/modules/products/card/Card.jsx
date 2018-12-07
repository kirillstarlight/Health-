import React from 'react';
import './Card.css';

const Card = ({
  card
}) => (
  <div className="card">
    <h2>{card.title}</h2>
    <div className="photos">
      <img src={card.photo} alt="front" />
    </div>
    <div className="cardInfo">
      <h3>About:</h3>
      <p>{card.description}</p>
      <h4>created:</h4>
      <p>{card.created}</p>
      <h4>{card.state}</h4>
      <p>
          id:
        {card.id}
      </p>
    </div>
  </div>
);

export default Card;
