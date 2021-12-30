
exports.up = function(knex) {
  return knex.schema
  .createTable('character', function (table) {
    table.increments('id')
    // table.uuid('id').primary()
    table.string('character_name')
    table.string('status')
    table.string('species')
    table.string('gender')
    table.string('image')
    table.integer('user_id')
})
};

exports.down = function(knex) {
 return knex.schema
 .dropTable('character')
};
