// Run This seed 2nd
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('character').del()
    .then(function () {
      // Inserts seed entries
      return knex('character').insert([
        {character_name: 'Rick Sanchez', status: 'alive', species: 'human', gender: 'male', image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg', username: "user1"},
        {character_name: 'Morty', status: 'alive', species: 'human', gender: 'male', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', username: "user1"},
        {character_name: 'Susan', status: 'alive', species: 'human', gender: 'female', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', username: "user2"},
      ]);
    });
};
