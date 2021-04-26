const router = require('express').Router()
const Classes = require('./classes-model')

router.get('/', (req, res, next) => {
    Classes.getAll()
        .then(classes => {
            res.json(classes);
        })
        .catch(next)
})


module.exports = router