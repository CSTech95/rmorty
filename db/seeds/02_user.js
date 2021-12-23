
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {username:'johnnyboi', id: 1, first_name: 'John', last_name: 'Doe', password: 'pizza', city: 'Manhattan', state: 'NY', zip: 10001},
        {username:'janeygurl', id: 2, first_name: 'Jane', last_name: 'Doe', password: 'pizza', city: 'Stratford', state: 'CT', zip: 06615},
        {username:'slimshady', id: 3, first_name: 'Slim', last_name: 'Jenkins', password: 'pizza', city: 'Austin', state: 'TX', zip: 06401},
        {username:'tomtom', id: 4, first_name: 'Tom', last_name: 'Worthington', password: 'pizza', city: 'Seattle', state: 'WA', zip: 90001},
      ]);
    });
};
