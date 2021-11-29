
exports.up = function(knex) {
  return knex.schema
  .createTable('character', function (table) {
    table.increments('id').primary().notNullable();
    // table.uuid('id').primary()
    table.string('character_name', 255).notNullable();
    table.string('status', 50).notNullable();
    table.string('species', 50).notNullable();
    table.string('gender', 50).notNullable();
    table.string('image', 255).notNullable();
    // Test if foreign key works
//    table.foreign('user_id').references('user.id').deferrable('deferred'); // foreign key
table.integer('user_id').unsigned().index().references('id').inTable('user');
})
};

exports.down = function(knex) {
 return knex.schema
 .dropTable('character')
};
