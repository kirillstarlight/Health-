import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonBase } from "@material-ui/core";

const WrappedLink = (props) => {
  return (
    <Link to={props.to} className="link">
      <Button>{props.linkText}</Button>
    </Link>
  );
};

export default WrappedLink;
