const express = require('express')

const Projects = require('./projects-model')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    }).catch(err => {
        res.status(500).json({message: 'Failed to retrieve Projects.'})
    })
})

router.post('/', (req, res) => {
    Projects.addProjects(req.body)
    .then(project => {
        res.status(201).json(project)
    })
      .catch (err => {
        res.status(500).json({ message: 'Failed to create new Project' });
      });
})

router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(reso => {
        res.status(200).json(reso)
    }).catch(err => {
        res.status(500).json({message: 'Failed to retrieve Resources.'})
    })
})

router.post('/resources', (req, res) => {
    Projects.addResources(req.body)
    .then(reso => {
        res.status(201).json(reso)
    })
      .catch (err => {
        res.status(500).json({ message: 'Failed to create new Resources' });
      });
})

router.get('/tasks', (req, res) => {
    Projects.getTask()
    .then(task => {
        res.status(200).json(task)
    }).catch(err => {
        res.status(500).json({message: 'Failed to retrieve Resources.'})
    })
})

router.post('/tasks', (req, res) => {
    Projects.addTask(req.body)
    .then(task => {
        res.status(201).json(task)
    })
      .catch (err => {
        res.status(500).json({ message: 'Failed to create new Resources' });
      });
})

module.exports = router