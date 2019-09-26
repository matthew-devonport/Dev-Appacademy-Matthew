
exports.up = function(knex) {
    return knex.schema.createTable('youtube', (table) => {
        table.increments('id')
        table.string('name')
        table.string('url')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('youtube')
};
