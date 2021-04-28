const router = require('express').Router()
const Classes = require('./classes-model')
const { confirmPayload } = require('./classes-middleware')


//[GET]
router.get('/', (req, res, next) => {
    Classes.getAll()
        .then(classes => {
            res.json(classes);
        })
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    Classes.getById(id)
    .then(classes => {
        res.json(classes)
    })
    .catch(next)
})

//[POST]
router.post('/',  (req, res, next) => {
   Classes.addClass(req.body)
        .then(newClass => {
            res.status(201).json(newClass)
        })
        .catch(next)
})

//[PUT]
router.put('/:id', (req, res, next) => {
    const { id } = req.params
    Classes.editClass(id, req.body)
    .then(changes => {
        res.json(changes)
    })
    .catch(next)
})

//[DELETE]
router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    Classes.deleteClass(id)
    .then(deletion => {
        res.json(deletion)
    })
    .catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})


module.exports = router