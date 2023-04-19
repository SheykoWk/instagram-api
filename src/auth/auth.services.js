const checkUserCredentials = require('./auth.controllers')
const jwt = require('jsonwebtoken')

const postLogin = (req, res) => { 
    const {email, password} = req.body
    checkUserCredentials(email, password)
        .then( data => {
            if(!data){
                return res.status(401).json({message: 'Invalid credentials'})
            }
            const token = jwt.sign({
                id: data.id,
                role: data.role
            }, 'Ac4d3ml0vers')
            res.status(200).json({token})
        })
        .catch(err => res.status(400).json(err))
}

module.exports = postLogin