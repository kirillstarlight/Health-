// server/routes/article.js
const itemcontroller = require("./../controllers/item.ctrl");
const multipart = require("connect-multiparty");
const multipartWare = multipart();

module.exports = router => {
  /**
   * get all articles
   */
  router.route("/items").get(itemcontroller.getAll);
  // router
  //     .route('/item')
  //     .get(itemcontroller.getItem)
  // /**
  //  * clap on an article
  //  */
  // router
  //     .route('/item/get')
  //     .post(itemcontroller.getItem)
  // /**
  //  * comment on an article
  //  */
  // router
  //     .route('/article/comment')
  //     .post(articlecontroller.commentArticle)
  // /**
  //  * get a particlular article to view
  //  */
  // router
  //     .route('/article/:id')
  //     .get(articlecontroller.getArticle)
};
