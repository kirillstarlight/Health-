const User = require("./../models/User");
const Item = require("./../models/Item");

module.exports = {
  addUser: (req, res, next) => {
    console.log("addUser on server");
    new User(req.body).save((err, newUser) => {
      if (err) res.send(err);
      else if (!newUser) res.send(400);
      else res.send(newUser);
      next();
    });
  },

  getUser: (req, res, next) => {
    console.log("getUser on server");
    User.findById(req.params.id).then((err, user) => {
        if (err) res.send(err);
        else if (!user) res.send(404);
        else res.send(user);
        next();
      }
    );
  },

  addItemToBasket: (req, res, next) => {
    console.log("addItemToBasket on server");
    console.log(req.body.user_id, req.body.item_id)
    User.findById(req.body.user_id)
      .then(user => {
        console.log("user:");
        console.log(user);
        user.cart.push(req.body.item_id);
        
          return res.json({ msg: "added" });
        
      })
      .catch(next);
  },

  buyItems: (req, res, next) => {
    User.findById(req.body.user_id)
      .then(user => {
        user.cart = [];
        return res.json({ msg: "basket empty" });
      })
      .catch(next);
  }
};
