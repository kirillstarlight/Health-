import React from 'react';
import './List.css';
import Card from '../card/Card';

const MedicineList = ({ cards }) => (
  <div className="medicine-list">
    <ul>
      {cards.map((card)=>
      <li>
        <Card card={card}/>
      </li>
      )}
    </ul>
  </div>
);

export default MedicineList;
