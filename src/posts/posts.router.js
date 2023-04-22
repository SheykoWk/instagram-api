const router = require("express").Router();

const postServices = require("./posts.services");
const passportJwt = require("../middlewares/passport.middleware");

router.route("/")
  .get(postServices.getAllPosts)
  .post(
    passportJwt.authenticate("jwt", { session: false }),
    postServices.postNewPost
  );

router.route("/:id")
  .get(postServices.getPostById)
  .patch(
    passportJwt.authenticate("jwt", { session: false }),
    postServices.patchPost
  )
  .delete(
    passportJwt.authenticate("jwt", { session: false }),
    postServices.deletePost
  );

module.exports = router;
