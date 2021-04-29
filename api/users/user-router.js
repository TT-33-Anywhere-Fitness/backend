const router = require('express').Router()
const Users = require('./user-model')

//MIDDLEWARES...
const { confirmId, confirmReq } = require('./user-middleware')

//[GET]
router.get('/', (req, res, next) => {
    Users.findUser()
    .then(users => {
        res.json(users)
    })
    .catch(next)
})

router.get('/:id', confirmId, (req, res, next) => {
    const { id } = req.params
    Users.findUserById(id)
    .then(user => {
        res.json(user)
    })
    .catch(next)
})
/* ----------------------- */

//[POST]
router.post('/', confirmReq, (req, res, next) => {
    Users.addUser(req.body)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(next)
})

//[PUT]
router.put('/:id', confirmId, (req, res, next) => {
    const { id } = req.params
    Users.editUser(id, req.body)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(next)
})

//[DELETE]
router.delete('/:id', confirmId, (req, res, next) => {
    const { id } = req.params
    Users.deleteUser(id)
        .then(user => {
            res.json(user)
        })
        .catch(next)
})

router.use((err, req, res, next) => { 
    res.status(500).json({
        message: err.message,
        stack: err.stack,
        custom: 'Server error: something went wrong.'
    })
})


module.exports = router 