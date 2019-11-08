
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project:'Plumbing', description: 'kitchen lumbing', completed: 0},
        {project:'Electricity', description: 'Add electricity for lights', completed: 0},
        {project: 'Drywall', description: 'After complete plumbing and electricty', completed: 0}
      ]);
    });
};
