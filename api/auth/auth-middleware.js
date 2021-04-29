const { sign, verify } = require('jsonwebtoken')
const { JWT_SECRET } = require('../secrets')

const Auth = require('./auth-model')

const confirmPayload = (req, res, next) => {
    const { username, password } = req.body
    !username || !password ? res.status(401).json({message: 'Username and password required'}) : next()
}

const isUsernametaken = async (req, res, next) => {
    const { username } = req.body
    Auth.getUserbyId({username: username})
    .then(user => {
        !user.length ? next() : res.status(401).json({message: 'Username already exists'})
    })
}


const confirmUserExists = async (req, res, next) => {
    const { username } = req.body;

    Auth.getUser({ username: username })
        .then(check => {
            if (check.length) {
                req.user = check[0];
                next()
            } else {
                res.status(401).json({ message: 'Invalid credentials.' })
            }
        })
}

const restricted = (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        res.status(401).json({ message: 'Authorization required - please login.' })
    } else {
        verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: 'Invalid token - please log back in.' })
            } else {
                res.decodedToken = decoded
                next()
            }
        })
    }
}

const createTokenInstance = (user) => {
    const payload = {
        subject: user.user_id,
        username: user.username,
        password: user.password,
        auth_code: user.auth_code
    }
    
    const options= {
        expiresIn: '6h'
    }

    return sign(payload, JWT_SECRET, options)
}

module.exports = {
    confirmPayload,
    isUsernametaken,
    confirmUserExists,
    restricted,
    createTokenInstance,
}