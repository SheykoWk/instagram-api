const router = require("express").Router();

const postServices = require("./posts.services");
const commentsServices = require('../comments/comments.services')

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

router.route('/:id/comments')
    .get(commentsServices.getAllCommentsByPost)


router.get('/user/me', passportJwt.authenticate('jwt', {session: false}), postServices.getPostsByMyUser)
router.get('/user/:id', postServices.getPostsByUser)

module.exports = router;
