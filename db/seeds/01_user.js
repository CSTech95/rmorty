// Run This seed 1st

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, first_name: 'John', last_name: 'Doe', password: 'pizza', city: 'New York', state: 'NY', zip: 10001},
        {id: 2, first_name: 'John', username:'johnnyboi', last_name: 'Doe', password: 'pizza', city: 'New York', state: 'NY', zip: 10001},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
      ]);
    });
};
