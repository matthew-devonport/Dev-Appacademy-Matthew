
exports.up = function(knex) {
    return knex.schema.createTable('students', (table) => {
        table.increments('id')
        table.string('name')
        table.string('knownFor')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('students')
  
};
