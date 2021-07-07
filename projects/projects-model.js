const db = require('../data/db-config')


// - [ ] adding resources.
// - [ ] retrieving a list of resources.
// - [ ] adding projects.
// - [ ] retrieving a list of projects.
// - [ ] adding tasks.
// - [ ] retrieving a list of tasks. **The list of tasks 
//should include the project name and project description**.

module.exports = {
    getProjects,
    addProjects,
    getResources,
    addResources,
    addTask,
    getTask
}

function getProjects(){
    return db('projects')
}

function addProjects(proBody){
    return db('projects')
    .insert(proBody)
}

function getResources(){
    return db('resources')
}

function addResources(proBody){
    return db('resources')
    .insert(proBody)
}

function getTask(){
    return db('tasks')
}

function addTask(proBody){
    return db('tasks')
    .insert(proBody)
}