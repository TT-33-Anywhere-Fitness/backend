const router = require('express').Router()
const { compareSync, hashSync } = require('bcryptjs')
const { HASH_ROUNDS } = require('../secrets')

const Auth = require('./auth-model')

//MIDDLEWARES...
const { 
    confirmPayload, 
    createTokenInstance, 
    isUsernametaken, 
    confirmUserExists, 
} = require('./auth-middleware')
/* ----------------------------- */

//[POST new user]
router.post('/register', (req, res, next) => {
    const { password, auth_code, user_type } = req.body
    const HASH = hashSync(password, 8)

    req.body.password = HASH

    // auth_code === 'instructor' ? user_type === 0 : 1
    Auth.addUser(req.body)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(next)
})

//[POST existing user]
router.post('/login', confirmPayload, confirmUserExists, (req, res, next) => {
    const { username, password} = req.body
    Auth.getUser({username: username}).first()
    .then(user => {
        if(user && compareSync(password, user.password)){
            const token = createTokenInstance(user)
            res.json({
                message: `Welcome, ${user.username}`,
                token: token,
                data: user
            })
        }
        
    })
    .catch(next)
})


module.exports = router