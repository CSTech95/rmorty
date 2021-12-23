
exports.up = function(knex) {
    return knex.schema
    .createTable('user', function (table) {
       table.increments('id');
       table.string('username');
       table.string('first_name');
       table.string('last_name');
       table.string('password');
       table.string('city');
       table.string('state');
       table.integer('zip');
    }) 
};

exports.down = function(knex) {
  return knex.schema
  .dropTable('user')
};
