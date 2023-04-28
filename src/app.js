const express = require("express")
const cors = require('cors')
require('dotenv').config()

const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const postRouter = require('./posts/posts.router')
const followRouter = require('./follows/follows.router')

const db = require('./utils/database')
const initModels = require('./models/initModels')
const app = express()

const PORT = process.env.PORT || 3000

//? Validar la conexión 

db.authenticate()
    .then(() => console.log('Database Authenticated!'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced!'))
    .catch(err => console.log(err))

initModels()

app.use(express.json())
app.use(cors())

const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} | ${req.path}`)
    next()
}
app.use(loggerMiddleware)

app.get('/', (req, res) => {
    res.json({
        message: 'Server OK', 
        myMessage: req.message,
        myPort: process.env.PORT,
        queries: req.query
    })
}) 

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/posts', postRouter)
app.use('/api/v1', followRouter)

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})
