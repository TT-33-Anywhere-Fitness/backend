const router = require('express').Router()
const Users = require('./user-model')

router.get('/', (req, res, next) => {
    Users.findUser()
    .then(users => {
        res.json(users)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    Users.findUserById(id)
    .then(user => {
        res.json(user)
    })
    .catch(next)
})

module.exports = router 