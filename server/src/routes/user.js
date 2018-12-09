const usercontroller = require("./../controllers/user.ctrl");
const multipart = require("connect-multiparty");
const multipartWare = multipart();

module.exports = router => {
  router.route("/user/:id").get(usercontroller.getUser);
  router.route("/item/:id/getItem").get(usercontroller.addItemToBasket);
  router.route("/user/:id/buy").get(usercontroller.buyItems);
};
