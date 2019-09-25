exports.up = function(knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments('id')
    table.string('question')
  })
};

exports.down = function(knex){
  return knex.schema.dropTable('questions')
};