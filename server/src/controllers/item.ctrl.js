const Item = require("./../models/Item");
const User = require("./../models/User");

module.exports = {
  getAll: (req, res, next) => {
    console.log("getAll on server")
    //Item.find(req.params.id)
    Item.find()
    // .populate("title")
      .exec((err, items) => {
     //   if (err) res.send(err);
      //  else if (!item) res.send(404);
        res.send(items);
        next();
      });
  },
  /**
   * item_id
   */
  getItem: (req, res, next) => {
    console.log("getItem on server")
    Item.findById(req.params.id)
      .then(item => {
        console.log(item);
        return res.json({
          msg: "Done",
          item: item
        });
      })
      .catch(next);
  }
};