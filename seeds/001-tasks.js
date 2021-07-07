
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task: 'Install kitchen plumbing', project_id: 1, notes: 'Supplies have not arrived', completed:1},
        {task: 'Install kitchen lighting', project_id: 2, notes: 'Contractor is not responding', completed:0},
        {task: 'Install kitchen drywall', project_id: 3, notes: null, completed:0}
      ]);
    });
};
