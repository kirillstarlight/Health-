import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { loadItems } from "../../actions/items";
import ProductList from "./product-list/ProductList";
import { connect } from "react-redux";

class Products extends React.Component {
  componentDidMount(){
    this.props.loadItems();
  }

  render() {
    const { items } = this.props;
    return (
      <React.Fragment>
        {items && <ProductList items={items} />}
      </React.Fragment>
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
