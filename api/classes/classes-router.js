const router = require('express').Router()
const Classes = require('./classes-model')
const { confirmPayload } = require('./classes-middleware')

router.get('/', (req, res, next) => {
    Classes.getAll()
        .then(classes => {
            res.json(classes);
        })
        .catch(next)
})

router.post('/', confirmPayload, (req, res, next) => {
   Classes.addClass(req.body)
        .then(newClass => {
            res.status(201).json(newClass)
        })
        .catch(next)
});


module.exports = router