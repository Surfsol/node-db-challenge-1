npm init -y - install package.json

create index.js
- make it main: index.js , in package.json
 "main": "index.js"

npm install express
npm i helmet // protects headers
npm i -g knex  //install globally to use cli command line interface
npm install sqlite3 

git init
- gives me a git ignore

npm i nodemon -D // could do global or dev
//scripts: node index.js // does not rerender when saved
scripts: "server":"nodemon index.js" //will rerender upon save<

----------------------------------------------------------------
server.js
const express = require('express')
const server = express()  //create instance of express server

server.use(express.json())// allows express to read .json from body of request

server.get('/', (req, res) => { res.status(200).json({hello: 'Web 23'})}

module.exports = server;
------------------------------------------------------------------------

index.js

const server = require('./server')

const PORT = process.env.PORT || 4001;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})

------------------------------------------------------------------------------------

npm install knex

knex  init
// makes a knexfile.js

 development: {
    client: 'sqlite3',
    connection: {
      filename: './data/projects.db3' //points to db
    },
    useNullAsDefault: true //prevents bugs and issues 
    },
    migrations: {
      directory: './data/migrations' //to put migrations under folder data
    },
    seeds: {
      directory: './data/seeds'
    },
    // add the following
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },


-----------------------------------------------------------------------------------

make a folder called Data

Add: db-config.js
-used to connect to database

knex - enables you to access database and write sql statements using js

const knex = require('knex')

const config = require('../knexfile')

module.exports = knex(config.development)

-------------------------------------------------------------------------------------

migration
knex migrate:make create-resources-table

Understand how to make tables and relationships

components 
-entities (nouns: zoo, animal, species), a resource --> tables
- properties --> columns or fields
- relationships --> Foreign Keys 

workflow
-identify entities
    project
    task
    resource

-identify properties
    projects: 
        id - primary key - integer
        project - string .notNullable
        description - string
        completed - default false

     tasks:
        id - primary key - integer
        task - string .notNullable
        project_id foreign key- integer .notNullable
        notes - string
        completed - default false

    resources:
        id - primary key - integer
        resource - string .notNullable, not unique
        description - string 

    project-resources
        id - primary key - integer
        project_id - fk
        resource_id - fk
        resource #

help to label seeds
http://knexjs.org/#Schema-defaultTo

knex migrate:latest

knex migrate:rollback //if want to undo

-------------------------------------------------------------------------
open in sqlite3

add database
------------------------------------------------------------------------
seeds 

knex seed:make 001-projects
knex seed:make 001-project_resources

knex seed:run
---------------------------------------------------------------------
crud

make a folder
add files:
projects/projects-router.js
projects/projects-model.js

-------------------------------------------------------