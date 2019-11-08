const express = require('express')
const server = express()  //create instance of express server
const projectRouter = require('./projects/projects-router')

server.use(express.json())// allows express to read .json from body of request
server.use('/api/projects', projectRouter)
server.get('/', (req, res) => { res.status(200).json({hello: 'Sprint project'})})

module.exports = server;