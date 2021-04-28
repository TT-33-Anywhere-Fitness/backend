const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

//ROUTES: Authentication, Classes, Users, Search...
const classesRouter = require('./classes/classes-router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/classes', classesRouter)

server.get('/', (req, res) => {
    res.json(`Welcome to the TT-33 Anywhere Fitness server! 🚴‍♀️`)
})
server.get('/api', (req, res) => {
    res.json(`The TT-33 Anywhere Fitness api! 🚴‍♀🏃‍♂️`)
})

server.get('/db', (req, res) => {
    res.json(`The TT-33 Anywhere Fitness api! 🚴‍♀🏃‍♂️`)
})

module.exports = server