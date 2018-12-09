import React from "react";
import { loadItems } from "../../actions/items";
import ProductList from "./product-list/ProductList";
import { connect } from "react-redux";
import './Products.css';

class Products extends React.Component {
  componentDidMount(){
    this.props.loadItems();
  }

  render() {
    const { items } = this.props;
    return (
      <div className="products">
        {items && <ProductList items={items} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemsReducer.products
  };
};

export default connect(
  mapStateToProps,
  {
    loadItems
  }
)(Products);
