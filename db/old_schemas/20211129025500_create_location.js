
exports.up = function(knex) {
 return knex.schema
 .createTable('location', function(table) {
    table.increments('id').primary().notNullable();
    // table.uuid('id').primary() // Primary key
    table.string('location_name', 255).notNullable();
    table.string('type', 255).notNullable();

    // Test if foreign key works
    // table.foreign('character_id').references('character.id').deferrable('deferred') // foreign key
    table.integer('character_id').unsigned().index().references('id').inTable('character');
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTable('location')
};
