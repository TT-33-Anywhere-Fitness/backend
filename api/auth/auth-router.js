const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { HASH_ROUNDS } = require('../secrets')

const Auth = require('./auth-model')

//MIDDLEWARES...
const { confirmPayload } = require('./auth-middleware')

router.post('/register', confirmPayload, (req, res, next) => {
    const { password, auth_code, user_type } = req.body
    const HASH = bcrypt.hashSync(password, 8)

    req.body.password = HASH

    auth_code === 'instructor' ? user_type === 0 : 1
    Auth.addUser(req.body)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(next)
})


module.exports = router