import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Product.css";

import { getItem } from "../../../actions/items";

class Product extends React.Component {
  render() {
    const {item} = this.props;
    return (
      <div>
        {item.img && 
          <div>
            <h4>{item.text}</h4>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <img src={require(`../../../images/${item.img}`)} />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.itemsReducer.product,
    user: state.userReducer.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(Product);
