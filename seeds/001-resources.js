
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource: 'Peter Plumbing', description: 'Plumbing Company'},
        {resource: 'Shock You', description: 'Electricity Company'},
        {resource: 'Wally Wall', description: 'DryWall Company'},
        {resource: 'permit', description: null},
        {resource: 'signed contract', description: null},
        {resource: 'inspected', description: 'city inspector'}
      ]);
    });
};

