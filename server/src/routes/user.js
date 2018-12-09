const usercontroller = require("./../controllers/user.ctrl");
const multipart = require("connect-multiparty");
const multipartWare = multipart();

module.exports = router => {
  router.route("/user/:id").get(usercontroller.getUser);
  router.route("/user").post(usercontroller.addUser);
  router.route("/item/getItem").get(usercontroller.addItemToBasket);
  router.route("/user/buy").post(usercontroller.buyItems);
};
