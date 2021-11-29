// Run This seed 2nd
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('character').del()
    .then(function () {
      // Inserts seed entries
      return knex('character').insert([
        {id: 1, character_name: 'Rick Sanchez', status: 'alive', species: 'human', gender: 'male', image: 'Image1', user_id: 1},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
      ]);
    });
};
