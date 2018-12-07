const Item = require("./../models/Item");
const User = require("./../models/User");

module.exports = {
  getAll: (req, res, next) => {
    //Item.find(req.params.id)
    Item.find()
    // .populate("title")
      .exec((err, item) => {
     //   if (err) res.send(err);
      //  else if (!item) res.send(404);
        res.send(item);
        next();
      });
  },
  /**
   * item_id
   */
  getItem: (req, res, next) => {
    Item.findById(req.body.item_id)
      .then(item => {
        return res.json({
          msg: "Done",
          item: item
        });
      })
      .catch(next);
  }
};