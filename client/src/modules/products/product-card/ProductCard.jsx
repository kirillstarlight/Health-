import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import WrappedLink from "../../../utils/link-button/LinkButton";
import { connect } from "react-redux";
import { AddItemToCart } from "../../../actions/user";
import { getItem } from "../../../actions/items";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    objectFit: "cover"
  }
};

const ProductCard = props => {
  const { title, text, img, _id } = props.item;
  console.log(_id);
  console.log(props.user._id);
  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          className="media"
          image={require(`../../../images/${img}`)}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">{text}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => props.addToCart(props.user._id, _id)}
        >
          Add to cart
        </Button>
        <WrappedLink
          to="/item"
          linkText="Learn More"
          onClick={() => props.getItem(_id)}
        />
      </CardActions>
    </Card>
  );
};

const mapStateToProps = state => ({
  user: state.userReducer.user
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { addToCart: AddItemToCart, getItem: getItem }
  )(ProductCard)
);
