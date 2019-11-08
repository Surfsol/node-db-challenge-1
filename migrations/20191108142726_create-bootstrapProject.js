
exports.up = function(knex) {
    //changes to make
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments(); //primary key
        tbl.string('project', 64)
            .notNullable()
        tbl.string('description', 200)
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(0)
    })
    .createTable('tasks', tbl => {
        tbl.increments(); //primary key
        tbl.string('task', 64)
            .notNullable()
        //foreign key
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.string('notes', 250)
        //default for completed, or can change in sqlite3, double click on completed
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(0)
    })
    .createTable('resources', tbl => {
        tbl.increments(); //primary key
        tbl.string('resource', 64)
            .notNullable()
        tbl.string('description', 200)
    })
    .createTable('project-resources', tbl => {
        tbl.increments()
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('quantity')
    })
   };
   
   exports.down = function(knex) {
      //to undo
      return knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('project-resources')
   };
   
