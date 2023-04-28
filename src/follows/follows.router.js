const router = require('express').Router()

const followServices = require('./follows.services')
const passportJwt = require('../middlewares/passport.middleware')


router.use(passportJwt.authenticate('jwt', {session: false}))

router.get('/followers', followServices.getAllFollowers)

router.get('/following', followServices.getAllFollows)

module.exports = router
