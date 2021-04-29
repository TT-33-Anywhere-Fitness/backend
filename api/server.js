const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

//ROUTES: Authentication, Classes, Users, Search...
const classesRouter = require('./classes/classes-router')
const usersRouter = require('./users/user-router')
/* --------------------------------------------- */

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/classes', classesRouter)
server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
    res.json(`Welcome to the TT-33 Anywhere Fitness server! 🚴‍♀️`)
})
server.get('/api', (req, res) => {
    res.json(`The TT-33 Anywhere Fitness api! 🚴‍♀🏃‍♂️ Try accessing this endpoint /classes`)
})


module.exports = server