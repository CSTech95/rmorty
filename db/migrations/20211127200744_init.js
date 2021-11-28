
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
    .dropTable("location")
    .dropTable("character")
    .dropTable("user")
};
