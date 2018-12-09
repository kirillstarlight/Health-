const itemcontroller = require("./../controllers/item.ctrl");
const multipart = require("connect-multiparty");
const multipartWare = multipart();

module.exports = router => {
  router.route("/items").get(itemcontroller.getAll);
  router.route("/item/:id").get(itemcontroller.getItem);
};
