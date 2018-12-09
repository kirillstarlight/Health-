import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Product.css";

import { getItem } from "../../../actions/items";

class Product extends React.Component {
  render() {
    const { text, title, description, img } = this.props.item;
    return (
      <div>
        <h4>{text}</h4>
        <h4>{title}</h4>
        <p>{description}</p>
        <img src={require(`../../../images/${img}`)} />
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
