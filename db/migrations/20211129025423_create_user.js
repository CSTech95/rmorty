
exports.up = function(knex) {
    return knex.schema
    .createTable('user', function (table) {
       table.increments('id').primary().notNullable();
    //    table.uuid('id').primary() // primary key
       table.string('first_name', 255).notNullable();
       table.string('last_name', 255).notNullable();
       table.string('password', 255).notNullable();
       table.string('city', 50).notNullable();
       table.string('state', 2).notNullable();
       table.integer('zip', 5).notNullable();
    }) 
};

exports.down = function(knex) {
  return knex.schema
  .dropTable('user')
};
