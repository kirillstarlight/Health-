import React from 'react';
import './ProductList.css';
import ProductCard from '../product-card/ProductCard';

const ProductList = (props) => (
  <div className="medicine-list">
    <ul>
      {props.items.map((item)=>
      <li>
        <ProductCard item={item}/>
      </li>
      )}
    </ul>
  </div>
);

export default ProductList;
