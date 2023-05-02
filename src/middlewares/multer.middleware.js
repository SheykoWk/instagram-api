const multer = require('multer')
const path = require('path')
const uuid = require('uuid')

const storage = multer.diskStorage({
    filename: (req, file, done) => {
        done(null, uuid.v4() + path.extname(file.originalname))
    },
    destination: (req, file, done) => {
        done(null, path.resolve('public/'))
    }
})

const upload = multer({
    storage
})


module.exports = upload