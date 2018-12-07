import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import "./Product.css";

import { getItem } from "../../../actions/items";

class Product extends React.Component {
  componentDidMount() {
    document.body.className = "items show";
  }
  componentWillMount() {
    this.props.getItem(this.props.match.params.id);
  }
  componentWillUnmount() {
    document.body.className = "";
  }
  render() {
    const { text, title, description, img } = this.props.item;
    return (
      <div>
        <h4>{text}</h4>
        <h4>{title}</h4>
        <h4>{description}</h4>
        <h4>{img}</h4>
      </div>
    );
  }
}

Product.propTypes = {
  params: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    item: state.itemsReducer.product,
    user: state.userReducer.user
  };
};

export default connect(
  mapStateToProps,
  {
    getItem
  }
)(Product);
