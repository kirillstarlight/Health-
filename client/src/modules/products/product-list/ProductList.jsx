import React from "react";
import "./ProductList.css";
import ProductCard from "../product-card/ProductCard";
import { Grid } from "@material-ui/core";

const ProductList = props => (
  <div className="medicine-list">
    <Grid container item xs={12} spacing={24}>
      {props.items.map(item => (
        <Grid item xs={4} key={item._id}>
          <ProductCard item={item} />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default ProductList;
