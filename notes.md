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