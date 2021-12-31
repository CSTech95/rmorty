// Run This seed 2nd
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('character').del()
    .then(function () {
      // Inserts seed entries
      return knex('character').insert([
        {character_name: 'Rick Sanchez', status: 'alive', species: 'human', gender: 'male', image: 'Image1', user_id: 1},
        {character_name: 'Morty', status: 'alive', species: 'human', gender: 'male', image: 'Image2', user_id: 1},
        {character_name: 'Susan', status: 'alive', species: 'human', gender: 'female', image: 'Image3', user_id: 2},
      ]);
    });
};
