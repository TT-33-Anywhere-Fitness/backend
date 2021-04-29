const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../secrets')

const Auth = require('./auth-model')

const confirmPayload = (req, res, next) => {
    const { username, password } = req.body
    !username || !password ? res.status(401).json({message: 'Username and password required'}) :
    next()
}

module.exports = {
    confirmPayload,
}