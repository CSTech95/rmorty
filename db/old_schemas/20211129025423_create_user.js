
exports.up = function(knex) {
    return knex.schema
    .createTable('user', function (table) {
       table.increments('id');
       table.string('username'); // handled by AWS Cognito
       table.string('first_name'); // handled by AWS Cognito
       table.string('last_name'); // handled by AWS Cognito
       table.string('password'); // handled by AWS Cognito
       table.string('city'); // omitted
       table.string('state'); // omitted
       table.integer('zip'); // omitted
    }) 
};

exports.down = function(knex) {
  return knex.schema
  .dropTable('user')
};
